import type { Meta, StoryObj } from "@storybook/nextjs";

import { Logo } from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "ui/Logo",
  component: Logo,
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Primary: Story = {};
