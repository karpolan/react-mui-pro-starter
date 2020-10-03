import {createMuiTheme} from '@material-ui/core/styles';

/**
 * Material UI theme
 * See for details: https://material-ui.com/customization/default-theme/?expand-path=$.palette
 * Martial Color tool: https://material.io/resources/color
 */
const theme = createMuiTheme({
  palette: {
    type: 'light', // 'dark' for Dark mode palettes
    primary: {
      // light: '#b2fab4',
      main: '#81c784',
      // dark: '#519657',
      contrastText: '#000000',
    },
    secondary: {
      // light: '#ffe97d',
      main: '#ffb74d',
      // dark: '#c88719',
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
      contrastText: '#000000',
    },
    error: {
      main: '#c62828', // Red 800
      contrastText: '#FFFFFF',
    },
    background: {
      paper: '##f5f5f5', // Gray 100 - Background of "Paper" based component
      default: '#FFFFFF',
    },
  },
});

export default theme;
