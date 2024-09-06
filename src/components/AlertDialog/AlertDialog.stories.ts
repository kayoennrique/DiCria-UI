import { StoryObj, Meta } from "@storybook/react";
import AlertDialog from "./index";

const meta: Meta<typeof AlertDialog> = {
  title: "Design System/AlertDialog",
  component: AlertDialog,
  argTypes: {
    maintext: {
      type: "string",
    },
    title: {
      type: "string",
    },
    textcolorcontainer: {
      control: "color",
    },
    flexdirection: {
      type: "string",
    },
    gap: {
      type: "string",
    },
    alignitems: {
      type: "string",
    },
    onClose: {
      action: "closed",
    },
    justifycontent: {
      type: "string",
    },
    margintop: {
      type: "string",
    },
    fontfamily: {
      type: "string",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

const buttonsConfig = {
  confirmbutton: {
    bgcolor: "#2774b3",
    textbutton: "Confirmar",
    textdecoration: "none",
    textcolor: "#fff",
    hoverbgcolor: "#fff",
    textcolorhover: "#2774b3",
    boxshadowbutton: "0px 2px 5px rgba(0, 0, 0, 0.37)",
    onClick: () => console.log("Confirm Button"),
  },
  cancelbutton: {
    bgcolor: "transparent",
    textbutton: "Cancelar",
    textdecoration: "underline",
    textcolor: "#000",
    textcolorhover: "#2774b3",
    boxshadowbutton: "none",
    hoverbgcolor: "none",
    onClick: () => console.log("Cancel Button"),
  },
};

export const Primary: Story = {
  args: {
    buttons: buttonsConfig,
    backgroundcolor: "#E2E8F0",
    height: "180px",
    width: "50%",
    padding: "20px",
    borderradius: ".5rem",
    margintop: "1rem",
    gap: ".5rem",
    justifycontent: "flex-end",
  },
};
