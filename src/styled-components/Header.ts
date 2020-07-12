import styled from 'styled-components';

export type HeaderStyle = {
  width?: string;
  height?: string;
  backgroundColor?: string;
  boxShadowColor?: string;
  borders?: boolean;
}

export const Header = styled.header<HeaderStyle>`
  width: ${ props => props.width || '100%' };
  min-width: ${ props => props.width || '100%' };
  height: ${ props => props.height || '60px' };
  background-color: ${ props => props.backgroundColor || props.theme.background };
  box-shadow: ${ props => props.theme.boxShadowBottom } ${ props => props.boxShadowColor || props.theme.boxShadowColor };
  border-left: 1px solid ${ props => props.borders ? props.theme.divider : props.backgroundColor || props.theme.background };
  border-right: 1px solid ${ props => props.borders ? props.theme.divider : props.backgroundColor || props.theme.background };
  box-sizing: border-box;

  & > * {
    min-width: ${ props => props.width || '100%' };
  }
`;
