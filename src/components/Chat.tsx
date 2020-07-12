import React from 'react';
import { Layout } from '../styled-components/Layout'
import SideNavChat from './side-nav-chat/SideNavChat';
import SingleChat from './SingleChat';

function Chat() {
  return (
    <Layout>
      <SideNavChat />
      <SingleChat />
    </Layout>
  )
}

export default Chat;