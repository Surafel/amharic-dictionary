# Transcription review notes

Entries flagged as low-confidence during automated transcription (pages 33-144),
compiled from each page's transcription report. These are spots where the source
scan was genuinely hard to read (low resolution, ink blots, cursive/italic
example text) and the transcriber made a best-effort literal reading rather than
fabricating a plausible-sounding alternative. Worth a manual check against the
source PDF (`/home/surafel/Downloads/AmharicDictionary.pdf`) or the physical book
if you have it, since this is the best remaining path to catching them before a
cleaner scan (if one ever surfaces) would make it easy.

Not included here: page/column-boundary mistakes that were caught and fixed
during transcription itself (e.g. page 133's missing ሳንባ column, page 121's
missed ስከንድ ቆጣሪ entry) — those are already resolved in the data.

## Page 118
- `መስንበቻ` sense 2: "ሰሞኑን" — best-effort read.
- General note: this page's font renders ሰ and ስ almost identically at scan
  resolution; readings were resolved via Amharic morphology rules rather than
  glyph shape alone. Worth a spot-check if you're fluent enough to eyeball it.

## Page 120
- `ሰንበር` sense 3: word "ጨንፋራ" — hard to resolve with full certainty.
- `ሰአልናክ`: word "ወለት" — same.
- `ሰአት አደረሰ`: the example sentence — same.

## Page 122
- `ሰውነት` (body) entry: clause "ስ ገላ፣ አካላት (አክላት) ስእለን የሚተለው ገፅ።" — flagged as
  worth a second look.

## Page 128
- `ሱቲ` entry: descriptor read as "ዝንጥርጥርና".
- `ሱፋጭ` entry: synonym read as "ሦፍ".

## Page 130
- `ሲራክ²` entry.
- `ሲኖዲስ` entry: word "ኤጳስቆጶሳት".

## Page 134
- `ሳጥን` sense 2: source has a physical ink blot in the scan, verified
  unrecoverable even at 600 DPI. Reconstructed as "ሌላ" from the visible
  trailing "ላ" and surrounding context — flagged as worth a second look if a
  cleaner scan ever turns up.

## Page 136
- `ለስሙ` sense 2: example clause (italic/cursive in source).
- `ስር¹` sense 5: example clause (italic/cursive in source).

## Page 139
- `ስንክሳር` entry: the category list (ካህናት/ሐዋርያት/ጻድቃን/ሰማዕታት).
- `ስንጥራ` entry: the bird description.
- `ስክራቢቶ` entry: the ink description.

## Page 141
- Orphaned line "መጠረያ፡፡" at the top of column 2 (right under the running
  header, before the ስትያ headword) — could not be attributed to any headword
  and was **omitted entirely** rather than guessed at. If you can find where
  this belongs on the source page, it's currently missing from the data.
- General note: several ስ/ሶ/ሰ family headwords (ሶስት, ሶስቶ, ሶሻሊስት, ሶሻሊዝም, ሶኬት,
  ሶታ) render as near-identical arch glyphs at scan resolution in this font;
  resolved via lexical certainty (i.e. "these are known real words") rather
  than pixel shape. Should be correct, but flagged for awareness.

## Page 143
- `ሽመጠጠ¹` sense 1: word "ሽመገገ" (one of three synonyms alongside መዝረግ/ለቀመ) —
  extremely degraded in source; transcribed as best-supported reading but not
  independently verifiable.

## Page 144
- `ሽሙንሙን` entry: word "ገበገበጥ" (in "በአለባበሱ ገበገበጥ የሚያበዙ") — pixel evidence
  reasonably solid, but "ጌጣጌጥ" (jewelry/ornament) would also fit the cluster's
  decoration theme thematically. Worth a second look.
