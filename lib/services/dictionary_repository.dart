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
  'assets/dictionary/page_049.json',
  'assets/dictionary/page_050.json',
  'assets/dictionary/page_051.json',
  'assets/dictionary/page_052.json',
  'assets/dictionary/page_053.json',
  'assets/dictionary/page_054.json',
  'assets/dictionary/page_055.json',
  'assets/dictionary/page_056.json',
  'assets/dictionary/page_057.json',
  'assets/dictionary/page_058.json',
  'assets/dictionary/page_059.json',
  'assets/dictionary/page_060.json',
  'assets/dictionary/page_061.json',
  'assets/dictionary/page_062.json',
  'assets/dictionary/page_063.json',
  'assets/dictionary/page_064.json',
  'assets/dictionary/page_065.json',
  'assets/dictionary/page_066.json',
  'assets/dictionary/page_067.json',
  'assets/dictionary/page_068.json',
  'assets/dictionary/page_069.json',
  'assets/dictionary/page_070.json',
  'assets/dictionary/page_071.json',
  'assets/dictionary/page_072.json',
  'assets/dictionary/page_073.json',
  'assets/dictionary/page_074.json',
  'assets/dictionary/page_075.json',
  'assets/dictionary/page_076.json',
  'assets/dictionary/page_077.json',
  'assets/dictionary/page_078.json',
  'assets/dictionary/page_079.json',
  'assets/dictionary/page_080.json',
  'assets/dictionary/page_081.json',
  'assets/dictionary/page_082.json',
  'assets/dictionary/page_083.json',
  'assets/dictionary/page_084.json',
  'assets/dictionary/page_085.json',
  'assets/dictionary/page_086.json',
  'assets/dictionary/page_087.json',
  'assets/dictionary/page_088.json',
  'assets/dictionary/page_089.json',
  'assets/dictionary/page_090.json',
  'assets/dictionary/page_091.json',
  'assets/dictionary/page_092.json',
  'assets/dictionary/page_093.json',
  'assets/dictionary/page_094.json',
  'assets/dictionary/page_095.json',
  'assets/dictionary/page_096.json',
  'assets/dictionary/page_097.json',
  'assets/dictionary/page_098.json',
  'assets/dictionary/page_099.json',
  'assets/dictionary/page_100.json',
  'assets/dictionary/page_101.json',
  'assets/dictionary/page_102.json',
  'assets/dictionary/page_103.json',
  'assets/dictionary/page_104.json',
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
