import type { Meta, StoryObj } from "@storybook/react";
import { TableTitle } from "../components/table/TableTitle";

import "../output.css";

const meta = {
  title: "Notes/TableTitle",
  component: TableTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TableTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MyNotes: Story = {
  args: {
    tableTitle: "My Notes",
    hasAction: true,
    handleAddClick: () => {
      console.log("add button clicked");
    },
  },
};

export const Archive: Story = {
  args: {
    tableTitle: "Archive",
    hasAction: true,
    handleAddClick: () => {
      console.log("add button clicked");
    },
  },
};
