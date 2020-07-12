import React, { useState } from 'react'
import { SideNav } from '../../styled-components/SideNav'
import { ToggleButton } from '../../styled-components/ToggleButton'
import HeaderSideNav from '../HeaderSideNav'
import TabsChat from '../TabsChat'
import ChatList from '../ChatList'
import './SideNavChat.scss';
import SearchBar from '../SearchBar'

function SideNavChat () {
  const tabs = [ 'Users', 'Groups', 'Private' ];
  const [ open, setOpen ] = useState( true );
  const [ activeTab, setActiveTab ] = useState( tabs[0] );

  const toggleNav = () => {
    setOpen( !open );
  }

  const onSearchHandle = ( text: string ) => {
    console.log( { search: text } );
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
        <HeaderSideNav />
        <h1 className="title padded"> Chats </h1>
        <TabsChat tabs={tabs} active={activeTab} setActiveTab={setActiveTab} />
        <SearchBar onSearch={ onSearchHandle } />
        <div className="list-container">
          <ChatList />
        </div>
      </SideNav>
    </div>
  )
}

export default SideNavChat;
