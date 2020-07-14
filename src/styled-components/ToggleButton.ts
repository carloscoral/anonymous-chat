import styled from 'styled-components';

interface ToggleButtonStyle {
  background?: string;
  boxShadowColor?: string;
}

export const ToggleButton = styled.div<ToggleButtonStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 70px;
  right: 0;
  background-color: ${ props => props.background || props.theme.secondaryBackground };
  box-shadow: ${ props => props.theme.boxShadowCenter } ${ props => props.boxShadowColor || props.theme.boxShadowColor } inset;
  transform: translateX(100%);
  border-radius: 0 100% 100% 0;
  width: 35px;
  height: 35px;
  z-index: 10;
`;
