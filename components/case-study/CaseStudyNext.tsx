"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type CaseStudyNextProps = {
  slug: string;
  title: string;
};

export function CaseStudyNext({ slug, title }: CaseStudyNextProps) {
  return (
    <Reveal>
      <Link
        href={`/work/${slug}`}
        className="nextrow block border-t border-line text-inherit no-underline"
      >
        <Container className="flex items-baseline justify-between gap-4 py-10">
          <span className="flex flex-col gap-1.5">
            <span className="font-mono text-2xs tracking-label uppercase text-ink-muted">
              Next case study
            </span>
            <span className="font-display text-xl">{title}</span>
          </span>
          <span className="prow-arrow text-lg text-ink-muted">→</span>
        </Container>
      </Link>
    </Reveal>
  );
}
