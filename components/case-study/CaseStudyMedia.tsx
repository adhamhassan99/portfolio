import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MobileAppGallery } from "./MobileAppGallery";
import { isVector } from "@/lib/content/media";
import type { Project } from "@/lib/content/projects";

type CaseStudyMediaProps = {
  project: Project;
};

export function CaseStudyMedia({ project }: CaseStudyMediaProps) {
  const { media, projectType, title, mediaPlaceholder } = project;

  if (projectType === "mobile" && media?.kind === "gallery") {
    return <MobileAppGallery media={media} title={title} />;
  }

  if (media?.kind === "image") {
    return (
      <Container>
        <Reveal>
          <figure className="relative m-0 aspect-video overflow-hidden rounded-lg border border-line bg-surface-2">
            <Image
              src={media.src}
              alt={media.alt}
              fill
              sizes="(min-width: 72rem) 68rem, 100vw"
              className="object-cover"
              // The optimizer rejects SVG unless globally opted in, and vectors
              // gain nothing from it.
              unoptimized={isVector(media.src)}
            />
          </figure>
        </Reveal>
      </Container>
    );
  }

  return (
    <Container>
      <Reveal>
        <div
          className="flex aspect-video items-center justify-center rounded-lg border border-line"
          style={{
            background:
              "repeating-linear-gradient(-45deg, var(--t-bg-secondary) 0 12px, var(--t-stripe) 12px 13px)",
          }}
        >
          <span className="rounded-sm border border-line bg-surface px-3.5 py-2 font-mono text-xs tracking-label uppercase text-ink-muted">
            {mediaPlaceholder}
          </span>
        </div>
      </Reveal>
    </Container>
  );
}
