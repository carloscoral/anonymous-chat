import styled from 'styled-components';

interface TextStyle {
  contrast?: boolean;
}

export const Text = styled.span<TextStyle>`
  color: ${ props => props.contrast ? props.theme.colorContrast : props.theme.color };
`;
