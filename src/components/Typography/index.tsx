import React, { ElementType } from "react";
import { TypographyProps } from "./interfaces";
import * as S from "./styles";
import { StyleSheetManager } from "styled-components";

const Typography: React.FC<TypographyProps> = ({
  children,
  size,
  color,
  fontweight,
  textdecoration,
  fontfamily,
  as,
  ...rest
}) => {
  const Element = as as ElementType;

  return (
    <StyleSheetManager
      shouldForwardProp={(prop) =>
        !["color", "fontweight", "fontfamily", "textdecoration"].includes(prop)
      }
    >
      <S.Text
        as={Element}
        size={size}
        color={color}
        fontweight={fontweight}
        fontfamily={fontfamily}
        textdecoration={textdecoration}
        {...rest}
      >
        {children}
      </S.Text>
    </StyleSheetManager>
  );
};

export default Typography;
