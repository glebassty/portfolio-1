import type { Meta, StoryObj } from "@storybook/nextjs";

import { GlobeIcon } from "@radix-ui/react-icons";
import { BoxGradient } from "./BoxGradient";

const meta: Meta<typeof BoxGradient> = {
  title: "ui/BoxGradient",
  component: BoxGradient,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BoxGradient>;

export const Default: Story = {
  args: {
    children: "Available for job",
    icon: GlobeIcon,
  },
};
