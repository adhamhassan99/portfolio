export type CaseStudySection = {
  label: string;
  paragraphs: string[];
};

/** Drives which media treatment a case study renders. */
export type ProjectType = "web" | "mobile" | "internal";

export type GallerySlide = {
  src: string;
  alt: string;
  caption?: string;
  /** Substring of `caption` rendered in the accent colour. */
  highlight?: string;
  /**
   * Wrap the image in the CSS device frame. Defaults to `true` for raw
   * screenshots; set `false` for pre-composed store art that already ships
   * its own device mockup.
   */
  framed?: boolean;
};

/** Optional first card of a gallery — app icon and name, App Store style. */
export type GalleryCover = {
  icon?: string;
  title?: string;
  subtitle?: string;
};

export type ProjectMedia =
  | { kind: "none" }
  | { kind: "image"; src: string; alt: string }
  | {
      kind: "gallery";
      platform: "iphone" | "android";
      cover?: GalleryCover;
      slides: GallerySlide[];
    };

export type ProjectLinks = {
  live?: string;
  github?: string;
  appStore?: string;
  playStore?: string;
};

export type ProjectPreview = {
  url: string;
  label?: string;
  /** Render an inline embed instead of a link-out button. */
  embed?: boolean;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  projectType: ProjectType;
  client: string;
  clientShort: string;
  role: string;
  outcome: string;
  tags: string[];
  summary: string;
  href: string;
  caseStudyNumber: string;
  lead: string;
  meta: {
    client: string;
    role: string;
    stack: string;
    status: string;
  };
  /** Fallback stripe block, used when `media` is absent or `kind: "none"`. */
  mediaPlaceholder: string;
  media?: ProjectMedia;
  links?: ProjectLinks;
  preview?: ProjectPreview;
  sections: CaseStudySection[];
  nextProject?: { slug: string; title: string };
};

