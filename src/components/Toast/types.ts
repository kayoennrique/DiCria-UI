import React from "react";

export type ToastProps = {
    bgcolor?: string;
    message?: string;
    title?: string;
    onClose?: () => void;
    icon?: React.ReactNode;
    coloricon?: string;
    colortext?: string;
    colortitle?: string;
    colorcloseicon?: string;
    hovercolorcloseicon?: string;
    colorseparator?: string;
    showTitle?: boolean;
    showSeparator?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
