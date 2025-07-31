import type { Meta, StoryObj } from "@storybook/nextjs";

import { IconArrow } from "./IconArrow";

const meta: Meta<typeof IconArrow> = {
  title: "cards/IconArrow",
  component: IconArrow,
};

export default meta;
type Story = StoryObj<typeof IconArrow>;

export const Default: Story = {
  args: {
    className: "bg-green-500",
  },
};
