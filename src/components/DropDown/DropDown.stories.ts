
import { Meta, StoryObj } from "@storybook/react";
import DropDown from './index';
import { DropdownProps } from "./types";

const meta: Meta<typeof DropDown> = {
  title: "Design System/DropDown",
  component: DropDown,
  argTypes: {
    fontfamily: {
      type: "string",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropDown>;

export const Primary: Story = {
  args: {
    titledropdown: 'Select an option',
    sections: [
      {
        options: [
          { label: 'Apple', value: 'Apple' },
          { label: 'Banana', value: 'Banana' },
          { label: 'Orange', value: 'Orange' },
        ],
      },
      {
        titlelabel: 'Vegetables',
        options: [
          { label: 'Carrot', value: 'Carrot' },
          { label: 'Broccoli', value: 'Broccoli' },
          { label: 'Spinach', value: 'Spinach' },
        ],
      },
    ],
    onSelect: (option: string) => {
      console.log('Selected option:', option);
    },
  } as DropdownProps
}