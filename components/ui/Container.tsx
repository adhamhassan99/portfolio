type ContainerProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  narrow?: boolean;
  content?: boolean;
  wide?: boolean;
};

export function Container({
  children,
  as: Component = "div",
  className = "",
  narrow,
  content,
  wide,
}: ContainerProps) {
  const maxWidth = narrow
    ? "max-w-narrow"
    : content
      ? "max-w-content"
      : wide
        ? "max-w-wide"
        : "max-w-page";

  return (
    <Component
      className={`mx-auto w-full px-gutter ${maxWidth} ${className}`}
    >
      {children}
    </Component>
  );
}
