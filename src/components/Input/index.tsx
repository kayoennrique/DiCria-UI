import React from "react";
import * as S from "./styles";
import { InputProps } from "./types";
import { StyleSheetManager } from "styled-components";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            color,
            placeholder,
            placeholdercolor,
            backgroundcolor,
            borderradius,
            padding,
            border,
            width,
            outlinefocus,
            outlineinput,
            paddingleft,
            disabledbgcolor,
            icon,
            value,
            onChange,
            id,
            type,
            ...rest
        },
        ref
    ) => {
        return (
            <StyleSheetManager
                shouldForwardProp={(prop) =>
                    ![
                        "backgroundcolor",
                        "borderradius",
                        "disabledbgcolor",
                        "placeholdercolor",
                        "width",
                        "color",
                    ].includes(prop)
                }
            >
                <S.InputContainer paddingleft={paddingleft}>
                    {icon && <span>{icon}</span>}
                    <S.InputStyled
                        value={value}
                        onChange={onChange}
                        id={id}
                        type={type}
                        color={color}
                        backgroundcolor={backgroundcolor}
                        borderradius={borderradius}
                        padding={padding}
                        border={border}
                        width={width}
                        outlineinput={outlineinput}
                        outlinefocus={outlinefocus}
                        disabledbgcolor={disabledbgcolor}
                        placeholder={placeholder}
                        placeholdercolor={placeholdercolor}
                        {...rest}
                        ref={ref}
                    />
                </S.InputContainer>
            </StyleSheetManager>
        );
    }
);

export default Input;