- `ሽርሞጣ` sense 3: phrase "በዓሁርዬ" — genuinely hard to resolve.
- `ሹርቤ ብርሌ` entry: word "ጠዊንና" (describing the vessel's neck).

## Page 146
- `ሽበለቀ` sense 1: "ጫፉን አሽለ" — headword cluster is about a wooden peg/nail
  (ሽብልቅ), so "sharpened its point" fits the theme; "ጫፉን" read with reasonable
  confidence, but the verb landed on the literal pixel shape (plain ሽ, twin-horn,
  no bowl/loop) rather than the semantically-expected "አሾለ" (sharpened) —
  the 7th-order loop marker that would confirm "አሾለ" wasn't visible at native
  scan resolution even after re-rendering at 600dpi and extracting the raw
  embedded scan directly via pdfimages. Genuinely at the resolution ceiling for
  this word; flagging rather than guessing.
- `ሽበላ`: this page ends mid-entry — sense 1 is complete but sense "2." is a
  bare marker with zero text before the page boundary. Confirmed via multiple
  crops that this is a genuine cutoff (not a mis-crop), continuing on page 147.
  Needs merging when page 147 is transcribed. Also "የከባ" and "መሽራ" within
  sense 1 are lower-confidence literal readings.
- `ሽሽ` sense 3 example: "ሃበት ሽሾው" — the middle character reads as a clear
  loop shape (በ) under repeated zoom, not the expected ብ of modern "ሀብት"
  (wealth); transcribed literally as printed ("ሃበት") per the "preserve exact
  spelling" convention, though "wealth deserted him" would be the natural
  reading if it were "ሃብት".

## Page 148
- `ሽንታም` sense 2: "(ዘይ.÷ ስድብ) ፈሪ÷ በቅጎቃ።" — the word after "ፈሪ÷" is genuinely
  at the resolution ceiling. Re-rendered the source PDF page at 600dpi (vs.
  the original 180dpi crop) and the pixelation pattern for this specific word
  was identical — confirming this is the scan's native resolution limit, not
  a rendering artifact. Best-effort literal reading is "በቅጎቃ" (four glyphs:
  በ-ቅ-ጎ-ቃ), but this isn't a word I can independently verify; flagging
  rather than guessing at a "corrected" alternative.
- `ሽንተረር` (last entry, column 2): page ends mid-definition — "ስ ግራና ቀኝ ገደል
  ወይም ተዳፋት÷" — confirmed via multiple crops that nothing follows before the
  "፻፵፰" (148) page-number footer; this is a genuine cutoff, not a mis-crop.
  Continues on page 149 and needs merging when that page is transcribed
  (same pattern as this page's recovered ሽንቀረ entry from page 147).

## Page 149
- `ሽንተረር` (recovered, merged with page 148's cutoff): the continuation text
  "የሆነና መካከሉ ከላይ እስከታች እንደሰንበር ሆኖ የሚወርድ የመሬት ቅርፅ።" was re-verified word-by-word
  against the source image at high zoom; confident in this reading (corrects
  an initial "የመሪት" misread to the correct "የመሬት").
- `መሸኛ` sense 1: word after "ለመሸኘት የሚደረግ" — transcribed as "ግብገር". Re-zoomed
  repeatedly (including with a sharp point-filter render to rule out blur);
  the third glyph is genuinely ambiguous between a shape closer to ገ and one
  closer to ዓ, and the whole word doesn't match any standard term I can
  verify. Given the definition is about a farewell gathering for relatives/
  friends, "ግብዣ" (feast/party) would be the natural semantic fit, but the
  visual evidence doesn't clearly support that reading either. Flagging
  rather than substituting a guessed "correct" word.
- `ተሽከመ` sense 2 example sentence: "ይህን ሁሉ ችግር ተሽከሞ ናደለ።" — the final verb is
  in italic/cursive type (distinct font from the rest of the entry) and is
  genuinely hard to pin down at this resolution; "ኖረ" (endured/lived through
  it) would fit the sense-2 gloss ("ተቀበለ÷ ቻለ÷ ታገሰ") better than "ናደለ", but
  the pixel shapes read closer to the latter. Best-effort literal reading
  transcribed; worth a second look.
- `ተሽካሚ`: word "የሚያጓጉዝ" before "ኩሊ" — genuinely blurry at native resolution;
  resolved mostly on semantic grounds (a porter "transports" goods) rather
  than pixel certainty. Flagging.
- `አሽከመ` sense 2: "በጥበዛት ሰጠ" — the middle glyphs are ambiguous between
  በ/ጠ/በ-style box-and-arch shapes; transcribed as best-effort literal
  reading, not independently verified as a standard word.
- `ተሽከርካሪ`: final word "መንኛዝ" (in "...የሚንቀሳቀስ መንኛዝ።") — re-zoomed at high
  contrast/point-filter and the glyphs read clearly as መ-ን-ኛ-ዝ, but this
  isn't a word I recognize; a vehicle/conveyance term like "መጓጓዣ" would fit
  the definition semantically but isn't what the pixels show. Flagging.
- Page confirmed to end cleanly: the last three entries (ሽካራ, ሽከ¹, ሽከኛ) are
  complete short entries immediately followed by blank space and the "149"
  page-number footer — no cutoff into page 150.

---

## Page 152
- `ሸ` vs `ሽ` ambiguity in the "sell" word cluster: the whole page-151/152 run
  is alphabetically deep in the ሽ (6th-order) block (ሽከላ...ሽጎጠ...ሽጉጥ on
  p.151, ሽፈተ/ሽፍታ/ሽፈነ/ሽፉን/ሽፍን/ሽፈረን/ሽፈጠ/ሽፈፈ/ሽፍፍ/ሽፈፍ on p.152), but this
  particular font renders the top-serif of ሸ/ሻ/ሺ/ሽ almost identically at
  print resolution, and re-rendering the PDF at 600dpi did not fully resolve
  it. Transcribed the cluster `ሸጠ, መሸጫ, ሻጭ, ሺያጭ, ተሸጠ, አሸጠ, አሻሻጠ, አሻሻጭ,
  ሸጠሸጠ` using the standard/common Amharic spelling (ሸ/ሻ family, "sell"),
  since these are everyday words with well-known fixed spellings — but given
  the surrounding alphabetical context is otherwise solidly ሽ, the root
  headword could genuinely be `ሽጠ` instead. Worth a second look if a
  cleaner scan becomes available.
- `ተሽጎጠ` sense 1: "ተሻጠ" — transcribed exactly as read (confirmed tick-top
  glyph, ሻ-family) even though it doesn't obviously read as a standard
  passive of the "insert/tuck" sense; flagging as literal-but-uncertain.
- `ተሽፈረን` sense 1: "ፊርቅን በመልበስ ተከለለ..." — the object word before "በመልበስ"
  reads as ፊ-ር-ቅ-ን at both native and 600dpi re-render, but "ፊርቅ" isn't a
  term I can independently verify; could plausibly be "ፍርቅን" (its half).
  Transcribed literally as read, not substituted.
- Page confirmed to end cleanly: column 2's last entry, `አንሻፈፈ` ("ግ
  አጣመመ÷ ሽፋፋ አደረገ።"), is a complete sentence followed by the page's
  decorative end-of-page glyph and blank space — no cutoff into page 153.
  This also matches the page's own running header, which shows
  "ሽጉጡን ጠጋ" (col.1 first entry) / "አንሻፈፈ" (col.2 last entry).

---

## Page 153
- `ሹፉጡ` (cross-ref to `"ሽፈጠ" ስር ተመ.`): the third glyph was re-zoomed
  repeatedly and consistently reads as a looped 2nd-order shape (ጡ) rather
  than the plain 1st-order ጠ seen in the target word itself, so transcribed
  literally as `ሹፉጡ` — but given every other letter in this cross-ref run
  differs from its target only in the initial ሽ→ሹ swap, a plain `ሹፍጠ`
  (matching ጠ) is also plausible. Worth a second look.
- `ሹፍት` definition: "ስ የበረ የሽንት መሽኛው (የቀዳዳው) ዙሪያ።" — the word after "የ"
  reads clearly as በ+ረ (no visible 5th-order mark) at 900% zoom, but "የበረ"
  doesn't parse as an obvious modifier here; "የበሬ" (of an ox) would fit the
  anatomical-sounding definition better. Transcribed literally as read.
- `ሻህኝ` definition: "...የሚወጣ የቀስል አይነት።" — re-zoomed to isolate the
  character after "የ"; it reads as ቀ (flat top, no loop) not ቁ, giving
  "ቀስል", which isn't a word I can independently verify. Transcribed
  literally as read.
- `የማይሻል` (last entry, column 2 bottom): genuine cross-page cutoff. The
  page ends mid-definition — "የማይሻል የማይበልጥ÷ ከበፊቱ ለውጥ" — with no closing
  ። before the blank space and the "153" footer. The definition continues
  onto page 154; transcribed only the visible fragment, not completed.

---

## Page 154
- `የማይሻል` (recovered entry, merged with page 153's cutoff fragment):
  continuation reads "የሌለው። አዲስ የመጣውም እታ ከዘሬቱ የማይሻል ነው።" — the word "እታ"
  was re-zoomed at 400% and reads clearly as two glyphs እ+ታ, but "እታ"
  doesn't parse as a standard word in this position (expected something
  like "እንኳ"/"እንኳን" — "even the newly-arrived one is no better than the
  old"). Transcribed literally as read.
- `ተሻረ` sense 3 parenthetical tag: "ፈረሰ÷ ተገደፈ (ያም)።" — the two characters
  in parens were re-zoomed several times; best reading is ያ+ም ("ያም"), but
  this doesn't match any grammatical abbreviation used elsewhere in the
  book (contrast ስም/ግ/ቅ/ተግ). Low confidence; transcribed literally as read.
- `አሻማ` sense 2: "ግልፅ አልሆን አለ፣ እቅዱን የማይገልፅ÷ አጠራጣሪ ሆነ።" — "አልሆን አለ" was
  checked closely (confirmed ን not ነ at 1000% zoom) but reads awkwardly;
  "አልሆነ አለ" or "አልሆነም" would parse more naturally. Transcribed literally
  as read.
- `ሽቀለ` sense 1 / `አሽቀለ`: first word after "1." reads as a doubled glyph
  "ገገ" (and the causative counterpart as "አገገ"), re-zoomed multiple times
  at up to 900%. This isn't a word I can independently verify — "ጓጓ"
  (yearned) would fit the surrounding synonyms (ቋመጠ/ጎመጀ, "craved") better
  semantically, but the glyph shape read consistently as ገ not ጓ.
  Transcribed literally as read; worth a second look.
- `ሽቅብ ወጣ`: "...ከፍ ወዳለ በታ ሄደ።" — spelled with በ (be) here, whereas the verb
  page 154's own `ሽቅበት` entry two lines later spells the unrelated "ቦታ"
  (place) correctly with ቦ (bo). Both were re-zoomed and read distinctly.
  Transcribed literally as printed in each case (possible printer
  inconsistency, not a transcription error).
- `ሽምላ` definition ends "...ለጌጥ የሚያገለግል ጋራዴ።" — "ጋራዴ" (expected something
  like a word for "medal/decoration") re-zoomed clearly as ጋ+ራ+ዴ but isn't
  independently verifiable. Transcribed literally as read.
- No genuine 154→155 cutoff: column 2's last entry `ሽቅበት` ends cleanly
  ("ስ ዳገትማ÷ ከፍ ያለ ቦታ።") with trailing blank space before the page-end
  ornament/footer, matching the same clean-ending pattern as column 1's
  last entry. Confirmed not cut off.

---

## Page 155
- `ተንሽተተ`: "እየተንፏቀቀ ሄደ።" — the reduplicated verb after እየተን- was re-zoomed
  several times; best-effort read as ፏ (labialized ፈ, matching the real word
  ተንፏቀቀ "crawled/dragged along"), but the glyph was genuinely ambiguous at
  scan resolution.
- `ሽከረ` sense 2 example sentence: "በሁለቱ መሃል የነበረው ግንኙነት ሻከረ።" — the word
  after መሃል read as ነ/አ-ambiguous; transcribed as የነበረው (semantically the
  only sensible reading) rather than the literal glyph shape.
- `ሽኩራ (ሽሁራ)` sense 1: several technical/descriptive words are low
  confidence even after repeated re-zooming: "ክነሃስ", "የሚቀጨለጨል", and
  "የሚንሺሺ" (appears twice). A short trailing fragment after "እቃ።" in sense 2
  (looked like "ስንዓህ።" or similar, possibly a citation/reference abbreviation)
  was not confidently legible and was omitted rather than guessed.
- `ሽከላ (ሽሀላ)` sense 1: "የሽከላ እቃ" — the second word's glyph was ambiguous
  between ቃ (qa) and ታ (ta); transcribed as እቃ ("item/vessel") since that's
  the only reading that parses grammatically.
- `ሽወር`: final word "...መታጠቢያ እቃ።" — same ቃ/ታ (or ዷ) ambiguity as above;
  resolved to እቃ by analogy with the parallel construction in ሽኩራ's own
  entry two lines earlier.
- `ተሸጋጋረ`: "...ወፍራምና ረዥም እንጨት÷ በረገላ።" — "በረገላ" is a low-confidence read
  for the final synonym; visually distinct from ሰረገላ (chariot) on close
  zoom, but not an independently familiar word.
- `አሽገረ` sense 1: "...ወደ ሌላ አዘዋወረ ወይም ወሰደ።" — "አዘዋወረ" is a best-effort
  reading of a badly blurred word; sense 2's "አሳለፈ÷ አስከደ" (especially
  "አስከደ") is also low confidence.
- `ባሻገር` (first entry) sense 2 example: "ባሻገር የምታየው የለውየው ቤት ነው።" — "የለውየው"
  read consistently across multiple zooms but isn't a word independently
  recognized; possibly a proper name or idiom-specific term.
- `አሽጋገረ` sense 3: "(ግመድን÷ ወራጅ እንጨትን÷...) ... (ለግሰር÷ ለመምታት÷...)።" — both
  "ግመድን" and "ለግሰር" are low-confidence; "ግመድን" may be a misprint/variant of
  "ግንድን" (log/trunk) but the printed glyph reads as ግመድን.
- `ሽገተ`: genuine 155→156 cutoff. Column 2's last entry ends mid-sentence at
  "2. ብዙ ጎሬ ቆየ÷" (÷ is a mid-clause separator, not a full stop) followed by
  blank space and the page-155 footer — confirmed via close zoom that
  nothing else follows on this page. Sense 2's definition continues on
  page 156 and should be recovered/merged when that page is transcribed.

## Page 157
- `ሽንክ`: "ስ ነጭ አባ ወንፈ የሚመስል ነፍሳት።" — the middle word read consistently as
  "ወንፈ" (ወ-ን-ፈ) across multiple re-zooms, but this isn't an independently
  recognized term; possibly a variant/misprint of a different insect-name
  compound.
- `ሽንክላ`: "ስ የውሃ÷ የጠላ÷...መያዣ ግድጋ።" — "መያዣ" (container/holder) is a
  reasonably confident reading, but the final word "ግድጋ" is low confidence
  and not an independently recognized word.
- `ሽንብራ`: "የአበባ እሁል፣ ፍሬውም..." — "እሁል" (እ-ሁ-ል) was re-zoomed and the middle
  character confirmed as ሁ (not ህ, which would give the more familiar word
  እህል/"crop, grain"); transcribed exactly as printed per the ሁ reading.
- `ሽንፍላ`: genuine 157→158 cutoff. Column 2's last entry reads "ስ 1. ፈረስ
  የሚቀመጥበት÷ ሲያጥቡት ቶሎ የማይጠራ የተነባበረና ትንንሽ ከረጢት" with no closing punctuation,
  followed by blank space and the page-157 footer — confirmed via close zoom
  that nothing else follows. Within this fragment, the word before
  "የማይጠራ" (read as "ቶሎ") was genuinely ambiguous — could also be ትሉ/ተሉ —
  and "የተነባበረና" (vs. የተነበበረና) is a best-effort reading by analogy with the
  same construction in the ሽንኩርት entry above it. The whole sentence
  continues on page 158 and should be recovered/merged when that page is
  transcribed.

## Page 158
- `ሽንፍላ` (recovered continuation from page 157): "ያለው ወንራ መሰል የሆድ እታ። 2.
  (ዘይ.) የማይጠራ÷ እንክን የማይታማበት።" — "ወንራ" and "እንክን" were re-zoomed at 400/800
  DPI and read consistently, but neither is an independently recognized
  word (modern spelling would expect እንከን for "blemish"); transcribed
  exactly as printed.
- `ሽኩኮ`: "ስ በጎሬው÷ በየቋጥኙ የሚኖር÷ ድመት የሚያክልና..." — the two habitat words were
  genuinely hard to resolve even after 400/800/1600 DPI re-zooms; "በጎሬው"
  could also read as "በገሬው" and "በየቋጥኙ" could also read as "በየቃጥኝ". Settled
  on "በጎሬው"/"በየቋጥኙ" (den / crags) by cross-referencing "ጎሬ" and "ቋጥኝ" as
  attested words elsewhere in the already-transcribed dictionary, but this
  is a best-effort call, not a confident glyph read.
- `ሽው ሽው አለ` sense 1 "መላልሶ ነፈስ" and sense 2 opening "ከነፈ÷ ... ተንከወከወ" — low
  confidence. The expected verb "blew" is usually spelled ነፈሰ, but the
  printed glyph reads ነፈስ; "ከነፈ" doesn't parse as a standalone word under
  any reading tried. Transcribed literally as printed after multiple
  re-zooms.
- `ሻካ`: "ት 1. (ስድብ) ቀትሬ ቀላል÷ ከውካዋ። 2. ሰላይ።" — both the headword itself and
  the definition words "ቀትሬ" and "ከውካዋ" are low confidence; none are
  independently recognized words, despite multiple re-zooms at 400/800 DPI
  giving a consistent pixel read. Worth a manual check.
- `ሸ` (letter-intro entry): "የ"ሽ" ፈደል ሳብእ ዘር።" — the glyph was re-rendered at
  400/800/1600 DPI and unambiguously lacks the 7th-order (ሾ) loop, so the
  headword is confidently "ሸ" (1st-order/ግዕዝ). However "ሳብእ" is the ordinal
  this dictionary consistently uses for 7th-order (ሳብእ) glyphs elsewhere
  (e.g. ሶ, ሞ — confirmed via grep of already-transcribed pages), which would
  normally pair with ሾ, not ሸ. The ordinal word itself was pixel-confirmed
  as ሳብእ, not ግዕዝ or another term — so this looks like either an unusual
  convention for this particular letter-family's base entry, or a possible
  misprint in the source book. Flagging for awareness rather than as an
  illegible read.

## Page 159
- `ተሸመ` sense 2 example: "የተሸመበት ዘር አላፍንጋር አለው።" — the italicized example
  sentence was re-zoomed at 400/700 DPI (and against a 600-DPI PDF re-render)
  and the glyphs read consistently as "አላፍንጋር", but this is not an
  independently recognized word. Transcribed literally as printed.
- `ሸሌ`: "አፉና ክንፉራ አካባቢ ነጭ የሆነ ፈረስ" — "ክንፉራ" (describing the horse's
  coloring/marking, paired with "አፉ" = its mouth) reads consistently across
  zooms but isn't an independently recognized word. Best-effort literal
  transcription.
- `አስሾመ` example: "የሚያሾም ስራ ሰርቷል።" — the final word's glyphs were genuinely
  ambiguous in the source italic font (could read as "ስርታአ" at low
  resolution); settled on "ሰርቷል" by grammatical/semantic coherence with the
  rest of the sentence, not a fully confident glyph read.
- `ሸዬ` cross-ref: "\"ሸዮ\"ን ተመ." — both the headword's final vowel glyph (ዬ)
  and the quoted target's final vowel glyph looked pixel-identical at every
  zoom level tried, i.e. I could not independently distinguish ዬ (ye) from
  ዮ (yo) in this font. Transcribed target as "ሸዮ" per distinct-target
  convention (a cross-ref pointing at itself would be unusual); worth a
  manual check.
- `ሸጥ አደረገ` (last entry, column 2): definition "ግ በልምድ፣ በአለንጋ፣..." is a
  genuine cross-page cutoff, not a legibility issue — the column ends here
  with no closing punctuation and the page-159 footer follows directly.
  Continuation should be on page 160 and merged in when that page is
  transcribed.

## Page 160
- `አሿፌ` sense 1: "ት 1. ቀላድ፣ ፌዘኛ።" — the third glyph of the first word was
  re-zoomed at 300/600 DPI and consistently showed a double-pronged
  sha-family-looking top rather than a clean ጅ or ድ shape, so the exact
  final consonant is genuinely ambiguous in this scan. Settled on "ቀላድ"
  (a real, independently attested word meaning "joker/jester") since it
  pairs semantically with "ፌዘኛ" and is far more plausible than the
  alternatives tried; worth a manual check against the source.
- `ሿሿቴ` sense 2, first list item (right before "የፀናፅል"): read as "የፀገነሆ"
  after extensive re-zooming (300/600 DPI, autocontrast) — the surrounding
  items (የፀናፅል/ፀናጽል "sistrum", ሻኩራ, መረሸት, ጉልላት — all cross-checked against
  existing headwords elsewhere in the dictionary) are confident, but this
  first item does not resolve to any word I could independently recognize.
  Transcribed as the most literal glyph-by-glyph reading rather than
  fabricating a plausible substitute; flagging for a manual check against
  the source PDF/book.

## Page 161
- `አቃለለ` sense 1: "አወገደ፣ አገባደደ (ስራን)።" — "አወገደ" is a confident real-word
  read (confirmed against the distinct ወ glyph elsewhere on the page), but
  the second synonym "አገባደደ" does not resolve to any word I could
  independently recognize, even after re-rendering the source PDF page at
  600 DPI and comparing letter-by-letter against known ገ/ባ/ደ glyphs
  elsewhere on the page. Transcribed as the most literal glyph reading
  rather than substituting a plausible-sounding real word; worth a manual
  check.
- `ቀለሰ` sense 1, second synonym: "አጎበጠ፣ አስንነበሰ።" — "አጎበጠ" is confident;
  "አስንነበሰ" is a literal best-effort glyph reading that does not resolve to
  an independently recognized word.
- `ቀለሰ` sense 2 and `ቀላሽ`: both contain the phrase "በአሂደ ጊዜ" (appears
  twice, spelled consistently) describing when the lead ox treads the
  threshing floor — this did not resolve to a recognized word (candidates
  considered and rejected: አውድማ "threshing floor", አዝመራ "harvest", neither
  matched the glyphs well enough at 600 DPI). Also uncertain in the same
  sentence: "አውራ" (paired with "አሚራ" as a synonym for lead-ox) and the
  clause "ከብ በመዘር ነደውን እንዲረግጡ መራ" describing what the other cattle are led
  to do. All transcribed as literal best-effort glyph readings; this whole
  entry pair is worth a manual check against the source.
- `የቀለም ትምህርት`: "ስ መያ ነክ ያለምን ትምህርት።" — the definition text did not
  resolve to a phrase I could confidently parse/recognize even after
  600 DPI re-zooming; transcribed as the most literal glyph reading.
- `ቀለም` (noun, main entry) sense 2 example sentence: "የቤቱም ቀለም
  ተበላሽቷል።" — the subject word's glyphs were ambiguous between something
  like "የቤትዮዋ"/"የቤትዮም" and a normalized reading of "የቤቱም" (the house's,
  also); settled on "የቤቱም" as the only grammatically coherent real phrase
  among the candidates tried, but this is not a fully confident glyph read.

## Page 162
- `ቀልቃላ (ቀለቀል)` first synonym: "ቀዥቃዣ" — initial 600 DPI pixel reads were
  ambiguous (letterforms resembling ኸ/ገ were considered and rejected);
  resolved by cross-checking with `tesseract -l amh` OCR output, which read
  it consistently as "ቀዥቃዣ", and confirming the ዥ/ዠ glyph shape against a
  clean occurrence in the nearby confirmed word "ተንቀዠቀዠ". Reasonably
  confident, but flagging since the initial read was difficult.
- `ቀለበት` sense 3: "የጋብቻ ውል መፈራረሚያ ቀን፤ ፍጥምጥም።" — the final word
  "ፍጥምጥም" was read clearly letter-by-letter at 600 DPI (ፍ-ጥ-ም-ጥ-ም is
  unambiguous), but its semantic fit as a gloss for "ቀለበት" (ring) sense 3
  is unclear to me. Transcribed exactly as printed rather than
  substituting a more semantically plausible word; worth a manual check.

## Page 163
- `ቀላዋ`: "ቅ ከላብ÷ ከላፍ÷ ቀኸርቃዥ።" — the two synonyms "ከላብ" and "ከላፍ" were
  read letter-by-letter with reasonable confidence but do not resolve to
  words I recognize; possibly rare/dialectal. Transcribed as literal
  glyph readings.
- `ቀለዋ (ቀላዋ)`: "...መጠኑ አነስተኛ የሆነ የዘፍ አይነት።" — the plant/tree-type word
  "ዘፍ" was read clearly as ዘ-ፍ (not ዛ-ፍ "ዛፍ" tree, which would make more
  semantic sense here) at high zoom; flagging the ዘ/ዛ distinction as
  uncertain since the difference is subtle in this bitmap font.
- `ቀላድ` sense 1 first synonym: "አዓለተ" (verb form) / "አዓላች" (adjective
  agent-noun form in the ቀላድ entry) — read consistently across two
  occurrences but does not resolve to an independently recognized word;
  transcribed as literal glyph reading.
- `ቀላድ` sense 2 vs `ቀልደኛ` sense 2: same underlying word ("mocker/jester")
  transcribed as "አሾፌ" in one entry and "አሿፌ" in the other — the ሾ/ሿ
  distinction was ambiguous at this resolution in both places; worth a
  manual check for consistency (expected form is likely "አሿፊ").
- `ቀልጠጥ አለ` sense 1: "...ወለል ብሎ ታየ÷ ከልል አልባ ሆነ።" — this passage has a
  physical ink smudge in the source scan covering part of the word before
  "አልባ"; "ከልል" is a best-effort reading and genuinely low-confidence.
  Worth a manual check/re-scan.
- `አቃልማ`: "ቅ ወራ አዳግቂ።" — both words read letter-by-letter with
  reasonable confidence but the definition does not resolve to a phrase I
  can confidently parse; transcribed as literal glyph reading.
- `ቀልጣማ`: "...በቀላሉ የሚሰበር÷ አጥሞ ቢስ።" — "አጥሞ" was the best glyph reading,
  though "አጥንት ቢስ" (boneless, i.e. flimsy) would fit the "easily broken"
  definition better semantically. Flagging as uncertain; not fabricated.
- `ቅልጥፍትፍ ያለ` (last entry, bottom of column 2): the definition
  "ዝርክርክ ያለን፣ ጥንቅቅ" is genuinely cut off at the bottom of the page — the
  text stops mid-phrase with no closing punctuation, followed by blank
  space and the page-163 footer. This is a real page-163→164 cutoff (not
  a transcription gap); whoever transcribes page 164 should recover the
  rest of this entry's definition from the top of that page.

---

## Page 164
- `ቀይ አፈር`: "...ቀይነት ያለው አፈር÷ በረበር።" — the closing synonym "በረበር" was read
  letter-by-letter with high confidence at the pixel level (በ-ረ-በ-ር,
  confirmed against the shape of "ር" elsewhere on the same line) but does
  not resolve to a word I recognize. Transcribed as literal glyph reading;
  worth a manual check.
- `ቀላ²`: "ግ መታ÷ ሰጋ (እሩርን÷ ጥንግን÷ እበን÷...)::" — the parenthetical list of
  body-part/object nouns. "እሩር" and "ጥንግ" are corroborated by the very next
  entry `ቀሌ` ("ስ እሩር፣ ጥንግ።"), giving reasonable confidence in those two;
  the third item "እበን" is a lower-confidence standalone read.
- `ቀላድ`: "...ከቃጫ ወይም ከእንስት ወይም ከጥሬት÷... የተሰራ ገመድ÷ ወደሮ።" — the rope-making
  materials "እንስት" and "ጥሬት", and the closing synonym "ወደሮ", were read
  letter-by-letter with reasonable confidence but don't resolve to words I
  can confidently place in this context. "ከቃጫ" (fiber) is solid.
- `ቀላወጠ` sense 2: "...ለመኑ÷ ቀፈፈ÷ ያገተ።" — "ለመኑ" and "ያገተ" are lower-confidence
  reads (font/print quality); "ቀፈፈ" is solid (corroborated by `ቅልውጥ` sense
  2 "ልመና÷ ቀፈፋ።" on the same page).
- `ቀላወጠ` sense 3: "...ከጀለ÷ ፈለገ÷ ሽ÷ ጓጓ።" — the single-character item "ሽ" is
  genuinely unresolved (reads as a bare consonant, not a standalone word);
  flagging rather than fabricating a fuller word.
- `ቀላወጠ` italicized example: "ፋይኦ ተላወጠ።" — the subject "ፋይኦ" is a
  low-confidence read of cursive italic type; possibly a personal name.
- `ቀላድ ወደቀ/ተጣለ` (last entry, bottom of column 2): the definition
  "በቀላድ ተለካ÷ ተሰፈረ" has no closing punctuation and is followed by blank
  space at the very bottom of the page (before the page's decorative
  footer glyph) — this reads as a genuine page-164→165 cutoff, not a
  transcription gap. Whoever transcribes page 165 should check its opening
  for a continuation to merge into this entry.

---

---

## Page 165
- `ቀላድ ወደቀ/ተጣለ` (recovered, merged with page 164's cutoff fragment): the
  continuation reads "(መሬት÷ እርስት)።" — the second word was read consistently
  as "እርስት" across the source scan and a Google Vision OCR cross-check, but
  the standard word for "hereditary land/estate" is "ርስት" (no leading እ);
  transcribed literally as read rather than normalizing to the more familiar
  spelling.
- `ቀልባጫ`: cross-reference target read as "ቀለበጨ" — OCR read the final glyph
  ambiguously between ጨ (1st order) and ጪ (6th order); settled on ጨ since
  every other root in this cross-ref cluster (ቀለበሰ, ቀለንጅ, ቀለደ, ቀለወ) ends in
  a 1st-order consonant, but this is inference from pattern, not a confident
  glyph read.
- `ቀልቤ`: "ስ ከሽፋል በላይ በግንባር ዙሪያ በቀጭኑ ታስሮ..." — "ከሽፋል" (describing where on
  the head this headband sits) doesn't resolve to a term independently
  verified; transcribed literally as read.
- `ቀልብ ገዛ`: "አስተዋይ ሆነ÷ ጨመተ።" — "ጨመተ" is a literal reading that doesn't match
  any word independently recognized; worth a manual check.
- `ቅማላም` sense 2: the tag before "ምንም ሃብት የሌለው" reads as "(ዘይ.)" (figurative,
  matching the abbreviation used elsewhere on this same page for ቅመም sense 3
  and ቀመሰ sense 4) but the source glyphs looked closer to "(ዘይ.ቁ.)" in the
  scan/OCR; also the sense-2 marker itself reads more like "2-" than "2." at
  this resolution. Transcribed as the standard "(ዘይ.)"/"2." forms used
  consistently elsewhere in this dictionary; flagging the discrepancy.
- `ቀመር²`: "ስ ዋልታ÷ የባጥ ቦታ።" — "የባጥ ቦታ" is a low-confidence literal reading
  that doesn't resolve to a phrase independently recognized; worth a manual
  check against the source.
- `አቀመሰ` (last entry, column 2): genuine page 165→166 cutoff. Sense 1 ("መታ።")
  is complete, but sense 2 ("አዋጠ÷ አበላ÷...") has no closing punctuation and is
  followed by the page-165 footer — confirmed as a real cutoff, not a
  transcription gap. Whoever transcribes page 166 should recover the rest of
  this entry from the top of that page.
- Cross-checked against a Google Vision `DOCUMENT_TEXT_DETECTION` OCR pass
  (`tool/ocr_page.py`) as a second opinion in addition to the source scan;
  the OCR's naive left/right column split cut through the middle of the
  page's real second column, so column 2 was transcribed primarily from a
  direct re-crop of the source image rather than the raw OCR text.

---

---

## Page 166
- The source PDF page for this page (index 198) is a two-page spread scan:
  page 166 in full (two columns) plus a bleed sliver of page 167's opening
  (headed "ቀማ", running from the ቀማ/ቀማኛ/ቅሚያ cluster through the start of
  ቀረ). Only the two real page-166 columns were transcribed here; the page 167
  sliver is deferred to whoever transcribes that page next.
- Three headwords in the source are bare reconstructed-root headers with no
  gloss of their own — `*ቀመቀመ`, `*ቀመደመደ`, `*ቀመጠ` — printed purely to
  introduce the derived forms listed under them (e.g. ተቀማቀመ/አቀማቀመ under
  `*ቀመቀመ`). These were intentionally NOT added as standalone JSON entries
  since they have no definition text to store; their derived forms are all
  present as normal entries.
- `አቅመደመደ`: "ግ አጥመለመለ÷ አሽመደመደ÷ አዝለፈለፈ÷ አቅም አሳጣ።" — reconstructed by
  combining the source scan with the Google Vision OCR cross-check, since the
  first synonym ("አጥመለመለ") was easy to miss against the page's line breaks;
  worth a manual check that all four clauses are attributed correctly.
- `አስቀመጠ`: the sense numbering jumps from "4." straight to "6." with no
  "5." in the source (confirmed identically in both the direct scan and the
  OCR pass) — transcribed literally as printed rather than renumbering;
  likely a printer skip in the original book.
- `ቀሚስ` (last entry, column 2): genuine page 166→167 cutoff. Sense 1 ends
  mid-clause ("...የአንገትና የእጅ ማስገቢያ ያለው") with no closing punctuation,
  immediately followed by the page-166 footer. The continuation (and senses
  2-5, visible in the page-167 bleed sliver mentioned above) should be
  recovered when page 167 is transcribed.

---

---

## Page 167
- `ቀሚስ` (first entry): the completed, 6-sense merge of page 166's cutoff
  fragment (`page_166.json`'s last entry stays as the unclosed fragment,
  per the established convention — the finished version lives here instead).
- Confirmed a genuine dictionary convention (not a transcription error):
  several headwords are given a full standalone definition once (on page 166:
  `ቀምቀሞ`, `ቀምቃሚ¹`, `ቀምቃሚ²`) and *also* reappear later as plain "see under
  homograph N" cross-references (here: `ቀምቀሞ` → `ቀመቀመ²`, `ቀምቃሚ¹` → `ቀመቀመ³`,
  `ቀምቃሚ²` → `ቀመቀመ⁴`). Same pattern for `ቀማኛ`, defined in full earlier on
  this same page and then cross-referenced again a few entries later. Both
  occurrences are transcribed as separate entries, matching the source.
- As with page 166, a bare reconstructed-root header with no gloss of its own
  — `*ቀማጠለ` — was NOT added as a standalone entry; its derived forms
  (`ቅምጥል`/`ተቀማጠለ`/`አቀማጠለ`) are present normally. The page's very last line,
  `*ቀረመተ`, is the same kind of bare root and was also omitted; its derived
  forms will open page 168.
- `ቅሪት` sense 1 tag: read as "ቅ" (adjective) even though the definition
  ("እርጉዝ÷ ነፍሰጡር (ሴት)") describes a state rather than a category-fitting
  adjective in the usual sense; transcribed exactly as tagged in the source.
- `ቅርት አለ` sense 3 example ("እግሬ ቅርት አለብኝ።"): two source passes (direct scan
  and a Google Vision OCR cross-check) disagreed on a word in this clause —
  one read included "ወደኋላ" (backward) before "ቅርት አለብኝ", the other didn't.
  Transcribed the plainer, more consistent reading; worth a manual check.
- `ይቅርታ`: the sense numbering jumps from "2." to "4." with no "3." — like
  page 166's `አስቀመጠ` skip, confirmed identically in both the scan and the
  OCR pass, so transcribed literally as a likely printer skip rather than
  renumbered.
- The PDF page for 167 (index 199) is, as expected, a two-page-spread scan:
  a bleed sliver of page 166's tail on the left (already covered by page
  166's data) plus the two real page-167 columns transcribed here. Page 167
  ends cleanly at the bare `*ቀረመተ` root header — no mid-sentence cutoff into
  page 168, just a new cluster starting right at the page boundary.

---

---

## Page 168
- Confirmed page 168 opens with the derived-form cluster (`ቀረረ`, `ቀረራ`,
  `ቅራሪ`, ...) that follows page 167's bare `*ቀረመተ` root header — this is the
  expected continuation, not a cutoff to merge; page 167's ending was clean.
- `ተቀረማመተ`/`አቀራመተ` sense 2 second synonym (`ተባጨቀ`/`አባጨቀ`): unfamiliar
  word, but the spelling itself is solidly confirmed — every individual
  glyph (ተ/አ, ባ, ጨ, ቀ) was cross-checked pixel-for-pixel against clean,
  unambiguous instances of the same letters elsewhere on this exact page
  (e.g. the ጨ in `እንጨቱ` inside the `ቀረሮ` entry, and the ባ in `ባለጌ` inside
  `ቅርሻታም`), and the causative/reciprocal pair prints identically both
  times. The meaning ("ተሻማ፤ ተባጨቀ" — competed for a share; ~"scrambled/
  grabbed at each other") is a reasonable fit for "divvying up meat" but
  worth a second opinion.
- `ቀረረ` sense 2 parenthetical/example (`ያዘ (አይኑ እንባን)። እንባው ቀረረ።`): the
  word transcribed as "እንባ" (tears) has a first letter that renders almost
  identically to "አ" in this font at 600dpi; went with "እንባ" since it's the
  only reading that makes sense with "ያዘ" (eyes welling with tears) and
  both occurrences in the sentence use the same glyph.
- `ቀረሻሽንቦ (ቀረሻሽምቦ)` definition: the comparison plant/object name read as
  "እንደጉሎና" is low-confidence — an obscure headword (some kind of hollow,
  easily-broken plant) and the comparison word didn't resolve cleanly even
  after repeated zooming; transcribed literally rather than guessing a
  "nicer" word. The entry's closing punctuation also looked like a single
  "፡" rather than the usual "።"; transcribed as "።" for consistency but flag
  it as uncertain.
- `ተንቀረቀበ`/`አንቀረቀበ` sense 1 ("በሰፈድና በመሳለው..."): the first sifting/sorting
  tool name ("ሰፈድ") did not resolve to a word I could confidently identify;
  transcribed literally as printed.
- `መቀርቀቢያ`: "ቀርቃባን ለማገር የሚያገለግል ጠፍር" — "ለማገር" is an unusual infinitive to
  see in this context (expected something closer to "ለማሰር", to tie); the
  glyphs clearly read ለ-ማ-ገ-ር though, so transcribed as seen.
- `ቀርቀቦ` sense 1 ("መንቀርቀቢያ፤ ስፍራ።"): the word before ቀርቀቢያ read as "ን" (i.e.
  "መንቀርቀቢያ"), which is an unusual form; double-checked at high zoom and the
  ን does appear to be there, but flagging since a plain "መቀርቀቢያ" would be
  the more expected word.
- `ቀርቀቦ` sense 2 cross-references `"ቀርበበ"ን ተመ.` — the target headword
  `ቀርበበ` does not appear anywhere on page 168 itself, so it must be defined
  later (presumably on page 169); nothing to reconcile on this page, just
  noting the forward reference for whoever transcribes 169.
- **Page 168 cuts off mid-entry at the very bottom of column 2**: the last
  entry, `አንቀረቀበ`, ends after "2. አናወጠ፤" — a trailing "፤" divider with
  nothing after it, immediately followed by blank space and then the page's
  printer signature mark (not dictionary text). This mirrors `አንቀረቀበ`'s
  companion entry `ተንቀረቀበ` just above it, whose own sense 2 has three
  synonyms ("ተናወጠ፤ ተንቀጠቀጠ፤ ራደ") — so `አንቀረቀበ` sense 2 almost certainly
  continues with at least two more items on page 169. Left the fragment
  exactly as printed rather than fabricating the rest; whoever transcribes
  page 169 should check its opening for the continuation and merge it in
  as a new first entry there, per the established convention.

---

## Page 169
- Confirmed the page168→169 merge: page 168's last entry `አንቀረቀበ` (cut off
  after "2. አናወጠ፤") continues at the very top of page 169's column 1 with
  "አንቀጠቀጠ÷ አራደ (ምድርን÷...)። 3. ደጋግሞ አነጠረ÷ ጢብ ጢብ አደረገ (ኳስን በእግር)።" — merged
  into a single new `አንቀረቀበ` entry tagged `"page": 169`, exactly as the brief
  anticipated (parallels sibling `ተንቀረቀበ`'s three-synonym sense 2). Page
  168's own fragment was left untouched.
- `ማንቀርቀቢያ`/`እንቀርቃቢ` entries: the tool/implement word was transcribed as
  "እቃ" here (a Google Vision OCR cross-check independently agreed), even
  though the parallel clause already committed on page 168 (`ተንቀረቀበ`'s "በሰፈድና
  በመሳለው እታ ተበጠረ") reads "እታ" — the two pages may actually show the same
  word and page 168's "እታ" could be a prior mis-reading, but that's already
  committed data and out of scope here; flagging in case a future pass wants
  to reconcile them.
- `እንቀርቃቢ` headword: read as ቀ-ር-ቃ-ቢ (with ቃ), which is a slightly
  surprising derivation next to `ማንቀርቀቢያ` (ቀ-ር-ቀ-ቢ, with ቀ) — double-checked
  at high zoom and the glyph does look like ቃ, so transcribed literally.
- `እንቀርቃቢ` definition: the participle "ተንገዋሉ" (in "በሰፌድ ተንገዋሉ÷ ተንጠርጥሮና
  ተለይቶ የሚወጣው...") is an unusual form — a converb "ተንገዋሎ" would be more
  grammatically expected — but both direct image reading and an independent
  OCR pass agree pixel-for-pixel on "ተንገዋሉ", so transcribed as seen.
- `ቀረበ` sense 2 example "አመት በዓሉ ቀረበ።": the example is in a cursive/italic
  font; "በዓሉ" (the holiday/feast) is the best literal+semantic reading of a
  glyph that could also be read as "በኣሉ" — OCR can't distinguish ዓ/ኣ in this
  font either, so this is a best-effort call, not a certain one.
- `ቀረቦ` cross-reference: reads `"ቀርበቦ" ን ተመ.` (target spelled with ቦ, i.e.
  "ቀርበቦ"). This is close to but not identical with page 168's forward
  reference target — page 168's `ቀርቀቦ` sense 2 pointed to `"ቀርበበ"` (with በ,
  no trailing ቦ). Neither spelling (`ቀርበበ` nor `ቀርበቦ`) is actually defined
  as a standalone headword anywhere on page 169; the target still hasn't
  surfaced. Possibly a typo on one of the two pages, or the real target is
  further along (page 170+). Left both cross-references exactly as printed
  on their respective pages.
- `አቀራረበ` appears twice in a row with distinct senses (concrete "brought/
  arranged things together" vs. "caused reconciliation/agreement"), but the
  source prints **no** superscript digits on either instance (unlike `ቀረዋ¹`/
  `ቀረዋ²` just below, which do have visible printed superscripts). Added
  `¹`/`²` suffixes per the project's own homograph convention even though
  the page itself doesn't distinguish them typographically.
- Skipped two bare asterisked root headers with no gloss of their own, per
  convention (their derived forms below were transcribed normally):
  `*ቀረበበ` (before `ቀርባባ(ቀረበብ)`, `ቀርባባ ጆሮ`, `ተንቀረበበ`, `አንቀረበበ`) and `*ቀረነ`
  (before `ቅራኔ`).
- **Page 169 cuts off mid-entry at the very bottom of column 2**: the last
  entry, `ቀረደደ`, ends after "2. ቀረጠፈ÷" — a trailing "÷" divider with nothing
  after it, immediately followed by the page's printer signature mark.
  Left the fragment exactly as printed; whoever transcribes page 170 should
  check its opening for the continuation and merge it in as a new first
  entry there, per the established convention. Everything above it on both
  columns of page 169 is a complete, non-cut-off entry (column 1's last full
  entry, `አቅራቢያ`, continues cleanly at the top of column 2 on the same
  page — not a cross-page cutoff).

---

## Page 170
- Merged the page169→170 cutoff: page 169's last entry `ቀረደደ` (cut off after
  "2. ቀረጠፈ÷") continues at the very top of page 170's column 1 with "ሰነጠቀ።
  3. (ዘይ.) ሳያፍር ዋሽ÷ ወሸከተ።" — merged into a single new `ቀረደደ` entry tagged
  `"page": 170`. Page 169's own fragment was left untouched.
- The page169/168 unresolved cross-reference chain (`ቀርበቦ`/`ቀርበበ`, pointed to
  by page 168's `ቀርቀቦ` and page 169's `ቀረቦ`) is **still not resolved on page
  170** — this page's own `ቀረቦ` entry is an unrelated, independent full
  definition ("ስ ጌሽ የሌለውና በጠላ መልክ የሚዘጋጅ መጠጥ።", a type of home-brewed drink),
  not a cross-reference stub, so it's a legitimate second/independent
  occurrence of the same spelling rather than the missing target. The Google
  Vision OCR cross-check on this page's spread did pick up the word
  `ቀርበቦ (ቀረቦ÷ ቀርቀቦ)` beginning to be defined in the *next* column over
  (the page-171 bleed sliver visible in this same two-page-spread scan), so
  the long-awaited target should finally get its full definition right at
  the top of page 171.
- Two adjacent, identically-spelled `ቀረፈ` entries (a verb "አነሳ÷ ላጠ÷ ገለፈፈ..."
  and an adjective "የመንገድ እንጨት ሰባሪ÷...") are printed with **no** superscript
  digits, unlike e.g. this same page's own `ቀረጥ¹`/`ቀረጥ²` pair just above
  them (which do have visible printed superscripts). Added `¹`/`²` suffixes
  per the project's own homograph convention, matching how page 169 handled
  an analogous unmarked `አቀራረበ`/`አቀራረበ` pair.
- Skipped one bare asterisked root header with no gloss of its own, per
  convention (its derived forms were transcribed normally): `*ቀረደደ` (before
  `ቀረደድ(ቀርዳዳ)`, `ተንቀረደደ`, `አንቀረደደ`), `*ቀረጨ` (before `አንቀራጨ`), and `*ቀረፈፈ`
  (before `ቀረፈፍ(ቀርፋፋ)`).
- `ቀረጨመ` is printed as a self-referential cross-reference: `"ቀረጨመ" ን ተመ.` —
  the headword and the quoted target look pixel-identical at this
  resolution (both read ቀ-ረ-ጨ-መ). This is almost certainly a printer's
  error (the target was likely meant to be a different, closely related
  spelling), but since no legible difference could be found even after
  repeated re-zooming, transcribed literally as printed rather than
  guessing a "corrected" target.
- Several words in the `ቀረፈ`/`ቅርፈት` family (`ቀረፈ¹`'s parenthetical
  "ቅርፈትን", `ቅራፊ`, `ቅርፈት`, `ቅርፈት ያዘ/አበጀ`) sit right at the edge of
  legibility for this font's ቀ/ቅ and ፈ/ፊ distinctions — a Google Vision OCR
  cross-check repeatedly suggested "ቅርፊት" (a common, well-attested word
  meaning bark/peel/crust/scab, which would fit every sense here) instead of
  "ቅርፈት", and "ጌሾ"/"ለበሰ"/"ዝግ አለ" instead of "ጌሽ"/"ለበስ"/"ገዘም አለ" elsewhere on
  the page. Repeated high-zoom re-reads of the actual glyphs kept
  contradicting each other on ቀ vs ቅ specifically, so — per the literal-
  transcription rule — went with the direct pixel reading each time rather
  than the OCR's more-plausible-word suggestions, but flagging all of these
  as genuinely low-confidence in case a future pass with a clearer scan can
  settle it. (One exception: `ቅራፊ`'s headword letter was confirmed against
  a direct side-by-side comparison with the adjacent `ቀራፊ` entry's first
  letter, which showed a real shape difference, so that one superscript-free
  ቅ/ቀ call is higher-confidence than the others.)
- The OCR cross-check caught one genuine miss on this pass: a whole entry,
  `ቀረፈፈ` ("ግ ላጠ÷ መለጠ÷ ገፈፈ÷ ገለፈፈ÷ ቀረፈ።"), sitting in the ~40px overlap
  band between two adjacent crop slices, which had been skipped over in the
  first read-through of both slices. Recovered it by cropping directly
  across the slice boundary. Worth remembering: always re-check crop
  boundaries directly rather than trusting that two overlapping crops
  necessarily got fully read.
- Page 170 does **not** cut off — its last entry, `ቀራተኛ`, is complete and
  matches the page's own running header guide-word (confirmed against a
  large, clear rendering of the header itself). The very next column over in
  the same two-page-spread scan is the start of page 171 (header `ቀሪ²`,
  Ge'ez-numeral footer `፻፸፩`), confirming a clean page break.

---

## Page 171
- Confirmed the long-awaited `ቀርበበ`/`ቀርበቦ` cross-reference chain (forward-
  referenced but never defined on pages 168 and 169) finally resolves here:
  `ቀርቀቦ` (a bare cross-ref stub, `"ቀርበበ"ን ተመ.`) leads to the full definition
  `ቀርበበ (ቀረቦ÷ ቀርቀቦ) ስ ከላም ወይም ከበሬ ግምባር ቆዳ የሚሰራ ወታቦ መሰል ቅርጫት ወይም ቀና
  መሰል ትንሽ እቃ።` — a small basket/vessel made from cattle-forehead skin. Two
  more near-identical cross-refs sit right next to it (`ቀርቃብ` → `"ቀረቀብ"`,
  and `ቀርቃሃ` → `"ቀርክሃ"`), continuing this page's pattern of near-homograph
  spelling drift already flagged on pages 168-170. The sliver of page 170 at
  the top of this same PDF spread was re-checked and contains no ቀርበበ text
  itself (it's just page 170's own already-transcribed tail) — the
  definition sits a little further into page 171's column 1, not right at
  the very top as page 170's note speculated.
- `ቀራም¹`/`ቀራም²` (ቀረዋ): both bear the parenthetical alt-spelling `(ቀረዋ)`;
  sense 2's definition `የግራዴ አይነት` (a type of የግራዴ) — `የግራዴ` itself isn't an
  independently recognized word, transcribed literally.
- `ቀርቀም`: definition `ስ ፌጠ የሚመስልና ፍሬው የማይበላ ወንዝ ዳር የሚበቅል የእፅዋት አይነት።` —
  `ፌጠ` (the plant it's compared to) is a low-confidence literal reading, not
  an independently recognized word.
- `ቀርበታ` sense 2: the separator between `ሆዳም` and `ቀፈታም` prints as a single
  raised dot (`፣`) rather than this page's otherwise-universal `÷` separator;
  transcribed as printed rather than normalized.
- `ቀርጫ`: a bare header line introducing the compound entry `ቀርጫ ቀርጫ አለ`
  below it, structurally identical to the asterisked bare-root convention
  used elsewhere (e.g. page 170's `*ቀረደደ`) but printed **without** an
  asterisk here — double-checked at high zoom, no mark is present. Omitted
  as a standalone entry per the bare-root convention; flagging the missing
  asterisk as a likely printer inconsistency rather than a misread.
- `ቀሰመ` sense 2 example (italic): `ግዜ ተግሪ እውቀትን ከመምህሩ ይቀስማል።` — the second
  word `ተግሪ` is a genuinely hard cursive-italic read that doesn't resolve to
  a word I can independently verify; transcribed literally rather than
  substituting a "nicer" guess.
- `ቀሰም`: definition ends `...የተዘጋጀ የማግ ማዳወሪያ÷ መጠቅለያ።` — `የማግ ማዳወሪያ` (describing
  a wrapping/binding tool made from thin cut reed/bamboo) is a low-confidence
  literal reading; not an independently recognized compound.
- `ቀሲስ` (noun, "ስልማነ ካህነት ያለው..."): printed with **no** superscript digit,
  sitting between `ቀሲስ¹` (verb, "became a priest") and `ቀሲስ²` (verb, "became
  dazed/dull") which do have superscripts — transcribed exactly as printed
  (unmarked) rather than imposing a superscript the source doesn't show.
  Also `ስልማነ ካህነት` reads exactly as printed (ማ, not ጣ) even though
  "ስልጣነ ክህነት" would be the more standard-looking compound; transcribed
  literally.
- `ቀሲስተኛ` sense 1: `በበሸታ÷ በተፈጦር÷...ምክንያት` — both `በሸታ` (vs. expected `በሽታ`,
  "illness") and `ተፈጦር` (vs. a possible `ተፈጥሮ`, "nature") are low-confidence
  literal readings; the ሸ/ሽ ambiguity in this font has been flagged
  repeatedly on earlier pages (152, 170).
- `ቀስቀስ` (main 7-sense verb entry): three of the illustrative example
  clauses use cursive italic type sharing a distinctive reduplicated
  hump-shaped glyph pattern that (by cross-comparison across all three
  instances) most plausibly reads as conjugated forms of the headword
  itself — transcribed as `ትዝታውን ቀሰቀሰው` (sense 3), `ጠቡን የቀሰቀሱት ልጆቹ ናቸው`
  (sense 4), and `ንብን ከቀፎው ቀሰቀሰው` (sense 6). Reasonable confidence from the
  cross-instance pattern match, but genuinely cursive source; worth a
  second look. Sense 6's parenthetical `(በታውን እንዲለቅ)` also reads with a
  plain `በ` rather than the expected `ቦ` (place) — transcribed literally.
- `ቀስቀስ አለ` vs `ቅስቅስ አለ`/`ቅስቅስ ብሎ ወጣ`: three consecutive, closely-related
  light-verb idioms built on the ቀስቀስ root. Careful side-by-side glyph
  comparison (loop size/shape) indicated the first uses `ቀ` (matching the
  main verb exactly) while the latter two use the smaller-loop `ቅ` —
  transcribed as distinct spellings on that basis, but the distinction is
  subtle in this font and worth a second look.
- `ቅስቅስ አለ` example (italic): `ቅስቅስ እንቅጥቅጥ አለ።` — the second word is a
  difficult cursive read with only moderate confidence; transcribed as the
  most literal best-effort reading.
- Page 171 does **not** cut off. It ends cleanly with a bare root header
  `*ቀሰቀስ` (skipped per convention, no gloss of its own) followed by its one
  derived form `ቅስቃሴ ስ ንቅናቄ÷ እንቅስቃሴ።`, then blank space and the "171"
  page-number footer — confirmed via close zoom that nothing follows.

---

## Page 172
- The source PDF page for this page (index 204) has an unusually wide blank
  left margin (roughly 44% of the rendered image width) before column 1
  begins — there is no visible bleed sliver of page 171 on this spread at
  all (unlike some other pages), just blank paper. The bleed sliver on this
  spread is instead on the right edge: a partial column of page 173 (headed
  `ቀስተኒ(ን)ቻ`), cut off by the scan's right edge. Only page 172's own two
  columns were transcribed here; the page 173 sliver is deferred to whoever
  transcribes that page next.
- `ተንቀሳቀስ` sense 1 and `አንቀሳቀሰ` sense 1: read as `ተነቃነቀ`/`አነቃነቀ` (real,
  well-attested words meaning "was shaken/moved" and its causative) after
  cross-checking a pixel-level ነ/ን ambiguity against a Google Vision OCR
  pass, which independently agreed. Similarly `ተንቀሳቀስ` sense 2 "2 ጉዞ ጀመረ÷
  ተነሳ።" (a journey/started a journey) was confirmed via OCR against an
  initial misreading of `ዘ` for `ዞ`. Note the "2" is printed with no
  following period, unlike the "1." and "3." in the same entry — transcribed
  literally as printed (likely a minor printer inconsistency, not a skipped
  sense).
- `ቀስተኛ` appears twice with genuinely distinct, unrelated meanings — "one
  who fights/hunts with a bow" (from ቀስት, "bow/arrow") and "a slow,
  sluggish person" (from ቀስ, "slow") — printed with **no** superscript
  digits in the source. Added `¹`/`²` per the project's established
  homograph convention, matching how pages 169/170 handled analogous
  unmarked pairs.
- Confirmed a repeating pattern (already seen on pages 167-169) of headwords
  given a full standalone definition once and then reappearing later as a
  plain "see under X" cross-reference, **on this same page**: `ቀሳጢ`
  (defined in full, "ቅ 1. ሌባ። 2. አባይ÷ ዋሾ።", then later cross-referenced to
  `"ቀሰጠ"`), `ቀሳፊ` (defined in full as "ገዳይ÷ አጥፊ...", then cross-referenced
  to `"ቀስፈ"` — note the cross-ref target spells the root with ስ where the
  actual defined headword above uses ሰ, `ቀሰፈ`; transcribed literally as
  printed, likely the same near-homograph spelling drift flagged repeatedly
  on pages 168-171), and `ቀሳፋች` (defined in full as "(ስድብ) ቀባጣሪ÷ ለፍላፊ÷
  ውሸት የሚያበዛ።", then cross-referenced to `"ቀሳፈተ"`).
- `ቀስተ` (verb, "to arch/curve something") sense 1: `ቅስት ሰራ÷ አበጀ፤ አጎበበ÷ እንደ
  ደጋን አደረገ።` — `አጎበበ` is a literal pixel/OCR-agreed reading; the
  semantically "nicer" real word `አጎበጠ` ("made bent/curved") would fit
  better, but both a direct read and an independent OCR pass consistently
  agreed on `አጎበበ`, so transcribed literally rather than substituting.
- Several entries on this page (`ቀስተ`, `ቀስት`, `ቅስት`, `ቀስተኛ` sense 1) use a
  recurring word `ደጋን` (e.g. "በደጋን ቅርፅ", "እንደ ደጋን ጎብጦ") to mean an
  arc/arch shape — not an independently familiar standard word to me, but
  it appears identically at least four times across different entries in
  both the direct scan and an independent OCR pass, so treated as a
  genuine (possibly regional/archaic) term of this dictionary's own
  vocabulary rather than a misread, and transcribed literally throughout.
- `ቅስት` sense 2: "...የግድግዳ ጣሚ እንጨት የመሳሰለ ነገር..." — `ጣሚ` is a low-confidence
  literal reading that doesn't resolve to an independently recognized word
  in this position; worth a manual check.
- `ተቀሰፈ`: "ግ ያለጊዜው ሞተ÷ ተቀጠፈ።" — the word `ሞተ` (verb, "died") vs `ሞት` (noun,
  "death") is genuinely hard to distinguish at this resolution (a subtle
  1st-vs-6th-order mark on the final consonant); went with the
  grammatically-coherent verb reading `ሞተ` paired with the following verb
  `ተቀጠፈ`, but flagging as not fully certain.
- `መቅሰፍት` (calamity/plague) is a genuine same-page column-wrap, not a
  cross-page cutoff: its definition starts at the very bottom of column 1
  ("...እልቂትን የሚያስከትል እንደተላላፊ በሽታ÷ ጎርፍ÷ የመሬት") and concludes at the very
  top of column 2 ("መንቀጥቀጥ÷ ቸነፈር የመሳሰለ ከባድ አደጋ መአት።") — both columns
  belong to this same printed page 172, so merged into one entry rather
  than left as two fragments.
- Page 172 **does cut off**, mid-definition, at the very bottom of column 2:
  the last entry, `ቀስ አደረገ`, ends after "...በሽተኛውን ከአልጋው ላይ ቀስ አድርጎ" with
  no closing punctuation, immediately followed by the Ge'ez-numeral page
  footer (፻፸፪ = 172). The continuation is visible in this same PDF spread's
  page-173 bleed sliver (roughly "...አለተኛው። 3. በትንሹ÷ ሃይል ወይም አደረገ። ኳሱን ቀስ
  እያለ...") but per convention was left for whoever transcribes page 173 to
  recover and merge in, rather than reconstructed here from the partial
  sliver view.

---

*This file will be extended as more pages are transcribed. Once you've
reviewed/corrected an item, feel free to delete its bullet — this is a working
checklist, not a permanent record.*
