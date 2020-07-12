import React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { Message } from '../styled-components/Message';
import { List } from '../styled-components/List';

interface MessagesListProps {
  className?: string;
}

function MessagesList ( { className }: MessagesListProps ) {
  return (
    <Scrollbars className={ className }  >
      <List>
        <Message backgroundColor="#ddd" color="#333">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consequatur.
        </Message>
        <Message right gradient color="#fff">
          Hello
        </Message>
      </List>
    </Scrollbars>
  );
}

export default MessagesList;
