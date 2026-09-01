"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { hairlineDraw, revealTransition } from "@/lib/motion/variants";

type HairlineProps = {
  className?: string;
  animated?: boolean;
  triggerOnView?: boolean;
  delay?: number;
};

export function Hairline({
  className = "",
  animated = false,
  triggerOnView = false,
  delay = 0.06,
}: HairlineProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reducedMotion = useReducedMotion();
  const isVisible = triggerOnView ? inView : true;

  if (!animated || reducedMotion) {
    return (
      <span
        className={`block h-px bg-line ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <motion.span
      ref={triggerOnView ? ref : undefined}
      className={`block h-px origin-left bg-line ${className}`}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={hairlineDraw}
      transition={{ ...revealTransition, delay }}
      aria-hidden="true"
    />
  );
}
