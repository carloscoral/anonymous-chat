import { SystemActionTypes, SystemState, UPDATE_SESSION, User } from '../types'
import { Dispatch } from 'redux'
import { updateUsersList } from '../../chat/actions/chat'
import { ChatActionTypes } from '../../chat/types'

/**
 * Function to get an anonymous session on server
 */
export const loginAnonymous = () => {
  return ( dispatch: Dispatch<SystemActionTypes|ChatActionTypes> ) => {
    // TODO Connect with server and get user session
    const userId = Date.now().toString();
    const userSession = {
      loggedIn: true,
      session: Date.now().toString(),
      user: {
        id: userId,
        username: `Anon${userId}`
      }
    };
    let users: any = window.localStorage.getItem( 'users' );
    if ( !users ) {
      users = [];
    } else {
      users = JSON.parse(users);
    }
    users = [ userSession.user, ...users ];
    window.localStorage.setItem( 'users', JSON.stringify(users) );
    dispatch( updateSession( userSession ) );
    dispatch( updateUsersList( users ) );
  };
}

export const logout = ( user: User ) => {
  return ( dispatch: Dispatch<SystemActionTypes> ) => {
    // TODO Connect with server and close user session
    window.localStorage.setItem( 'users', JSON.stringify( [] ) );
    dispatch( updateSession( {
      loggedIn: false,
      session: null,
      user: null
    } ) );
  };
}

/**
 * Function to get dispatch payload to update session
 * @param { SystemState } session
 * @returns { SystemActionTypes }
 */
export const updateSession = ( session: SystemState ): SystemActionTypes => {
  return {
    type: UPDATE_SESSION,
    payload: session
  }
};