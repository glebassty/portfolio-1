import type { Meta, StoryObj } from "@storybook/nextjs";

import { BoxGradient } from "./BoxGradient";

const meta: Meta<typeof BoxGradient> = {
  title: "ui/BoxGradient",
  component: BoxGradient,
};

export default meta;
type Story = StoryObj<typeof BoxGradient>;

export const VariantPaddingOne: Story = {
  args: {
    children: "Box Gradient",
    className: "sm:py-15 py-8 text-center text-sm sm:text-2xl",
  },
};
