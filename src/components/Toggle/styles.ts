import { styled } from "styled-components";
import { ToggleProps } from "./types";


export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

export const Switch = styled.div<ToggleProps>`
  position: relative;
  ${({ size }) => {
    switch (size) {
      case "sm":
        return "width: 50px; height: 18px; &:before{ width: 18px; height: 18px; left: 4px;}";
      case "md":
        return "width: 60px; height: 24px; &:before{ width: 24px; height: 24px; left: 6px;}";
      case "lg":
        return "width: 70px; height: 34px; &:before{ width: 34px; height: 34px; left: 8px;}";
      default:
        return "width: 60px; height: 24px; &:before{ width: 24px; height: 24px; left: 6px;}";
    }
  }}
  background: #0f172a;
  border-radius: 32px;
  padding: 5px;
  transition: 300ms all;
  &:before {
    padding: 1px;
    background-color: #e2e8f0;
    transition: 300ms all;
    content: "";
    background-position: center;
    background-repeat: no-repeat;
    background-size: 70%;
    position: absolute;
    border-radius: 35px;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

export const Input = styled.input<ToggleProps>`
  opacity: 0;
  position: absolute;
  display: none;
  &:checked + ${Switch} {
    background: #e2e8f0;
    &:before {
      padding: 1px;
      background-color: #0f172a;
      background-position: center;
      background-size: 60%;
      background-repeat: no-repeat;
      transform: translate(30px, -50%);
    }
  }
`;
