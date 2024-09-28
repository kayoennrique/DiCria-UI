import { Meta, StoryObj } from "@storybook/react";
import Card from "./index";
import { CardProps } from "./interface";

const meta: Meta<typeof Card> = {
    title: "Design System/Card",
    component: Card,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        cards: [
            {
                text: "5 usuarios",
            },
            {
                text: "Suporte Prioritário",
            },
            {
                text: "Suporte via Email e Telefone",
            },
        ],
        title: "Time",
        footer: "R$ 20,00/usuário",
        bgcolor: "#E2E8F0",
        titlecolor: "#181818",
        textcolor: "#5C5C5C",
        serparatorcolor: "",
        sizetitle: "32px",
        sizetext: "24px",
        border: "1px solid #6284fd",
        boxshadow: "0px 2px 5px rgba(0, 0, 0, 0.37)",
    } as CardProps,
};
