import React from 'react';
import * as S from "./styles";
import { BreadCrumbProps } from './interfaces';

const BreadCrumb: React.FC<BreadCrumbProps> = ({ items, ...rest }) => {
  return (
    <S.BreadCrumbContainer>
      <ul {...rest}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <S.BreadCrumbItem>
              {item.link ? <a href={item.link}>{item.label}</a> : item.label}
            </S.BreadCrumbItem>
            {index < items.length - 1 && <S.BreadCrumbSeparator>&gt;</S.BreadCrumbSeparator>}
          </React.Fragment>
        ))}
      </ul>
    </S.BreadCrumbContainer>
  );
};

export default BreadCrumb;
