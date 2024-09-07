import styled from 'styled-components';
import { LinkProps } from './types';

export const StyledLink = styled.a<LinkProps>`
  color: ${(props) => props.textcolorlink};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  text-decoration: none;
  font-family: ${(props) => props.fontfamily};
  letter-spacing: 1px;
  border-radius: ${(props) => props.borderadius};
  background-color: ${(props) => props.bgcolorbr};

  &:hover {
    color: ${(props) => props.texthoverlink};
    text-decoration: ${(props) => props.textdecorationhoverlink};
  }

  &[aria-disabled='true'] {
    color: #888;
    cursor: not-allowed;
    pointer-events: none;
    text-decoration: none;
  }
`;