import styled from 'styled-components';
import { LabelProps } from './types';

export const StyledLabel = styled.label<LabelProps>`
  font-size: ${(props) => (props.fontsize)};
  font-family: ${(props) => (props.fontfamily)};
  font-weight: ${(props) => (props.fontweight)};
  color: ${(props) => (props.color)};
  margin-bottom: ${(props) => (props.marginbottom)};
`;