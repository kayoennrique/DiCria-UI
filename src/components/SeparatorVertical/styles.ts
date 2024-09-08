import styled from "styled-components";
import { SeparatorVerticalProps } from "./interfaces";

export const SeparatorVertical = styled.div<SeparatorVerticalProps>`
  height: ${(props) => props.height || "100px"};
  width: ${(props) => props.width || "1px"};
  background-color: ${({ color = "#ccc" }) => color};
`;
