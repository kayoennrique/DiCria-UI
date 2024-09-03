import styled from 'styled-components';
import { InputProps } from './types';

export const InputContainer = styled.span<InputProps>`
  position: relative;
  display: flex;
  align-items: center;

  input {
    padding-left: ${(props) => props.paddingleft || '3rem'};
  }

  svg {
    position: absolute;
    left: 0.76rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

export const InputStyled = styled.input<InputProps>`
  background-color: ${(props) => props.backgroundcolor || '#ececec'}; 
  color: ${(props) => props.color || '#000'};  
  border-radius: ${(props) => props.borderradius || '0.5rem'}; 
  padding: ${(props) => props.padding || '0.5rem 1rem'}; 
  padding-left: 4rem; 
  border: ${(props) => props.border || '1px solid transparent'};
  width: ${(props) => props.width || '13rem'}; 
  outline: ${(props) => props.outlineinput || '1px solid #020617'}; 

  &::placeholder {
    color: ${(props) => props.placeholdercolor}; 
    margin-left: 0.5rem;
  }
  &:focus {
    outline: ${(props) => props.outlinefocus || '2px solid #2774b3'}; 
  }
  &:disabled {
    background-color: ${(props) => props.disabledbgcolor || '#555'};
  }
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 50%; 
    transform: translateY(-50%);    
    left: 0.605rem; 
  }
`;
