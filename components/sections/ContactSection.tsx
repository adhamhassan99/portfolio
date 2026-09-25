import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PulseDot } from "@/components/ui/PulseDot";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { contact } from "@/lib/content/contact";
import { profileLinks } from "@/lib/content/site";

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
            <Button
              href={contact.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.calendarLabel}
              <span className="sr-only"> (opens in new tab)</span>
            </Button>
            <Button href={`mailto:${contact.email}`} variant="secondary">
              {contact.email}
            </Button>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-ink-muted">
            <span>{contact.bookingNote}</span>
            <span className="inline-flex items-center gap-2">
              <PulseDot size="sm" />
              {contact.responseTimePromise}
            </span>
            <span aria-hidden="true">·</span>
            {profileLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted no-underline transition-colors duration-[140ms] hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
