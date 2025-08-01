import { cn } from "@/lib/utils";
import React from "react";

type CopyrightProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const Copyright = ({ children, className }: CopyrightProps) => {
  return <p className={cn("text-secondary", className)}>{children}</p>;
};
