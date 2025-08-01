import type { Meta, StoryObj } from "@storybook/nextjs";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "ui/Avatar",
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    className: "",
  },
};
