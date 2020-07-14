import { User } from '../system/types';

export enum ConversationType {
  user = 'USER',
  group = 'GROUP'
}

export interface Message {
  id: string;
  sender: {
    id: string;
    username: string;
  }
  receiver: {
    id: string;
  }
  text: string;
  read?: boolean;
}

export interface Conversation {
  type: ConversationType,
  sender: {
    id: string;
  }
}

export interface Group {
  id: string;
  username: string;
  type?: string;
}

export interface ChatState {
  users?: User[];
  groups?: Group[];
  messages?: Message[];
  currentConversation?: Conversation;
  privateChats?: User[];
  unreadMessages?: string[];
  hiddenMessages?: string[];
}

export const UPDATE_USERS_LIST = 'chat/update_user_list';
export const UPDATE_GROUP_LIST = 'chat/update_group_list';
export const UPDATE_MESSAGES_LIST = 'chat/update_message_list';
export const UPDATE_PRIVATE_CHATS = 'chat/update_private_chats';
export const SET_CURRENT_CONVERSATION = 'chat/set_current_conversation';
export const SET_UNREAD_MESSAGES = 'chat/set_unread';
export const UPDATE_HIDDEN_MESSAGES = 'chat/update_hidden_messages;'

interface UpdateUsersList {
  type: typeof UPDATE_USERS_LIST;
  payload: ChatState
}

interface UpdateGroupList {
  type: typeof UPDATE_GROUP_LIST;
  payload: ChatState
}

interface UpdateMessageList {
  type: typeof UPDATE_MESSAGES_LIST;
  payload: ChatState
}

interface UpdatePrivateChats {
  type: typeof UPDATE_PRIVATE_CHATS;
  payload: ChatState;
}

interface SetCurrentConversation {
  type: typeof SET_CURRENT_CONVERSATION;
  payload: ChatState
}

interface SetUnreadMessages {
  type: typeof SET_UNREAD_MESSAGES,
  payload: ChatState
}

interface UpdateHiddenMessages {
  type: typeof UPDATE_HIDDEN_MESSAGES,
  payload: ChatState
}

export type ChatActionTypes = UpdateUsersList|UpdateGroupList|UpdateMessageList|SetCurrentConversation
  |UpdatePrivateChats|SetUnreadMessages|UpdateHiddenMessages;
