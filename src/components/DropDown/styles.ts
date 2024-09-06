import styled from "styled-components";
import Typography from "../Typography";
import Button from "../Button";
import { DropdownProps } from "./types";

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownButton = styled(Button)`
  display: flex;
  align-items: center;
  box-shadow: ${(props) => props.boxshadowbutton || "none"};
  border: ${(props) => props.borderbutton || "1px solid transparent"};
  background-color: ${(props) => props.bgcolor || "#ececec"};
  color: ${(props) => props.textcolor || "#000"};
  padding: ${(props) => props.paddingbutton || ".95rem"};
  font-weight: ${(props) => props.fontweightbutton};
  font-size: 14px;
  width: ${(props) => props.widthbutton || "31.5rem"};

  &:hover {
    background-color: ${(props) => props.hoverbgcolor || "secondary"};
    color: ${(props) => props.textcolor || "secondary"};
    font-weight: bold;
    font-size: 16px;
  }

  svg {
    padding-top: 0.375rem;
    padding-right: 1rem;
  }
`;

export const DropdownMenu = styled.ul<DropdownProps>`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${(props) => props.bgcolormenu || "#fff"};
  border: ${(props) => props.bordermenu || "1px solid transparent"};
  list-style: none;
  padding: ${(props) => props.paddingmenu || "0"};
  margin: ${(props) => props.marginmenu || "0"};
  width: ${(props) => props.widthmenu || "31rem"};
  border-radius: ${(props) => props.borderradiusmenu || ".5rem"};
  font-family: ${(props) => props.fontfamily };
  font-size: 14px;
  z-index: 9999;
`;

export const DropdownItem = styled.li<DropdownProps>`
  padding: ${(props) => props.borderradiusitem || ".95rem"};
  cursor: pointer;
  border-radius: ${(props) => props.borderradiusitem || ".5rem"};
  font-size: 14px;

  &:hover {
    background-color: ${(props) => props.hoverbgcoloritem || "#f0f0f0"};
    color: #2774b3;
    font-weight: bold;
    font-size: 16px;
  }
`;

export const DropdownSectionTitle = styled(Typography)<DropdownProps>`
  font-weight: ${(props) => props.fontweightsection || "bold"};
`;
