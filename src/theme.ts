import { MD3LightTheme, MD3Theme } from 'react-native-paper';

export const AppTheme: MD3Theme & {
  colors: MD3Theme['colors'] & {
    muted: string;
  };
} = {
  ...MD3LightTheme,
  roundness: 8,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#007AFF',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    onSurface: '#1C1C1E',
    muted: '#A1A1A6',
  },
};
