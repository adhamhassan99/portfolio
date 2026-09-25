import { Container } from "@/components/ui/Container";
import { profileLinks, site } from "@/lib/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-wrap items-center justify-between gap-3 py-8 font-mono text-2xs tracking-label uppercase text-ink-muted">
        <span>
          {site.name} — {site.title}
        </span>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <nav
            aria-label="Profiles"
            className="flex flex-wrap items-center gap-x-4"
          >
            {profileLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted no-underline transition-colors duration-[140ms] hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <span>Egypt (EET/EEST) · Flexible US/EU · © 2026</span>
        </div>
      </Container>
    </footer>
  );
}
