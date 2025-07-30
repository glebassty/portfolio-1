import { cn } from "@/lib/utils";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import React from "react";

type IconArrowProps = {
  classNameIcon?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const IconArrow = ({
  className,
  classNameIcon,
  ...props
}: IconArrowProps) => {
  return (
    <div
      className={(cn("h-5.5 w-5.5 rounded-full sm:h-5.5 sm:w-5.5"), className)}
      {...props}
    >
      <ArrowTopRightIcon className={(cn("sm:4.5 h-2.5"), classNameIcon)} />
    </div>
  );
};
