export type ProcessPhase = {
  index: string;
  title: string;
  description: string;
};

export const processPhases: ProcessPhase[] = [
  {
    index: "01",
    title: "Discovery",
    description:
      "A free 30-minute call to understand your product, team, constraints, and what success looks like. No pitch deck — just clarity on whether there's a fit.",
  },
  {
    index: "02",
    title: "Scope & plan",
    description:
      "A written brief: approach, timeline, deliverables, and explicit out-of-scope items. You know exactly what you're buying before any code is written.",
  },
  {
    index: "03",
    title: "Build & iterate",
    description:
      "Hands-on delivery with regular checkpoints and demos. You see working software early, not a big reveal at the end.",
  },
  {
    index: "04",
    title: "Handoff",
    description:
      "Documentation, knowledge transfer, and clean handoff. You keep all code, configs, and decisions recorded.",
  },
];
