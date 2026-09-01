"use client";

import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/lib/content/projects";

const metaFields = [
  ["Client", "client"],
  ["Role", "role"],
  ["Stack", "stack"],
  ["Status", "status"],
] as const;

type CaseStudyHeaderProps = {
  project: Project;
};

export function CaseStudyHeader({ project }: CaseStudyHeaderProps) {
  return (
    <header className="py-section pb-block">
      <Container>
        <SectionLabel
          index="Case study"
          label={` ${project.caseStudyNumber}`}
          className="mb-block"
        />
        <h1 className="text-h1">{project.title}</h1>

        <Reveal trigger="mount" delay={0.1}>
          <p className="mt-5 max-w-[54ch] text-lg leading-snug text-pretty text-ink-2">
            {project.lead}
          </p>
        </Reveal>

        <div className="mt-block grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-x-8 gap-y-6 border-t border-line pt-6">
          {metaFields.map(([label, key], i) => (
            <Reveal key={key} trigger="mount" delay={0.15 + i * 0.06}>
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-2xs tracking-label uppercase text-ink-muted">
                  {label}
                </span>
                <span
                  className={
                    key === "stack"
                      ? "font-mono text-[0.8125rem] text-ink-2"
                      : "text-[0.9375rem]"
                  }
                >
                  {project.meta[key]}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </header>
  );
}
