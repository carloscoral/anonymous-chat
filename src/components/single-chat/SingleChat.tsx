import React from 'react'
import { LayoutContent } from '../../styled-components/LayoutContent'
import HeaderSingleChat from '../HeaderSingleChat'
import MessagesList from '../MessagesList'
import MessageInput from '../MessageInput'
import './SingleChat.scss';

function SingleChat () {
  const handleSend = ( text: string ) => {
    console.log( { send: text } );
  };

  return (
    <LayoutContent>
      <HeaderSingleChat />
      <MessagesList className="extend limit-width" />
      <MessageInput onSend={ handleSend } />
    </LayoutContent>
  )
}

export default SingleChat;
