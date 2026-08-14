import 'dart:convert';

import 'package:flutter/services.dart' show rootBundle;

import '../models/dictionary_entry.dart';

/// Bundled dictionary data files, one per transcribed source page.
/// Add the next page's asset path here once it has been transcribed.
const List<String> dictionaryAssetPaths = [
  'assets/dictionary/page_033.json',
  'assets/dictionary/page_034.json',
  'assets/dictionary/page_035.json',
  'assets/dictionary/page_036.json',
  'assets/dictionary/page_037.json',
  'assets/dictionary/page_038.json',
  'assets/dictionary/page_039.json',
  'assets/dictionary/page_040.json',
  'assets/dictionary/page_041.json',
  'assets/dictionary/page_042.json',
  'assets/dictionary/page_043.json',
  'assets/dictionary/page_044.json',
  'assets/dictionary/page_045.json',
  'assets/dictionary/page_046.json',
  'assets/dictionary/page_047.json',
  'assets/dictionary/page_048.json',
];

class DictionaryRepository {
  List<DictionaryEntry> _entries = const [];
  final Set<String> _favoriteWords = {};

  List<DictionaryEntry> get entries => _entries;

  bool isFavorite(String word) => _favoriteWords.contains(word);

  void toggleFavorite(String word) {
    if (!_favoriteWords.add(word)) {
      _favoriteWords.remove(word);
    }
  }

  Future<void> load() async {
    final loaded = <DictionaryEntry>[];
    for (final path in dictionaryAssetPaths) {
      final raw = await rootBundle.loadString(path);
      final data = jsonDecode(raw) as List<dynamic>;
      loaded.addAll(
        data.map((e) => DictionaryEntry.fromJson(e as Map<String, dynamic>)),
      );
    }
    loaded.sort((a, b) => a.word.compareTo(b.word));
    _entries = loaded;
  }

  List<DictionaryEntry> search(String query) {
    if (query.isEmpty) return _entries;
    return _entries.where((e) => e.word.contains(query)).toList();
  }
}
