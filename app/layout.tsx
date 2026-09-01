import type { Metadata } from "next";
import { display, body, mono } from "./fonts";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { site } from "@/lib/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description: site.metaDescription,
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description: site.metaDescription,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description: site.metaDescription,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  email: site.email,
  url: site.url,
  description: site.metaDescription,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-surface font-sans text-md text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
