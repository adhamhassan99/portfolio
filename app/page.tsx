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

export default function HomePage() {
  return (
    <>
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
