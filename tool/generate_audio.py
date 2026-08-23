#!/usr/bin/env python3
"""Generate pronunciation clips for a dictionary page's JSON file.

For each entry, synthesizes the headword with espeak-ng's Amharic voice,
encodes it as mp3, and writes an "audio" field pointing at the clip.

Requires espeak-ng and ffmpeg on PATH.

Usage:
    python3 tool/generate_audio.py assets/dictionary/page_033.json
"""

import json
import os
import subprocess
import sys
import tempfile

def main():
    if len(sys.argv) != 2:
        print(f"Usage: {sys.argv[0]} <path/to/page_NNN.json>", file=sys.stderr)
        sys.exit(1)

    json_path = sys.argv[1]
    page_id = os.path.splitext(os.path.basename(json_path))[0]  # e.g. page_033
    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    audio_dir = os.path.join(project_root, "assets", "audio", page_id)
    os.makedirs(audio_dir, exist_ok=True)

    with open(json_path, encoding="utf-8") as f:
        entries = json.load(f)

    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as tmp:
        tmp_wav = tmp.name

    try:
        for i, entry in enumerate(entries, start=1):
            word = entry["word"]
            filename = f"{i:03d}.mp3"
            out_path = os.path.join(audio_dir, filename)
            subprocess.run(
                ["espeak-ng", "-v", "am", "-s", "140", "-w", tmp_wav, "--", word],
                check=True, capture_output=True,
            )
            subprocess.run(
                ["ffmpeg", "-y", "-loglevel", "error", "-i", tmp_wav,
                 "-codec:a", "libmp3lame", "-qscale:a", "4", "-ar", "22050", out_path],
                check=True, capture_output=True,
            )
            entry["audio"] = f"assets/audio/{page_id}/{filename}"
            print(f"{i:03d}: {word} -> {filename}")
    finally:
        os.remove(tmp_wav)

    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(entries, f, ensure_ascii=False, indent=2)
        f.write("\n")

    print(f"\nDone. {len(entries)} entries updated in {json_path}.")

if __name__ == "__main__":
    main()
