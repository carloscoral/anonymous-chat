import React from 'react';
import Scrollbars from 'react-custom-scrollbars'

interface MessagesListProps {
  className?: string;
}

function MessagesList ( { className }: MessagesListProps ) {
  return (
    <Scrollbars className={ className }>
      messages
    </Scrollbars>
  );
}

export default MessagesList;
