import styled, { ThemedStyledProps } from 'styled-components'

interface BoxShadowProps {
  directionShadow?: string;
  boxShadowColor?: string;
}

const getShadowDirection = ( props: ThemedStyledProps<any, any> ) => {
  switch( props.directionShadow ) {
    case 'top':
      return props.theme.boxShadowTop;
    case 'left':
      return props.theme.boxShadowLeft;
    case 'right':
      return props.theme.boxShadowRight;
    case 'center':
      return props.theme.boxShadowCenter;
    default:
      return props.theme.boxShadowBottom;
  }
}

export const BoxShadow = styled.div<BoxShadowProps>`
  box-shadow: ${ props => getShadowDirection( props ) } ${ props => props.boxShadowColor || props.theme.boxShadowColor };
`;
