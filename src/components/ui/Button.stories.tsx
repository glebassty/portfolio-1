// src/components/ui/Button.stories.tsx

import type { Meta, StoryObj } from "@storybook/nextjs";
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
    icon: PlusIcon, // ✅ передаём сам компонент
  },
};

export const WithIcon: Story = {
  args: {
    children: "Hire me",
    icon: PlusIcon, // ✅ передаём сам компонент
  },
};
