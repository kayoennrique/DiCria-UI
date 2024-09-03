import styled from "styled-components";
import { AlertDialogProps } from "./types";

export const StyledDiv = styled.div<AlertDialogProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundcolor};
  border-radius: ${(props) => props.borderradius};
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.178);
  font-family: Poppins, Helvetica, "sans-serif";
`;

export const StyledDivButtons = styled.div<AlertDialogProps>`
  display: flex;
  margin-top: ${(props) => props.margintop};
  justify-content: ${(props) => props.justifycontent};
  flex-direction: ${(props) => props.flexdirection};
  gap: ${(props) => props.gap};
  align-items: ${(props) => props.alignitems};
`;

export const StyledH1AndP = styled.div`
  margin: 0.5rem 0 0.5rem 0;
`;
