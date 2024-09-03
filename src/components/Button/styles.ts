import { ButtonProps } from "./types";
import styled from "styled-components";

export const StylizedButton = styled.button<ButtonProps>`
  text-decoration: ${(props) => props.textdecoration};
  box-shadow: ${(props) => props.boxshadowbutton};
  background-color: ${(props) => props.bgcolor};
  padding: ${(props) => props.paddingbutton || "15px 30px"};
  border: ${(props) => props.borderbutton || "none"};
  border-radius: 0.5rem;
  transition: 0.3s;
  font-weight: ${(props) => props.fontweightbutton};
  font-size: 18px;
  cursor: pointer;
  color: ${(props) => props.textcolor};
  width: ${(props) => props.widthbutton};

  &:hover {
    background-color: ${(props) => props.hoverbgcolor};
    color: ${(props) => props.textcolorhover};
  }
`;
