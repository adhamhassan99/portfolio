import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PulseDot } from "@/components/ui/PulseDot";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { intro } from "@/lib/content/projects";
import { site } from "@/lib/content/site";

function EmployerLink({ name, url }: { name: string; url: string }) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="hero-link"
    >
      {name}
    </Link>
  );
}

export function IntroSection() {
  return (
    <header id="intro" className="py-section-lg">
      <Container>
        <SectionLabel
          index="01"
          label=" Intro"
          className="mb-block"
          trailing={
            <Reveal
              delay={0.06}
              className="ml-auto inline-flex items-center gap-2 tracking-label text-ink-2"
            >
              <PulseDot />
              {site.availability}
            </Reveal>
          }
        />

        <h1 className="max-w-[28ch] text-[clamp(2.25rem,5vw+1rem,3.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-balance">
          {intro.sentence}{" "}
          <EmployerLink {...intro.current} />
          {intro.previouslyPrefix}{" "}
          {intro.previous.map((emp, i) => (
            <span key={emp.name}>
              {i > 0 && (i === intro.previous.length - 1 ? ", and " : ", ")}
              <EmployerLink {...emp} />
            </span>
          ))}
          .
        </h1>

        <div className="mt-block flex flex-wrap items-center gap-5">
          <Reveal delay={0.2}>
            <Button
              href={site.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.ctaLabel}
              <span className="sr-only"> (opens in new tab)</span>
            </Button>
          </Reveal>
          <Reveal delay={0.12} className="text-[0.9375rem] text-ink-2">
            {intro.trustLine}
          </Reveal>
        </div>
      </Container>
    </header>
  );
}
