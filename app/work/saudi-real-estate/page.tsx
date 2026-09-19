import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { getProjectBySlug } from "@/lib/content/projects";
import { buildPageMetadata } from "@/lib/seo";

const project = getProjectBySlug("saudi-real-estate");

export const metadata: Metadata = buildPageMetadata({
  title: "Saudi Real Estate Marketplace",
  description:
    project?.summary ??
    "Contactless verification and unit allocation via government APIs.",
  path: "/work/saudi-real-estate",
  type: "article",
});

export default function SaudiRealEstatePage() {
  if (!project) notFound();
  return <CaseStudyPage project={project} />;
}
