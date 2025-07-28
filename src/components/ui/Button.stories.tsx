// src/components/ui/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { PlusIcon } from "@radix-ui/react-icons";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Hire me",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Hire me",
    icon: <PlusIcon className="h-5 w-5 text-white" />,
  },
};
