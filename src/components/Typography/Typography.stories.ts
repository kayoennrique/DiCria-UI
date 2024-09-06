
import { Meta, StoryObj } from '@storybook/react'
import Typography from './index';
import { TypographyProps } from './interfaces';

const meta: Meta<typeof Typography> = {
  title: "Design System/Typography",
  component: Typography,
  argTypes: {
    size: {
      type: 'string'
    },
    fontfamily: {
      type: 'string'
    },
  },
  tags: ["autodocs"],
}

export default meta;

export const Primary: StoryObj<TypographyProps> = {
  args: {
    size: '24px',
    children: "Primary Text",
    as: "p"
  }
};

export const Secondary: StoryObj<TypographyProps> = {
  args: {
    size: '2em',
    children: "Secondary Text",
    as: "a"
  }
}

export const Tertiary: StoryObj<TypographyProps> = {
  args: {
    size: '3rem',
    children: "Tertiary Text",
    as: "h1",
  }
};
