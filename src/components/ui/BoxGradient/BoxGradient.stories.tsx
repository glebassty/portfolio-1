import type { Meta, StoryObj } from "@storybook/nextjs";
import { BoxGradient } from "./BoxGradient";

const meta: Meta<typeof BoxGradient> = {
  title: "ui/BoxGradient",
  component: BoxGradient,
};

export default meta;

type Story = StoryObj<typeof BoxGradient>;

export const WithBorderGradient: Story = {
  args: {
    children: (
      <span className="text-lg font-medium text-white">Product design</span>
    ),
    className: "w-[300px] h-[100px] flex items-center justify-center",
    angle: 249.05,
    from: "#E63E21",
    to: "rgba(230, 62, 33, 0)",
    fallbackColor: "#1B1B1B",
    borderFrom: "#E63E21",
    borderTo: "#262626",
    borderGradient: true,
  },
};
