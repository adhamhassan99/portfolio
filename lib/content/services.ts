export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Full-stack product development",
    description:
      "From API design to deployed UI — web and mobile on TypeScript, React, Next.js, Node.js, React Native, and Python.",
  },
  {
    title: "Architecture & technical planning",
    description:
      "System design, stack decisions, and implementation roadmaps — including AI agent integrations, MCP connectors, and gov/enterprise API work.",
  },
  {
    title: "Codebase audit & rescue",
    description:
      "Review existing code, surface risks, and propose a clear path forward before a major refactor or hire.",
  },
  {
    title: "Technical advisory",
    description:
      "Fractional senior capacity for startups and agencies that need experienced judgment without a full-time hire.",
  },
];

export const disqualifier =
  "This isn't a fit if you're looking for the cheapest developer or a body to execute tickets without context. I work best with founders and teams who want a senior engineer to think with them — not just type for them. If you need high-volume, low-cost output, there are better options than me.";
