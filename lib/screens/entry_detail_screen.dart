import 'package:flutter/material.dart';

import '../models/dictionary_entry.dart';

class EntryDetailScreen extends StatelessWidget {
  final DictionaryEntry entry;

  const EntryDetailScreen({super.key, required this.entry});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(entry.word)),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                entry.word,
                style: const TextStyle(
                  fontSize: 32,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 16),
              Text(
                entry.meaning,
                style: const TextStyle(fontSize: 18, height: 1.5),
              ),
              const SizedBox(height: 24),
              Text(
                'ገጽ ${entry.page}',
                style: TextStyle(fontSize: 14, color: Colors.grey.shade600),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
