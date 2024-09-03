import styled from 'styled-components';
import Input from "../Input";

export const InputContainer = styled.span`
  position: relative;
  display: flex;
  align-items: center;
`;

export const DatePickerInput = styled(Input)`
  background-color: ${(props) => props.backgroundcolor || '#ececec'}; 
  color: ${(props) => props.color || '#717171'};  
  border-radius: ${(props) => props.borderradius || '0.5rem'}; 
  padding: ${(props) => props.padding}; 
  border: ${(props) => props.border || '1px solid transparent'};
  width: ${(props) => props.width}; 
  
  &:focus {
    outline: ${(props) => props.outlinefocus || '2px solid #2774b3'}; 
  }
  
  &:disabled {
    background-color: ${(props) => props.disabledbgcolor || '#555'};
  }
`;
