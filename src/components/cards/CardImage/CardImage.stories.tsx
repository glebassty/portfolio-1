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
    classNameImage: " sm:w-[360px] sm:h-[306px] w-[200px] h-[170px]",
    title: "AI Music product",
    description: "UX Case study",
    children: <IconArrow />,
  },
};

export const WithMap: Story = {
  args: {
    imageSrc: "/img/group_2.png",
    imageAlt: "AI Map Redesign",
    classNameImage: "sm:w-[322px]  sm:h-[320px] w-[201px] h-[200px]",
    title: "AI Map redesign",
    description: "UX Case study",
    children: <IconArrow />,
  },
};

export const WithPhone: Story = {
  args: {
    imageSrc: "/img/product.png",
    imageAlt: "iOS Mobile App",
    classNameImage: "sm:w-[433px] sm:h-[886px] w-[239px] h-[489px]",
    title: "iOS Mobile app",
    description: "Product develop",
    children: <IconArrow />,
  },
};
