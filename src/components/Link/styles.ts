import styled from 'styled-components';
import { LinkProps } from './types';

export const StyledLink = styled.a<LinkProps>`
  color: ${(props) => props.textcolorlink};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  text-decoration: none;
  font-family: Poppins, Helvetica, "sans-serif";
  letter-spacing: 1px;

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