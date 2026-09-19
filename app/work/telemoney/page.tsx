import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { getProjectBySlug } from "@/lib/content/projects";
import { buildPageMetadata } from "@/lib/seo";

const project = getProjectBySlug("telemoney");

export const metadata: Metadata = buildPageMetadata({
  title: "Telemoney",
  description:
    project?.summary ??
    "International transfers and onboarding for ANB Telemoney.",
  path: "/work/telemoney",
  type: "article",
});

export default function TelemoneyPage() {
  if (!project) notFound();
  return <CaseStudyPage project={project} />;
}
