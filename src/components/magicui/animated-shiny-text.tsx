import { cn } from "@/lib/utils";
import { AnimatedShinyTextProps } from "@/types/types";

export const AnimatedShinyText: React.FC<AnimatedShinyTextProps> = ({
  children,
  className = "",
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      style={{
        backgroundSize: `${shimmerWidth}px 100%`,
        backgroundPosition: "-200% 0",
      }}
      className={cn(
        "mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70",
        "bg-clip-text bg-no-repeat animate-shiny-text",
        "bg-gradient-to-r from-transparent via-white to-transparent dark:via-white",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
