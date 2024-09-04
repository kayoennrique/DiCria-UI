import React from "react";
import * as S from "./styles";
import { LinkProps } from "./types";

const Link = ({ children, href, disabled, textcolorlink, texthoverlink, ...rest }: LinkProps) => {
    return (
        <S.StyledLink
            href={disabled ? undefined : href}
            aria-disabled={disabled}
            disabled={disabled}
            textcolorlink={textcolorlink}
            texthoverlink={texthoverlink}
            {...rest}
        >
            {children}
        </S.StyledLink>
    );
};

export default Link;
