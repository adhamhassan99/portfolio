import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PageTransition } from "@/components/layout/PageTransition";

export default function NotFound() {
  return (
    <>
      <Nav variant="subpage" />
      <main className="flex flex-1 items-center">
        <PageTransition className="w-full">
          <Container className="py-section">
            <SectionLabel index="Error" label=" 404" className="mb-block" />

            <Reveal trigger="mount" delay={0.08}>
              <h1 className="max-w-[20ch] text-display text-balance">
                This page doesn&apos;t exist —{" "}
                <em className="italic">or it shipped without a spec.</em>
              </h1>
            </Reveal>

            <Reveal trigger="mount" delay={0.16}>
              <p className="mt-6 max-w-[54ch] text-pretty text-ink-2">
                The address may be mistyped, or the page was moved. Everything
                worth reading is one level up.
              </p>
            </Reveal>

            <Reveal trigger="mount" delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Button href="/">Back to home</Button>
                <Link
                  href="/#work"
                  className="nav-text-link text-sm font-medium text-ink-2 no-underline"
                >
                  Selected work →
                </Link>
              </div>
            </Reveal>
          </Container>
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
