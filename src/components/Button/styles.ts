import { ButtonProps } from "./types";
import styled from "styled-components";

export const StylizedButton = styled.button<ButtonProps>`
    transition: 0.3s;
    cursor: pointer;
    text-decoration: ${(props) => props.textdecoration};
    box-shadow: ${(props) => props.boxshadowbutton};
    background-color: ${(props) => props.bgcolor};
    padding: ${(props) => props.paddingbutton};
    border: ${(props) => props.borderbutton};
    border-radius: ${(props) => props.borderadius};
    width: ${(props) => props.widthbutton};
    color: ${(props) => props.textcolor};
    font-weight: ${(props) => props.fontweightbutton};
    font-size: ${(props) => props.fontsize};
    font-family: ${(props) => props.fontfamily};
    font-style: ${(props) => props.fontstyle};

    &:hover {
        background-color: ${(props) => props.hoverbgcolor};
        color: ${(props) => props.textcolorhover};
    }
`;
