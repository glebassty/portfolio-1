import { cn } from "@/lib/utils";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import React from "react";

type IconArrowProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const IconArrow = ({ className, ...props }: IconArrowProps) => {
  return (
    <div
      className={cn(
        "bg-secondary sm: flex h-5.5 w-5.5 items-center justify-center rounded-full sm:h-10 sm:w-10",
        className,
      )}
      {...props}
    >
      <ArrowTopRightIcon className="text-text-primary h-3 w-3 sm:h-5 sm:w-5" />
    </div>
  );
};
