import { Meta, StoryObj } from '@storybook/react'
import Input from './index'
import { InputProps } from './types';

const meta: Meta<typeof Input> = {
  title: 'Design System/Input',
  component: Input,
  argTypes: {
    backgroundcolor: {
      type: "string"
    },
    disabledbgcolor: {
      type: "string"
    },
    placeholdercolor: {
      type: "string"
    },
    borderradius: {
      type: "string"
    },
    padding: {
      type: "string"
    },
    border: {
      type: "string"
    },
    width: {
      type: "string"
    },
    placeholder: {
      type: "string"
    },
    paddingleft: {
      type: "string"
    },
  },
  tags: ["autodocs"],
}

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    placeholder: 'Input',
    disabled: false
  } as InputProps
}

export const PrimaryDisabled: Story = {
  args: {
    placeholder: 'Input',
    disabled: true
  } as InputProps
}
