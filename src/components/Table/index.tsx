import React from "react";
import * as S from "./styles";
import { TableProps } from "./types";
import Typography from "../Typography";

const Table: React.FC<TableProps> = ({
    data,
    columns,
    bgzebracolor,
    bordercollapse,
    bgcolor,
    paddingrows,
    fontsizecolumn,
    fontsizerow,
    className,
    ...props
}) => {
    return (
        <S.StyledTable
            $bgzebracolor={bgzebracolor}
            $bordercollapse={bordercollapse}
            $bgcolor={bgcolor}
            $paddingrows={paddingrows}
            className={`internal-table ${className || ""}`}
            {...props}
        >
            <thead>
                <tr>
                    {columns.map((column) => (
                        <S.TitleRow
                            key={column.key}
                            $bgcolorcolumn={column?.bgcolumncolor}
                            $textcolorcolumn={column?.textcolumncolor}
                            $widthpercentage={column?.widthpercentage}
                            $aligncolumn={column?.aligncolumn}
                            $fontsizecolumn={fontsizecolumn}
                        >
                            <Typography as="span">{column.header}</Typography>
                        </S.TitleRow>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column, colIndex) => (
                            <S.CellsRow
                                key={colIndex}
                                $alignrow={column?.alignrow}
                                $fontsizerow={fontsizerow}
                            >
                                <Typography as="span">
                                    {row[column.key]}
                                </Typography>
                            </S.CellsRow>
                        ))}
                    </tr>
                ))}
            </tbody>
        </S.StyledTable>
    );
};

export default Table;
