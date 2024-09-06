import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { DropdownSearchProps } from "./interfaces";
import * as S from "./styles";

const DropdownSearch: React.FC<DropdownSearchProps> = ({
    options,
    placeholder,
    containerwidth,
    containebgcolor,
    icon,
    inputstyled,
    tagstyled,
    hideinputonselect,
    fontsizeclearall,
    ...rest
}) => {
    const [search, setSearch] = useState("");
    const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [isFocused, setIsFocused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const originalOptions = options;

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearch(value);
        setFilteredOptions(
            originalOptions.filter((option) =>
                option.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    const handleOptionClick = (option: string) => {
        if (!selectedTags.includes(option)) {
            setSelectedTags([...selectedTags, option]);
        }
        setSearch("");
        setIsFocused(false);

        setFilteredOptions(filteredOptions.filter((item) => item !== option));
    };

    const handleRemoveTag = (tag: string) => {
        setSelectedTags(selectedTags.filter((t) => t !== tag));

        const newFilteredOptions = [...filteredOptions];
        const originalIndex = originalOptions.indexOf(tag);
        newFilteredOptions.splice(originalIndex, 0, tag);

        setFilteredOptions(
            newFilteredOptions.filter((option) =>
                option.toLowerCase().includes(search.toLowerCase())
            )
        );

        setIsFocused(false);
    };

    const handleClearAllTags = () => {
        setSelectedTags([]);
        setFilteredOptions(
            originalOptions.filter((option) =>
                option.toLowerCase().includes(search.toLowerCase())
            )
        );
    };

    const handleInputClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsFocused((prev) => !prev);
    };

    const handleArrowClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsFocused((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsFocused(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <S.Container
            icon={icon}
            containerwidth={containerwidth}
            containebgcolor={containebgcolor}
            options={options}
            onClick={handleArrowClick}
            ref={containerRef}
            {...rest}
        >
            <S.InputWrapper>
                {selectedTags.map((tag) => (
                    <S.ExistingTag
                        onRemove={() => handleRemoveTag(tag)}
                        key={tag}
                        text={tag}
                        active
                        removable
                        className="remove-button"
                        bgcolor={tagstyled?.tag?.bgcolor}
                        color={tagstyled?.tag?.color}
                        activebgcolor={tagstyled?.tag?.activebgcolor}
                        hoverbgcolor={tagstyled?.tag?.hoverbgcolor}
                        textcolor={tagstyled?.tag?.textcolor}
                        activetextcolor={tagstyled?.tag?.activetextcolor}
                        outlinecolor={tagstyled?.tag?.outlinecolor}
                        activeoutlinecolor={tagstyled?.tag?.activeoutlinecolor}
                        display={tagstyled?.tag?.display}
                        width={tagstyled?.tag?.width}
                        height={tagstyled?.tag?.height}
                        padding={tagstyled?.tag?.padding}
                        fontsizetag={tagstyled?.tag?.fontsizetag}
                        fontweight={tagstyled?.tag?.fontweight}
                        marginleftremovebutton={
                            tagstyled?.tag?.marginleftremovebutton
                        }
                        hoverbgcolorremovebutton={
                            tagstyled?.tag?.hoverbgcolorremovebutton
                        }
                        fontfamily={tagstyled?.tag?.fontfamily}  // Added fontfamily
                    />
                ))}
                {selectedTags.length > 0 && (
                    <S.ClearAllTag
                        options={options}
                        fontsizeclearall={fontsizeclearall}
                        onClick={handleClearAllTags}
                    >
                        <S.ClearAllIcon />
                    </S.ClearAllTag>
                )}
                {(!hideinputonselect || selectedTags.length === 0) && (
                    <S.ExistingInput
                        type="text"
                        value={search}
                        onChange={handleSearchChange}
                        onClick={handleInputClick}
                        placeholder={placeholder}
                        id={inputstyled?.input?.id}
                        placeholdercolor={inputstyled?.input?.placeholdercolor}
                        backgroundcolor={inputstyled?.input?.backgroundcolor}
                        color={inputstyled?.input?.color}
                        borderradius={inputstyled?.input?.borderradius}
                        border={inputstyled?.input?.border}
                        width={inputstyled?.input?.width}
                        outlineinput={inputstyled?.input?.outlineinput}
                        outlinefocus={inputstyled?.input?.outlinefocus}
                        paddingleft={inputstyled?.input?.paddingleft}
                    />
                )}
                <S.ArrowIconWrapper onClick={handleArrowClick}>
                    {isFocused ? (
                        <IoIosArrowUp size={18} />
                    ) : (
                        <IoIosArrowDown size={18} />
                    )}
                </S.ArrowIconWrapper>
                <S.Separator />
            </S.InputWrapper>

            {isFocused && (
                <S.List>
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((option, index) => (
                            <S.ListItem
                                key={index}
                                onMouseDown={() => handleOptionClick(option)}
                            >
                                {option}
                            </S.ListItem>
                        ))
                    ) : (
                        <S.ListItem>Não encontrado</S.ListItem>
                    )}
                </S.List>
            )}
        </S.Container>
    );
};

export default DropdownSearch;
