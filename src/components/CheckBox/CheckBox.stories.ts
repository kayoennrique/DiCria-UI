import { Meta, StoryObj } from "@storybook/react";

import { CheckboxProps } from "./types";
import CheckBox from "./index";

const meta: Meta<typeof CheckBox> = {
  title: "Design System/CheckBox",
  component: CheckBox,
  argTypes: {
    onClick: { action: "clicked" },
    size: {
      type: "string",
    },
    fontcolor: {
      type: "string",
    },
    fontsize: {
      type: "string",
    },
    disabled: {
      type: "boolean",
    },
    backgroundcolor: {
      type: "string",
    },
    borderradius: {
      type: "string",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  args: {
    id: "TermBox",
    children:
      "Jamais on ne me dira que la course aux étoiles ça n'est pas pour moi",
  } as CheckboxProps,
};
export const Primary: Story = {
  args: {
    defaultChecked: true,
    id: "TermBox",
    children:
      "Jamais on ne me dira que la course aux étoiles ça n'est pas pour moi",
  } as CheckboxProps,
};
export const Disabled: Story = {
  args: {
    disabled: true,
    id: "TermBox",
    color: "primary",
    children:
      "Jamais on ne me dira que la course aux étoiles ça n'est pas pour moi",
  } as CheckboxProps,
};
