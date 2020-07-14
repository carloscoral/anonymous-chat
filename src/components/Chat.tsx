import React, { useEffect } from 'react'
import { Layout } from '../styled-components/Layout'
import SideNavChat from './side-nav-chat/SideNavChat'
import SingleChat from './single-chat/SingleChat'
import { useDispatch, useSelector } from 'react-redux'
import { loginAnonymous } from '../store/system/actions/system'
import { RootState } from '../store/store'
import { checkUser, getGroups, getMessages, getUnreadMessages, getUsers } from '../store/chat/actions/chat'

function Chat() {
  const { chat, system } = useSelector( ( state: RootState ) => state );
  const { loggedIn, user } = system;
  const { currentConversation } = chat;
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = () => {
      dispatch( getUsers() );
      dispatch( getGroups() );
      dispatch( getMessages(currentConversation?.sender as any, user, currentConversation?.type) )
      dispatch( getUnreadMessages( user ) );
    };
    window.addEventListener('storage',  listener);
    return () => {
      window.removeEventListener( 'storage', listener );
    }
  });

  useEffect( () => {
    dispatch( getMessages(currentConversation?.sender as any, user, currentConversation?.type) );
    dispatch( getGroups() );
  }, [dispatch, currentConversation, user]);

  useEffect(() => {
    if ( !loggedIn ) {
      dispatch( loginAnonymous() );
    }
  }, [loggedIn, dispatch]);

  return (
    <Layout>
      <SideNavChat />
      <SingleChat />
    </Layout>
  )
}

export default Chat;
