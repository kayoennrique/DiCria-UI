import styled from "styled-components";
import { ColorPickerProps } from "./type";

export const ColorInput = styled.input<ColorPickerProps>`
  width: ${(props) => props.width || "50px"};
  height: ${(props) => props.height || "50px"};
  padding: ${(props) => props.padding || "0"};
  border: ${(props) => props.border || "none"};
  cursor: pointer;
  border-radius: ${(props) => props.borderradius || "50%"};
  appearance: none;
  background-color: ${(props) => props.backgroundcolor};

  &::-webkit-color-swatch-wrapper {
    padding: 0;
    border-radius: inherit;
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: inherit;
  }
`;