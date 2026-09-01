import { Container } from "@/components/ui/Container";
import { site } from "@/lib/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-wrap justify-between gap-3 py-8 font-mono text-2xs tracking-label uppercase text-ink-muted">
        <span>
          {site.name} — {site.title}
        </span>
        <span>Egypt (EET/EEST) · Flexible US/EU · © 2026</span>
      </Container>
    </footer>
  );
}
