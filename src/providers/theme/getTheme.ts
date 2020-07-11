import { DARK, LIGHT } from './themes';
import THEMES from './themeList'

export const getTheme = ( themeName: THEMES ) => {
  switch ( themeName ) {
    case THEMES.DARK: return DARK;
    default: return LIGHT;
  }
};
