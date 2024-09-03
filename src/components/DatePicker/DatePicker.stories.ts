import { Meta, StoryObj } from "@storybook/react";
import DatePicker from "./index";
import { DatePickerProps } from "./types";

const meta: Meta<typeof DatePicker> = {
  title: 'Design System/DatePicker',
  component: DatePicker,
  argTypes: {
    onChange: { action: 'changed' },
  },
  tags: ["autodocs"],
}

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Primary: Story = {
  args: {
    onChange: (date) => console.log(date),
  } as DatePickerProps
}
export const PrimaryDisabled: Story = {
  args: {
    disabled: true
  } as DatePickerProps
}