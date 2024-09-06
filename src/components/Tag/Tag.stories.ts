import { Meta, StoryObj } from '@storybook/react';
import { TagProps } from './interfaces';
import Tag from './index';

const meta: Meta<typeof Tag> = {
  title: 'Design System/Tag',
  component: Tag,
  argTypes: {
    onClick: { action: "clicked" },
    text: {
      type: 'string'
    },
    fontfamily: {
      type: 'string'
    },
  },
  tags: ["autodocs"],
}

export default meta;
type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
  args: {
    text: 'Example',
  } as TagProps
}
