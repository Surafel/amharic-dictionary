import 'dart:async';
import 'dart:convert';

import 'package:flutter/services.dart' show rootBundle;
import 'package:shared_preferences/shared_preferences.dart';

import '../models/dictionary_entry.dart';

const _cacheEntriesKey = 'dictionary_cache_entries_v1';
const _cacheVersionKey = 'dictionary_cache_version_v1';
const _favoritesKey = 'dictionary_favorites_v1';

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
  'assets/dictionary/page_105.json',
  'assets/dictionary/page_106.json',
  'assets/dictionary/page_107.json',
  'assets/dictionary/page_108.json',
  'assets/dictionary/page_109.json',
  'assets/dictionary/page_110.json',
  'assets/dictionary/page_111.json',
  'assets/dictionary/page_112.json',
  'assets/dictionary/page_113.json',
  'assets/dictionary/page_114.json',
  'assets/dictionary/page_116.json',
  'assets/dictionary/page_117.json',
  'assets/dictionary/page_118.json',
  'assets/dictionary/page_119.json',
  'assets/dictionary/page_120.json',
  'assets/dictionary/page_121.json',
  'assets/dictionary/page_122.json',
  'assets/dictionary/page_125.json',
  'assets/dictionary/page_126.json',
  'assets/dictionary/page_127.json',
  'assets/dictionary/page_128.json',
  'assets/dictionary/page_130.json',
  'assets/dictionary/page_131.json',
  'assets/dictionary/page_132.json',
  'assets/dictionary/page_133.json',
  'assets/dictionary/page_134.json',
  'assets/dictionary/page_135.json',
  'assets/dictionary/page_136.json',
  'assets/dictionary/page_137.json',
  'assets/dictionary/page_138.json',
  'assets/dictionary/page_139.json',
  'assets/dictionary/page_140.json',
  'assets/dictionary/page_141.json',
];

class DictionaryRepository {
  List<DictionaryEntry> _entries = const [];
  final Set<String> _favoriteWords = {};
  SharedPreferences? _prefs;

  List<DictionaryEntry> get entries => _entries;

  List<DictionaryEntry> get favoriteEntries =>
      _entries.where((e) => _favoriteWords.contains(e.word)).toList();

  bool isFavorite(String word) => _favoriteWords.contains(word);

  /// Persists immediately so bookmarks survive an app restart.
  void toggleFavorite(String word) {
    if (!_favoriteWords.add(word)) {
      _favoriteWords.remove(word);
    }
    final prefs = _prefs;
    if (prefs != null) {
      unawaited(prefs.setStringList(_favoritesKey, _favoriteWords.toList()));
    }
  }

  /// Identifies which set of pages the cached entries were built from, so a
  /// stale cache (e.g. from before new pages were added) is never mistaken
  /// for the current dictionary.
  static String get _currentCacheVersion =>
      '${dictionaryAssetPaths.length}:${dictionaryAssetPaths.isEmpty ? '' : dictionaryAssetPaths.last}';

  Future<void> load() async {
    final prefs = await SharedPreferences.getInstance();
    _prefs = prefs;
    _favoriteWords
      ..clear()
      ..addAll(prefs.getStringList(_favoritesKey) ?? const []);

    final cached = await _readCache(prefs);
    if (cached != null) {
      _entries = cached;
      return;
    }

    final pages = await Future.wait(
      dictionaryAssetPaths.map((path) async {
        final raw = await _loadStringWithRetry(path);
        final data = jsonDecode(raw) as List<dynamic>;
        return data.map(
          (e) => DictionaryEntry.fromJson(e as Map<String, dynamic>),
        );
      }),
    );
    final loaded = pages.expand((entries) => entries).toList();
    loaded.sort((a, b) => a.word.compareTo(b.word));
    _entries = loaded;

    unawaited(_writeCache(prefs, loaded));
  }

  /// Skips the network entirely on repeat opens: the parsed, sorted entry
  /// list from the last successful load is cached, so only the first ever
  /// load (or a load after new pages have been added) needs to fetch and
  /// parse all the page JSON assets.
  Future<List<DictionaryEntry>?> _readCache(SharedPreferences prefs) async {
    if (prefs.getString(_cacheVersionKey) != _currentCacheVersion) {
      return null;
    }
    final raw = prefs.getString(_cacheEntriesKey);
    if (raw == null) return null;
    try {
      final data = jsonDecode(raw) as List<dynamic>;
      return data
          .map((e) => DictionaryEntry.fromJson(e as Map<String, dynamic>))
          .toList();
    } catch (_) {
      // Corrupted cache entry; fall back to a normal load.
      return null;
    }
  }

  Future<void> _writeCache(
    SharedPreferences prefs,
    List<DictionaryEntry> entries,
  ) async {
    await prefs.setString(
      _cacheEntriesKey,
      jsonEncode(entries.map((e) => e.toJson()).toList()),
    );
    await prefs.setString(_cacheVersionKey, _currentCacheVersion);
  }

  /// A single flaky fetch (common on mobile/PWA connections, especially with
  /// many pages loading concurrently) shouldn't fail the entire dictionary
  /// load, so retry each page a couple of times before giving up.
  Future<String> _loadStringWithRetry(
    String path, {
    int attempts = 3,
  }) async {
    for (var attempt = 1; ; attempt++) {
      try {
        return await rootBundle.loadString(path);
      } catch (_) {
        if (attempt >= attempts) rethrow;
        await Future.delayed(Duration(milliseconds: 200 * attempt));
      }
    }
  }

  List<DictionaryEntry> search(String query) {
    if (query.isEmpty) return _entries;
    return _entries.where((e) => e.word.contains(query)).toList();
  }
}
