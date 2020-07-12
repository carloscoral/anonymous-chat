import React from 'react';
import { ListItem } from '../styled-components/ListItem'
import { List } from '../styled-components/List'
import { Scrollbars } from 'react-custom-scrollbars';

function ChatList () {
  return (
    <Scrollbars autoHide>
      <List>
        <ListItem link>
          <span className="material-icons icon">account_circle</span> Anonymous
        </ListItem>
      </List>
    </Scrollbars>
  );
}

export default ChatList;
