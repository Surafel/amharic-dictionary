import 'package:flutter/material.dart';

import '../models/dictionary_entry.dart';
import '../services/dictionary_repository.dart';
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
      appBar: AppBar(title: const Text('የአማርኛ መዝገበ ቃላት')),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(12),
            child: TextField(
              controller: _controller,
              onChanged: _onQueryChanged,
              decoration: InputDecoration(
                hintText: 'ቃል ይፈልጉ...',
                prefixIcon: const Icon(Icons.search),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
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
                separatorBuilder: (_, _) => const Divider(height: 1),
                itemBuilder: (context, index) {
                  final entry = _results[index];
                  return ListTile(
                    title: Text(
                      entry.word,
                      style: const TextStyle(fontWeight: FontWeight.bold),
                    ),
                    subtitle: Text(
                      entry.meaning,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                    ),
                    onTap: () {
                      Navigator.of(context).push(
                        MaterialPageRoute(
                          builder: (_) => EntryDetailScreen(entry: entry),
                        ),
                      );
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
