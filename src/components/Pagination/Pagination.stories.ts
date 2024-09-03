import { StoryObj, Meta } from '@storybook/react';
import Pagination from './index';
import { PaginationProps } from './types';

const meta: Meta<typeof Pagination> = {
  title: 'Design System/Pagination',
  component: Pagination,
  argTypes: {
    totalpages: { control: 'number' },
  },
  tags: ["autodocs"]
}

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    totalpages: 5,
    active: true,
    borderradius: '8px',
    activecolor: '#fff',
    bgcolor: '#007bff',
    hoverbgcolor: '#0056b3',
    disablebgcolor: '#ccc',
    disablecolor: '#000',
    disablehovercolor: '#aaa',
  } as PaginationProps
} 