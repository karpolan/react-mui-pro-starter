import React, {useMemo} from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useAppStore} from './store/AppStore';

/**
 * Material UI theme
 * See for details: https://material-ui.com/customization/default-theme/?expand-path=$.palette
 * Martial Color tool: https://material.io/resources/color
 */
const themeLight = createMuiTheme({
  palette: {
    type: 'light', // 'dark' for Dark mode palettes
    primary: {
      main: '#81c784', // Green 300
      contrastText: '#000000',
    },
    secondary: {
      main: '#ffb74d', // Orange 300
      contrastText: '#000',
    },
    info: {
      main: '#0277bd', // Light Blue 800
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#2e7d32', // Green 800
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#f9a825', // Yellow 800
      // contrastText: '#000000',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#c62828', // Red 800
      contrastText: '#FFFFFF',
    },
    background: {
      paper: '#f5f5f5', // Gray 100 - Background of "Paper" based component
      default: '#FFFFFF',
    },
  },
});

/**
 * Material UI theme for "Dark Mode"
 */
const themeDark = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

/**
 * Material UI Provider with Light and Dark themes
 */
const AppThemeProvider = ({children}) => {
  const [state] = useAppStore();
  const memoizedTheme = useMemo(() => (state.darkMode ? themeDark : themeLight), [state.darkMode]);

  return (
    <ThemeProvider theme={memoizedTheme}>
      <CssBaseline /* Material UI Styles */ />
      {children}
    </ThemeProvider>
  );
};

export {AppThemeProvider as default, AppThemeProvider, themeLight, themeDark};
