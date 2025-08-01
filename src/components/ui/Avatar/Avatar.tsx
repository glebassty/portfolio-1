import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type AvatarProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const Avatar = ({ className, ...props }: AvatarProps) => {
  return (
    <div
      className={cn(
        "border-border-avatar bg-bg-avatar relative h-44.5 w-44.5 rounded-full border-2 p-2.5",
        className,
      )}
      {...props}
    >
      <Image src="/img/avatar.png" fill alt="Avatar" />
    </div>
  );
};
