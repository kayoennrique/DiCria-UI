import styled from 'styled-components';
import { ProgressBarProps } from './types';

export const StyledProgressBar = styled.div<ProgressBarProps>`
    width: ${(props) => props.width};
    background-color: ${(props) => (props.mode === 'light' ? '#f0f0f0' : '#333')};
    border-radius: ${(props) => props.borderradius};
    overflow: hidden;
`;

export const Progress = styled.div<ProgressBarProps>`
    height: ${(props) => props.height};
    background-color: ${(props) => props.backgroundcolor};
    width: ${(props) => props.progress}%;
    transition: width 0.5s ease-in-out;
`;