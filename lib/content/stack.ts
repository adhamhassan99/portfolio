export type StackItem = {
  name: string;
  years: number;
  notes?: string;
};

export const stackItems: StackItem[] = [
  { name: "TypeScript", years: 5, notes: "Primary language" },
  { name: "React", years: 5, notes: "Web UI — including Flowlens, AI Studio" },
  { name: "Node.js", years: 5, notes: "APIs and services" },
  { name: "Next.js", years: 4, notes: "SSR, App Router, full-stack web" },
  { name: "Python", years: 4, notes: "Backend services, AI/ML-adjacent work" },
  { name: "React Native", years: 3, notes: "Saudi Real Estate (primary), El Gouna App" },
  { name: "AWS", years: 3, notes: "Deploy, CI/CD, managed services" },
  { name: "PostgreSQL", years: 4, notes: "Primary relational DB" },
  { name: "REST / Government APIs", years: 5, notes: "KSA gov integration, banking (Telemoney)" },
  { name: "LLM / MCP integrations", years: 2, notes: "AI Studio agent marketplace" },
  { name: "Git / CI (GitHub Actions)", years: 5, notes: "Pipelines, automation" },
];
