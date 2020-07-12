import React from 'react';
import { LayoutContent } from '../styled-components/LayoutContent'
import { Header } from '../styled-components/Header'

function SingleChat () {
  return (
    <LayoutContent>
      <Header borders={ true }>
        <strong className="align-vertical">
          <span className="material-icons icon">account_circle</span> Anonymous
        </strong>
      </Header>
    </LayoutContent>
  )
}

export default SingleChat;
