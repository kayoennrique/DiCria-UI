import React from "react";

export type AccordionItem = {
  id?: number;
  title: string;
  children: React.ReactNode;
  fontfamily?: string;
  fontfamilycontent?: string;
};

export type AccordionProps = {
  data: AccordionItem[];
  multiple?: boolean;
  activeIndex?: number;
  width?: string;
  fontfamily?: string; 
  fontfamilycontent?: string; 
};

export type AccordionStyleProps = {
  width?: string | number;
};

export interface AccordionHeaderProps {
  fontfamily?: string;
}

export interface AccordionContentProps {
  fontfamilycontent?: string;
}
