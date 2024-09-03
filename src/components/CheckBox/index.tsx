import React from "react";
import * as S from "./styles";
import { CheckboxProps } from "./types";
import Typography from "../Typography";

const CheckBox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    (
        {
            id,
            size,
            borderradius,
            children,
            fontsize,
            fontcolor,
            disabled = false,
            backgroundcolor,
            ...rest
        },
        ref
    ) => {
        return (
            <S.Div>
                <S.CheckBoxContent
                    size={size}
                    borderradius={borderradius}
                    ref={ref}
                    id={id}
                    backgroundcolor={backgroundcolor}
                    type="checkbox"
                    disabled={disabled}
                    {...rest}
                />
                <Typography
                    as="label"
                    color={fontcolor}
                    size={fontsize}
                    htmlFor={id}
                >
                    {children}
                </Typography>
            </S.Div>
        );
    }
);
CheckBox.displayName = "CheckBox";

export default CheckBox;
