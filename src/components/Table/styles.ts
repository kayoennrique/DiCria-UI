import styled from 'styled-components';

export const StyledTable = styled.table<{ $bgzebracolor?: string, $bordercollapse?: string, $bgcolor?: string, $paddingrows?: string, }>`
  width: 100%;
  border-collapse: ${(props) => props.$bordercollapse || 'collapse'};
  background-color: ${(props) => props.$bgcolor || '#F8FAFC'};

  tr:nth-child(even) {
    background-color: ${(props) => props.$bgzebracolor};
  };

  th, td {  
    padding: ${(props) => props.$paddingrows || '10px'};
  };

`;

export const TitleRow = styled.th<{ $widthpercentage?: string, $aligncolumn?: string, $fontsizecolumn?: string, $bgcolorcolumn?: string, $textcolorcolumn?: string, }>`
    width: ${(props) => props.$widthpercentage};
    text-align: ${(props) => props.$aligncolumn};
    font-size: ${(props) => props.$fontsizecolumn};
    background-color: ${(props) => props.$bgcolorcolumn};
  
    span {
      color:  ${(props) => props.$textcolorcolumn};
    };
`;

export const CellsRow = styled.td<{ $alignrow?: string, $fontsizerow?: string }>`
    text-align: ${(props) => props.$alignrow};
    font-size: ${(props) => props.$fontsizerow || '.9em'};
    border-top: 1px solid #ebedf3;
`;