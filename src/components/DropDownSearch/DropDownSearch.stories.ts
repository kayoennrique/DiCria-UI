import { Meta, StoryObj } from "@storybook/react";
import DropDownSearch from "./index";

const meta: Meta<typeof DropDownSearch> = {
  title: "Design System/DropDownSearch",
  component: DropDownSearch,
  argTypes: {
    placeholder: {
      type: "string",
    },
    containerwidth: {
      type: "string",
    },
    fontfamily: {
      type: "string",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropDownSearch>;

const inputConfig = {
  input: {
    id: "",
    type: "",
    placeholdercolor: "#a8a8a8",
    backgroundcolor: "transparent",
    color: "#000",
    borderradius: ".5rem",
    padding: ".5rem 1rem",
    border: "none",
    width: "100%",
    outlineinput: "none",
    outlinefocus: "none",
    paddingleft: "1rem",
  },
};

const tagConfig = {
  tag: {
    bgcolor: "#E6E6E6",
    color: "#333333",
    activebgcolor: "",
    hoverbgcolor: "",
    textcolor: "",
    activetextcolor: "",
    outlinecolor: "",
    activeoutlinecolor: "",
    display: "flex",
    width: "5rem",
    height: "1.5rem",
    padding: "",
    fontsizetag: "12px",
    fontweight: "",
    marginleftremovebutton: "",
    hoverbgcolorremovebutton: "",
  },
};

export const Primary: Story = {
  args: {
    options: [
      "Apple",
      "Banana",
      "Cherry",
      "Date",
      "Elderberry",
      "Fig",
      "Grape",
      "Honeydew",
    ],
    inputstyled: inputConfig,
    tagstyled: tagConfig,
    placeholder: "Selecione...",
    containerwidth: "12.5rem",
    icon: "",
    hideinputonselect: true,
    fontsizeclearall: "16px",
  },
};

export const Secondary: Story = {
  args: {
    options: [],
    placeholder: "Selecione...",
    hideinputonselect: false,
  },
};
