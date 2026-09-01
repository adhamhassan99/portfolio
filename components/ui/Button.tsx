"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { springSnappy } from "@/lib/motion/variants";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-solid text-ink-on-solid hover:bg-solid-hover active:bg-solid-active hover:-translate-y-0.5 active:scale-[0.985]",
  secondary:
    "border border-line-strong bg-transparent text-ink hover:bg-hover hover:border-ink active:bg-surface-sunken",
  ghost:
    "bg-transparent text-ink-2 hover:bg-hover hover:text-ink active:bg-surface-sunken",
};

type ButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  href?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> &
  Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">;

export function Button({
  variant = "primary",
  className = "",
  children,
  href,
  ...props
}: ButtonProps) {
  const reducedMotion = useReducedMotion();
  const classes = `inline-flex items-center justify-center h-11 px-5 rounded-sm text-sm font-medium tracking-wide no-underline transition-colors duration-[140ms] ease-out focus-visible:shadow-focus ${variantClasses[variant]} ${className}`;

  const motionProps = reducedMotion
    ? {}
    : {
        whileTap: { scale: 0.985 },
        transition: springSnappy,
      };

  if (href) {
    const linkProps = props as Omit<
      React.ComponentProps<typeof Link>,
      "href" | "className" | "children"
    >;
    return (
      <motion.span {...motionProps} className="inline-flex">
        <Link href={href} className={classes} {...linkProps}>
          {children}
        </Link>
      </motion.span>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <motion.button
      className={classes}
      {...motionProps}
      {...(buttonProps as object)}
    >
      {children}
    </motion.button>
  );
}
