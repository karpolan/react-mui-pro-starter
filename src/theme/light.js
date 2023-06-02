import { PALETTE_COLORS } from './colors';

/**
 * MUI theme options for "Light Mode"
 */
export const LIGHT_THEME = {
  palette: {
    mode: 'light',
    // background: {
    //   paper: '#f5f5f5', // Gray 100 - Background of "Paper" based component
    //   default: '#FFFFFF',
    // },
    ...PALETTE_COLORS,
  },
};

export default LIGHT_THEME;
