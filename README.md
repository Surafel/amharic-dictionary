# የአማርኛ መዝገበ ቃላት — Amharic Dictionary

An offline Amharic-to-Amharic dictionary app: look up a word and get its
definition, written entirely in Amharic — built with Flutter, ships as an
installable web app (PWA) and as an Android app.

Dictionary entries are transcribed from a printed Amharic dictionary book.
This is an early build seeded with pages 33-127 (2,620 entries starting at the
letter ሀ) while the extraction process is being refined; more pages will be
added over time.

## Install

### Android
1. Download `app-release.apk` from the
   [latest release](https://github.com/Surafel/amharic-dictionary/releases/latest).
2. Open the downloaded file on your device to install it.
3. If prompted, allow installing apps from this source (Android blocks
   installs from outside the Play Store by default).

### iPhone (or any browser)
1. Open **https://surafel.github.io/amharic-dictionary/** in Safari.
2. Tap the **Share** button, then **Add to Home Screen**.
3. The app icon appears on your home screen and opens like a normal app.

### Any desktop/Android browser
Open **https://surafel.github.io/amharic-dictionary/** — most browsers
(Chrome, Edge) will show an **Install** icon in the address bar to add it as
a standalone app; otherwise it just works as a regular web page.

## Features
- Search dictionary entries by Amharic word
- Tap an entry to see its full definition
- Hear the headword pronounced (bundled audio clip, works fully offline)
- Bookmark entries and copy a word + definition to the clipboard
- Works offline once installed (data is bundled with the app)

## Development

```
flutter pub get
flutter run -d chrome   # or -d <android-device-id>
```

Dictionary data lives in `assets/dictionary/`, one JSON file per source
page, listed in `lib/services/dictionary_repository.dart`.

Pronunciation clips are pre-generated (not synthesized live on-device,
since device/browser TTS voice support for Amharic is unreliable —
notably broken on iOS Safari) with `espeak-ng`'s Amharic voice and
bundled as mp3 assets under `assets/audio/<page>/`. To (re)generate a
page's clips after editing its JSON:

```
python3 tool/generate_audio.py assets/dictionary/page_033.json
```

Requires `espeak-ng` and `ffmpeg` on PATH. This writes an `audio` field
into each entry pointing at its clip.
