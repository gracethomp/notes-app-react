import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "../components/modal/Form";
import { Note } from "../types/Note";

import "../output.css";

const meta = {
    title: "Notes/Form",
    component: Form,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Form>;
type Story = StoryObj<typeof meta>;

export default meta;



export const Empty: Story = {
    args: {
        note: {
            id: 1,
            name: "",
            timeOfCreation: "",
            category: "Task",
            noteContent: "",
            datesMentioned: "",
            isArchived: false
        }
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
            isArchived: false
        }
    },
};