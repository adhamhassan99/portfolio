import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PulseDot } from "@/components/ui/PulseDot";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { contact } from "@/lib/content/contact";

export function ContactSection() {
  return (
    <section id="contact" className="py-section-lg">
      <Container>
        <SectionLabel index="08" label=" Contact" className="mb-block" />

        <Reveal y={20}>
          <h2 className="max-w-[24ch] text-h2 text-balance">
            {contact.headline}
          </h2>
          <p className="mt-6 max-w-[54ch] text-md text-pretty text-ink-2">
            {contact.firstCallDescription}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Button href={`mailto:${contact.email}`}>{contact.email}</Button>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted">
              <PulseDot size="sm" />
              {contact.responseTimePromise}
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
