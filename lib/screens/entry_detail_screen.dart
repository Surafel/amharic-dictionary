import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../models/dictionary_entry.dart';
import '../services/dictionary_repository.dart';
import '../theme/app_colors.dart';

/// A dictionary meaning numbered like "1. ... 2. ...".
class _Sense {
  final String number;
  final String text;

  const _Sense(this.number, this.text);
}

/// Splits a meaning string into numbered senses when the source text
/// uses that convention (e.g. "1. free from fraud. 2. genuine.").
/// Returns an empty list when the meaning isn't structured that way,
/// so callers can fall back to rendering it as one paragraph.
List<_Sense> _parseSenses(String meaning) {
  final matches = RegExp(r'(\d+)\.\s').allMatches(meaning).toList();
  if (matches.isEmpty || matches.first.start > 2) return [];
  return [
    for (var i = 0; i < matches.length; i++)
      _Sense(
        matches[i].group(1)!,
        meaning
            .substring(
              matches[i].end,
              i + 1 < matches.length ? matches[i + 1].start : meaning.length,
            )
            .trim(),
      ),
  ];
}

class EntryDetailScreen extends StatefulWidget {
  final DictionaryEntry entry;
  final DictionaryRepository repository;

  const EntryDetailScreen({
    super.key,
    required this.entry,
    required this.repository,
  });

  @override
  State<EntryDetailScreen> createState() => _EntryDetailScreenState();
}

class _EntryDetailScreenState extends State<EntryDetailScreen> {
  void _toggleFavorite() {
    setState(() => widget.repository.toggleFavorite(widget.entry.word));
  }

  void _copyEntry() {
    Clipboard.setData(
      ClipboardData(text: '${widget.entry.word}፦ ${widget.entry.meaning}'),
    );
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('ወደ ቅንጥብ ሰሌዳ ተቀድቷል')),
    );
  }

  @override
  Widget build(BuildContext context) {
    final entry = widget.entry;
    final isFavorite = widget.repository.isFavorite(entry.word);
    final senses = _parseSenses(entry.meaning);

    return Scaffold(
      backgroundColor: Colors.white,
      body: CustomScrollView(
        slivers: [
          SliverToBoxAdapter(
            child: Container(
              width: double.infinity,
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [AppColors.navyDark, AppColors.tealMid],
                ),
              ),
              padding: EdgeInsets.fromLTRB(
                8,
                MediaQuery.of(context).padding.top + 4,
                8,
                28,
              ),
              child: Column(
                children: [
                  Row(
                    children: [
                      IconButton(
                        icon: const Icon(
                          Icons.arrow_back,
                          color: Colors.white,
                        ),
                        onPressed: () => Navigator.of(context).pop(),
                      ),
                    ],
                  ),
                  const SizedBox(height: 8),
                  Text(
                    entry.word,
                    textAlign: TextAlign.center,
                    style: const TextStyle(
                      fontFamily: 'NotoSerifEthiopic',
                      fontSize: 44,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                  const SizedBox(height: 20),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      _HeroIconButton(
                        icon: isFavorite
                            ? Icons.bookmark
                            : Icons.bookmark_border,
                        onTap: _toggleFavorite,
                      ),
                      const SizedBox(width: 20),
                      _HeroIconButton(
                        icon: Icons.copy_rounded,
                        onTap: _copyEntry,
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
          SliverPadding(
            padding: const EdgeInsets.fromLTRB(20, 24, 20, 32),
            sliver: SliverList.list(
              children: [
                const Text(
                  'ትርጉም',
                  style: TextStyle(
                    color: AppColors.navyDark,
                    fontWeight: FontWeight.bold,
                    fontSize: 22,
                  ),
                ),
                const SizedBox(height: 16),
                if (senses.isEmpty)
                  Text(
                    entry.meaning,
                    style: const TextStyle(
                      fontSize: 18,
                      height: 1.6,
                      color: AppColors.bodyText,
                    ),
                  )
                else
                  for (final sense in senses)
                    Padding(
                      padding: const EdgeInsets.only(bottom: 14),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          SizedBox(
                            width: 28,
                            child: Text(
                              sense.number,
                              style: const TextStyle(
                                fontSize: 18,
                                fontWeight: FontWeight.bold,
                                color: AppColors.tealAccent,
                              ),
                            ),
                          ),
                          Expanded(
                            child: Text(
                              sense.text,
                              style: const TextStyle(
                                fontSize: 18,
                                height: 1.6,
                                color: AppColors.bodyText,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                const SizedBox(height: 12),
                const Divider(color: Color(0xFFE3E7E9)),
                const SizedBox(height: 8),
                Text(
                  'ገጽ ${entry.page}',
                  style: TextStyle(
                    fontSize: 14,
                    fontStyle: FontStyle.italic,
                    color: Colors.grey.shade600,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _HeroIconButton extends StatelessWidget {
  final IconData icon;
  final VoidCallback onTap;

  const _HeroIconButton({required this.icon, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      customBorder: const CircleBorder(),
      child: Container(
        width: 44,
        height: 44,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          border: Border.all(color: Colors.white70, width: 1.4),
        ),
        child: Icon(icon, color: Colors.white, size: 20),
      ),
    );
  }
}
