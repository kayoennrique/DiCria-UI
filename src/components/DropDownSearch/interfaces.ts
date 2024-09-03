import React from "react";

export interface DropdownSearchProps
  extends React.HTMLAttributes<HTMLDivElement> {
  inputstyled?: DropdownSearchInputTagProps;
  tagstyled?: DropdownSearchInputTagProps;
  options: string[];
  placeholder?: string;
  containerwidth?: string;
  containebgcolor?: string;
  icon?: React.ReactNode;
  hideinputonselect?: boolean;
  fontsizeclearall?: string;
}

export interface DropdownSearchInputTagProps {
  input?: InputProps;
  tag?: TagProps;
}

export interface InputProps {
  id?: string;
  type?: string;
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
}

export interface TagProps {
  text?: string;
  color?: string;
  active?: boolean;
  bgcolor?: string;
  activebgcolor?: string;
  textcolor?: string;
  activetextcolor?: string;
  hoverbgcolor?: string;
  outlinecolor?: string;
  activeoutlinecolor?: string;
  display?: string;
  padding?: string;
  height?: string;
  width?: string;
  fontsizetag?: string;
  fontweight?: string;
  removable?: boolean;
  marginleftremovebutton?: string;
  hoverbgcolorremovebutton?: string;
}
