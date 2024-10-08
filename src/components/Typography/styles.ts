import { TypographyProps } from "./interfaces";
import styled from "styled-components";

export const Text = styled.p<TypographyProps>`
  ${({ size }) => size && `font-size: ${size};`}
  color: ${({ color }) => color || "#333"};
  font-family: ${(props) => props.fontfamily};
  ${({ fontweight }) => fontweight && `font-weight: ${fontweight};`}
  ${({ textdecoration }) => textdecoration && `text-decoration: ${textdecoration};`} 
`;