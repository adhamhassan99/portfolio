import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { getProjectBySlug } from "@/lib/content/projects";

const project = getProjectBySlug("telemoney");

export const metadata: Metadata = {
  title: "Telemoney",
  description: project?.summary,
};

export default function TelemoneyPage() {
  if (!project) notFound();
  return <CaseStudyPage project={project} />;
}
