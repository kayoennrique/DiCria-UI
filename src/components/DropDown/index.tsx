import React, { useState } from "react";
import * as S from "./styles";
import { DropdownProps } from "./types";

const DropDown: React.FC<DropdownProps> = ({
    sections,
    onSelect,
    titledropdown,
    icon,
    bgcolor,
    hoverbgcolor,
    textcolor,
    widthbutton,
    borderbutton,
    paddingbutton,
    fontweightbutton,
    bgcolormenu,
    bordermenu,
    borderradiusmenu,
    borderradiusitem,
    fontweightsection,
    hoverbgcoloritem,
    widthmenu,
    paddingitem,
    paddingmenu,
    marginmenu,
    boxshadowbutton,
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        onSelect(option);
        toggleDropdown();
    };

    return (
        <S.DropdownContainer {...rest}>
            <S.DropdownButton
                widthbutton={widthbutton}
                boxshadowbutton={boxshadowbutton}
                fontweightbutton={fontweightbutton}
                paddingbutton={paddingbutton}
                borderbutton={borderbutton}
                bgcolor={bgcolor}
                hoverbgcolor={hoverbgcolor}
                textcolor={textcolor}
                onClick={toggleDropdown}
                textbutton={selectedOption || titledropdown}
                icon={icon}
            ></S.DropdownButton>
            {isOpen && (
                <S.DropdownMenu
                    onSelect={(option) => console.log(option)}
                    bgcolormenu={bgcolormenu}
                    borderradiusmenu={borderradiusmenu}
                    bordermenu={bordermenu}
                    widthmenu={widthmenu}
                    paddingmenu={paddingmenu}
                    marginmenu={marginmenu}
                >
                    {sections?.map((section, sectionIndex) => (
                        <React.Fragment key={sectionIndex}>
                            <S.DropdownSectionTitle
                                onSelect={() => console.log()}
                                fontweightsection={fontweightsection}
                            >
                                {section.titlelabel}
                            </S.DropdownSectionTitle>
                            {section.options.map((option, optionIndex) => (
                                <S.DropdownItem
                                    onSelect={() => console.log()}
                                    borderradiusitem={borderradiusitem}
                                    hoverbgcoloritem={hoverbgcoloritem}
                                    paddingitem={paddingitem}
                                    key={optionIndex}
                                    onClick={() => handleSelect(option.value)}
                                >
                                    {option.label}
                                </S.DropdownItem>
                            ))}
                        </React.Fragment>
                    ))}
                </S.DropdownMenu>
            )}
        </S.DropdownContainer>
    );
};

export default DropDown;
