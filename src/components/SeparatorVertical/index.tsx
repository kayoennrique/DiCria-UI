import React from "react";
import * as S from "./styles";
import { SeparatorVerticalProps } from "./interfaces";
import { StyleSheetManager } from "styled-components";

const SeparatorVertical: React.FC<SeparatorVerticalProps> = ({
  height,
  width,
  bgcolor,
  ...rest
}) => {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "bgcolor"}>
      <S.SeparatorVertical
        height={height}
        width={width}
        bgcolor={bgcolor}
        {...rest}
      />
    </StyleSheetManager>
  );
};

export default SeparatorVertical;
