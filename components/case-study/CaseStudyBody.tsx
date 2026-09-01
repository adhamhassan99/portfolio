"use client";

import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { parseSectionLabel } from "@/lib/content/section-label";
import type { CaseStudySection } from "@/lib/content/projects";

type CaseStudyBodyProps = {
  sections: CaseStudySection[];
};

export function CaseStudyBody({ sections }: CaseStudyBodyProps) {
  return (
    <Container as="article" content className="py-section">
      <div className="flex flex-col gap-[clamp(3rem,2rem+3vw,5rem)]">
        {sections.map((section, i) => {
          const { index, label } = parseSectionLabel(section.label);
          return (
            <Reveal key={section.label} delay={i * 0.04}>
              <section>
                <SectionLabel
                  index={index}
                  label={` ${label}`}
                  className="mb-6"
                  hairlineOnView
                />
                {section.paragraphs.map((paragraph, pi) => (
                  <p
                    key={pi}
                    className={`max-w-prose text-pretty ${pi > 0 ? "mt-6" : ""}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            </Reveal>
          );
        })}
      </div>
    </Container>
  );
}
