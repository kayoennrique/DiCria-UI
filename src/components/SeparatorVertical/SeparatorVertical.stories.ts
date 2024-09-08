import { StoryObj, Meta } from "@storybook/react";
import SeparatorVertical from "./index";
import { SeparatorVerticalProps } from "./interfaces";

const meta: Meta<typeof SeparatorVertical> = {
  title: "Design System/SeparatorVertical",
  component: SeparatorVertical,
  argTypes: {
    height: {
      type: "string",
    },
    width: {
      type: "string",
    },
    color: {
      type: "string",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SeparatorVertical>;

export const Primary: Story = {
  args: {} as SeparatorVerticalProps,
};
