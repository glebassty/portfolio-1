import type { Meta, StoryObj } from "@storybook/nextjs";

import { PlusIcon, CopyIcon } from "@radix-ui/react-icons";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "ui/Buttons/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Hire me",
    icon: PlusIcon,
  },
};

export const Secondary: Story = {
  args: {
    children: "Copy Email",
    icon: CopyIcon,
    className:
      "bg-primary border-border-primary hover:bg-hover-primary text-text-secondary",
    dividerClassName: "bg-border-primary",
  },
};
