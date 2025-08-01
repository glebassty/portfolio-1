import type { Meta, StoryObj } from "@storybook/nextjs";

import { WorkSection } from "./WorkSection";

const meta: Meta<typeof WorkSection> = {
  title: "ui/WorkSection",
  component: WorkSection,
};

export default meta;
type Story = StoryObj<typeof WorkSection>;

export const Default: Story = {
  args: {
    title: "Work Experience",
  },
};
