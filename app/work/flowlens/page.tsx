import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { getProjectBySlug } from "@/lib/content/projects";
import { buildPageMetadata } from "@/lib/seo";

const project = getProjectBySlug("flowlens");

export const metadata: Metadata = buildPageMetadata({
  title: "Flowlens",
  description:
    project?.summary ??
    "Real-time observability for AI agent workflows.",
  path: "/work/flowlens",
  type: "article",
});

export default function FlowlensPage() {
  if (!project) notFound();
  return <CaseStudyPage project={project} />;
}
