import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { AccordionProps } from "./types";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = ({
  data,
  multiple,
  activeIndex,
  width,
  fontfamilyheader,
  fontfamilycontent,
  bgcolor,
  bgcolorheader,
  textcolorheader,
  bgcolorheaderhover,
  textcolorheaderhover,
  bgcolorcontent,
  fontsizecontent,
  fontsizeheader,
  fontweightheader,
  fontweightcontent,
  textcolorcontent,
  ...rest
}: AccordionProps) => {
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

  return (
    <S.Accordion bgcolor={bgcolor} {...rest}>
      {data?.map((accordion, index) => (
        <S.AccordionTab key={index} width={width}>
          <S.AccordionHeader
            onClick={() => handleClick(index)}
            fontfamilyheader={fontfamilyheader}
            bgcolorheader={bgcolorheader}
            textcolorheader={textcolorheader}
            bgcolorheaderhover={bgcolorheaderhover}
            textcolorheaderhover={textcolorheaderhover}
            fontsizeheader={fontsizeheader}
            fontweightheader={fontweightheader}
          >
            {accordion.title}

            {isActive.includes(index) ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </S.AccordionHeader>

          {isActive.includes(index) && (
            <S.AccordionContent
              fontfamilycontent={fontfamilycontent}
              bgcolorcontent={bgcolorcontent}
              fontsizecontent={fontsizecontent}
              fontweightcontent={fontweightcontent}
              textcolorcontent={textcolorcontent}
            >
              {accordion.children}
            </S.AccordionContent>
          )}
        </S.AccordionTab>
      ))}
    </S.Accordion>
  );
};

export default Accordion;
