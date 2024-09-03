import styled from 'styled-components';
import { SeparatorProps } from './types';

export const StyledSeparator = styled.div<SeparatorProps>`
  display: flex;
  align-items: center;
  width: ${(props) => props.width || '100%'};
`;

export const Bar = styled.div<SeparatorProps>`
  flex:50%;
  height: ${(props) => props.height || '1px'};
  background-color: ${(props) => {
    if (props.bgcolor === 'light') return '#eee';
    if (props.bgcolor === 'dark') return '#555';
    if (props.bgcolor === 'black') return '#000';
    return props.bgcolor || '#000';
  }};
`;

export const Content = styled.div`
  font-family: Poppins, Helvetica, "sans-serif";
  padding: 0 10px; 
  color: ${(props) => props.color || 'inherit'}; 
  white-space: nowrap;
`;