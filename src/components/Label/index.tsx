import React from "react";
import { LabelProps } from "./types";
import * as S from "./styles";
import { StyleSheetManager } from "styled-components";

const Label: React.FC<LabelProps> = ({
    text,
    htmlFor,
    fontweight,
    fontsize,
    color,
    marginbottom,
    ...rest
}) => {
    return (
        <StyleSheetManager
            shouldForwardProp={(prop) =>
                !["fontweight", "fontsize", "color"].includes(prop)
            }
        >
            <S.StyledLabel
                htmlFor={htmlFor}
                color={color}
                fontweight={fontweight}
                fontsize={fontsize}
                marginbottom={marginbottom}
                {...rest}
            >
                {text}
            </S.StyledLabel>
        </StyleSheetManager>
    );
};

export default Label;
