import styled from 'styled-components';
import { BoxShadow } from './BoxShadow';

export type HeaderStyle = {
  width?: string;
  height?: string;
  backgroundColor?: string;
  boxShadowColor?: string;
  borders?: boolean;
}

export const Header = styled(BoxShadow)<HeaderStyle>`
  width: ${ props => props.width || '100%' };
  min-width: ${ props => props.width || '100%' };
  height: ${ props => props.height || '60px' };
  min-height: ${ props => props.height || '60px' };
  background-color: ${ props => props.backgroundColor || props.theme.background };
  border-left: 1px solid ${ props => props.borders ? props.theme.divider : props.backgroundColor || props.theme.background };
  border-right: 1px solid ${ props => props.borders ? props.theme.divider : props.backgroundColor || props.theme.background };
  box-sizing: border-box;
  position: relative;
  z-index: 1;

  & > * {
    min-width: ${ props => props.width || '100%' };
  }
`;
