import { Meta, StoryObj } from "@storybook/react";
import LabelInput from "./index";

const meta: Meta<typeof LabelInput> = {
  title: 'Design System/LabelInput',
  component: LabelInput,
  tags: ["autodocs"]
}

export default meta;
type Story = StoryObj<typeof LabelInput>

const labelinputConfig = {
  label: {
    text: 'Label Content:',
    fontweight: 'bold',
    color: '#000',
    fontsize: '18px',
    marginbottom: '1rem',
  },
  input: {
    id: '',
    type: '',
    placeholder: 'Input...',
    placeholdercolor: '#a8a8a8',
    backgroundcolor: '#ececec',
    color: '#000',
    borderradius: '.5rem',
    padding: '.5rem 1rem',
    border: '1px solid transparent',
    width: '13rem',
    outlineinput: '1px solid #020617',
    outlinefocus: '2px solid #2774b3',
    paddingleft: '1rem',
    disabledbgcolor: '#555',
    disabled: false,
    icon: ''
  }
}

export const Primary: Story = {
  args: {
    labelinput: labelinputConfig,
    gap: '1rem',
    alignitems: 'start',
    justifycontent: 'start'
  },
}

