import React from 'react';
import { Tabs } from '../styled-components/Tabs';

interface TabsProps {
  tabs: string[];
  setActiveTab: Function;
  active?: string;
}

function TabsChat ( { tabs, active, setActiveTab }: TabsProps ) {
  return (
    <Tabs className="padded">
      {
        tabs.map( tab =>
          <li
            className={ active === tab ? 'active cursor' : 'cursor' }
            key={tab}
            onClick={ () => setActiveTab( tab ) }
          >
            { tab }
          </li>
        )
      }
    </Tabs>
  )
}

export default TabsChat;
