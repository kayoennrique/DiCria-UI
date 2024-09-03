import React, { ReactNode } from "react";

export type InputProps = {
  placeholder?: string;
  placeholdercolor?: string;
  backgroundcolor?: string;
  color?: string;
  borderradius?: string;
  padding?: string;
  border?: string;
  width?: string;
  paddingleft?: string;
  outlineinput?: string;
  outlinefocus?: string;
  disabledbgcolor?: string;
  disabled?: boolean;
  icon?: ReactNode;
  value?: string | readonly string[] | number | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
