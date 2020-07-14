import styled from 'styled-components';

export interface SideNavStyle {
  width?: string;
  background?: string;
  boxShadowColor?: string;
  closed?: boolean;
}

export const SideNav = styled.div<SideNavStyle>`
  width: ${ props => props.closed ? '0' : props.width || '300px' };
  min-width: ${ props => props.closed ? '0' : props.width || '300px' };
  max-height: 100vh;
  background-color: ${ props => props.background || props.theme.secondaryBackground };
  position: relative;
  box-shadow: ${ props => props.theme.boxShadowCenter } ${ props => props.boxShadowColor || props.theme.boxShadowColor } inset;
  transition: width 500ms ease-in-out, min-width 500ms ease-in-out;
  overflow: hidden;
`;
