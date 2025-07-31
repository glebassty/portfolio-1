import { cn } from "@/lib/utils";
import React from "react";

type BoxGradientProps = {
  angle?: number;
  from?: string;
  to?: string;
  fallbackColor?: string;
  gradientOpacity?: number;
  borderFrom?: string;
  borderTo?: string;
  borderGradient?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const BoxGradient = ({
  children,
  className,
  angle = 249.05,
  from = "rgba(230, 62, 33, 0.2)",
  to = "rgba(230, 62, 33, 0)",
  fallbackColor = "#1B1B1B",
  gradientOpacity = 1,
  borderFrom = "#E63E21",
  borderTo = "#262626",
  borderGradient = true,
  style,
  ...props
}: BoxGradientProps) => {
  const backgroundGradient = `linear-gradient(${angle}deg, ${from} 18.59%, ${to} 53.25%)`;

  const borderStyle = borderGradient
    ? {
        borderWidth: "2px",
        borderStyle: "solid",
        borderImage: `linear-gradient(${angle}deg, ${borderFrom}, ${borderTo}) 1`,
      }
    : {
        border: "2px solid #262626",
      };

  return (
    <div
      className={cn("relative overflow-hidden rounded-[14px]", className)}
      style={{
        backgroundColor: fallbackColor,
        ...borderStyle,
        ...style,
      }}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: backgroundGradient,
          opacity: gradientOpacity,
          zIndex: 0,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
