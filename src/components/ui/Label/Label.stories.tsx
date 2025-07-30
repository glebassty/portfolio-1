import type { Meta, StoryObj } from "@storybook/nextjs";

import { GlobeIcon } from "@radix-ui/react-icons";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "ui/Label",
  component: Label,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Available for job",
    icon: GlobeIcon,
  },
};
