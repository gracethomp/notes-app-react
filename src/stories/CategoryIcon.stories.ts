import type { Meta, StoryObj } from "@storybook/react";
import { CategoryIcon } from "../components/icons/CategoryIcon";

import "../output.css";

const meta = {
  title: "Notes/CategoryIcon",
  component: CategoryIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CategoryIcon>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Task: Story = {
  args: {
    category: "Task",
  },
};

export const RandomThought: Story = {
  args: {
    category: "Random Thought",
  },
};

export const Idea: Story = {
  args: {
    category: "Idea",
  },
};
