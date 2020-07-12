import React, { useState } from 'react'
import { SideNav } from '../styled-components/SideNav'
import { ToggleButton } from '../styled-components/ToggleButton'
import HeaderSideNav from './HeaderSideNav'
import TabsChat from './TabsChat'

function SideNavChat () {
  const tabs = [ 'Users', 'Groups', 'Private' ];
  const [ open, setOpen ] = useState( true );
  const [ activeTab, setActiveTab ] = useState( tabs[0] );

  const toggleNav = () => {
    setOpen( !open );
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
      <SideNav className="max-height" closed={ !open }>
        <HeaderSideNav />
        <h1 className="title padded"> Chats </h1>
        <TabsChat tabs={tabs} active={activeTab} setActiveTab={setActiveTab} />
      </SideNav>
    </div>
  )
}

export default SideNavChat;
