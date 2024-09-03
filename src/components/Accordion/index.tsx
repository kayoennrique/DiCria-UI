import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { AccordionProps } from "./types";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Accordion = ({ data, multiple, activeIndex, width }: AccordionProps) => {
    const [isActive, setIsActive] = useState<number[]>([]);

    const handleClick = (index: number) => {
        setIsActive((accIndex) =>
            multiple
                ? accIndex.includes(index)
                    ? accIndex.filter((i) => i !== index)
                    : [...accIndex, index]
                : accIndex.includes(index)
                  ? []
                  : [index]
        );
    };

    useEffect(() => {
        if (activeIndex !== undefined) {
            setIsActive([activeIndex]);
        }
    }, [activeIndex]);

    console.log(activeIndex);

    return (
        <S.Accordion>
            {data.map((accordion, index) => (
                <S.AccordionTab key={index} width={width}>
                    <S.AccordionHeader onClick={() => handleClick(index)}>
                        {accordion.title}

                        {isActive.includes(index) ? (
                            <IoIosArrowUp />
                        ) : (
                            <IoIosArrowDown />
                        )}
                    </S.AccordionHeader>

                    {isActive.includes(index) && (
                        <S.AccordionContent>
                            {accordion.children}
                        </S.AccordionContent>
                    )}
                </S.AccordionTab>
            ))}
        </S.Accordion>
    );
};

export default Accordion;
