import React from 'react';

export type Tab = {
  title: string;
  content: React.ReactNode;
};

export type TabProps = {
  tabs: Tab[];
  bgcolor?: string;
  activebgcolor?: string;
  hoverbgcolor?: string;
  containertextcolor?: string;
  listitemtextcolor?: string;
  textcolor?: string;
  width?: string
  height?: string
  alignitems?: string
  active?: boolean
  fontfamily?:string;
  fontfamilylist?:string
} & React.HTMLAttributes<HTMLDivElement>;
