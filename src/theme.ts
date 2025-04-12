import { MD3LightTheme, MD3DarkTheme, MD3Theme } from 'react-native-paper';
import { useColorScheme } from 'react-native';

export const createAppTheme = (isDark: boolean): MD3Theme & {
  colors: MD3Theme['colors'] & { muted: string };
} => {
  const base = isDark ? MD3DarkTheme : MD3LightTheme;

  return {
    ...base,
    roundness: 8,
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
