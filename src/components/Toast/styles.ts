import styled from "styled-components";
import Typography from "../Typography";
import { ToastProps } from "./types";
import { FaWindowClose } from "react-icons/fa";
import Separator from "../Separator";

export const NoticeContainer = styled.div<ToastProps>`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${(props) => props.bgcolor};
    padding: 8px 16px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 300px;
    height: auto;
    max-height: 125px;
`;

export const Icon = styled.div<ToastProps>`
    margin-right: 0.5rem;
    color: ${(props) => props.coloricon};
`;

export const TypographyWrapper = styled(Typography)<ToastProps>`
    color: ${(props) => props.colortext};
`;

export const RemoveIcon = styled.div`
    color: black;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    top: 10px;

    &:hover {
        color: gray;
    }
`;

export const CloseIcon = styled(FaWindowClose)<ToastProps>`
    width: 20px;
    height: 20px;
    color: ${(props) => props.colorcloseicon};

    &:hover {
        color: ${(props) => props.hovercolorcloseicon};
    }
`;

export const Title = styled(Typography)<ToastProps>`
    display: flex;
    align-items: center;
    color: ${(props) => props.colortitle};
`;

export const SeparatorContainer = styled(Separator)<ToastProps>`
    background-color: ${(props) => props.colorseparator};
`;
