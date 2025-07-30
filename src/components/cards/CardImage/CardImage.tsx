import type { CardTitleProps } from "@/lib/types";
import React from "react";
import { CardTitle } from "../CardTitle/CardTitle";
import Image from "next/image";
import { cn } from "@/lib/utils";

type CardImageProps = {
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
} & React.HTMLAttributes<HTMLDivElement> &
  CardTitleProps;

export const CardImage = ({
  imageSrc,
  imageAlt,
  imageWidth = 360,
  imageHeight = 300,
  className,
  ...cardTitleProps
}: CardImageProps) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <CardTitle
        {...cardTitleProps}
        className="flex items-center justify-between"
      />
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className="rounded-2xl object-cover"
      />
    </div>
  );
};
