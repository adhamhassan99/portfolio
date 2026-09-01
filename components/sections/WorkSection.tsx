import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/content/projects";

export function WorkSection() {
  return (
    <section id="work" className="pb-section">
      <Container>
        <SectionLabel index="03" label=" Selected work" className="mb-0" />

        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.07}>
            <Link
              href={project.href}
              className="prow grid grid-cols-[3.5rem_1fr_auto] items-start gap-4 border-b border-line px-3 py-7 text-inherit no-underline"
            >
              <span className="pt-1.5 font-mono text-xs text-ink-muted">
                {project.index}
              </span>
              <span className="flex min-w-0 flex-col gap-1.5">
                <span className="flex flex-wrap items-baseline gap-3">
                  <span className="font-display text-xl leading-snug">
                    {project.title}
                  </span>
                  <span className="font-mono text-2xs tracking-label uppercase text-ink-muted">
                    {project.clientShort}
                  </span>
                </span>
                <span className="max-w-[54ch] text-base text-ink-2">
                  {project.outcome}
                </span>
                <span className="prow-tags mt-1 font-mono text-xs text-ink-muted">
                  {project.tags.join(" · ")}
                </span>
              </span>
              <span className="prow-arrow pt-1 text-lg text-ink-muted">→</span>
            </Link>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
