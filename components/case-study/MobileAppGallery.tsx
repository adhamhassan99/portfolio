"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { isVector } from "@/lib/content/media";
import type {
  GalleryCover,
  GallerySlide,
  ProjectMedia,
} from "@/lib/content/projects";

type Gallery = Extract<ProjectMedia, { kind: "gallery" }>;

type GalleryCard =
  | { type: "cover"; cover: GalleryCover }
  | { type: "slide"; slide: GallerySlide };

const platformLabels: Record<Gallery["platform"], string> = {
  iphone: "iPhone",
  android: "Android",
};

const CARD_WIDTH = "min(16.25rem, 74vw)";

/** Quiet period after the last scroll event before the carousel counts as settled. */
const SETTLE_MS = 140;

type MobileAppGalleryProps = {
  media: Gallery;
  title: string;
};

export function MobileAppGallery({ media, title }: MobileAppGalleryProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [trackInset, setTrackInset] = useState<number | null>(null);

  const cards: GalleryCard[] = [
    ...(media.cover ? [{ type: "cover" as const, cover: media.cover }] : []),
    ...media.slides.map((slide) => ({ type: "slide" as const, slide })),
  ];
  const slideCount = cards.length;
  const hasCaptions = media.slides.some((slide) => Boolean(slide.caption));
  const showControls = slideCount > 1;

  const syncActiveFromScroll = useCallback(() => {
    const scroller = scrollerRef.current;
    const track = trackRef.current;
    if (!scroller || !track) return;

    const items = track.querySelectorAll<HTMLElement>("[data-gallery-card]");
    if (items.length === 0) return;

    const scrollerCenter =
      scroller.getBoundingClientRect().left + scroller.clientWidth / 2;

    let nearest = 0;
    let shortest = Number.POSITIVE_INFINITY;

    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const distance = Math.abs(center - scrollerCenter);
      if (distance < shortest) {
        shortest = distance;
        nearest = index;
      }
    });

    setActive(nearest);
  }, []);

  /**
   * Scrolls the carousel itself rather than calling `scrollIntoView` on the card,
   * which would also scroll every ancestor scroll container — including the
   * document, making the page jump vertically on every arrow press.
   */
  const goTo = useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
    const scroller = scrollerRef.current;
    const track = trackRef.current;
    if (!scroller || !track) return;

    const item = track.querySelectorAll<HTMLElement>("[data-gallery-card]")[index];
    if (!item) return;

    setActive(index);

    const itemRect = item.getBoundingClientRect();
    const itemCenter = itemRect.left + itemRect.width / 2;
    const scrollerCenter =
      scroller.getBoundingClientRect().left + scroller.clientWidth / 2;
    const target = scroller.scrollLeft + itemCenter - scrollerCenter;

    scroller.scrollTo({
      left: Math.max(
        0,
        Math.min(target, scroller.scrollWidth - scroller.clientWidth),
      ),
      behavior,
    });
  }, []);

  /**
   * The centering inset has to live in the flow as real width, so it is measured
   * from the rendered card instead of expressed as a percentage of the track: the
   * track's border box is capped at the scroller's content width, so any
   * `padding-right` on it is painted inside that box, to the left of the
   * overflowing cards, and adds no trailing scroll range at all.
   */
  useEffect(() => {
    const scroller = scrollerRef.current;
    const track = trackRef.current;
    if (!scroller || !track) return;

    const measure = () => {
      const card = track.querySelector<HTMLElement>("[data-gallery-card]");
      if (!card) return;
      const inset = (scroller.clientWidth - card.getBoundingClientRect().width) / 2;
      setTrackInset(Math.max(0, Math.round(inset)));
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(scroller);
    const card = track.querySelector<HTMLElement>("[data-gallery-card]");
    if (card) observer.observe(card);

    return () => observer.disconnect();
  }, [slideCount]);

  // Keep the active card centred when the inset changes under it (resize, rotate).
  useEffect(() => {
    if (trackInset === null) return;
    goTo(active, "instant");
    // Re-centring is a response to the inset, not to `active` changing.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackInset]);

  /**
   * `scrollend` is still missing in some browsers, so the active index is synced
   * from a debounced `scroll` listener — the counter and the highlight then always
   * describe the card that is actually centred, even after a manual swipe.
   */
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let timer = 0;
    const settle = () => syncActiveFromScroll();
    const onScroll = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(settle, SETTLE_MS);
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.clearTimeout(timer);
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [syncActiveFromScroll, slideCount]);

  const step = useCallback(
    (direction: 1 | -1) => {
      const next = Math.min(Math.max(active + direction, 0), slideCount - 1);
      if (next === active) return;
      goTo(next);
    },
    [active, goTo, slideCount],
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
          ref={scrollerRef}
          role="group"
          aria-label={`${title} app screenshots — scroll horizontally`}
          aria-roledescription="carousel"
          tabIndex={0}
          className="galscroll -mx-gutter snap-x snap-mandatory overflow-x-auto pb-2"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              step(1);
            }
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              step(-1);
            }
          }}
        >
          <ul
            ref={trackRef}
            className="flex w-max list-none gap-5 p-0"
            style={{
              paddingInline:
                trackInset === null
                  ? `calc(50% - ${CARD_WIDTH} / 2)`
                  : `${trackInset}px`,
            }}
          >
            {cards.map((card, index) => {
              const isActive = index === active;
              return (
                <li
                  key={card.type === "cover" ? "cover" : card.slide.src}
                  data-gallery-card
                  aria-current={isActive ? "true" : undefined}
                  className="w-[min(16.25rem,74vw)] shrink-0 snap-center"
                >
                  <Reveal delay={Math.min(index, 5) * 0.07}>
                    <figure
                      className={`galcard m-0 flex flex-col gap-5 rounded-2xl p-1 transition-[border-color,box-shadow,opacity] duration-300 ease-out ${
                        isActive
                          ? "border border-accent/45 shadow-[0_0_0_1px_color-mix(in_oklch,var(--t-accent)_18%,transparent)] opacity-100"
                          : "border border-transparent opacity-55"
                      }`}
                    >
                      {hasCaptions && (
                        <figcaption className="min-h-[3.75rem] px-1 font-display text-lg leading-snug text-balance">
                          {card.type === "slide" && card.slide.caption ? (
                            <Caption
                              text={card.slide.caption}
                              highlight={card.slide.highlight}
                            />
                          ) : null}
                        </figcaption>
                      )}

                      {card.type === "cover" ? (
                        <CoverCard cover={card.cover} />
                      ) : (
                        <SlideMedia framed={card.slide.framed ?? true}>
                          <Image
                            src={card.slide.src}
                            alt={card.slide.alt}
                            fill
                            sizes="(min-width: 40rem) 260px, 74vw"
                            className="object-cover object-top"
                            unoptimized={isVector(card.slide.src)}
                          />
                        </SlideMedia>
                      )}
                    </figure>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-4">
          <span className="font-mono text-2xs tracking-label uppercase text-ink-muted">
            {platformLabels[media.platform]}
          </span>

          {showControls && (
            <div className="flex items-center gap-4">
              <span
                className="font-mono text-2xs tabular-nums text-ink-muted"
                aria-live="polite"
              >
                {pad(active + 1)} / {pad(slideCount)}
              </span>
              <div className="flex items-center gap-2">
                <StepButton
                  label="Previous screenshot"
                  glyph="←"
                  disabled={active === 0}
                  onClick={() => step(-1)}
                />
                <StepButton
                  label="Next screenshot"
                  glyph="→"
                  disabled={active === slideCount - 1}
                  onClick={() => step(1)}
                />
              </div>
            </div>
          )}
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

  return (
    <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[1.75rem] border border-line bg-surface-2">
      {children}
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative aspect-[9/19.5] w-full rounded-[1.75rem] bg-device-bezel p-1.5 ring-1 ring-device-edge">
      <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] bg-device-screen">
        {children}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[0.4rem] h-[1.05rem] w-[32%] -translate-x-1/2 rounded-full bg-device-bezel"
        />
      </div>
    </div>
  );
}

function CoverCard({ cover }: { cover: GalleryCover }) {
  return (
    <div className="flex aspect-[9/19.5] w-full flex-col items-center justify-center gap-6 rounded-[1.75rem] border border-line bg-accent-tint px-7 text-center">
      {cover.icon && (
        <span className="relative block h-[4.5rem] w-[4.5rem] overflow-hidden rounded-[1.15rem] border border-line">
          <Image
            src={cover.icon}
            alt=""
            fill
            sizes="72px"
            className="object-cover"
            unoptimized={isVector(cover.icon)}
          />
        </span>
      )}
      {cover.title && (
        <span className="font-display text-xl leading-tight text-balance text-ink">
          {cover.title}
        </span>
      )}
      {cover.subtitle && (
        <>
          <span aria-hidden="true" className="block h-px w-10 bg-accent" />
          <span className="max-w-[20ch] font-mono text-2xs leading-relaxed tracking-label uppercase text-ink-2">
            {cover.subtitle}
          </span>
        </>
      )}
    </div>
  );
}

function StepButton({
  label,
  glyph,
  disabled,
  onClick,
}: {
  label: string;
  glyph: string;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-line text-sm text-ink-2 transition-colors duration-[140ms] ease-out hover:border-ink hover:bg-hover hover:text-ink disabled:pointer-events-none disabled:opacity-35"
    >
      <span aria-hidden="true">{glyph}</span>
    </button>
  );
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}
