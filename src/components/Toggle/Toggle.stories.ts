import { Meta, StoryObj } from "@storybook/react";
import Toggle from "./index";
import { ToggleProps } from "./types";

const meta: Meta<typeof Toggle> = {
  title: "Design System/Toggle",
  component: Toggle,
  argTypes: {
    onToggle: { action: "clicked" },
    checked: {
      type: "boolean",
    },
    icon: {
      type: "boolean",
    },
  },
  tags: ["autodocs"],
};

export default meta;

export const Primary: StoryObj<ToggleProps> = {};

export const Secondary: StoryObj<ToggleProps> = {
  args: {
    checked: true,
    icon: false,
  },
};

export const Tertiary: StoryObj<ToggleProps> = {
  args: {
    checked: false,
    icon: true,
  },
};

export const Quaternary: StoryObj<ToggleProps> = {
  args: {
    checked: true,
    icon: true,
  },
};
