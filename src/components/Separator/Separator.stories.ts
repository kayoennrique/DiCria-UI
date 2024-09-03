
import { StoryObj, Meta } from '@storybook/react';
import Separator from './index';
import { SeparatorProps } from './types';

const meta: Meta<typeof Separator> = {
  title: 'Design System/Separator',
  component: Separator,
  argTypes: {
    children: {
      type: 'string'
    },
    bgcolor: {
      type: 'string'
    },
    contentcolor: {
      type: 'string'
    },
    height: {
      type: 'string'
    },
    width: {
      type: 'string'
    },
  },
  tags: ["autodocs"],
}

export default meta;
type Story = StoryObj<typeof Separator>;

export const Primary: Story = {
  args: {
    children: "ou",
    bgcolor: "#e2e2e2"
  } as SeparatorProps,
}

export const Secondary: Story = {
  args: {

  } as SeparatorProps,
}

