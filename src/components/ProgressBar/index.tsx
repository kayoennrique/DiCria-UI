import React from "react";
import { ProgressBarProps } from "./types";
import * as S from "./styles";

const ProgressBar: React.FC<ProgressBarProps> = ({
    progress = 50,
    backgroundcolor = "",
    width = "",
    height = "",
    borderradius = "",
    mode = "light",
}) => {
    return (
        <S.StyledProgressBar
            width={width}
            mode={mode}
            borderradius={borderradius}
        >
            <S.Progress
                height={height}
                backgroundcolor={backgroundcolor}
                progress={progress}
            />
        </S.StyledProgressBar>
    );
};

export default ProgressBar;
