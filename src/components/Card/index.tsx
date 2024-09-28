import React from "react";
import Separator from "../Separator";
import Typography from "../Typography";
import * as S from "./styles";
import { CardProps } from "./interface";

const Card = ({
    cards,
    title,
    footer,
    bgcolor,
    titlecolor,
    textcolor,
    width,
    height,
    padding,
    borderradius,
    sizetitle,
    sizetext,
    serparatorheight,
    serparatorwidth,
    serparatorcolor,
    border,
    boxshadow,
    ...rest
}: CardProps) => {
    return (
        <S.CardContainer
            width={width}
            height={height}
            borderradius={borderradius}
            padding={padding}
            bgcolor={bgcolor}
            cards={cards}
            border={border}
            boxshadow={boxshadow}
            {...rest}
        >
            <Typography as="h1" size={sizetitle} color={titlecolor}>
                {title}
            </Typography>
            <Separator
                bgcolor={serparatorcolor}
                height={serparatorheight}
                width={serparatorwidth}
            />
            <S.CardList>
                {cards.map((card, index) => (
                    <S.CardItems key={index}>
                        <Typography as="p" size={sizetext} color={textcolor}>
                            {card.text}
                        </Typography>
                    </S.CardItems>
                ))}
            </S.CardList>
            <Separator
                bgcolor={serparatorcolor}
                height={serparatorheight}
                width={serparatorwidth}
            />
            <Typography as="h1" size={sizetitle} color={titlecolor}>
                {footer}
            </Typography>
        </S.CardContainer>
    );
};

export default Card;
