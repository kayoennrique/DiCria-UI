import styled from 'styled-components';
import { CardProps } from './interface';

export const CardContainer = styled.div<CardProps>`
    background-color: ${(props) => (props.bgcolor)};
    color: ${(props) => (props.color)};
    border-radius: ${(props) => (props.borderradius)};
    border: 1px solid #6284FD;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: ${(props) => (props.padding)};
    width: ${(props) => (props.width)};
    display: flex;
    flex-direction: column;
    align-items: center;

    li {

        }

`;

export const CardList = styled.ul`
    list-style: none;
    margin: 12px 0 12px 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
`

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
`