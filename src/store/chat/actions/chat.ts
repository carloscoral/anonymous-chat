import {
  ChatActionTypes,
  Conversation,
  ConversationType,
  Group,
  Message,
  SET_CURRENT_CONVERSATION,
  UPDATE_HIDDEN_MESSAGES,
  UPDATE_MESSAGES_LIST,
  UPDATE_PRIVATE_CHATS,
  UPDATE_USERS_LIST
} from '../types'
import { Dispatch } from 'redux'
import { User } from '../../system/types'

/**
 * Check user
 */
export const checkUser = ( user: User|null ) => {
  if ( user ) {
    const users = getFromLocalStorage( 'users' );
    const parsedUsers = JSON.parse( users );
    return parsedUsers.find( (u: User) => u.id === user.id );
  }
  return false;
}

/**
 * Function to update username
 */
export const updateUsername = ( user: User|null, username: string ) => {
  return ( dispatch: Dispatch<ChatActionTypes> ) => {
    const users = getFromLocalStorage( 'users' );
    const parsedUsers = JSON.parse( users );
    const currentUser: User = parsedUsers.find( ( u: User ) => u.id === user?.id );
    if (currentUser) {
      currentUser.username = username;
      window.localStorage.setItem( 'users', JSON.stringify(parsedUsers) );
      dispatch( updateUsersList( parsedUsers ) );
    }
  }
}

/**
 * Function to get groups
 */
export const getGroupsCategories = () => {
  return ['Friends', 'Radio', 'Social', 'Politics', 'Health', 'Technology', 'Sports', 'Hobbies', 'Bussiness'];
}

/**
 * Fake function as server
 */
export const getFromLocalStorage = ( key: string ): string => {
  let values: string = '[]';
  try {
    const storageValues = window.localStorage.getItem( key );
    if ( storageValues ) {
      values = storageValues;
    }
  } catch ( err ) {}
  return values;
}

export const getUnreadMessages = ( user: User|null ) => {
  return ( dispatch: Dispatch<ChatActionTypes> ) => {
    // TODO Connect with server and get messages list
    if ( user ){
      const messages = getFromLocalStorage( 'messages' );
      const parsedMessages: Message[] = JSON.parse( messages );
      const filteredMessages: Message[] = parsedMessages.filter( ( message: Message) => (
        message.receiver.id === user.id
      ) );
      const unread = filteredMessages.map( (message: Message) => message.receiver.id );
      dispatch( setUnreadMessages( unread ) );
    }
  };
}

/**
 * Function to get list of groups
 */
export const getMessages = ( sender?: User|null, receiver?: User|null, type?: ConversationType ) => {
  return ( dispatch: Dispatch<ChatActionTypes> ) => {
    // TODO Connect with server and get messages list
    const messages = getFromLocalStorage( 'messages' );
    const parsedMessages: Message[] = JSON.parse( messages );
    let filteredMessages: Message[] = [];
    if ( type === ConversationType.user ) {
      if ( sender && receiver ){
        filteredMessages = parsedMessages.filter( ( message: Message) => (
          (message.sender.id === receiver.id && message.receiver.id === sender.id)
          || (message.receiver.id === receiver.id && message.sender.id === sender.id)
        ) );
      }
    } else if ( type === ConversationType.group ) {
      if ( sender ) {
        filteredMessages = parsedMessages.filter( ( message: Message) => (
          message.receiver.id === sender.id
        ) );
      }
    }
    dispatch( updateMessagesList( filteredMessages ) );
  };
}

/**
 * Function to create group
 */
export const createGroup = ( name: string, category: string ) => {
  return ( dispatch: Dispatch<ChatActionTypes> ) => {
    // TODO Connect with server and get groups list
    const serverGroups = getFromLocalStorage( 'groups' );
    let groups = JSON.parse( serverGroups );
    const newGroup: Group = {
      id: Date.now().toString(),
      username: name,
      type: category
    };
    groups = [ newGroup, ...groups ];
    window.localStorage.setItem( 'groups', JSON.stringify( groups ) );
    dispatch( updateGroupList( groups ) );
  };
}

/**
 * Function to get list of groups
 */
export const getGroups = () => {
  return ( dispatch: Dispatch<ChatActionTypes> ) => {
    // TODO Connect with server and get groups list
    const serverGroups = getFromLocalStorage( 'groups' );
    dispatch( updateGroupList( JSON.parse(serverGroups) ) );
  };
}

/**
 * Function to get list of connected users
 */
export const getUsers = () => {
  return ( dispatch: Dispatch<ChatActionTypes> ) => {
    // TODO Connect with server and get users list
    const serverUsers = getFromLocalStorage( 'users' );
    dispatch( updateUsersList( JSON.parse(serverUsers) ) );
  };
}

/**
 * Function to get dispatch payload to update private chat list
 * @param { User[] } privateChats
 * @returns { ChatActionTypes }
 */
export const updatePrivateChats = ( privateChats: User[] ): ChatActionTypes => {
  return {
    type: UPDATE_PRIVATE_CHATS,
    payload: {
      privateChats
    }
  }
};

/**
 * Function to get dispatch payload to update messages list
 * @param { Group[] } messages
 * @returns { ChatActionTypes }
 */
export const updateMessagesList = ( messages: Message[] ): ChatActionTypes => {
  return {
    type: UPDATE_MESSAGES_LIST,
    payload: {
      messages
    }
  }
};

/**
 * Function to get dispatch payload to update group list
 * @param { Group[] } groups
 * @returns { ChatActionTypes }
 */
export const updateGroupList = ( groups: Group[] ): ChatActionTypes => {
  return {
    type: UPDATE_USERS_LIST,
    payload: {
      groups
    }
  }
};

/**
 * Function to get dispatch payload to update users list
 * @param { User[] } users
 * @returns { ChatActionTypes }
 */
export const updateUsersList = ( users: User[] ): ChatActionTypes => {
  return {
    type: UPDATE_USERS_LIST,
    payload: {
      users
    }
  }
};

/**
 * Function to get dispatch payload to update current conversation
 * @param currentConversation { Conversation }
 */
export const setCurrentConversation = ( currentConversation: Conversation ): ChatActionTypes => {
  return {
    type: SET_CURRENT_CONVERSATION,
    payload: {
      currentConversation
    }
  }
};

export const setUnreadMessages = ( unreadMessages: string[] ): ChatActionTypes => {
  return {
    type: SET_CURRENT_CONVERSATION,
    payload: {
      unreadMessages
    }
  }
};

export const updateHiddenMessages = ( hiddenMessages: string[] ): ChatActionTypes => {
  return {
    type: UPDATE_HIDDEN_MESSAGES,
    payload: {
      hiddenMessages
    }
  }
};
