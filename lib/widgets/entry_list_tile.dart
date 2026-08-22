import 'package:flutter/material.dart';

import '../models/dictionary_entry.dart';
import '../screens/entry_detail_screen.dart';
import '../services/dictionary_repository.dart';
import '../theme/app_colors.dart';

/// A dictionary entry row shared by the search list and the bookmarks list.
class EntryListTile extends StatelessWidget {
  final DictionaryEntry entry;
  final DictionaryRepository repository;

  /// Called after returning from the detail screen, since favoriting there
  /// can change what the caller's list should show.
  final VoidCallback? onReturn;

  const EntryListTile({
    super.key,
    required this.entry,
    required this.repository,
    this.onReturn,
  });

  @override
  Widget build(BuildContext context) {
    return ListTile(
      contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 6),
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
            builder: (_) =>
                EntryDetailScreen(entry: entry, repository: repository),
          ),
        );
        onReturn?.call();
      },
    );
  }
}
