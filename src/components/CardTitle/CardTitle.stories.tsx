import type { Meta, StoryObj } from "@storybook/nextjs";

import { CardTitle } from "./CardTitle";
import { IconArrow } from "../ui/IconArrow/IconArrow";

const meta: Meta<typeof CardTitle> = {
  title: "cards/CardTitle",
  component: CardTitle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CardTitle>;

export const Default: Story = {
  args: {
    title: "Figma",
    description: "Designing and prototyping",
    children: "Figma",
  },
};

export const WithIcon: Story = {
  args: {
    title: "Figma",
    description: "Designing and prototyping",
    children: <IconArrow />,
  },
  render: (args) => (
    // <div className="bg-primary">
    <CardTitle {...args} />
    // </div>
  ),
};
