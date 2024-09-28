import styled from "styled-components";
import { CardProps } from "./interface";

export const CardContainer = styled.div<CardProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.bgcolor};
    color: ${(props) => props.color};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border: ${(props) => props.border};
    border-radius: ${(props) => props.borderradius};
    box-shadow: ${(props) => props.boxshadow};
    padding: ${(props) => props.padding};
`;

export const CardList = styled.ul`
    list-style: none;
    margin: 12px 0 12px 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
`;

export const CardItems = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    line-height: 1.5;
    margin-bottom: 4px;

    p {
        margin-left: 16px;
    }
`;
