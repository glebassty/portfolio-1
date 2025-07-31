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
    <div
      className={cn(
        "border-border-primary bg-bg-primary flex flex-col rounded-lg border-2",
        className,
      )}
    >
      <CardTitle
        classNameText="font-semibold"
        {...cardTitleProps}
        className="flex items-center justify-between px-7.5 pt-6.5 sm:px-13.5 sm:pt-12.5"
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
