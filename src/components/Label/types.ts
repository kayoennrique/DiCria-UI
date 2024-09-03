import React from "react";

export type LabelProps = {
  htmlFor?: string;
  text?: string;
  fontweight?: string;
  color?: string;
  fontsize?: string;
  marginbottom?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>;