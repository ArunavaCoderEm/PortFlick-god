import { cn } from "../../lib/utils";

export const AnimatedShinyText = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      style={{
        "--shiny-width": `${shimmerWidth}px`,
      }}
      className={cn(
        "mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70",

        "animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

        "bg-gradient-to-r from-transparent via-white via-white to-transparent  dark:via-white",

        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