export const projects: Project[] = [
  {
    slug: "ai-studio",
    index: "001",
    projectType: "internal",
    title: "AI Studio",
    client:
      "PwC Egypt Technology Innovation Centre — internal innovation platform",
    clientShort: "PwC ETIC",
    role: "Senior Software Engineer",
    outcome:
      "Marketplace enabling teams to build, clone, and deploy workflow-integrated AI agents via connectors and MCPs",
    tags: ["Next.js", "TypeScript", "React", "Python", "MCP Integrations"],
    summary:
      "AI Studio is an internal AI marketplace at PwC's Egypt Technology Innovation Centre. Teams use it to build and clone agents that connect to everyday workflows through a wide range of connectors and MCP integrations — not isolated chatbots, but agents wired into how people actually work. Adham worked across the stack to ship platform features that make agent creation repeatable rather than one-off experiments.",
    href: "/work/ai-studio",
    caseStudyNumber: "001",
    lead: "A marketplace where PwC teams build, clone, and deploy workflow-integrated AI agents via connectors and MCPs.",
    meta: {
      client: "PwC Egypt Technology Innovation Centre",
      role: "Senior Software Engineer",
      stack: "Next.js · TypeScript · React · Python · MCP Integrations",
      status: "Shipped — internal platform",
    },
    mediaPlaceholder: "product UI — drop screenshot",
    media: { kind: "none" },
    sections: [
      {
        label: "01 / Problem",
        paragraphs: [
          "Inside a large consultancy, AI experimentation fragments fast. Every team wires up its own prototype: a chatbot here, a script there — each with its own credentials, its own integration glue, and no path from demo to something colleagues can reuse. The interesting work was happening, but it wasn't compounding.",
        ],
      },
      {
        label: "02 / Approach",
        paragraphs: [
          "AI Studio treats agents as products, not experiments. Teams compose agents from a shared library of connectors and MCP integrations, so an agent plugs into the tools people already work in rather than living as an isolated chat window. Cloning is first-class: a working agent built by one team becomes the starting point for the next, with its connector wiring intact.",
          "Adham worked across the stack — TypeScript and React on the marketplace surface, Node.js and Python on platform services — shipping the features that make agent creation repeatable rather than one-off: connector configuration, agent cloning, and the MCP integration layer.",
        ],
      },
      {
        label: "03 / Outcome",
        paragraphs: [
          "Agent deployment became repeatable instead of bespoke: teams clone and adapt working agents rather than rebuilding from zero, and new connectors extend every agent that uses them. [PLACEHOLDER — add shareable adoption figures before launch]",
        ],
      },
    ],
    nextProject: {
      slug: "saudi-real-estate",
      title: "Saudi Real Estate Marketplace",
    },
  },
  {
    slug: "saudi-real-estate",
    index: "002",
    projectType: "mobile",
    title: "Saudi Real Estate Marketplace",
    client:
      "Ejada Systems — Saudi Arabia government-integrated property platform",
    clientShort: "Ejada",
    role: "Senior Software Engineer",
    outcome:
      "100% contactless verification and unit allocation via government APIs",
    tags: ["React Native", "TypeScript", "Node.js", "KSA gov APIs"],
    summary:
      "A React Native mobile app connecting Saudi citizens to buy, sell, and mortgage property units through official government APIs. Verification and unit allocation run entirely contactlessly — no in-person paperwork for steps the government systems can validate digitally. High-stakes domain: property transactions, identity verification, and regulatory compliance baked into the mobile product flow.",
    href: "/work/saudi-real-estate",
    caseStudyNumber: "002",
    lead: "A React Native platform for Saudi citizens to buy, sell, and mortgage property — with 100% contactless verification and unit allocation via government APIs.",
    meta: {
      client: "Ejada Systems — KSA",
      role: "Senior Software Engineer",
      stack: "React Native · TypeScript · Node.js · KSA gov APIs",
      status: "Shipped — production",
    },
    mediaPlaceholder: "app screens — drop screenshots",
    // links: { appStore: "https://apps.apple.com/..." },
    media: {
      kind: "gallery",
      platform: "iphone",
      // Store art already carries its own device mockup and headline, so slides
      // opt out of the CSS frame and the caption rail.
      slides: [
        {
          src: "/work/saudi-real-estate/srem-1.webp",
          alt: "Saudi Real Estate Market app splash screen",
          framed: false,
        },
        {
          src: "/work/saudi-real-estate/srem-2.webp",
          alt: "Property marketplace home screen — integrated digital platform",
          framed: false,
        },
        {
          src: "/work/saudi-real-estate/srem-3.webp",
          alt: "Unit trading screen — reliable trade",
          framed: false,
        },
        {
          src: "/work/saudi-real-estate/srem-4.webp",
          alt: "Contactless verification and unit allocation flow",
          framed: false,
        },
        {
          src: "/work/saudi-real-estate/srem-5.webp",
          alt: "Transaction completion and status tracking",
          framed: false,
        },
      ],
    },
    sections: [
      {
        label: "01 / Problem",
        paragraphs: [
          "Property transactions are among the highest-stakes flows you can put in a mobile app: identity verification, ownership records, financing, and regulatory compliance — each traditionally requiring in-person paperwork. Saudi government systems could already validate most of these steps digitally; the missing piece was a product that composed those APIs into a flow a citizen could trust and complete from a phone.",
        ],
      },
      {
        label: "02 / Approach",
        paragraphs: [
          "The app was built React Native–first on a Node.js service layer that brokers the official government APIs. Every step the government can validate digitally — identity, eligibility, unit allocation — runs contactlessly inside the product flow, with compliance rules encoded in the flow itself rather than left to back-office review.",
          "Adham worked across the mobile product and its integration layer: the verification and allocation flows, error and edge-case handling around government API responses, and keeping a regulated, multi-step process legible on a small screen.",
        ],
      },
      {
        label: "03 / Outcome",
        paragraphs: [
          "Verification and unit allocation run 100% contactlessly — no in-person paperwork for any step the government systems can validate digitally. Citizens complete property transactions that previously required office visits entirely from the app.",
        ],
      },
    ],
    nextProject: { slug: "flowlens", title: "Flowlens" },
  },
  {
    slug: "flowlens",
    index: "003",
    projectType: "web",
    title: "Flowlens",
    client:
      "Magentic AI — AI observability for coding agents (part-time, ongoing)",
    clientShort: "Magentic AI",
    role: "Senior Software Engineer — frontend-heavy",
    outcome:
      "Real-time observability layer that catches agent-introduced bugs before they affect production customers",
    tags: ["TypeScript", "React", "Next.js", "AI agents"],
    summary:
      "Flowlens is Magentic AI's flagship observability product — instrumentation and AI-driven analysis that gives coding agents visibility into their own behaviour in real time. The goal is to catch and fix bugs before they reach real customers, not after support tickets arrive. Adham is heavily involved on the frontend, building the interfaces that make agent behaviour legible to the engineers relying on them.",
    href: "/work/flowlens",
    caseStudyNumber: "003",
    lead: "Real-time observability for coding agents — instrumentation and AI-driven analysis that catches agent-introduced bugs before they reach production customers.",
    meta: {
      client: "Magentic AI — part-time, ongoing",
      role: "Senior Software Engineer — frontend-heavy",
      stack: "TypeScript · React · Next.js · Instrumentation",
      status: "In production — active development",
    },
    mediaPlaceholder: "dashboard UI — drop screenshot",
    media: {
      kind: "image",
      src: "/work/flowlens/dashboard.svg",
      alt: "Flowlens observability dashboard — live agent runs, anomaly score over time, and flagged changes",
    },
    links: { live: "https://magentic.ai/" },
    // Add a distinct product URL here to surface the preview block, e.g.
    // preview: { url: "https://app.flowlens.example", label: "Flowlens", embed: true },
    sections: [
      {
        label: "01 / Problem",
        paragraphs: [
          "Coding agents write real code into real products — and when they introduce a bug, it usually surfaces the worst possible way: as a support ticket from a paying customer. Teams adopting agents had no equivalent of observability for them: no real-time view of what an agent changed, why, and what broke as a result.",
        ],
      },
      {
        label: "02 / Approach",
        paragraphs: [
          "Flowlens pairs instrumentation with AI-driven analysis: agent behaviour is captured in real time, and the analysis layer flags regressions and anomalies as they happen — before a change ships to customers. The hard product problem is legibility: an agent produces a torrent of events, and engineers need to see cause, not logs.",
          "Adham is heavily involved on the frontend — TypeScript, React, and Next.js interfaces that render live agent activity as something an engineer can reason about: streaming data views, real-time state without jank, and information density that stays readable under load.",
        ],
      },
      {
        label: "03 / Outcome",
        paragraphs: [
          "Agent-introduced bugs get caught and fixed before they reach production customers, not after. Flowlens is Magentic AI's flagship product and remains in active development. [PLACEHOLDER — add shareable detection/adoption figures before launch]",
        ],
      },
    ],
    nextProject: { slug: "ai-studio", title: "AI Studio" },
  },
];

export const trustEmployers = [
  {
    name: "PwC ETIC",
    url: "https://www.pwc.com/m1/en/careers/egypt-technology-innovation-centre.html",
  },
  { name: "Ejada Systems", url: "https://www.ejada.com/" },
  { name: "Orascom Developments", url: "https://www.orascomdh.com/" },
  { name: "Magentic AI", url: "https://magentic.ai/" },
] as const;

export const intro = {
  sentence:
    "Adham Abdelwahab is a senior software engineer who builds full-stack products from architecture to deployment — previously at",
  employers: [
    {
      name: "PwC",
      url: "https://www.pwc.com/m1/en/careers/egypt-technology-innovation-centre.html",
    },
    { name: "Ejada", url: "https://www.ejada.com/" },
    { name: "Orascom Developments", url: "https://www.orascomdh.com/" },
    { name: "Magentic AI", url: "https://magentic.ai/" },
  ],
  trustLine: "Independent, hands-on, accountable.",
  responseTimePromise: "I reply within 24 hours.",
} as const;


export function hasProjectLinks(links?: ProjectLinks): boolean {
  if (!links) return false;
  return Boolean(links.live || links.github || links.appStore || links.playStore);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
