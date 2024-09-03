import React, { useState } from "react";
import * as S from "./styles";
import { DatePickerProps } from "./types";
import { StyleSheetManager } from "styled-components";

const DatePicker: React.FC<DatePickerProps> = ({
    onChange,
    id,
    icon,
    backgroundcolor,
    disabledbgcolor,
    borderradius,
    padding,
    border,
    width,
    outlinefocus,
    placeholder,
    color,
    ...rest
}) => {
    const [selectedDate, setSelectedDate] = useState<string>("");

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSelectedDate = event.target.value;
        setSelectedDate(newSelectedDate);
        if (onChange) {
            onChange(newSelectedDate);
        }
    };

    return (
        <StyleSheetManager
            shouldForwardProp={(prop) =>
                ![
                    "backgroundcolor",
                    "disabledbgcolor",
                    "width",
                    "border",
                    "padding",
                    "borderradius",
                    "outlinefocus",
                ].includes(prop)
            }
        >
            <S.InputContainer>
                {icon && <span>{icon}</span>}
                <S.InputContainer>
                    <S.DatePickerInput
                        type="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        id={id}
                        backgroundcolor={backgroundcolor}
                        color={color}
                        disabledbgcolor={disabledbgcolor}
                        width={width}
                        border={border}
                        padding={padding}
                        borderradius={borderradius}
                        placeholder={placeholder}
                        outlinefocus={outlinefocus}
                        {...rest}
                    />
                </S.InputContainer>
            </S.InputContainer>
        </StyleSheetManager>
    );
};

export default DatePicker;
