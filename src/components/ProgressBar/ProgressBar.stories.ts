import { StoryObj, Meta } from '@storybook/react';
import Progress from './index';
import { ProgressBarProps } from './types';

const meta: Meta<typeof Progress> = {
    title: 'Design System/Progress',
    component: Progress,
    tags: ["autodocs"]
}

export default meta;
type Story = StoryObj<typeof Progress>;


export const Default: Story = {
    args: {
        progress: 50,
        backgroundcolor: '#002ED0',
        width: '60px',
        height: '20px',
        borderradius: '5px'
    } as ProgressBarProps,
}