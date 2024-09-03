import { ReactNode } from "react";

export type DatePickerProps = {
  placeholder?: string;
  backgroundcolor?: string;
  color?: string;
  disabledbgcolor?: string;
  disabled?: boolean;
  onChange?: (selectedDate: string) => void;
  id?: string;
  borderradius?: string;
  padding?: string;
  border?: string;
  width?: string;
  outlinefocus?: string;
  icon?: ReactNode;
} 