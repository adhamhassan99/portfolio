import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { getProjectBySlug } from "@/lib/content/projects";

const project = getProjectBySlug("el-gouna-app");

export const metadata: Metadata = {
    title: "El Gouna App",
    description: project?.summary,
};

export default function FlowlensPage() {
    if (!project) notFound();
    return <CaseStudyPage project={project} />;
}
