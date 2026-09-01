export const springSnappy = { type: "spring" as const, stiffness: 400, damping: 30 };
export const springGentle = { type: "spring" as const, stiffness: 260, damping: 28 };
export const springSoft = { type: "spring" as const, stiffness: 180, damping: 24 };

export const revealTransition = {
  duration: 0.7,
  ease: [0.2, 0.9, 0.1, 1] as const,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export const hairlineDraw = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1 },
};

export const instant = { duration: 0 };

export const pageEnterTransition = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const pageExitTransition = {
  duration: 0.16,
  ease: [0.22, 1, 0.36, 1] as const,
};
