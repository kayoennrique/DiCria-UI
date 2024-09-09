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
    bgcolor: {
      type: "string",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SeparatorVertical>;

export const Primary: Story = {
  args: {
    width: "3px",
    height: "150px",
    bgcolor: "#480855",
  } as SeparatorVerticalProps,
};
