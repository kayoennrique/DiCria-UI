import { TypographyProps } from "./interfaces";
import styled from "styled-components";

export const Text = styled.p<TypographyProps>`
  ${({ size }) => size && `font-size: ${size};`}
  color: ${({ color }) => color};
  font-family: ${(props) => props.fontfamily};
  font-weight: ${(props) => props.fontweight};
  text-decoration: ${(props) => props.textdecoration};
`;
