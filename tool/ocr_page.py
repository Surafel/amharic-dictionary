#!/usr/bin/env python3
"""OCR a scanned dictionary page with Google Cloud Vision.

Splits the page into its two printed columns (so column text doesn't get
interleaved) and runs DOCUMENT_TEXT_DETECTION with an Amharic language hint
on each half.

Setup:
    pip install requests pillow
    Get an API key with the Vision API enabled:
    https://console.cloud.google.com/apis/library/vision.googleapis.com
    export GOOGLE_VISION_API_KEY=your-key-here

Usage:
    # OCR an existing page image directly
    python3 tool/ocr_page.py path/to/page.png

    # Or render a page straight from the source PDF first
    python3 tool/ocr_page.py --pdf /home/surafel/Downloads/AmharicDictionary.pdf --pdf-page 197
"""

import argparse
import base64
import os
import subprocess
import sys
import tempfile

import requests
from PIL import Image

VISION_URL = "https://vision.googleapis.com/v1/images:annotate"


def render_pdf_page(pdf_path: str, page: int, dpi: int = 600) -> str:
    out_prefix = tempfile.mktemp()
    subprocess.run(
        ["pdftoppm", "-r", str(dpi), "-png", "-f", str(page), "-l", str(page), pdf_path, out_prefix],
        check=True,
    )
    produced = f"{out_prefix}-{page}.png"
    if not os.path.exists(produced):
        # pdftoppm omits the page-number suffix when rendering a single page
        produced = f"{out_prefix}.png"
    return produced


def split_columns(image_path: str) -> list[str]:
    im = Image.open(image_path)
    w, h = im.size
    mid = w // 2
    left = im.crop((0, 0, mid, h))
    right = im.crop((mid, 0, w, h))
    left_path = tempfile.mktemp(suffix="_col1.png")
    right_path = tempfile.mktemp(suffix="_col2.png")
    left.save(left_path)
    right.save(right_path)
    return [left_path, right_path]


def ocr_image(image_path: str, api_key: str) -> str:
    with open(image_path, "rb") as f:
        content = base64.b64encode(f.read()).decode("utf-8")

    payload = {
        "requests": [
            {
                "image": {"content": content},
                "features": [{"type": "DOCUMENT_TEXT_DETECTION"}],
                "imageContext": {"languageHints": ["am"]},
            }
        ]
    }
    resp = requests.post(VISION_URL, params={"key": api_key}, json=payload, timeout=120)
    resp.raise_for_status()
    result = resp.json()["responses"][0]
    if "error" in result:
        raise RuntimeError(result["error"])
    return result.get("fullTextAnnotation", {}).get("text", "")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("image", nargs="?", help="path to a page image (png/jpg)")
    parser.add_argument("--pdf", help="path to the source PDF instead of a pre-rendered image")
    parser.add_argument("--pdf-page", type=int, help="1-indexed PDF page number to render")
    parser.add_argument("--no-split", action="store_true", help="OCR the whole page as one image")
    args = parser.parse_args()

    api_key = os.environ.get("GOOGLE_VISION_API_KEY")
    if not api_key:
        sys.exit("Set GOOGLE_VISION_API_KEY first.")

    if args.pdf:
        if not args.pdf_page:
            sys.exit("--pdf-page is required when using --pdf")
        image_path = render_pdf_page(args.pdf, args.pdf_page)
    elif args.image:
        image_path = args.image
    else:
        sys.exit("Provide an image path or --pdf/--pdf-page.")

    if args.no_split:
        print(ocr_image(image_path, api_key))
        return

    for i, col_path in enumerate(split_columns(image_path), start=1):
        print(f"===== Column {i} =====")
        print(ocr_image(col_path, api_key))
        print()


if __name__ == "__main__":
    main()
