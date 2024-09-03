import { Meta, StoryObj } from "@storybook/react";
import Toast from "./index";
import { ToastProps } from "./types";

const meta: Meta<typeof Toast> = {
    title: "Design System/Toast",
    component: Toast,
    argTypes: {
        bgcolor: { control: "color" },
        color: { control: "color" },
        colortext: { control: "color" },
        colortitle: { control: "color" },
        colorcloseicon: { control: "color" },
        hovercolorcloseicon: { control: "color" },
        colorseparator: { control: "color" },
        title: { control: "text" },
    },
    tags: ["autodocs"],
} as Meta;

export default meta;
type Story = StoryObj<typeof Toast>;

export const Primary: Story = {
    args: {
        title: "Task #000",
        colortitle: "#fff",
        message: "Exemplo de mensagem de toast",
        colortext: "#fff",
        colorseparator: "#fff",
        bgcolor: "#14AE5C",
        icon: "",
        showSeparator: true,
        showTitle: true,
    },
};

export const Secondary: Story = {
    args: {
        message: "Exemplo de mensagem de toast",
        colortext: "#fff",
        bgcolor: "#14AE5C",
        icon: "",
        showSeparator: false,
        showTitle: false,
    } as ToastProps,
};

export const Tertiary: Story = {
    args: {
        title: "Task #000",
        colortitle: "#000",
        message: "Exemplo de mensagem de toast",
        colortext: "#000",
        colorseparator: "#000",
        bgcolor: "#e15969",
        icon: "",
        showSeparator: true,
        showTitle: true,
    } as ToastProps,
};

export const Quaternary: Story = {
    args: {
        message: "Exemplo de mensagem de toast",
        colortext: "#000",
        bgcolor: "#e15969",
        icon: "",
        showSeparator: false,
        showTitle: false,
    } as ToastProps,
};

export const Quinary: Story = {
    args: {
        title: "Task #000",
        colortitle: "#000",
        message: "Exemplo de mensagem de toast",
        colortext: "#000",
        colorseparator: "#000",
        bgcolor: "#BFBFBF",
        icon: "",
        showSeparator: true,
        showTitle: true,
    } as ToastProps,
};

export const Sextary: Story = {
    args: {
        message: "Exemplo de mensagem de toast",
        colortext: "#000",
        bgcolor: "  #BFBFBF",
        icon: "",
        showSeparator: false,
        showTitle: false,
    } as ToastProps,
};
