import React from 'react';

export type LinkProps = {
  children: React.ReactNode;
  disabled?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;