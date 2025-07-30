import type { CardTitleProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export const CardTitle = ({
  title,
  description,
  className,
  classNameText,
  children,
  ...props
}: CardTitleProps) => {
  return (
    <div
      className={cn(
        "flex cursor-pointer items-center justify-between",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col items-stretch">
        <h2
          className={cn(
            "text-text-primary hover:text-secondary text-base transition-colors duration-300 ease-in-out sm:text-2xl",
            classNameText,
          )}
        >
          {title}
        </h2>
        <p className="text-text-secondary text-base sm:text-xl">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
};
