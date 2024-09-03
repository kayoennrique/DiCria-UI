import React from "react";

export type Data = {
  id?: number;
  title: string;
  children: React.ReactNode;
}[];

export type AccordionProps = {
  data: Data;
  multiple?: boolean;
  activeIndex?: number;
  width?: string;
};

export type AccordionStyleProps = {
  width?: string | number;
};
