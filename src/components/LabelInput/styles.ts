import styled from 'styled-components';
import { LabelInputProps } from './interfaces';

export const Container = styled.div<LabelInputProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignitems} ;
  justify-content: ${(props) => props.justifycontent};
  gap: ${(props) => props.gap || '1rem'};
`;