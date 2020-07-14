import styled from 'styled-components';

interface MessageStyle {
  maxWidth?: string;
  gradient?: boolean;
  backgroundColor?: string;
  color?: string;
  right?: boolean;
}

const getGradient = ( left: string, right: string ) => {
  return `linear-gradient(90deg, ${left} 0%, ${right} 100%)`;
};

export const Message = styled.li<MessageStyle>`
  width: auto;
  max-width: ${ props => props.maxWidth || '60%' };
  padding: 5px 10px;
  background: ${
  props => props.backgroundColor || ( props.gradient
    ? getGradient( props.theme.primary, props.theme.secondary )
    : props.theme.secondaryBackground )
};
  color: ${ props => props.gradient ? '#fff' : props.color || props.theme.color };
  position: relative;
  align-self: ${ props => props.right ? 'flex-end' : 'flex-start' };
  border-radius: 5px;
  margin-bottom: 3px;
  position: relative;

  &:hover > .button {
    opacity: 1;
  }

  & > .button {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 0.8em;
    color: red;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    border-radius: 2px;
  }

  & > .message-info {
    font-size: 0.7em;
    text-align: right;
  }
`;
