"use client";

import { motion, useReducedMotion } from "motion/react";
import { pageEnterTransition } from "@/lib/motion/variants";

type PageTransitionProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageTransition({ children, className = "" }: PageTransitionProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={pageEnterTransition}
    >
      {children}
    </motion.div>
  );
}
