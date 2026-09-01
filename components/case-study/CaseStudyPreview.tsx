import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { ProjectPreview } from "@/lib/content/projects";

type CaseStudyPreviewProps = {
  preview?: ProjectPreview;
};

export function CaseStudyPreview({ preview }: CaseStudyPreviewProps) {
  if (!preview) return null;

  const label = preview.label ?? "Live preview";

  if (preview.embed) {
    return (
      <Container className="pt-block">
        <Reveal>
          <figure className="m-0 overflow-hidden rounded-lg border border-line bg-surface-2">
            <figcaption className="flex items-center justify-between gap-4 border-b border-line px-4 py-3 font-mono text-2xs tracking-label uppercase text-ink-muted">
              <span>Live preview</span>
              <a
                href={preview.url}
                target="_blank"
                rel="noreferrer"
                className="cslink inline-flex items-baseline gap-2 text-ink-2 no-underline"
              >
                {displayHost(preview.url)}
                <span aria-hidden="true" className="cslink-arrow">
                  ↗
                </span>
              </a>
            </figcaption>
            <iframe
              src={preview.url}
              title={`${label} — live preview`}
              loading="lazy"
              referrerPolicy="no-referrer"
              sandbox="allow-scripts allow-same-origin allow-popups"
              className="block aspect-video w-full border-0 bg-surface"
            />
          </figure>
        </Reveal>
      </Container>
    );
  }

  return (
    <Container className="pt-block">
      <Reveal>
        <Button
          variant="secondary"
          href={preview.url}
          target="_blank"
          rel="noreferrer"
        >
          Open {label} ↗
        </Button>
      </Reveal>
    </Container>
  );
}

function displayHost(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
