import { Meta, StoryObj } from '@storybook/react'
import Link from './index'
import { LinkProps } from './types';

const meta: Meta<typeof Link> = {
  title: 'Design System/Link',
  component: Link,
  argTypes: {
    children: {
      type: 'string'
    },
    href: {
      type: 'string'
    },
    disabled: {
      type: 'boolean'
    },
  },
  tags: ["autodocs"],
}

export default meta;
type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    children: 'Link',
    href: '/',
    disabled: false
  } as LinkProps,
}

export const Disabled: StoryObj<LinkProps> = {
  args: {
    children: 'Link',
    href: '/',
    disabled: true
  } as LinkProps,
}