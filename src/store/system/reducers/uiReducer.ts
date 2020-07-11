import { SystemActionTypes, SystemUI, UPDATE_THEME } from '../types'
import THEMES from '../../../providers/theme/themeList'

const initialState: SystemUI = {
  themeName: THEMES.LIGHT
};

export const uiReducer = ( state: SystemUI = initialState, action: SystemActionTypes ) => {
  switch ( action.type ) {
    case UPDATE_THEME:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
