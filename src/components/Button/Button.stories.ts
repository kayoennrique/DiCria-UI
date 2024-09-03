import { Meta, StoryObj } from "@storybook/react";
import Button from "./index";
import { ButtonProps } from "./types";

const meta: Meta<typeof Button> = {
  title: "Design System/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    isblock: {
      type: "boolean",
    },
    textcolorhover: {
      control: "color",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    textbutton: "Login",
    bgcolor: "#2774b3",
    boxshadowbutton: "0px 2px 5px rgba(0, 0, 0, 0.37)",
    textdecoration: "none",
    textcolor: "#fff",
    textcolorhover: "#2774b3",
    hoverbgcolor: "#fff",
    borderbutton: "none",
    paddingbutton: "15px 30px",
    widthbutton: "",
    fontweightbutton: "none",
  } as ButtonProps,
};

export const Secondary: Story = {
  args: {
    textbutton: "Login",
    bgcolor: "transparent",
    boxshadowbutton: "none",
    textdecoration: "underline",
    textcolor: "#000",
    textcolorhover: "#2774b3",
    hoverbgcolor: "#fff",
    borderbutton: "none",
    paddingbutton: "15px 30px",
    widthbutton: "",
    fontweightbutton: "none",
  } as ButtonProps,
};
