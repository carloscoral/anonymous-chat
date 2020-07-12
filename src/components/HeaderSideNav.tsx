import React from 'react';
import { Header } from '../styled-components/Header'
import { updateTheme } from '../store/system/actions/ui'
import THEMES from '../providers/theme/themeList'
import { logout } from '../store/system/actions/system'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'

function HeaderSideNav () {
  const dispatch = useDispatch();
  const { themeName } = useSelector( ( state: RootState ) => state.ui );

  const changeTheme = () => {
    dispatch( updateTheme( { themeName: themeName === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT } ) );
  };

  const handleLogout = () => {
    dispatch( logout() );
  };

  return (
    <Header width="300px">
      <div className="content-header">
        <span>Anonymous</span>
        <div className="options">
          <span className="material-icons cursor" onClick={ changeTheme }>invert_colors</span>
          <span className="material-icons cursor" onClick={ handleLogout }>power_settings_new</span>
        </div>
      </div>
    </Header>
  );
}

export default HeaderSideNav;