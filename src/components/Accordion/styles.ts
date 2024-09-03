import styled from "styled-components";
import { AccordionStyleProps } from "./types";

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: white;
  width: 100%;
`;

export const AccordionTab = styled.div<AccordionStyleProps>`
  width: ${(props) => (props.width ? props.width : "100%")};
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  background: #f9fafb;
`;

export const AccordionHeader = styled.div`
  background: #f9fafb;
  color: #374151;
  padding: 1.25rem;

  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
  font-family: Poppins, Helvetica, "sans-serif";

  cursor: pointer;

  &:hover {
    background: #efefef;
    transition: 0.5s linear;
    color: #000000;
  }
`;

export const AccordionContent = styled.div`
  background: white;
  padding: 1.25rem;
  border-top: 1px solid #e5e7eb;
  
  font-weight: 100;
  font-size: 16px;
  font-family: Poppins, Helvetica, "sans-serif"
`;
