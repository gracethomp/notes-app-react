import { storiesOf } from "@storybook/react";
import type { Meta, StoryObj } from "@storybook/react";
import { AcceptButton } from "../components/buttons/AcceptButton";

import "../output.css";

const meta = {
  title: "Example/FunctionalButton",
  component: AcceptButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AcceptButton>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {
    text: "Accept",
  },
};
