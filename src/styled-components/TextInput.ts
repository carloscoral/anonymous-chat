import styled from 'styled-components';

interface TextInputStyle {
  margin?: string;
  shadow?: boolean;
  background?: string;
  iconColor?: string;
}

export const TextInput = styled.div<TextInputStyle>`
  display: flex;
  align-items: center;
  margin: ${ props => props.margin || '10px' };
  background-color: ${ props => props.background || '#fff' };
  border-radius: 20px;
  box-shadow: ${ props => props.shadow ? `${props.theme.boxShadowCenter} ${props.theme.boxShadowColor}` : 'none' };
  overflow: hidden;

  & > .icon {
    padding: 0 10px;
    color: ${ props => props.iconColor || props.theme.primary };
  }
  & > input {
    flex: 1 1 auto;
    padding: 10px;
    border: none;
    background-color: transparent;

    &:focus {
      outline: none;
    }
  }
`;