import React from 'react'
import { LayoutContent } from '../../styled-components/LayoutContent'
import HeaderSingleChat from '../HeaderSingleChat'
import MessagesList from '../MessagesList'
import MessageInput from '../MessageInput'
import './SingleChat.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { getFromLocalStorage, getMessages } from '../../store/chat/actions/chat'
import {  Message } from '../../store/chat/types'

function SingleChat () {
  const dispatch = useDispatch();
  const { chat, system } = useSelector( ( state: RootState ) => state );
  const { currentConversation } = chat;
  const { user } = system;

  const handleSend = ( text: string ) => {
    if ( text ) {
      const messages: Message[] = JSON.parse( getFromLocalStorage( 'messages' ) );
      if ( user && currentConversation ){
        const newMessage: Message = {
          id: Date.now().toString(),
          sender: user,
          receiver: currentConversation.sender,
          read: false,
          text
        };
        messages.push( newMessage );
        window.localStorage.setItem( 'messages', JSON.stringify( messages ) );
        dispatch( getMessages( currentConversation?.sender as any, user, currentConversation?.type ) );
      }
    }
  };

  return (
    <LayoutContent>
        <HeaderSingleChat title={(currentConversation?.sender as any)?.username} />
      { ( currentConversation &&
        <LayoutContent>
          <MessagesList
            className="extend limit-width"
          />
          <MessageInput onSend={ handleSend } />
        </LayoutContent>
      ) ||
        <div className="limit-width">
          Start a conversation
        </div>
      }
    </LayoutContent>
  )
}

export default SingleChat;
