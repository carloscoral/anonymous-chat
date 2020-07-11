import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loginAnonymous, logout } from '../../store/system/actions/system';
import { ChatContainer } from './ChatContainer';
import { updateTheme } from '../../store/system/actions/ui'
import THEMES from '../../providers/theme/themeList'

import './Chat.scss';
import { RootState } from '../../store/store'

function Chat() {
  const dispatch = useDispatch();
  const { themeName } = useSelector( ( state: RootState ) => state.ui );

  const handleLogin = () => {
    dispatch( loginAnonymous() );
  };

  const handleLogout = () => {
    dispatch( logout() );
  };

  const changeTheme = () => {
    dispatch( updateTheme( { themeName: themeName === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT } ) );
  };

  return (
    <ChatContainer>
      <button onClick={ changeTheme }>
        Toggle theme
      </button>
      <button onClick={ handleLogin }>
        Login
      </button>
      <button onClick={ handleLogout }>
        LogOut
      </button>
    </ChatContainer>
  )
}

export default Chat;
