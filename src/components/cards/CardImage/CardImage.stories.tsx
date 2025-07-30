import type { Meta, StoryObj } from "@storybook/nextjs";

import { CardImage } from "./CardImage";
import { IconArrow } from "@/components/ui/IconArrow/IconArrow";

const meta: Meta<typeof CardImage> = {
  title: "cards/CardImage",
  component: CardImage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CardImage>;

export const Default: Story = {
  args: {
    imageSrc: "/img/group_1.png",
    imageAlt: "Image of a group",
    imageWidth: 360,
    imageHeight: 300,
    title: "Card Title",
    description: "This is a description of the card.",
    children: <IconArrow />,
  },
};
export const WithLongImage: Story = {
  args: {
    imageSrc: "/img/product.png",
    imageAlt: "Product Image",
    imageWidth: 360,
    imageHeight: 300,
  },
};
