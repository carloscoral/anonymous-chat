import {
  ChatActionTypes,
  ChatState,
  SET_CURRENT_CONVERSATION,
  SET_UNREAD_MESSAGES,
  UPDATE_GROUP_LIST,
  UPDATE_HIDDEN_MESSAGES,
  UPDATE_MESSAGES_LIST,
  UPDATE_PRIVATE_CHATS,
  UPDATE_USERS_LIST
} from '../types'

const initialState: ChatState = {
  users: [],
  groups: [],
  messages: [],
  privateChats: [],
  unreadMessages: [],
  hiddenMessages: []
};

export const chatReducer = ( state: ChatState = initialState, action: ChatActionTypes ) => {
  switch ( action.type ) {
    case SET_UNREAD_MESSAGES:
    case UPDATE_USERS_LIST:
    case UPDATE_GROUP_LIST:
    case UPDATE_MESSAGES_LIST:
    case SET_CURRENT_CONVERSATION:
    case UPDATE_PRIVATE_CHATS:
    case UPDATE_HIDDEN_MESSAGES:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}