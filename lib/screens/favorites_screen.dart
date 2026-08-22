import 'package:flutter/material.dart';

import '../services/dictionary_repository.dart';
import '../theme/app_colors.dart';
import '../widgets/entry_list_tile.dart';

class FavoritesScreen extends StatefulWidget {
  final DictionaryRepository repository;

  const FavoritesScreen({super.key, required this.repository});

  @override
  State<FavoritesScreen> createState() => _FavoritesScreenState();
}

class _FavoritesScreenState extends State<FavoritesScreen> {
  @override
  Widget build(BuildContext context) {
    final favorites = widget.repository.favoriteEntries;

    return Scaffold(
      backgroundColor: AppColors.parchment,
      appBar: AppBar(
        backgroundColor: AppColors.bookBrown,
        foregroundColor: Colors.white,
        title: const Text('ዕልባት የተደረገባቸው ቃላት'),
      ),
      body: favorites.isEmpty
          ? const Center(child: Text('ምንም ዕልባት የተደረገበት ቃል የለም'))
          : ListView.separated(
              itemCount: favorites.length,
              separatorBuilder: (_, _) =>
                  const Divider(height: 1, color: Color(0xFFE3E7E9)),
              itemBuilder: (context, index) {
                final entry = favorites[index];
                return EntryListTile(
                  entry: entry,
                  repository: widget.repository,
                  onReturn: () => setState(() {}),
                );
              },
            ),
    );
  }
}
