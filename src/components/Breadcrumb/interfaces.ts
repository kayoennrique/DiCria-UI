import React from 'react';

export interface BreadCrumbProps extends React.HTMLAttributes<HTMLUListElement> {
  items: { label?: string; link?: string }[];
}