import React from "react";
import { Button, Typography } from "..";
import Separator from "../Separator";
import { AlertDialogProps } from "./types";
import * as S from "./styles";
import { StyleSheetManager } from "styled-components";

const AlertDialog = ({
    maintext,
    title,
    backgroundcolor,
    borderradius,
    height,
    padding,
    width,
    buttons,
    sizetext,
    sizetitle,
    textcolorcontainer,
    titlecolor,
    separatorcolor,
    separatorheight,
    separatorwidth,
    flexdirection,
    alignitems,
    gap,
    onClose,
    justifycontent,
    margintop,
    ...rest
}: AlertDialogProps) => {
    return (
        <StyleSheetManager
            shouldForwardProp={(prop) =>
                ![
                    "backgroundcolor",
                    "borderradius",
                    "height",
                    "padding",
                    "width",
                ].includes(prop)
            }
        >
            <S.StyledDiv
                backgroundcolor={backgroundcolor}
                borderradius={borderradius}
                height={height}
                padding={padding}
                width={width}
                onClose={onClose}
                {...rest}
            >
                <S.StyledH1AndP>
                    <Typography as="h1" size={sizetitle} color={titlecolor}>
                        {title}
                    </Typography>
                    <Separator
                        bgcolor={separatorcolor}
                        height={separatorheight}
                        width={separatorwidth}
                    />
                    <Typography
                        as="p"
                        size={sizetext}
                        color={textcolorcontainer}
                    >
                        {maintext}
                    </Typography>
                </S.StyledH1AndP>
                <S.StyledDivButtons
                    flexdirection={flexdirection}
                    alignitems={alignitems}
                    gap={gap}
                    justifycontent={justifycontent}
                    margintop={margintop}
                >
                    <Button
                        textbutton={buttons?.confirmbutton?.textbutton}
                        onClick={() => buttons?.confirmbutton?.onClick()}
                        textdecoration={buttons?.confirmbutton?.textdecoration}
                        textcolor={buttons?.confirmbutton?.textcolor}
                        bgcolor={buttons?.confirmbutton?.bgcolor}
                        hoverbgcolor={buttons?.confirmbutton?.hoverbgcolor}
                        boxshadowbutton={
                            buttons?.confirmbutton?.boxshadowbutton
                        }
                        widthbutton={buttons?.confirmbutton?.widthbutton}
                        paddingbutton={buttons?.confirmbutton?.paddingbutton}
                        borderbutton={buttons?.confirmbutton?.borderbutton}
                        textcolorhover={buttons?.confirmbutton?.textcolorhover}
                        fontweightbutton={
                            buttons?.confirmbutton?.fontweightbutton
                        }
                    />
                    <Button
                        textbutton={buttons?.cancelbutton?.textbutton}
                        onClick={() => buttons?.cancelbutton?.onClick()}
                        textdecoration={buttons?.cancelbutton?.textdecoration}
                        textcolor={buttons?.cancelbutton?.textcolor}
                        bgcolor={buttons?.cancelbutton?.bgcolor}
                        hoverbgcolor={buttons?.cancelbutton?.hoverbgcolor}
                        boxshadowbutton={buttons?.cancelbutton?.boxshadowbutton}
                        widthbutton={buttons?.cancelbutton?.widthbutton}
                        paddingbutton={buttons?.cancelbutton?.paddingbutton}
                        borderbutton={buttons?.cancelbutton?.borderbutton}
                        textcolorhover={buttons?.cancelbutton?.textcolorhover}
                        fontweightbutton={
                            buttons?.cancelbutton?.fontweightbutton
                        }
                    />
                </S.StyledDivButtons>
            </S.StyledDiv>
        </StyleSheetManager>
    );
};

export default AlertDialog;
