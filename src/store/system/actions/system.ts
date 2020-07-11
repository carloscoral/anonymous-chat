import { SystemActionTypes, SystemState, UPDATE_SESSION } from '../types'
import { Dispatch } from 'redux'

/**
 * Function to get an anonymous session on server
 */
export const loginAnonymous = () => {
  return ( dispatch: Dispatch<SystemActionTypes> ) => {
    // TODO Connect with server and get user session
    dispatch( updateSession( {
      loggedIn: true,
      session: Date.now().toString(),
      user: {
        id: Date.now().toString(),
        username: 'Anonymous'
      }
    } ) );
  };
}

export const logout = () => {
  return ( dispatch: Dispatch<SystemActionTypes> ) => {
    // TODO Connect with server and close user session
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