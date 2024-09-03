import React from "react";
import * as S from "./styles";
import { LinkProps } from "./types";

const Link = ({ children, href, disabled, ...rest }: LinkProps) => {
    return (
        <S.StyledLink
            href={disabled ? undefined : href}
            aria-disabled={disabled}
            disabled={disabled}
            {...rest}
        >
            {children}
        </S.StyledLink>
    );
};

export default Link;
