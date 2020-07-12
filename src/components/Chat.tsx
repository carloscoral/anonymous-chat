import React from 'react';
import { Layout } from '../styled-components/Layout'
import SideNavChat from './side-nav-chat/SideNavChat';
import SingleChat from './single-chat/SingleChat';

function Chat() {
  return (
    <Layout>
      <SideNavChat />
      <SingleChat />
    </Layout>
  )
}

export default Chat;
