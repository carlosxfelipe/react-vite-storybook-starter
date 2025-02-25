import type { Meta, StoryObj } from "@storybook/react";
import HelloWorld from "../components/HelloWorld";

const meta: Meta<typeof HelloWorld> = {
  title: "Example/HelloWorld",
  component: HelloWorld,
};

export default meta;

type Story = StoryObj<typeof HelloWorld>;

export const Default: Story = {
  args: {
    name: "World",
  },
};

export const CustomName: Story = {
  args: {
    name: "Storybook",
  },
};
