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
  color: ${ props => props.color || props.theme.color };
  position: relative;
  align-self: ${ props => props.right ? 'flex-end' : 'flex-start' };
  border-radius: 5px;
  margin-bottom: 3px;
`;
