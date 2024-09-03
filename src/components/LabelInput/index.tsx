import React from "react";
import { StyleSheetManager } from "styled-components";
import * as S from "./styles";
import Label from "../Label";
import Input from "../Input";
import { LabelInputProps } from "./interfaces";

const LabelInput = React.forwardRef<HTMLInputElement, LabelInputProps>(
    (
        {
            labelinput,
            gap,
            justifycontent,
            alignitems,
            value,
            onChange,
            ...rest
        },
        ref
    ) => {
        return (
            <StyleSheetManager
                shouldForwardProp={(prop) =>
                    !["gap", "justifycontent", "alignitems"].includes(prop)
                }
            >
                <S.Container
                    {...rest}
                    gap={gap}
                    justifycontent={justifycontent}
                    alignitems={alignitems}
                >
                    <Label
                        htmlFor={labelinput?.input?.id}
                        text={labelinput?.label?.text}
                        fontweight={labelinput?.label?.fontweight}
                        color={labelinput?.label?.color}
                        fontsize={labelinput?.label?.fontsize}
                        marginbottom={labelinput?.label?.marginbottom}
                    />
                    <Input
                        ref={ref}
                        id={labelinput?.input?.id}
                        type={labelinput?.input?.type}
                        placeholder={labelinput?.input?.placeholder}
                        placeholdercolor={labelinput?.input?.placeholdercolor}
                        backgroundcolor={labelinput?.input?.backgroundcolor}
                        color={labelinput?.input?.color}
                        borderradius={labelinput?.input?.borderradius}
                        border={labelinput?.input?.border}
                        width={labelinput?.input?.width}
                        outlineinput={labelinput?.input?.outlineinput}
                        outlinefocus={labelinput?.input?.outlinefocus}
                        paddingleft={labelinput?.input?.paddingleft}
                        disabledbgcolor={labelinput?.input?.disabledbgcolor}
                        disabled={labelinput?.input?.disabled}
                        icon={labelinput?.input?.icon}
                        value={value}
                        onChange={onChange}
                    />
                </S.Container>
            </StyleSheetManager>
        );
    }
);

export default LabelInput;
