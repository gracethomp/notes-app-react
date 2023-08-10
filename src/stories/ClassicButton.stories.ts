import type { Meta, StoryObj } from "@storybook/react";
import { ClassicButton } from "../components/buttons/ClassicButton";

import "../output.css";

const meta = {
  title: "Notes/ClassicButton",
  component: ClassicButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ClassicButton>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Accept: Story = {
  args: {
    text: "Accept",
    onClick: () => {
        console.log('Accept button clicked');
    }
  },
};

export const AddNewNote: Story = {
  args: {
    text: "Add new note",
    onClick: () => {
        console.log('Add new note button clicked');
    }
  },
};