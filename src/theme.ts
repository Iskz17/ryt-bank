import { MD3LightTheme, MD3DarkTheme, MD3Theme } from 'react-native-paper';
import { useColorScheme } from 'react-native';

export const createAppTheme = (isDark: boolean): MD3Theme & {
  colors: MD3Theme['colors'] & { muted: string };
} => {
  const base = isDark ? MD3DarkTheme : MD3LightTheme;
  const applyFont = (style) => ({
    ...style,
    fontFamily: 'Gilroy',
  });

  return {
    ...base,
    roundness: 8,
    fonts: {
      ...base.fonts,
      displayLarge: applyFont(base.fonts.displayLarge),
      displayMedium: applyFont(base.fonts.displayMedium),
      displaySmall: applyFont(base.fonts.displaySmall),
      headlineLarge: applyFont(base.fonts.headlineLarge),
      headlineMedium: applyFont(base.fonts.headlineMedium),
      headlineSmall: applyFont(base.fonts.headlineSmall),
      titleLarge: applyFont(base.fonts.titleLarge),
      titleMedium: applyFont(base.fonts.titleMedium),
      titleSmall: applyFont(base.fonts.titleSmall),
      bodyLarge: applyFont(base.fonts.bodyLarge),
      bodyMedium: applyFont(base.fonts.bodyMedium),
      bodySmall: applyFont(base.fonts.bodySmall),
      labelLarge: applyFont(base.fonts.labelLarge),
      labelMedium: applyFont(base.fonts.labelMedium),
      labelSmall: applyFont(base.fonts.labelSmall),
    },
    colors: {
      ...base.colors,
      primary: '#007AFF',
      background: isDark ? '#000000' : '#FFFFFF',
      surface: isDark ? '#1C1C1E' : '#FFFFFF',
      onSurface: isDark ? '#F2F2F7' : '#1C1C1E',
      muted: isDark ? '#8E8E93' : '#A1A1A6',
    },
  };
};
