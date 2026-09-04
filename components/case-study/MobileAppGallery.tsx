"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useState,
  type KeyboardEvent,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { isVector } from "@/lib/content/media";
import type { ProjectMedia } from "@/lib/content/projects";

type Gallery = Extract<ProjectMedia, { kind: "gallery" }>;

const platformLabels: Record<Gallery["platform"], string> = {
  iphone: "iPhone",
  android: "Android",
};

type MobileAppGalleryProps = {
  media: Gallery;
  title: string;
};

export function MobileAppGallery({ media, title }: MobileAppGalleryProps) {
  const viewportDomId = useId();
  const prefersReducedMotion = useReducedMotion() === true;
  const [selected, setSelected] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(media.slides.length > 1);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    // Default trimSnaps overrides align at the ends and recreates the last-slide bug.
    containScroll: false,
    loop: false,
    dragFree: false,
    skipSnaps: false,
    watchDrag: true,
    breakpoints: {
      "(prefers-reduced-motion: reduce)": { duration: 0 },
    },
  });

  const slides = media.slides;
  const slideCount = slides.length;
  const hasCaptions = slides.some((slide) => Boolean(slide.caption));
  const showControls = slideCount > 1;

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelected(emblaApi.selectedScrollSnap());
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev(prefersReducedMotion);
  }, [emblaApi, prefersReducedMotion]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext(prefersReducedMotion);
  }, [emblaApi, prefersReducedMotion]);

  const onControlsKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      }
    },
    [scrollNext, scrollPrev],
  );

  return (
    <section className="pb-block" aria-labelledby="app-gallery-label">
      <Container>
        <Reveal>
          <h2
            id="app-gallery-label"
            className="mb-5 font-mono text-2xs tracking-label uppercase text-ink-muted"
          >
            Preview
          </h2>
        </Reveal>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label={`${title} app screenshots`}
        >
          <div
            id={viewportDomId}
            ref={emblaRef}
            className="gallery-viewport -mx-gutter"
          >
            <div className="gallery-container">
              {slides.map((slide, index) => {
                const isActive = index === selected;
                return (
                  <div key={slide.src} className="gallery-slide">
                    <figure className="m-0 flex flex-col gap-5">
                      {hasCaptions && (
                        <figcaption className="min-h-[3.75rem] px-1 font-display text-lg leading-snug text-balance">
                          {slide.caption ? (
                            <Caption
                              text={slide.caption}
                              highlight={slide.highlight}
                            />
                          ) : null}
                        </figcaption>
                      )}
                      <div
                        className="gallery-device"
                        data-active={isActive ? "true" : "false"}
                      >
                        <SlideMedia framed={slide.framed ?? true}>
                          <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            sizes="(min-width: 40rem) 260px, 58vw"
                            className="object-cover object-top"
                            unoptimized={isVector(slide.src)}
                          />
                        </SlideMedia>
                      </div>
                    </figure>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-4">
            <span className="font-mono text-2xs tracking-label uppercase text-ink-muted">
              {platformLabels[media.platform]}
            </span>

            {showControls && (
              <div className="flex items-center gap-4">
                <span
                  className="font-mono text-2xs tabular-nums text-ink-muted"
                  aria-hidden="true"
                >
                  {pad(selected + 1)} / {pad(slideCount)}
                </span>
                <span className="sr-only" aria-live="polite" aria-atomic="true">
                  Screenshot {selected + 1} of {slideCount}
                </span>
                <div
                  className="flex items-center gap-2"
                  onKeyDown={onControlsKeyDown}
                >
                  <StepButton
                    label="Previous screenshot"
                    glyph="←"
                    enabled={canPrev}
                    controlsId={viewportDomId}
                    onClick={scrollPrev}
                  />
                  <StepButton
                    label="Next screenshot"
                    glyph="→"
                    enabled={canNext}
                    controlsId={viewportDomId}
                    onClick={scrollNext}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Caption({ text, highlight }: { text: string; highlight?: string }) {
  const start = highlight ? text.indexOf(highlight) : -1;
  if (!highlight || start === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, start)}
      <span className="text-accent">{highlight}</span>
      {text.slice(start + highlight.length)}
    </>
  );
}

function SlideMedia({
  children,
  framed,
}: {
  children: React.ReactNode;
  framed: boolean;
}) {
  if (framed) return <PhoneFrame>{children}</PhoneFrame>;

  return <DeviceShell bezel="thin">{children}</DeviceShell>;
}

function DeviceShell({
  children,
  bezel,
}: {
  children: React.ReactNode;
  bezel: "thin" | "full";
}) {
  return (
    <div
      className={`relative aspect-[9/19.5] w-full rounded-[1.75rem] bg-device-bezel ring-1 ring-device-edge ${
        bezel === "full" ? "p-1.5" : "p-0.75"
      }`}
    >
      <div
        className={`relative h-full w-full overflow-hidden bg-device-screen ${
          bezel === "full" ? "rounded-[1.4rem]" : "rounded-[1.55rem]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <DeviceShell bezel="full">
      {children}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[0.4rem] h-[1.05rem] w-[32%] -translate-x-1/2 rounded-full bg-device-bezel"
      />
    </DeviceShell>
  );
}

function StepButton({
  label,
  glyph,
  enabled,
  controlsId,
  onClick,
}: {
  label: string;
  glyph: string;
  enabled: boolean;
  controlsId: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!enabled}
      aria-label={label}
      aria-controls={controlsId}
      className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-line text-sm text-ink-2 transition-colors duration-[140ms] ease-out hover:border-ink hover:bg-hover hover:text-ink focus-visible:shadow-focus disabled:pointer-events-none disabled:text-ink-muted disabled:opacity-50 disabled:hover:border-line disabled:hover:bg-transparent disabled:hover:text-ink-muted"
    >
      <span aria-hidden="true">{glyph}</span>
    </button>
  );
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}
