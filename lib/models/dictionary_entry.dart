class DictionaryEntry {
  final String word;
  final String meaning;
  final int page;

  const DictionaryEntry({
    required this.word,
    required this.meaning,
    required this.page,
  });

  factory DictionaryEntry.fromJson(Map<String, dynamic> json) {
    return DictionaryEntry(
      word: json['word'] as String,
      meaning: json['meaning'] as String,
      page: json['page'] as int,
    );
  }

  Map<String, dynamic> toJson() => {
        'word': word,
        'meaning': meaning,
        'page': page,
      };
}
