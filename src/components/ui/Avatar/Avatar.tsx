import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type AvatarProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const Avatar = ({ className, ...props }: AvatarProps) => {
  return (
    <div
      className={cn(
        "border-border-avatar b bg-bg-avatar relative h-20 w-20 rounded-full border-2 p-1 sm:h-44.5 sm:w-44.5 sm:p-2.5",
        className,
      )}
      {...props}
    >
      <div className="relative h-full w-full overflow-hidden rounded-full">
        <Image src="/img/avatar.png" fill alt="Avatar" />
      </div>
    </div>
  );
};
