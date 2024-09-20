import styled from "styled-components";
import { AccordionStyleProps, AccordionProps } from "./types";

export const Accordion = styled.div<AccordionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${(props) => props.bgcolor};
  width: 100%;
`;

export const AccordionTab = styled.div<AccordionStyleProps>`
  width: ${(props) => props.width};
  border: 1px solid #e5e7eb;
  border-radius: 5px;
`;

export const AccordionHeader = styled.div<AccordionProps>`
  background-color: ${(props) => props.bgcolorheader};
  color: ${(props) => props.textcolorheader};
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.fontsizeheader};
  font-weight: ${(props) => props.fontweightheader};
  font-family: ${(props) => props.fontfamilyheader};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.bgcolorheaderhover};
    transition: 0.5s linear;
    color: ${(props) => props.textcolorheaderhover};
  }
`;

export const AccordionContent = styled.div<AccordionProps>`
  background: ${(props) => props.bgcolorcontent};
  padding: 1.25rem;
  border-top: 1px solid #e5e7eb;
  font-weight: ${(props) => props.fontweightcontent};
  font-size: ${(props) => props.fontsizecontent};
  font-family: ${(props) => props.fontfamilycontent};
`;
