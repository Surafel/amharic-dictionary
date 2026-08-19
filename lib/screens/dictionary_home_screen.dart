import 'package:flutter/material.dart';

import '../models/dictionary_entry.dart';
import '../services/dictionary_repository.dart';
import '../theme/app_colors.dart';
import 'entry_detail_screen.dart';

class DictionaryHomeScreen extends StatefulWidget {
  const DictionaryHomeScreen({super.key});

  @override
  State<DictionaryHomeScreen> createState() => _DictionaryHomeScreenState();
}

class _DictionaryHomeScreenState extends State<DictionaryHomeScreen> {
  final _repository = DictionaryRepository();
  final _controller = TextEditingController();
  List<DictionaryEntry> _results = const [];
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _repository.load().then((_) {
      setState(() {
        _results = _repository.entries;
        _loading = false;
      });
    });
  }

  void _onQueryChanged(String query) {
    setState(() {
      _results = _repository.search(query.trim());
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.parchment,
      drawer: _AppDrawer(entryCount: _repository.entries.length),
      body: Column(
        children: [
          _SearchAppBar(controller: _controller, onChanged: _onQueryChanged),
          Container(
            width: double.infinity,
            color: AppColors.goldMid,
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
            child: Text(
              _loading
                  ? 'በመጫን ላይ...'
                  : '${_repository.entries.length} ቃላት • ገጽ 33-114',
              style: const TextStyle(
                color: Colors.white,
                fontWeight: FontWeight.bold,
                letterSpacing: 0.3,
              ),
            ),
          ),
          if (_loading)
            const Expanded(child: Center(child: CircularProgressIndicator()))
          else if (_results.isEmpty)
            const Expanded(child: Center(child: Text('ምንም ውጤት አልተገኘም')))
          else
            Expanded(
              child: ListView.separated(
                itemCount: _results.length,
                separatorBuilder: (_, _) =>
                    const Divider(height: 1, color: Color(0xFFE3E7E9)),
                itemBuilder: (context, index) {
                  final entry = _results[index];
                  return ListTile(
                    contentPadding: const EdgeInsets.symmetric(
                      horizontal: 16,
                      vertical: 6,
                    ),
                    title: Text(
                      entry.word,
                      style: const TextStyle(
                        fontFamily: 'NotoSerifEthiopic',
                        fontWeight: FontWeight.bold,
                        fontSize: 20,
                        color: AppColors.bookBrown,
                      ),
                    ),
                    subtitle: Text(
                      entry.meaning,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(color: AppColors.bodyText),
                    ),
                    onTap: () async {
                      await Navigator.of(context).push(
                        MaterialPageRoute(
                          builder: (_) => EntryDetailScreen(
                            entry: entry,
                            repository: _repository,
                          ),
                        ),
                      );
                      setState(() {});
                    },
                  );
                },
              ),
            ),
        ],
      ),
    );
  }
}

class _SearchAppBar extends StatelessWidget {
  final TextEditingController controller;
  final ValueChanged<String> onChanged;

  const _SearchAppBar({required this.controller, required this.onChanged});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: AppColors.bookBrown,
      padding: EdgeInsets.fromLTRB(
        12,
        MediaQuery.of(context).padding.top + 10,
        12,
        14,
      ),
      child: Row(
        children: [
          Builder(
            builder: (context) => IconButton(
              icon: const Icon(Icons.menu, color: Colors.white),
              onPressed: () => Scaffold.of(context).openDrawer(),
            ),
          ),
          Expanded(
            child: Container(
              height: 44,
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(22),
              ),
              child: TextField(
                controller: controller,
                onChanged: onChanged,
                textAlignVertical: TextAlignVertical.center,
                decoration: const InputDecoration(
                  hintText: 'ቃል ይፈልጉ...',
                  prefixIcon: Icon(Icons.search, color: AppColors.goldMid),
                  border: InputBorder.none,
                  contentPadding: EdgeInsets.symmetric(vertical: 10),
                ),
              ),
            ),
          ),
          const SizedBox(width: 4),
        ],
      ),
    );
  }
}

class _AppDrawer extends StatelessWidget {
  final int entryCount;

  const _AppDrawer({required this.entryCount});

  @override
  Widget build(BuildContext context) {
    return Drawer(
      backgroundColor: AppColors.parchment,
      child: ListView(
        padding: EdgeInsets.zero,
        children: [
          Container(
            color: AppColors.bookBrown,
            padding: const EdgeInsets.fromLTRB(20, 56, 20, 24),
            width: double.infinity,
            child: const Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'ሀ',
                  style: TextStyle(
                    fontFamily: 'NotoSerifEthiopic',
                    fontSize: 40,
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                  ),
                ),
                SizedBox(height: 8),
                Text(
                  'የአማርኛ መዝገበ ቃላት',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
          ),
          ListTile(
            leading: const Icon(Icons.menu_book, color: AppColors.goldMid),
            title: Text('$entryCount ቃላት ተመዝግበዋል'),
          ),
          const ListTile(
            leading: Icon(Icons.info_outline, color: AppColors.goldMid),
            title: Text('ምንጭ: የአማርኛ መዝገበ ቃላት መጽሐፍ (ገጽ 33-114)'),
          ),
        ],
      ),
    );
  }
}
