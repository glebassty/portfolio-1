import { cn } from "@/lib/utils";

type BoxGradientProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const BoxGradient = ({
  children,
  className,
  ...props
}: BoxGradientProps) => {
  return (
    <div
      className={cn(
        "border-border-primary bg-bg-primary rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
