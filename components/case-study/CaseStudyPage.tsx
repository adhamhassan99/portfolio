import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CaseStudyHeader } from "./CaseStudyHeader";
import { CaseStudyLinks } from "./CaseStudyLinks";
import { CaseStudyMedia } from "./CaseStudyMedia";
import { CaseStudyPreview } from "./CaseStudyPreview";
import { CaseStudyBody } from "./CaseStudyBody";
import { CaseStudyNext } from "./CaseStudyNext";
import type { Project } from "@/lib/content/projects";

type CaseStudyPageProps = {
  project: Project;
};

export function CaseStudyPage({ project }: CaseStudyPageProps) {
  return (
    <>
      <Nav variant="subpage" />
      <CaseStudyHeader project={project} />
      <CaseStudyLinks links={project.links} />
      <CaseStudyMedia project={project} />
      <CaseStudyPreview preview={project.preview} />
      <CaseStudyBody sections={project.sections} />
      {project.nextProject && (
        <CaseStudyNext
          slug={project.nextProject.slug}
          title={project.nextProject.title}
        />
      )}
      <Footer />
    </>
  );
}
