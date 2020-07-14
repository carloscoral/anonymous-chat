import React, { useState } from 'react'
import { Header } from '../styled-components/Header'
import { updateTheme } from '../store/system/actions/ui'
import THEMES from '../providers/theme/themeList'
import { logout, updateSession } from '../store/system/actions/system'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { updateUsername } from '../store/chat/actions/chat'

interface HeaderSideNavProps {
  title?: string;
}

function HeaderSideNav ( { title }: HeaderSideNavProps ) {
  const { ui, system } = useSelector( ( state: RootState ) => state );
  const [editing, setEditing] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const { themeName } = ui;
  const { user } = system;
  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch( updateTheme( { themeName: themeName === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT } ) );
  };

  const handleLogout = () => {
    if ( user ) {
      dispatch( logout( user ) );
    }
  };

  const initEdition = () => {
    setEditing(true);
    setNewUsername( user?.username || '' );
  }

  const update = () => {
    dispatch( updateUsername( user, newUsername ) );
    const session: any = {
      ...system,
      user: {
        ...user,
        username: newUsername,
      }
    };
    dispatch( updateSession(session) );
    setEditing(false);
  }

  return (
    <Header width="300px">
      <div className="content-header">
        {
          !editing
            ? <span className="align-vertical">{ title }<span className="material-icons cursor small" onClick={initEdition}>edit</span></span>
            : <span className="align-vertical">
                <input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
                <span className="material-icons cursor small" onClick={update}>check</span>
                <span className="material-icons cursor small" onClick={() => setEditing(false)}>close</span>
            </span>
        }
        <div className="options">
          <span className="material-icons cursor small" onClick={ changeTheme }>invert_colors</span>
          <span className="material-icons cursor small" onClick={ handleLogout }>power_settings_new</span>
        </div>
      </div>
    </Header>
  );
}

export default HeaderSideNav;