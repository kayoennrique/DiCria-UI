
import { StoryObj, Meta } from '@storybook/react';
import ColorPicker from './index';
import { ColorPickerProps } from './type';


const meta: Meta<typeof ColorPicker> = {
  title: 'Design System/ColorPicker',
  component: ColorPicker,
  argTypes: {
    
  },
  tags: ["autodocs"],
}

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Primary: Story = {
  args: {
  } as ColorPickerProps,
}


