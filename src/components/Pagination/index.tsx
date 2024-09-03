import React, { useState, useEffect, ButtonHTMLAttributes } from "react";
import { PaginationProps } from "./types";
import * as S from "./styles";
import { StyleSheetManager } from "styled-components";

const Pagination: React.FC<
    PaginationProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({
    currentpage,
    totalpages,
    onpagechange,
    active,
    borderradius = "",
    bgcolor = "",
    activecolor = "",
    hoverbgcolor = "",
    disablebgcolor = "",
    disablecolor = "",
    disablehovercolor = "",
    ...props
}) => {
    const [activePage, setActivePage] = useState(currentpage);

    useEffect(() => {
        setActivePage(currentpage);
    }, [currentpage]);

    const handleClick = (newPage: number) => {
        setActivePage(newPage);
        onpagechange(newPage);
    };

    const handlePrevPage = () => {
        if (activePage > 1) {
            const newPage = activePage - 1;
            setActivePage(newPage);
            onpagechange(newPage);
        }
    };

    const handleNextPage = () => {
        if (activePage < totalpages) {
            const newPage = activePage + 1;
            setActivePage(newPage);
            onpagechange(newPage);
        }
    };

    const handleFirstPage = () => {
        setActivePage(1);
        onpagechange(1);
    };

    const handleLastPage = () => {
        setActivePage(totalpages);
        onpagechange(totalpages);
    };

    return (
        <StyleSheetManager
            shouldForwardProp={(prop) =>
                ![
                    "active",
                    "borderradius",
                    "bgcolor",
                    "activecolor",
                    "hoverbgcolor",
                    "disablecolor",
                    "disablebgcolor",
                    "disablehovercolor",
                ].includes(prop)
            }
        >
            <S.PaginationContainer>
                <S.PageButton
                    onClick={handleFirstPage}
                    disabled={currentpage === 1}
                    active={false}
                    borderradius={borderradius}
                    bgcolor={bgcolor}
                    activecolor={activecolor}
                    hoverbgcolor={hoverbgcolor}
                    disablecolor={disablecolor}
                    disablebgcolor={disablebgcolor}
                    disablehovercolor={disablehovercolor}
                    {...props}
                >
                    {"<<"}
                </S.PageButton>
                <S.PageButton
                    onClick={handlePrevPage}
                    disabled={currentpage === 1}
                    active={false}
                    borderradius={borderradius}
                    bgcolor={bgcolor}
                    activecolor={activecolor}
                    hoverbgcolor={hoverbgcolor}
                    disablecolor={disablecolor}
                    disablebgcolor={disablebgcolor}
                    disablehovercolor={disablehovercolor}
                    {...props}
                >
                    {"<"}
                </S.PageButton>
                {[...Array(totalpages)].map((_, index) => (
                    <S.PageButton
                        key={index}
                        onClick={() => handleClick(index + 1)}
                        active={activePage === index + 1 && active}
                        borderradius={borderradius}
                        bgcolor={bgcolor}
                        activecolor={activecolor}
                        hoverbgcolor={hoverbgcolor}
                        disablecolor={disablecolor}
                        disablebgcolor={disablebgcolor}
                        disablehovercolor={disablehovercolor}
                        {...props}
                    >
                        {index + 1}
                    </S.PageButton>
                ))}
                <S.PageButton
                    onClick={handleNextPage}
                    disabled={currentpage === totalpages}
                    active={false}
                    borderradius={borderradius}
                    bgcolor={bgcolor}
                    activecolor={activecolor}
                    hoverbgcolor={hoverbgcolor}
                    disablecolor={disablecolor}
                    disablebgcolor={disablebgcolor}
                    disablehovercolor={disablehovercolor}
                    {...props}
                >
                    {">"}
                </S.PageButton>
                <S.PageButton
                    onClick={handleLastPage}
                    disabled={currentpage === totalpages}
                    active={false}
                    borderradius={borderradius}
                    bgcolor={bgcolor}
                    activecolor={activecolor}
                    hoverbgcolor={hoverbgcolor}
                    disablecolor={disablecolor}
                    disablebgcolor={disablebgcolor}
                    disablehovercolor={disablehovercolor}
                    {...props}
                >
                    {">>"}
                </S.PageButton>
            </S.PaginationContainer>
        </StyleSheetManager>
    );
};

export default Pagination;
