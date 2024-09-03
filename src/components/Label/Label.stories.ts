import { Meta, StoryObj } from "@storybook/react";
import Label from "./index";
import { LabelProps } from "./types";

const meta: Meta<typeof Label> = {
    component: Label,
    title: "Design System/Label",
    argTypes: {
        color: {
            type: "string",
        },
        fontweight: {
            type: "string"
        },
        fontsize: {
            type: "string"
        }
    },
    tags: ["autodocs"]
}

type Story = StoryObj<typeof Label>

export const Primary: Story = {
    args: {
        text: "Label Content"
    } as LabelProps,
}

export default meta;