export const colors = {
  primary: {
    light: '#f4511e',
    dark: '#d84315',
  },
  secondary: {
    light: '#2196f3',
    dark: '#1976d2',
  },
  success: {
    light: '#4caf50',
    dark: '#388e3c',
  },
  warning: {
    light: '#ff9800',
    dark: '#f57c00',
  },
  error: {
    light: '#f44336',
    dark: '#d32f2f',
  },
  info: {
    light: '#2196f3',
    dark: '#1976d2',
  },
  background: {
    light: '#ffffff',
    dark: '#121212',
  },
  surface: {
    light: '#f5f5f5',
    dark: '#1e1e1e',
  },
  text: {
    light: {
      primary: '#212121',
      secondary: '#757575',
      disabled: '#9e9e9e',
    },
    dark: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
      disabled: '#757575',
    },
  },
};

export const getThemeColors = (isDark: boolean) => ({
  primary: isDark ? colors.primary.dark : colors.primary.light,
  secondary: isDark ? colors.secondary.dark : colors.secondary.light,
  success: isDark ? colors.success.dark : colors.success.light,
  warning: isDark ? colors.warning.dark : colors.warning.light,
  error: isDark ? colors.error.dark : colors.error.light,
  info: isDark ? colors.info.dark : colors.info.light,
  background: isDark ? colors.background.dark : colors.background.light,
  surface: isDark ? colors.surface.dark : colors.surface.light,
  text: isDark ? colors.text.dark : colors.text.light,
}); 