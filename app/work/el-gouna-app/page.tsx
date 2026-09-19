import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { getProjectBySlug } from "@/lib/content/projects";
import { buildPageMetadata } from "@/lib/seo";

const project = getProjectBySlug("el-gouna-app");

export const metadata: Metadata = buildPageMetadata({
  title: "El Gouna App",
  description:
    project?.summary ??
    "Primary destination app for El Gouna on iOS and Android.",
  path: "/work/el-gouna-app",
  type: "article",
});

export default function ElGounaAppPage() {
  if (!project) notFound();
  return <CaseStudyPage project={project} />;
}
