import { styled } from "styled-components";
import { CheckboxProps } from "./types";

export const Div = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckBoxContent = styled.input<CheckboxProps>`
  width: ${({ size }) => (size ? size : "18px")};
  height: ${({ size }) => (size ? size : "18px")};
  accent-color: ${(props) => props.backgroundcolor};
  border-radius: ${(props) => props.borderradius};
`;
