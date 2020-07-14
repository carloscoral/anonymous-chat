import React, { useEffect, useState } from 'react'
import { SideNav } from '../../styled-components/SideNav'
import { ToggleButton } from '../../styled-components/ToggleButton'
import HeaderSideNav from '../HeaderSideNav'
import TabsChat from '../TabsChat'
import ChatList from '../ChatList'
import './SideNavChat.scss';
import SearchBar from '../SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { User } from '../../store/system/types'
import { getGroupsCategories, setCurrentConversation, updatePrivateChats } from '../../store/chat/actions/chat'
import { ConversationType } from '../../store/chat/types'
import CreateGroup from '../CreateGroup'

function SideNavChat () {
  const dispatch = useDispatch();
  const tabs = [ 'Users', 'Groups' ];
  const [ open, setOpen ] = useState( true );
  const [ activeTab, setActiveTab ] = useState( tabs[0] );
  const [ currentList, setCurrentList ] = useState( [] );
  const [ searchedList, setSearchedList ] = useState([]);
  const [ searchPattern, setSearchPattern ] = useState('');
  const { system, chat } = useSelector( ( state: RootState ) => state );
  const { user } = system;
  const { users, groups, privateChats, unreadMessages }: any = chat;

  const toggleNav = () => {
    setOpen( !open );
  }

  const onSearchHandle = ( text: string ) => {
    setSearchPattern( text );
  }

  useEffect(() => {
    const filtered = currentList.filter( (item: any) => item.username.toLowerCase().match( searchPattern ) );
    setSearchedList( filtered );
  }, [searchPattern, currentList])

  useEffect( () => {
    if ( activeTab === 'Users' ) {
      setCurrentList( usersWithoutCurrentUser() );
    } else if ( activeTab === 'Groups' ){
      setCurrentList( groups );
    } else {
      setCurrentList( [] );
    }
  }, [ activeTab, users, groups, privateChats, unreadMessages ] );

  const usersWithoutCurrentUser = () => {
    if ( user ) {
      const filteredUsers = users.filter( ( us: User ) => us.id !== user.id );
      return [...filteredUsers].map( (us: User) => {
        if ( !!privateChats.find( (chat: any) => us.id === chat.id  ) ) {
          us.type = 'Private';
        } else {
          us.type = 'Others';
        }
        return {
          ...us,
          unread: !!unreadMessages.find( (id: string) => us.id === id )
        };
      } );
    }
    return users;
  }

  const updateConversation = ( conversation: any ) => {
    let conversationType = 'USER';
    if ( activeTab === 'Users' ) {
      const existsPrivateChat = privateChats?.find( ( user: User ) => conversation?.id === user.id );
      if ( !existsPrivateChat ) {
        if ( privateChats ) {
          dispatch( updatePrivateChats( [ conversation, ...privateChats ] ) );
        }
      }
    } else if ( activeTab === 'Groups' ) {
      conversationType = 'GROUP';
    }
    dispatch( setCurrentConversation( {
      type: conversationType as ConversationType,
      sender: conversation
    } ) );
  }

  const getGroups = () => {
    if ( activeTab === 'Users' ) {
      return [ 'Private', 'Others' ];
    } else if( activeTab === 'Groups' ) {
      return getGroupsCategories();
    } else {
      return [ 'Others' ];
    }
  }

  return (
    <div className="relative">
      <ToggleButton className="cursor" onClick={ toggleNav }>
        {
          open
            ? <span className="material-icons">close</span>
            : <span className="material-icons">menu</span>
        }
      </ToggleButton>
      <SideNav className="max-height side-nav" closed={ !open }>
        <HeaderSideNav title={ user?.username }/>
        <h1 className="title padded"> Chats </h1>
        <TabsChat tabs={tabs} active={activeTab} setActiveTab={setActiveTab} />
        {
          activeTab === 'Groups' && <CreateGroup />
        }
        <SearchBar onSearch={ onSearchHandle } />
        <div className="list-container">
          <ChatList list={ searchedList } groups={ getGroups() } setCurrentConversation={updateConversation} />
        </div>
      </SideNav>
    </div>
  )
}

export default SideNavChat;
