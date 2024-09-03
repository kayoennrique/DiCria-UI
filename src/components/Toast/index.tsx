import React, { useState, useRef, useEffect } from "react";
import * as S from "./styles";
import { ToastProps } from "./types";
import { StyleSheetManager } from "styled-components";

const Toast: React.FC<ToastProps> = ({
    title,
    message,
    bgcolor,
    icon,
    color,
    coloricon,
    colortext,
    colortitle,
    colorcloseicon,
    hovercolorcloseicon,
    colorseparator,
    showTitle,
    showSeparator,
}) => {
    const [visible, setVisible] = useState(true);
    const noticeRef = useRef<HTMLDivElement>(null);

    const handleRemove = () => {
        setVisible(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            noticeRef.current &&
            !noticeRef.current.contains(event.target as Node)
        ) {
            setVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    if (!visible) {
        return null;
    }

    return (
        <StyleSheetManager
            shouldForwardProp={(prop) => !["bgcolor"].includes(prop)}
        >
            <S.NoticeContainer ref={noticeRef} bgcolor={bgcolor}>
                <S.Title colortitle={colortitle}>
                    {showTitle && (
                        <>
                            {icon && (
                                <S.Icon coloricon={coloricon}>{icon}</S.Icon>
                            )}
                            {title}
                            <S.TypographyWrapper
                                colortext={colortext}
                                color={color}
                            />
                        </>
                    )}
                    <S.RemoveIcon onClick={handleRemove}>
                        <S.CloseIcon
                            hovercolorcloseicon={hovercolorcloseicon}
                            colorcloseicon={colorcloseicon}
                        />{" "}
                    </S.RemoveIcon>
                </S.Title>
                {showSeparator && (
                    <S.SeparatorContainer colorseparator={colorseparator} />
                )}
                <S.TypographyWrapper colortext={colortext} color={color}>
                    {message}
                </S.TypographyWrapper>
            </S.NoticeContainer>
        </StyleSheetManager>
    );
};

export default Toast;
