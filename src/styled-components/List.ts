import styled from 'styled-components';

interface ListStyle {
  reversed?: boolean;
}

export const List = styled.ul<ListStyle>`
  display: flex;
  flex-direction: column;
  min-height: 95%;
  justify-content: ${ props => props.reversed ? 'flex-end' : 'inherit' };
  margin: 0;
  padding: 10px;
  list-style: none;
`;
