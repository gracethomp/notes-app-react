import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../components/modal/Modal";

import "../output.css";

const meta = {
  title: "Notes/Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Empty: Story = {
  args: {
    note: {
      id: 1,
      name: "",
      timeOfCreation: "",
      category: "",
      noteContent: "",
      datesMentioned: "",
      isArchived: false,
    },
    actionType: "Add",
    handleModalClose: () => {
      console.log("close modal");
    },
    action: () => {
      console.log("perform action");
    },
  },
};

export const Filled: Story = {
  args: {
    note: {
      id: 1,
      name: "Buy a ticket",
      timeOfCreation: "May 7, 2021, 17:54",
      category: "Idea",
      noteContent: "I have to buy a ticket.",
      datesMentioned: "",
      isArchived: false,
    },
    actionType: "Edit",
    handleModalClose: () => {
      console.log("close modal");
    },
    action: () => {
      console.log("perform action");
    },
  },
};
