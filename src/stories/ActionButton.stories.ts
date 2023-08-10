import type { Meta, StoryObj } from "@storybook/react";
import { ActionButton } from "../components/buttons/ActionButton";
import archive from '../assets/archive.svg'
import pen from '../assets/pen.svg'
import trash from '../assets/trash.svg'

import "../output.css";

const meta = {
  title: "Notes/ActionButton",
  component: ActionButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ActionButton>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Archive: Story = {
  args: {
    icon: archive,
    alt: "archive",
  },
};

export const Edit: Story = {
  args: {
    icon: pen,
    alt: "pen",
  },
};

export const Delete : Story = {
    args: {
        icon: trash,
        alt: "trash",
      },
}