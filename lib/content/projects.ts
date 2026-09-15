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

export type ProjectMedia =
  | { kind: "none" }
  | { kind: "image"; src: string; alt: string }
  | {
      kind: "gallery";
      platform: "iphone" | "android";
      slides: GallerySlide[];
    };

export type ProjectLinks = {
  live?: string;
  github?: string;
  appStore?: string;
  playStore?: string;
  youtube?: string;
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
    slug: "el-gouna-app",
    index: "001",
    projectType: "mobile",
    title: "El Gouna App",
    client:
      "El Gouna App — Gouna destination community app (full-time, Dec 2025 – Present)",
    clientShort: "Orascom Development",
    role: "Senior Software Engineer",
    outcome:
      "Primary channel for bill payments, guest invites, and destination services on iOS and Android",
    tags: ["TypeScript", "React Native", "Expo", "Docker", "Next.js"],
    summary:
      "Community app for Orascom Development's Red Sea destination. Owners and residents pay bills, request services, manage gate access, and see what's on — without calling the office or juggling separate channels. I rebuilt it to replace a slow vendor app residents had been working around.",
    href: "/work/el-gouna-app",
    caseStudyNumber: "001",
    lead: "React Native community app for El Gouna: bills, services, gate access, and destination discovery in one place.",
    meta: {
      client: "Orascom Development — full-time, Dec 2025 – Present",
      role: "Senior Software Engineer",
      stack: "TypeScript · React Native · Expo · Docker · Next.js",
      status: "Shipped for iOS and Android",
    },
    mediaPlaceholder: "El Gouna app screens",
    media: {
      kind: "gallery",
      platform: "iphone",
      slides: [
        {
          src: "/work/el-gouna-app/eg-1.webp",
          alt: "El Gouna app welcome screen — Red Sea destination community app",
          framed: false,
        },
        {
          src: "/work/el-gouna-app/eg-2.webp",
          alt: "Home screen — bills, services, and gate access at a glance",
          framed: false,
        },
        {
          src: "/work/el-gouna-app/eg-3.webp",
          alt: "Explore screen — discover restaurants, venues, and activities",
          framed: false,
        },
        {
          src: "/work/el-gouna-app/eg-4.webp",
          alt: "Events screen — what's on at El Gouna",
          framed: false,
        },
      ],
    },
    links: {
      appStore: "https://apps.apple.com/eg/app/el-gouna-red-sea/id6770508358",
      playStore:
        "https://play.google.com/store/apps/details?id=com.orascomhd.elgounaapp&hl=en",
    },
    sections: [
      {
        label: "01 / Problem",
        paragraphs: [
          "Day-to-day life in El Gouna was split across phone calls for bills, email for service requests, a separate gate process, and word of mouth for events. There was an official app from an external vendor, but it was slow enough that residents just worked around it.",
        ],
      },
      {
        label: "02 / Approach",
        paragraphs: [
          "I built the replacement end to end: React Native on Expo for iOS and Android, a Next.js API layer in Docker, and the infrastructure that ships both. Paying a bill, inviting a guest, opening a gate, browsing events — same product, same session.",
        ],
      },
      {
        label: "03 / Outcome",
        paragraphs: [
          "Shipped on iOS and Android. Residents now use the app for bill payments and guest invites, and it replaced the vendor build as the product people actually open.",
        ],
      },
    ],
    nextProject: { slug: "flowlens", title: "Flowlens" },
  },
  {
    slug: "flowlens",
    index: "002",
    projectType: "web",
    title: "Flowlens",
    client:
      "Magentic AI — AI observability for coding agents (part-time, June 2025 – Dec 2025)",
    clientShort: "Magentic AI",
    role: "Senior Software Engineer — frontend-heavy",
    outcome:
      "Real-time observability layer that catches agent-introduced bugs before they affect production customers",
    tags: ["TypeScript", "React", "Next.js", "Python", "LangChain"],
    summary:
      "Observability for coding agents at Magentic AI. Instrumentation plus AI analysis so you can see what an agent changed and what broke — while it's still happening. I owned most of the frontend and contributed to the Python / FastAPI services behind it.",
    href: "/work/flowlens",
    caseStudyNumber: "002",
    lead: "Real-time observability for coding agents: catch regressions from agent changes before customers do.",
    meta: {
      client: "Magentic AI — part-time, June 2025 – Dec 2025",
      role: "Senior Software Engineer — frontend-heavy",
      stack: "TypeScript · React · Next.js · Python · FastAPI · OpenTelemetry",
      status: "Shipped — active product",
    },
    mediaPlaceholder: "Flowlens dashboard",
    media: { kind: "none" },
    links: {
      live: "https://magentic.ai/",
      youtube: "https://youtu.be/yUyjXC9oYy8",
    },
    preview: {
      url: "https://magentic.ai/",
      label: "Magentic AI",
      embed: true,
    },
    sections: [
      {
        label: "01 / Problem",
        paragraphs: [
          "When a coding agent ships a bug, you usually find out from a customer ticket. Teams had logs and diffs, but nothing that showed agent behaviour live: what changed, why, and what broke as a result.",
        ],
      },
      {
        label: "02 / Approach",
        paragraphs: [
          "Flowlens wires OpenTelemetry and LangChain so agent activity streams in as it happens, then an analysis layer flags regressions before the change reaches customers. The hard part is the UI: agents dump a lot of events, and engineers need cause, not another log dump.",
          "I built most of that surface in TypeScript, React, and Next.js: streaming views, live state that stays responsive, and enough density to be useful without turning into noise. I also worked on the Python and FastAPI services that ingest the telemetry the dashboard depends on.",
        ],
      },
      {
        label: "03 / Outcome",
        paragraphs: [
          "Teams can catch agent-introduced bugs in the product loop instead of in support. Flowlens is Magentic's live view into what coding agents did and what broke.",
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
    index: "003",
    projectType: "mobile",
    title: "Saudi Real Estate Marketplace",
    client:
      "Ejada Systems — Saudi Arabia government-integrated property platform",
    clientShort: "Ejada",
    role: "Senior Software Engineer",
    outcome:
      "Contactless verification and unit allocation via government APIs",
    tags: ["React Native", "TypeScript", "Node.js", "KSA gov APIs"],
    summary:
      "React Native app for buying, selling, and mortgaging property units in Saudi Arabia through official government APIs. Identity checks and unit allocation run on the phone — no office visit for steps the government already validates digitally.",
    href: "/work/saudi-real-estate",
    caseStudyNumber: "003",
    lead: "React Native property platform for Saudi citizens — contactless verification and unit allocation over government APIs.",
    meta: {
      client: "Ejada Systems — KSA",
      role: "Senior Software Engineer",
      stack: "React Native · TypeScript · Node.js · KSA gov APIs",
      status: "Shipped — production",
    },
    mediaPlaceholder: "Saudi Real Estate Marketplace screens",
    media: {
      kind: "gallery",
      platform: "iphone",
      slides: [
        {
          src: "/work/saudi-real-estate/srem-1.webp",
          alt: "Saudi Real Estate Marketplace app splash screen",
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
    links: {
      appStore:
        "https://apps.apple.com/eg/app/saudi-real-estate-market/id6446234209",
      playStore:
        "https://play.google.com/store/apps/details?id=com.srem.moj&hl=en",
    },
    sections: [
      {
        label: "01 / Problem",
        paragraphs: [
          "Buying or mortgaging property usually means paperwork in person: identity, ownership records, financing, compliance. Saudi government systems could already validate most of that digitally. What was missing was a mobile flow that chained those APIs into something a citizen would finish on a phone.",
        ],
      },
      {
        label: "02 / Approach",
        paragraphs: [
          "We built React Native on top of a Node.js layer that brokers the official APIs. Identity, eligibility, and unit allocation stay inside the app wherever the government can confirm them, with the compliance rules encoded in the flow instead of a back-office checklist.",
          "I worked the mobile product and the integration edge: verification and allocation screens, messy government API responses, and keeping a long regulated process readable on a small screen.",
        ],
      },
      {
        label: "03 / Outcome",
        paragraphs: [
          "Verification and unit allocation are fully contactless for every step the government systems can validate. Transactions that used to need an office visit now complete in the app.",
        ],
      },
    ],
    nextProject: { slug: "telemoney", title: "Telemoney" },
  },
  {
    slug: "telemoney",
    index: "004",
    projectType: "mobile",
    title: "Telemoney",
    client:
      "Ejada Systems — Arab National Bank remittance and banking app",
    clientShort: "Ejada / ANB",
    role: "Frontend Engineer",
    outcome:
      "International transfers, onboarding, and motion for ANB's Telemoney app on iOS and Android",
    tags: ["React Native", "TypeScript", "Animated", "Fintech"],
    summary:
      "Telemoney is Arab National Bank's app for local and international money transfers, bill payments, and everyday banking without a branch visit. At Ejada I was the frontend engineer on international transfer flows, the onboarding experience, and motion built with React Native Animated.",
    href: "/work/telemoney",
    caseStudyNumber: "004",
    lead: "ANB's Telemoney app — international transfers, onboarding, and React Native Animated motion, shipped while at Ejada.",
    meta: {
      client: "Ejada Systems — Arab National Bank",
      role: "Frontend Engineer",
      stack: "React Native · TypeScript · React Native Animated",
      status: "Shipped — iOS and Android",
    },
    mediaPlaceholder: "Telemoney app screens",
    media: {
      kind: "gallery",
      platform: "iphone",
      slides: [
        {
          src: "/work/telemoney/tm-1.webp",
          alt: "Telemoney home dashboard — transfers, bills, and services at a glance",
          framed: false,
        },
        {
          src: "/work/telemoney/tm-2.webp",
          alt: "Onboarding language picker — English, Arabic, Urdu, Nepali, Hindi, Bangla",
          framed: false,
        },
        {
          src: "/work/telemoney/tm-3.webp",
          alt: "Transfer screen — beneficiaries, quick send, and recent transactions",
          framed: false,
        },
        {
          src: "/work/telemoney/tm-4.webp",
          alt: "International transfer — search and select overseas beneficiaries",
          framed: false,
        },
      ],
    },
    links: {
      appStore: "https://apps.apple.com/eg/app/telemoney/id6476663246",
      playStore:
        "https://play.google.com/store/apps/details?id=com.anb.telemoney&hl=en",
    },
    sections: [
      {
        label: "01 / Problem",
        paragraphs: [
          "Sending money — especially across borders — still pushes people into branches or clunky bank portals. ANB needed a mobile product where customers could transfer locally and internationally, pay bills, and get onboarded without walking into a branch.",
        ],
      },
      {
        label: "02 / Approach",
        paragraphs: [
          "Telemoney is a React Native app for iOS and Android. I owned the frontend for international transfer flows: beneficiary setup, transfer steps, and the edge cases that show up when money crosses borders. I also built the onboarding experience and the motion layer with React Native Animated so key transitions felt deliberate instead of abrupt.",
        ],
      },
      {
        label: "03 / Outcome",
        paragraphs: [
          "Shipped on the App Store and Google Play. Customers can move money locally and internationally from the phone, and the transfer and onboarding paths I worked on are part of the live ANB product.",
        ],
      },
    ],
    nextProject: { slug: "ai-studio", title: "AI Studio" },
  },
  {
    slug: "ai-studio",
    index: "005",
    projectType: "internal",
    title: "AI Studio",
    client:
      "PwC Egypt Technology Innovation Centre — internal innovation platform (Nov 2023 – Jun 2025)",
    clientShort: "PwC ETIC",
    role: "Senior Software Engineer",
    outcome:
      "Marketplace enabling teams to build, clone, and deploy workflow-integrated AI agents via connectors and MCPs",
    tags: ["Next.js", "TypeScript", "React", "Python", "MCP Integrations"],
    summary:
      "Internal AI marketplace at PwC's Egypt Technology Innovation Centre. Teams build and clone agents that plug into real workflows through connectors and MCP integrations. I shipped platform features across the stack so creating an agent was something you could repeat, not a one-off demo.",
    href: "/work/ai-studio",
    caseStudyNumber: "005",
    lead: "Internal marketplace where PwC teams build, clone, and deploy agents wired into everyday tools via connectors and MCPs.",
    meta: {
      client: "PwC ETIC — Nov 2023 – Jun 2025",
      role: "Senior Software Engineer",
      stack: "Next.js · TypeScript · React · Python · MCP Integrations",
      status: "Shipped — internal platform",
    },
    mediaPlaceholder: "AI Studio marketplace",
    media: { kind: "none" },
    sections: [
      {
        label: "01 / Problem",
        paragraphs: [
          "Inside a consultancy, AI demos multiply: a chatbot here, a script there, each with its own credentials and glue. Useful work stayed stuck on one person's laptop — hard for the next team to pick up.",
        ],
      },
      {
        label: "02 / Approach",
        paragraphs: [
          "AI Studio is a marketplace for agents that connect to the tools people already use. Teams compose from a shared connector and MCP library, and cloning keeps the wiring intact so the next team starts from a working agent instead of a blank repo.",
          "I worked TypeScript and React on the marketplace UI, and Node.js / Python on the platform services — connector config, cloning, and the MCP layer that made reuse possible.",
        ],
      },
      {
        label: "03 / Outcome",
        paragraphs: [
          "Teams clone and adapt agents instead of rebuilding from scratch. A new connector shows up for every agent that uses it.",
        ],
      },
    ],
  },
];

export const trustEmployers = [
  {
    name: "PwC ETIC",
    url: "https://www.pwc.com/m1/en/careers/egypt-technology-innovation-centre.html",
  },
  { name: "Ejada Systems", url: "https://www.ejada.com/" },
  { name: "Orascom Development", url: "https://www.orascomdh.com/" },
  { name: "Magentic AI", url: "https://magentic.ai/" },
] as const;

export const intro = {
  sentence:
    "I'm Adham Abdelwahab, a senior software engineer who builds full-stack products from architecture to deployment — currently at",
  current: {
    name: "Orascom Development",
    url: "https://www.orascomdh.com/",
  },
  previouslyPrefix: ". Previously at",
  previous: [
    {
      name: "PwC",
      url: "https://www.pwc.com/m1/en/careers/egypt-technology-innovation-centre.html",
    },
    { name: "Ejada", url: "https://www.ejada.com/" },
    { name: "Magentic AI", url: "https://magentic.ai/" },
  ],
  trustLine: "Independent, hands-on, accountable.",
  responseTimePromise: "I reply within 24 hours.",
} as const;

export function hasProjectLinks(links?: ProjectLinks): boolean {
  if (!links) return false;
  return Boolean(
    links.live ||
    links.github ||
    links.appStore ||
    links.playStore ||
    links.youtube,
  );
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
