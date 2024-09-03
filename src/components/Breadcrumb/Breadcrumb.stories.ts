
import { Meta, StoryObj } from '@storybook/react';
import BreadCrumb from './index';
import { BreadCrumbProps } from './interfaces';

const meta: Meta<typeof BreadCrumb> = {
  title: 'Design System/BreadCrumb',
  component: BreadCrumb,
  tags: ["autodocs"],
} as Meta;

export default meta;
type Story = StoryObj<typeof BreadCrumb>;

export const Primary: Story = {
  args: {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Products', link: '/products' },
      { label: 'Shoes', link: '/products/shoes' },
      { label: 'Running Shoes' }
    ],
  } as BreadCrumbProps
}
