
import { StoryObj, Meta } from '@storybook/react';
import ColorPicker from './index';
import { ColorPickerProps } from './type';


const meta: Meta<typeof ColorPicker> = {
  title: 'Design System/ColorPicker',
  component: ColorPicker,
    argTypes: {
      onChange: { action: 'changed' },
      width: {
        type: "string",
      },
      height:{
        type: "string",
      },
      backgroundcolor:{
        type: "string",
      },
      border:{
        type: "string",
      },
      borderradius:{
        type: "string",
      }      
    },
 
    
  tags: ["autodocs"],
}

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Primary: Story = {
  args: {
  } as ColorPickerProps,
}


