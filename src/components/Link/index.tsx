import React from "react";
import * as S from "./styles";
import { LinkProps } from "./types";
import { StyleSheetManager } from "styled-components";

const Link = ({
  children,
  href,
  disabled,
  textcolorlink,
  texthoverlink,
  textdecorationhoverlink,
  fontfamily,
  borderadius,
  bgcolorbr,
  ...rest
}: LinkProps) => {
  return (
    <StyleSheetManager
      shouldForwardProp={(prop) =>
        ![
          "bgcolorbr",
          "borderadius",
          "fontfamily",
          "textcolorlink",
          "texthoverlink",
          "textdecorationhoverlink",
        ].includes(prop)
      }
    >
      <S.StyledLink
        href={disabled ? undefined : href}
        aria-disabled={disabled}
        disabled={disabled}
        bgcolorbr={bgcolorbr}
        borderadius={borderadius}
        fontfamily={fontfamily}
        textcolorlink={textcolorlink}
        texthoverlink={texthoverlink}
        textdecorationhoverlink={textdecorationhoverlink}
        {...rest}
      >
        {children}
      </S.StyledLink>
    </StyleSheetManager>
  );
};

export default Link;
