import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { trustEmployers } from "@/lib/content/projects";

export function TrustSection() {
  return (
    <section id="trust" className="pb-section">
      <Container>
        <SectionLabel index="02" label=" Trust" className="mb-8" />
        <div className="flex flex-wrap items-baseline gap-x-12 gap-y-4">
          {trustEmployers.map((employer, i) => (
            <Reveal key={employer.name} delay={i * 0.08}>
              <Link
                href={employer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tlogo text-md font-semibold text-ink no-underline"
              >
                {employer.name}
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
