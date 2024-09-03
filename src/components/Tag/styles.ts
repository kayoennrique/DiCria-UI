import styled from "styled-components";
import { TagProps } from "./interfaces";

export const TagStyled = styled.div<TagProps>`
  display: ${(props) => props.display}; 
  justify-content: center; 
  align-items: center; 
  font-weight: ${(props) => props.fontweight};
  font-size: ${(props) => props.fontsize};
  font-family: Poppins, Helvetica, "sans-serif";
  border-radius: .5rem;
  border: 1px solid ${(props) => (props.active ? props.activeoutlinecolor : props.outlinecolor)};
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  background-color: ${(props) => (props.active ? props.activebgcolor : props.bgcolor)};
  color: ${(props) => (props.active ? props.activetextcolor : props.textcolor)};

  &:hover {
    background-color: ${(props) => (props.active ? props.bgcolor : props.activebgcolor)};
    color: ${(props) => (props.active ? props.textcolor : props.activetextcolor)};
    border: 1px solid ${(props) => (props.active ? props.outlinecolor : props.activeoutlinecolor)};
  }
  
  .remove-button {
    margin-left: ${(props) => props.marginleftremovebutton};
   
  }
  &:hover { 
    background-color: ${(props) => props.hoverbgcolorremovebutton};
}
  `;

export const RemoveButtonWrapper = styled.span<TagProps>`
  display: flex;
  font-size: 13px;
  margin-left: ${(props) => props.marginleftremovebutton || 'auto'};
  margin-right: .25rem;
  
  &:hover {    
    background-color: ${(props) => props.hoverbgcolorremovebutton || 'red'};
    color: white;
}
`;

export const RemoveButton = styled.span<TagProps>`
  cursor: pointer;
`;

