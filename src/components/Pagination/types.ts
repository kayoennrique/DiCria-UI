import React from "react";

export type PaginationProps = {
  currentpage: number;
  totalpages: number;
  onpagechange: (newPage: number) => void;
  updatecurrentpage?: number
  active?: boolean
  bgcolor?: string
  hoverbgcolor?: string
  activecolor?: string
  disablecolor?: string
  disablebgcolor?: string
  disablehovercolor?: string
  borderradius?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>;