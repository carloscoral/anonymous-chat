import styled from 'styled-components';

export const Tabs = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;

  & > li {
    margin-right: 5px;
    text-transform: uppercase;
    font-size: 0.8em;

    &.active {
      font-weight: bold;
      color: ${ props => props.theme.primary };
    }
  }
`;
