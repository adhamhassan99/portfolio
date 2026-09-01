"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { revealTransition } from "@/lib/motion/variants";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** `view` scroll-reveals once; `mount` animates on first paint. */
  trigger?: "view" | "mount";
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 14,
  trigger = "view",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reducedMotion = useReducedMotion();
  const isVisible = trigger === "mount" ? true : inView;

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </motion.div>
  );
}
