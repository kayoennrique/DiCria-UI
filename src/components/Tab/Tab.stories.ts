
import { Meta, StoryObj } from '@storybook/react';
import Tab from './index';
import { TabProps } from './types';

const meta: Meta<typeof Tab> = {
  title: 'Design System/Tab',
  component: Tab,
  argTypes: {
    bgcolor: {
      type: "string",
    },
    activebgcolor: {
      type: "string",
    },
    hoverbgcolor: {
      type: "string",
    },
    listitemtextcolor: {
      type: "string",
    },
    containertextcolor: {
      type: "string",
    },
    alignitems: {
      type: "string",
    },
    width: {
      type: "string",
    },
    height: {
      type: "string",
    },
  },
  tags: ["autodocs"],
}

export default meta;
type Story = StoryObj<typeof Tab>;

export const Primary: Story = {
  args: {
    active: true,
    tabs: [
      {
        title: 'Agile',
        content: 'Conteúdo da Tab 1',
      },
      {
        title: 'Times',
        content: 'Conteúdo da Tab 2',
      },
      {
        title: 'Projetos',
        content: 'Conteúdo da Tab 3',
      },
      {
        title: 'Tarefas',
        content: 'Conteúdo da Tab 4',
      },
    ],
  } as TabProps
}

export const Secondary: Story = {
  args: {
    active: false,
    tabs: [
      {
        title: 'Agile',
        content: 'Conteúdo da Tab 1',
      },
      {
        title: 'Times',
        content: 'Conteúdo da Tab 2',
      },
      {
        title: 'Projetos',
        content: 'Conteúdo da Tab 3',
      },
      {
        title: 'Tarefas',
        content: 'Conteúdo da Tab 4',
      },
    ],
  } as TabProps
}
