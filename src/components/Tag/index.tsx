import React, { useState } from "react";
import { TagProps } from "./interfaces";
import * as S from "./styles";
import { StyleSheetManager } from "styled-components";
import { FaTimes } from "react-icons/fa";

const Tag: React.FC<TagProps> = ({
    text,
    active: initialActive = false,
    activebgcolor,
    hoverbgcolor,
    bgcolor,
    textcolor,
    activetextcolor,
    outlinecolor,
    activeoutlinecolor,
    display,
    width,
    height,
    padding,
    fontsize,
    fontweight,
    icon,
    fontfamily,
    removable = false,
    onRemove,
    marginleftremovebutton,
    hoverbgcolorremovebutton,
    ...rest
}: TagProps) => {
    const [active, setActive] = useState(initialActive);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <StyleSheetManager
            shouldForwardProp={(prop) =>
                ![
                    "bgcolor",
                    "activebgcolor",
                    "hoverbgcolor",
                    "textcolor",
                    "textactivecolor",
                    "outlinecolor",
                    "activeoutlinecolor",
                    "display",
                    "width",
                    "height",
                    "padding",
                    "fontsize",
                    "fontweight",
                ].includes(prop)
            }
        >
            <S.TagStyled
                {...rest}
                bgcolor={bgcolor}
                activebgcolor={activebgcolor}
                hoverbgcolor={hoverbgcolor}
                textcolor={textcolor}
                activetextcolor={activetextcolor}
                outlinecolor={outlinecolor}
                activeoutlinecolor={activeoutlinecolor}
                onClick={handleClick}
                active={active}
                display={display}
                width={width}
                height={height}
                padding={padding}
                fontsize={fontsize}
                fontweight={fontweight}
                fontfamily={fontfamily}
                text={text}
            >
                <span>
                    {icon && <span>{icon}</span>}
                    {text}
                </span>
                {removable && (
                    <S.RemoveButton
                        onClick={onRemove}
                        className="remove-button"
                        marginleftremovebutton={marginleftremovebutton}
                        hoverbgcolorremovebutton={hoverbgcolorremovebutton}
                    >
                        <FaTimes />
                    </S.RemoveButton>
                )}
            </S.TagStyled>
        </StyleSheetManager>
    );
};

export default Tag;
