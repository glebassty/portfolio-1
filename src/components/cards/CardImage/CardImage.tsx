import type { CardTitleProps } from "@/lib/types";
import React from "react";
import { CardTitle } from "../CardTitle/CardTitle";
import Image from "next/image";
import { cn } from "@/lib/utils";

type CardImageProps = {
  imageSrc: string;
  imageAlt: string;
  classNameImage: string;
} & React.HTMLAttributes<HTMLDivElement> &
  CardTitleProps;

export const CardImage = ({
  imageSrc,
  imageAlt,
  className,
  classNameImage,
  ...cardTitleProps
}: CardImageProps) => {
  return (
    <div className={cn("bg-card flex flex-col", className)}>
      <CardTitle
        {...cardTitleProps}
        className="flex items-center justify-between"
      />
      <div className="flex w-full justify-center">
        <div className={cn("relative w-full overflow-hidden", classNameImage)}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain object-top"
          />
        </div>
      </div>
    </div>
  );
};
