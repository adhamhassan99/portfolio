export const site = {
  name: "Adham Abdelwahab",
  title: "Senior Software Engineer",
  positioning: "Senior full-stack engineer — architecture to deployment",
  availability: "Limited availability",
  ctaLabel: "Book an intro",
  email: "hello@adhamabdelwahab.com",
  /** Public Cal.com Intro call — prefer event URL over profile redirect. */
  calendarUrl: "https://cal.com/adham-abdelwahab/intro-call",
  timezone: "Egypt (EET/EEST), flexible with US/EU",
  metaDescription:
    "Senior full-stack engineer at Orascom Development. AI platforms, fintech, and gov-integrated products. Previously PwC, Ejada, and Magentic AI.",
  url: "https://adhamabdelwahab.com",
  /** Profiles used for Person sameAs and on-page disambiguation links. */
  linkedinUrl: "https://www.linkedin.com/in/adhamhassanabdelwahab",
  githubUrl: "https://github.com/adhamhassan99",
} as const;

export const profileLinks = [
  { href: site.linkedinUrl, label: "LinkedIn" },
  { href: site.githubUrl, label: "GitHub" },
] as const;
