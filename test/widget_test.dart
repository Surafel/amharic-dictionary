import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:amharic_dictionary/main.dart';

void main() {
  testWidgets('Dictionary home screen shows search field', (
    WidgetTester tester,
  ) async {
    await tester.pumpWidget(const AmharicDictionaryApp());
    await tester.pump();

    expect(find.byType(TextField), findsOneWidget);
    expect(find.text('የአማርኛ መዝገበ ቃላት'), findsOneWidget);
  });
}
