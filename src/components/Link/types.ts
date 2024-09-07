import React from 'react';

export type LinkProps = {
  children: React.ReactNode;
  disabled?: boolean;
  textcolorlink?: string;
  texthoverlink?: string;
  textdecorationhoverlink?: string;
  fontfamily?: string;
  bgcolorbr?: string;
  borderadius?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;