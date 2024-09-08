import styled from "styled-components";
import { SeparatorVerticalProps } from "./interfaces";

export const SeparatorVertical = styled.div<SeparatorVerticalProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.bgcolor};
`;
