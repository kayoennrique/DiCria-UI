import React, { ReactNode } from "react";

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
  onRemove?: () => void;
  text?: string;
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
  fontsize?: string;
  fontweight?: string;
  icon?: ReactNode;
  removable?: boolean;
  marginleftremovebutton?: string;
  hoverbgcolorremovebutton?: string;
  fontfamily?: string;
}
