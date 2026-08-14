import 'package:flutter/material.dart';

import 'screens/dictionary_home_screen.dart';

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
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.teal),
        fontFamily: 'NotoSansEthiopic',
        useMaterial3: true,
      ),
      home: const DictionaryHomeScreen(),
    );
  }
}
