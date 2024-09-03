import React, { HTMLAttributes, SelectHTMLAttributes } from "react";

type Option = {
  label: string;
  value: string;
};

type Section = {
  titlelabel?: string;
  options: Option[];
};

export type DropdownProps = {
  sections?: Section[];
  onSelect: (option: string) => void;
  titledropdown?: string;
  icon?: React.ReactNode;
  bgcolor?: string;
  hoverbgcolor?: string;
  textcolor?: string;
  widthbutton?: string;
  borderbutton?: string;
  paddingbutton?: string;
  fontweightbutton?: string;
  fontweightsection?: string;
  bgcolormenu?: string;
  bordermenu?: string;
  marginmenu?: string;
  borderradiusmenu?: string;
  widthmenu?: string;
  paddingmenu?: string;
  borderradiusitem?: string;
  hoverbgcoloritem?: string;
  paddingitem?: string;
  boxshadowbutton?: string;
} & HTMLAttributes<HTMLDivElement> &
  SelectHTMLAttributes<HTMLDivElement>;
