import { cn } from "@/lib/utils";
import type { ElementType } from "react";

type LabelProps = {
  icon: ElementType;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Label = ({
  icon: Icon,
  className,
  children,
  ...props
}: LabelProps) => {
  return (
    <div className={(cn(""), className)} {...props}>
      <Icon className="" />
      {children}
    </div>
  );
};
