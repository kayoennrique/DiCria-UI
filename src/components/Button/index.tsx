import React from "react";
import { StyleSheetManager } from "styled-components";
import { ButtonProps } from "./types";
import * as S from "./styles";

const Button = ({
    textbutton,
    onClick,
    bgcolor,
    hoverbgcolor,
    textcolor,
    icon,
    widthbutton,
    borderbutton,
    paddingbutton,
    fontweightbutton,
    boxshadowbutton,
    textdecoration,
    textcolorhover,
    borderadius,
    fontsize,
    fontfamily,
    isblock,
    ...rest
}: ButtonProps) => {
    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== "bgcolor"}>
            <S.StylizedButton
                onClick={onClick}
                textdecoration={textdecoration}
                textcolor={textcolor}
                textcolorhover={textcolorhover}
                bgcolor={bgcolor}
                hoverbgcolor={hoverbgcolor}
                boxshadowbutton={boxshadowbutton}
                borderbutton={borderbutton}
                widthbutton={widthbutton}
                paddingbutton={paddingbutton}
                fontweightbutton={fontweightbutton}
                fontsize={fontsize}
                fontfamily={fontfamily}
                isblock={isblock}
                borderadius={borderadius}
                {...rest}
            >
                {icon && <span>{icon}</span>}
                {textbutton}
            </S.StylizedButton>
        </StyleSheetManager>
    );
};

export default Button;
