import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { IntroSection } from "@/components/sections/IntroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StackSection } from "@/components/sections/StackSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { faqItems } from "@/lib/content/faq";
import { projects } from "@/lib/content/projects";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo";
import { site } from "@/lib/content/site";

export const metadata: Metadata = buildPageMetadata({
  description: site.metaDescription,
  path: "/",
});

/** Homepage-only FAQPage schema — matches visible FAQ section content. */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Selected work",
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: absoluteUrl(`/work/${project.slug}`),
    name: project.title,
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Nav variant="home" />
      <main>
        <IntroSection />
        <TrustSection />
        <WorkSection />
        <ProcessSection />
        <ServicesSection />
        <StackSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
