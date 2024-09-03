import React from "react";
import * as S from "./styles";
import { SeparatorProps } from "./types";
import { StyleSheetManager } from "styled-components";

const Separator: React.FC<SeparatorProps> = ({
    width,
    height,
    bgcolor,
    children,
    contentcolor,
    ...rest
}) => {
    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== "bgcolor"}>
            <S.StyledSeparator width={width}>
                <S.Bar height={height} bgcolor={bgcolor} {...rest} />
                {children && (
                    <S.Content color={contentcolor} {...rest}>
                        {children}
                    </S.Content>
                )}
                <S.Bar height={height} bgcolor={bgcolor} {...rest} />
            </S.StyledSeparator>
        </StyleSheetManager>
    );
};

export default Separator;
