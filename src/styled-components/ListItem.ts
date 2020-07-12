import styled from 'styled-components';

interface ListItemStyle {
  background?: string;
  boxShadowColor?: string;
  link?: boolean;
  active?: boolean;
}

export const ListItem = styled.li<ListItemStyle>`
  display: flex;
  margin: 0 0 10px 0;
  position: relative;
  padding: 0;
  align-items: center;
  background-color: ${ props => props.active ? props.theme.listItemActiveBackground : props.background || props.theme.background };
  color: ${ props => props.active ? props.theme.listItemActiveColor : props.theme.color };
  box-shadow: ${ props => props.theme.boxShadowCenter } ${ props => props.boxShadowColor || props.theme.boxShadowColor };
  padding: 10px;
  border-radius: 5px;
  cursor: ${ props => props.link ? 'pointer' : 'initial' };
  transition: box-shadow 100ms ease-in-out;

  &:hover {
    box-shadow: ${ props => props.link ? props.theme.boxShadowLinkHover : props.theme.boxShadowCenter } ${ props => props.boxShadowColor || props.theme.boxShadowColor };    
  }
`;
