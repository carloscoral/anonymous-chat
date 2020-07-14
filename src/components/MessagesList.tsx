import React, { useEffect, useRef, useState } from 'react'
import Scrollbars from 'react-custom-scrollbars';
import { Message } from '../styled-components/Message';
import { Message as IMessage } from '../store/chat/types';
import { List } from '../styled-components/List';
import { RootState } from '../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { updateHiddenMessages } from '../store/chat/actions/chat'

interface MessagesListProps {
  className?: string;
}

function MessagesList ( { className }: MessagesListProps ) {
  const dispatch = useDispatch();
  const { messages, hiddenMessages } = useSelector( (state: RootState) => state.chat );
  const scrollbar = useRef( null );
  const { user } = useSelector( (state: RootState ) => state.system );
  const [list, setList] = useState([]);

  useEffect( () => {
    if ( scrollbar ) {
      const scroll: any = scrollbar.current;
      if ( scroll ) {
        const scrollHeight = scroll.getScrollHeight();
        scroll.scrollTop( scrollHeight );
      }

    }
  }, [scrollbar, messages]);

  useEffect(() => {
    const filteredMessages: any = messages?.filter( ( message: any ) => !hiddenMessages?.includes( message.id ) )
    setList( filteredMessages || [] );
  }, [messages, hiddenMessages])

  const fromSender = ( message: IMessage ): boolean => {
    return message.sender.id === user?.id;
  }

  const hideMessage = ( message: IMessage ) => {
    dispatch( updateHiddenMessages( [ message.id, ...(hiddenMessages || []) ] ) );
  }

  return (
    <Scrollbars className={ className } ref={scrollbar} >
      <List reversed>
        {
          list.map( ( message: IMessage ) => (
            <Message
              key={ message.id }
              backgroundColor={ !fromSender( message ) ? '#ddd' : undefined }
              gradient={ fromSender( message ) }
              color={ fromSender( message ) ? '#333' : '#333' }
              right={ fromSender( message ) }
            >
              <div className="message-info">
                { message.sender.username } says:
              </div>
              <span className="material-icons button" onClick={ () => hideMessage(message) }>close</span> { message.text }
            </Message>
          ) )
        }
      </List>
    </Scrollbars>
  );
}

export default MessagesList;
