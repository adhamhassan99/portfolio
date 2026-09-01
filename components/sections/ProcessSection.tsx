import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { processPhases } from "@/lib/content/process";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="border-y border-line-subtle bg-surface-2 py-section"
    >
      <Container>
        <SectionLabel index="04" label=" Process" className="mb-block" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-block">
          {processPhases.map((phase, i) => (
            <Reveal key={phase.index} delay={i * 0.07} className="pblock flex flex-col gap-2.5">
              <span className="pidx font-mono text-xs font-medium text-ink-muted">
                {phase.index}
              </span>
              <span className="ptitle font-display text-lg">{phase.title}</span>
              <span className="text-[0.9375rem] text-ink-2">{phase.description}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
