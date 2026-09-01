import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { stackItems } from "@/lib/content/stack";

export function StackSection() {
  return (
    <section id="stack" className="pb-section">
      <Container>
        <SectionLabel
          index="06"
          label=" Stack"
          className="mb-0"
          trailing={
            <span className="ml-auto tracking-label">Years in production</span>
          }
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-16">
          {stackItems.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05}>
              <div className="strow flex items-baseline justify-between gap-4 border-b border-line-subtle px-2 py-3">
                <span className="text-[0.9375rem] font-medium">{item.name}</span>
                <span className="syrs font-mono text-xs text-ink-muted">
                  {item.years}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
