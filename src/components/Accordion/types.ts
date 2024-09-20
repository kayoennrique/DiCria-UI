import React, { HTMLAttributes } from "react";

export type AccordionItem = {
  id?: number;
  title: string;
  children: React.ReactNode;
  fontfamily?: string;
  fontfamilycontent?: string;
} & HTMLAttributes<HTMLDivElement>;

export type AccordionProps = {
  data?: AccordionItem[];
  multiple?: boolean;
  activeIndex?: number;
  width?: string;
  fontfamilyheader?: string;
  fontfamilycontent?: string;
  bgcolor?: string;
  bgcolorheader?: string;
  textcolorheader?: string;
  bgcolorheaderhover?: string;
  textcolorheaderhover?: string;
  textcolorcontent?: string;
  bgcolorcontent?: string;
  fontsizecontent?: string;
  fontsizeheader?: string;
  fontweightheader?: string;
  fontweightcontent?: string;
} & HTMLAttributes<HTMLDivElement>;

export type AccordionStyleProps = {
  width?: string | number;
} & HTMLAttributes<HTMLDivElement>;

export interface AccordionHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  fontfamilyheader?: string;
}

export interface AccordionContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  fontfamilycontent?: string;
}
