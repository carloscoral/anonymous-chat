import { SystemState, SystemActionTypes, UPDATE_SESSION } from '../types';

const initialState: SystemState = {
  loggedIn: false,
  session: null,
  user: null
};

export const systemReducer = ( state: SystemState = initialState, action: SystemActionTypes ) => {
  switch ( action.type ) {
    case UPDATE_SESSION:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}