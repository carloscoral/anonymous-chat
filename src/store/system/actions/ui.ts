import { SystemActionTypes, SystemUI, UPDATE_THEME } from '../types'

export const updateTheme = ( theme: SystemUI ): SystemActionTypes => {
  return {
    type: UPDATE_THEME,
    payload: theme
  };
};