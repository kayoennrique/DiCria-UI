import React, { ReactNode } from "react";

export interface LabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelinput?: LabelInputComponentProps;
  gap?: string;
  justifycontent?: string;
  alignitems?: string;
  value?: string | readonly string[] | number | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface LabelInputComponentProps {
  label?: LabelProps;
  input?: InputProps;
}

interface LabelProps {
  text?: string;
  fontweight?: string;
  color?: string;
  fontsize?: string;
  marginbottom?: string;
}

interface InputProps {
  id?: string;
  type?: string;
  placeholder?: string;
  placeholdercolor?: string;
  backgroundcolor?: string;
  color?: string;
  borderradius?: string;
  padding?: string;
  border?: string;
  width?: string;
  outlineinput?: string;
  outlinefocus?: string;
  paddingleft?: string;
  disabledbgcolor?: string;
  disabled?: boolean;
  icon?: ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
