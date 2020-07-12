import React from 'react';
import { LayoutContent } from '../styled-components/LayoutContent'
import { useDispatch } from 'react-redux'
import { loginAnonymous } from '../store/system/actions/system'
import { Header } from '../styled-components/Header'

function SingleChat () {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch( loginAnonymous() );
  };

  return (
    <LayoutContent>
      <Header borders={ true }>
      </Header>
      <button onClick={ handleLogin }>
        Login
      </button>
    </LayoutContent>
  )
}

export default SingleChat;
