import styled from 'styled-components';
import { getShadowDirection } from './BoxShadow';

interface ButtonStyle {
  background?: string;
  boxShadowColor?: string;
  color?: string;
}

export const Button = styled.button<ButtonStyle>`
  background-color: ${ props => props.background || props.theme.primary };
  border: none;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  color: ${ props => props.color || props.theme.color };
  text-transform: uppercase;
  font-weight: 500;
  box-shadow:
    ${ props => getShadowDirection( { ...props, directionShadow: 'center' } ) }
    ${ props => props.boxShadowColor || props.theme.boxShadowColor };
  cursor: pointer;
`;