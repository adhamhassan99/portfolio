import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { getProjectBySlug } from "@/lib/content/projects";

const project = getProjectBySlug("ai-studio");

export const metadata: Metadata = {
  title: "AI Studio",
  description: project?.summary,
};

export default function AiStudioPage() {
  if (!project) notFound();
  return <CaseStudyPage project={project} />;
}
