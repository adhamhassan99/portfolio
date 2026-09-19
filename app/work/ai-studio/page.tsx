import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { getProjectBySlug } from "@/lib/content/projects";
import { buildPageMetadata } from "@/lib/seo";

const project = getProjectBySlug("ai-studio");

export const metadata: Metadata = buildPageMetadata({
  title: "AI Studio",
  description:
    project?.summary ??
    "Marketplace to build and deploy workflow-integrated AI agents.",
  path: "/work/ai-studio",
  type: "article",
});

export default function AiStudioPage() {
  if (!project) notFound();
  return <CaseStudyPage project={project} />;
}
