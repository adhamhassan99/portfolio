import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { services, disqualifier } from "@/lib/content/services";

export function ServicesSection() {
  return (
    <section id="services" className="py-section">
      <Container>
        <SectionLabel index="05" label=" Services" className="mb-0" />

        <div className="flex flex-col">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.07}>
              <div className="srow grid grid-cols-1 gap-4 border-b border-line-subtle py-6 md:grid-cols-[minmax(200px,18rem)_1fr] md:gap-x-12">
                <span className="text-md font-semibold">{service.title}</span>
                <span className="max-w-prose text-base text-ink-2">
                  {service.description}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={0.38}
          className="mt-block max-w-[54ch] border-l-2 border-line-strong py-0 pl-6 font-display text-[clamp(1.25rem,1.1rem+0.7vw,1.625rem)] italic leading-snug text-pretty text-ink"
        >
          {disqualifier}
        </Reveal>
      </Container>
    </section>
  );
}
