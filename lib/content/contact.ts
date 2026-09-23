import { site } from "./site";

export const contact = {
  email: site.email,
  calendarUrl: site.calendarUrl,
  calendarLabel: site.ctaLabel,
  timezone: site.timezone,
  headline: "If you've read this far, we should probably talk.",
  firstCallDescription:
    "Book a free 30-minute intro. I'll ask four questions about your product, team, timeline, and constraints — and you'll know quickly whether I'm the right engineer for the job. No sales pitch.",
  bookingNote: "Free 30 minutes · no pitch",
  responseTimePromise: "I reply within 24 hours.",
} as const;
