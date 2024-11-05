import React from "react";

export type ColorPickerProps = {
    initialColor?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Aceita o evento de mudança
    width?: string;
    height?: string;
    backgroundcolor?: string;
    border?: string;
    borderradius?: string;
    padding?: string;
  };