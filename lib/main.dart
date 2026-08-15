import 'package:flutter/material.dart';

import 'screens/dictionary_home_screen.dart';
import 'theme/app_colors.dart';

void main() {
  runApp(const AmharicDictionaryApp());
}

class AmharicDictionaryApp extends StatelessWidget {
  const AmharicDictionaryApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'የአማርኛ መዝገበ ቃላት',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: AppColors.goldMid,
          primary: AppColors.bookBrown,
          secondary: AppColors.goldAccent,
        ),
        scaffoldBackgroundColor: AppColors.parchment,
        fontFamily: 'NotoSansEthiopic',
        useMaterial3: true,
      ),
      home: const DictionaryHomeScreen(),
    );
  }
}
