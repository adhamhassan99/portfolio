import type { Metadata } from "next";
import { site } from "@/lib/content/site";

export const SITE_URL = site.url;

/** Absolute URL helper for metadata, sitemap, and schema. */
export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageMetaInput = {
  title?: string;
  description: string;
  path?: string;
  type?: "website" | "article";
};

/**
 * Shared metadata for pages that override root layout fields.
 * Explicitly keeps the root opengraph-image / twitter image so nested
 * openGraph objects do not wipe file-based social previews.
 */
export function buildPageMetadata({
  title,
  description,
  path = "/",
  type = "website",
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const resolvedTitle = title
    ? `${title} — ${site.name}`
    : `${site.name} — ${site.title}`;
  const images = [
    {
      url: absoluteUrl("/opengraph-image"),
      width: 1200,
      height: 630,
      alt: `${site.name} — ${site.title}`,
    },
  ];

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: url },
    openGraph: {
      title: resolvedTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [absoluteUrl("/opengraph-image")],
    },
  };
}
