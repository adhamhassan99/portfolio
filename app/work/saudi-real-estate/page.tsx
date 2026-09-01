import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { getProjectBySlug } from "@/lib/content/projects";

const project = getProjectBySlug("saudi-real-estate");

export const metadata: Metadata = {
  title: "Saudi Real Estate Marketplace",
  description: project?.summary,
};

export default function SaudiRealEstatePage() {
  if (!project) notFound();
  return <CaseStudyPage project={project} />;
}
