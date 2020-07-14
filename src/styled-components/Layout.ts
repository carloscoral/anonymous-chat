import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  height: 100vh;
  max-height: 100vh;
  background-color: ${ props => props.theme.background };
  color: ${ props => props.theme.color };
`;
