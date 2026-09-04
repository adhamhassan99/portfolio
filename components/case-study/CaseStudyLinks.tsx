import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { ProjectLinks } from "@/lib/content/projects";

const linkFields = [
  ["live", "Live site"],
  ["github", "GitHub"],
  ["appStore", "App Store"],
  ["playStore", "Play Store"],
  ["youtube", "Demo video"],
] as const;

type CaseStudyLinksProps = {
  links?: ProjectLinks;
};

export function CaseStudyLinks({ links }: CaseStudyLinksProps) {
  if (!links) return null;

  const entries = linkFields.flatMap(([key, label]) => {
    const url = links[key];
    return url ? [{ key, label, url }] : [];
  });

  if (entries.length === 0) return null;

  return (
    <Container className="pb-block">
      <ul className="flex list-none flex-wrap items-center gap-x-7 gap-y-3 border-t border-line p-0 pt-5">
        {entries.map(({ key, label, url }, i) => (
          <li key={key}>
            <Reveal trigger="mount" delay={0.4 + i * 0.06}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="cslink inline-flex items-baseline gap-2 font-mono text-2xs tracking-label uppercase text-ink-2 no-underline"
              >
                {label}
                <span aria-hidden="true" className="cslink-arrow">
                  ↗
                </span>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </Container>
  );
}
