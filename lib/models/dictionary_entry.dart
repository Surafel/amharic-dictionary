class DictionaryEntry {
  final String word;
  final String meaning;
  final int page;

  /// Path to a bundled pronunciation clip for [word], if one has been
  /// generated for this entry.
  final String? audio;

  const DictionaryEntry({
    required this.word,
    required this.meaning,
    required this.page,
    this.audio,
  });

  factory DictionaryEntry.fromJson(Map<String, dynamic> json) {
    return DictionaryEntry(
      word: json['word'] as String,
      meaning: json['meaning'] as String,
      page: json['page'] as int,
      audio: json['audio'] as String?,
    );
  }

  Map<String, dynamic> toJson() => {
        'word': word,
        'meaning': meaning,
        'page': page,
        if (audio != null) 'audio': audio,
      };
}
