import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../layout/Header";

import "../output.css";

const meta = {
    title: "Notes/Header",
    component: Header,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;



export const Main: Story = {
    args: {
        onArchiveClick: () => {
            console.log("archive clicked")
        },
        onNoteListClick: () => {
            console.log("my notes clicked")
        }
    },
};

