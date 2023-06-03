import { PALETTE_COLORS } from './colors';

/**
 * MUI theme options for "Dark Mode"
 */
export const DARK_THEME = {
  palette: {
    mode: 'dark',
    // background: {
    //   paper: '#424242', // Gray 800 - Background of "Paper" based component
    //   default: '#121212',
    // },
    ...PALETTE_COLORS,
  },
};

export default DARK_THEME;
