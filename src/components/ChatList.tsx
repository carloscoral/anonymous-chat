import React  from 'react'
import { ListItem } from '../styled-components/ListItem'
import { List } from '../styled-components/List'
import { Scrollbars } from 'react-custom-scrollbars';
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

interface Chat {
  id: string;
  username: string;
  type: string;
  unread: boolean;
}

interface ChatListProps {
  list: Chat[]
  groups?: string[];
  setCurrentConversation: ( conversation: any ) => void;
}

function ChatList ( { list, groups, setCurrentConversation }: ChatListProps ) {
  const { currentConversation } = useSelector( (state: RootState) => state.chat );

  const isCurrent = ( user: any ): boolean => {
    return currentConversation?.sender.id === user.id;
  };

  return (
    <Scrollbars autoHide>
      <List>
        {
          groups ?
            groups.map( (group: string ) => (
              <div key={group}>
                <h4 className="subtitle">{ group }</h4>
                {
                  list.filter( item => item.type === group ).map( item => (
                    <ListItem link key={item.id} onClick={ () => setCurrentConversation(item) } active={ isCurrent(item) }>
                      <span className="material-icons icon">account_circle</span> { item.username }
                    </ListItem>
                  ) )
                }
              </div>
            ) )
            : list.map( item => (
              <ListItem link key={item.id} onClick={ () => setCurrentConversation(item) }>
                <span className="material-icons icon">account_circle</span> { item.username }
              </ListItem>
            ) )
        }
      </List>
    </Scrollbars>
  );
}

export default ChatList;
