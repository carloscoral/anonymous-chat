import THEMES from '../../providers/theme/themeList'

export interface User {
  id: string;
  username: string;
}

export interface SystemState {
  loggedIn: boolean;
  session: string|null;
  user: User|null;
}

export interface SystemUI {
  themeName: THEMES;
}

export const UPDATE_SESSION = 'system/update_session';
export const UPDATE_THEME = 'system/update_theme';

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION;
  payload: SystemState
}

interface UpdateThemeAction {
  type: typeof UPDATE_THEME;
  payload: SystemUI
}

export type SystemActionTypes = UpdateSessionAction|UpdateThemeAction;