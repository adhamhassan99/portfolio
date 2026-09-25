import type { Metadata } from "next";
import { display, body, mono } from "./fonts";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { site } from "@/lib/content/site";
import { absoluteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description: site.metaDescription,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Adham Abdelwahab",
    "senior software engineer",
    "full-stack engineer",
    "Next.js",
    "React Native",
    "TypeScript",
    "Egypt",
    "contract engineer",
  ],
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description: site.metaDescription,
    url: absoluteUrl("/"),
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description: site.metaDescription,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  email: site.email,
  url: site.url,
  description: site.metaDescription,
  sameAs: [site.linkedinUrl, site.githubUrl],
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "React Native",
    "AWS",
  ],
  workLocation: {
    "@type": "Place",
    name: "Egypt",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.metaDescription,
  author: {
    "@type": "Person",
    name: site.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-surface font-sans text-md text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
