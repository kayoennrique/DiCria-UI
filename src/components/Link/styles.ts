import styled from 'styled-components';
import { LinkProps } from './types';

export const StyledLink = styled.a<LinkProps>`
  color: ${({ disabled }) => (disabled ? '#888' : '#0d6efd')};
  text-decoration: none;
  font-family: Poppins, Helvetica, "sans-serif";
  letter-spacing: 1px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    text-decoration: ${({ disabled }) => (disabled ? 'none' : 'underline')};
    color: ${({ disabled }) => (disabled ? '#fff' : '#2774b3')};
  }

  &[aria-disabled='true'] {
    color: #888;
    cursor: not-allowed;
    pointer-events: none;
    text-decoration: none;
  }
`;