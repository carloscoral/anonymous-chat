import React from 'react';
import { Header } from '../styled-components/Header'

interface HeaderSingleChatProps {
  title?: string;
}

function HeaderSingleChat ( { title }: HeaderSingleChatProps ) {
  return (
    <Header borders={ true }>
      <strong className="align-vertical">
        <span className="material-icons icon">account_circle</span> { title }
      </strong>
    </Header>
  );
}

export default HeaderSingleChat;
