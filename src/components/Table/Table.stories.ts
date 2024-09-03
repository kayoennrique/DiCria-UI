import { Meta, StoryObj } from "@storybook/react";
import Table from './index';
import { TableProps } from "./types";

const meta: Meta<typeof Table> = {
  title: 'Design System/Table',
  component: Table,
  argTypes: {
    bgzebracolor: {
      type: "string",
    },
    bordercollapse: {
      type: "string",
    },
    bgcolor: {
      type: "string",
    },
    paddingrows: {
      type: "string",
    },
    fontsizecolumn: {
      type: "string",
    },
    fontsizerow: {
      type: "string",
    },
  },
  tags: ["autodocs"],
}

export default meta;
type Story = StoryObj<typeof Table>;

const data = [
  { id: 1, name: "João", age: 25 },
  { id: 2, name: "Maria", age: 30 },
  { id: 3, name: "Pedro", age: 40 },
  { id: 4, name: "Ana", age: 35 },
  { id: 5, name: "Lucas", age: 28 },
];

const columns = [
  {
    key: 'id', 
    header: 'ID',
    bgcolumncolor: '#84B8FF',
    textcolumncolor: '#1E293B', 
    widthpercentage: '10%',
    aligncolumn: 'center',
    alignrow: 'center',
  },
  { 
    key: 'name', 
    header: 'Name', 
    bgcolumncolor: '#84B8FF',
    textcolumncolor: '#1E293B',
    widthpercentage: '40%', 
    aligncolumn: 'left',
    alignrow: 'left',
  },
  { 
    key: 'age', 
    header: 'Age', 
    bgcolumncolor: '#84B8FF',
    textcolumncolor: '#1E293B',
    widthpercentage: '50%', 
    aligncolumn: 'center',
    alignrow: 'center'
  }
];

export const Primary: Story = {
  args: {
    data: data,
    columns: columns
  } as TableProps,
}
