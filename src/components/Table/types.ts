import React from 'react';

export type TableProps = {
  data: {
    [key: string]: React.ReactNode;
  }[];
  columns: {
    key: string;
    header: React.ReactNode;
    bgcolumncolor?: string;
    textcolumncolor?: string;
    widthpercentage?: string;
    aligncolumn?: string;
    alignrow?: string;
  }[];
  bgzebracolor?: string;
  bordercollapse?: string;
  bgcolor?: string;
  paddingrows?: string;
  fontsizecolumn?: string;
  fontsizerow?: string;
} & React.TableHTMLAttributes<HTMLTableElement> &
  React.HTMLAttributes<HTMLTableColElement> &
  React.HTMLAttributes<HTMLTableRowElement> &
  React.HTMLAttributes<HTMLTableCellElement> &
  React.HTMLAttributes<HTMLTableSectionElement>

