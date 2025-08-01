import type { Meta, StoryObj } from "@storybook/nextjs";

import { PlusIcon, CopyIcon } from "@radix-ui/react-icons";
import { HeroSection } from "./HeroSection";

const meta: Meta<typeof HeroSection> = {
  title: "cards/HeroSection",
  component: HeroSection,
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    position: "Frontend Developer",
    name: "Giovanni Prestorichini",
    description:
      "Hello, I'm Giovanni, a passionate frontend developer with a knack for creating beautiful and functional web applications. I love turning ideas into reality with code.",
  },
};
