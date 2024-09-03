import { ChangeEvent } from "react";

export type ToggleProps = {
  checked?: boolean;
  icon?: boolean;
  size: "sm" | "md" | "lg";
  onToggle?: (e: ChangeEvent<HTMLInputElement>) => void;
};
