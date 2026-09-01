type PulseDotProps = {
  size?: "sm" | "md";
  className?: string;
};

export function PulseDot({ size = "md", className = "" }: PulseDotProps) {
  const sizeClass = size === "sm" ? "h-1.5 w-1.5" : "h-[7px] w-[7px]";
  return (
    <span
      className={`pulse-dot shrink-0 rounded-full bg-positive ${sizeClass} ${className}`}
      aria-hidden="true"
    />
  );
}
