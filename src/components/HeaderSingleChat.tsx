import React from 'react';
import { Header } from '../styled-components/Header'

function HeaderSingleChat () {
  return (
    <Header borders={ true }>
      <strong className="align-vertical">
        <span className="material-icons icon">account_circle</span> Anonymous
      </strong>
    </Header>
  );
}

export default HeaderSingleChat;
