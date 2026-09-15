"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useState,
  useSyncExternalStore,
} from "react";
import { motion, useReducedMotion } from "motion/react";
import { useTheme } from "next-themes";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/content/site";
import { springGentle } from "@/lib/motion/variants";

const navLinks = [
  { href: "/#work", label: "Work", id: "work" },
  { href: "/#process", label: "Process", id: "process" },
  { href: "/#services", label: "Services", id: "services" },
  { href: "/#faq", label: "FAQ", id: "faq" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

type NavProps = {
  variant?: "home" | "subpage";
};

export function Nav({ variant = "home" }: NavProps) {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(() => variant === "subpage");
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const reducedMotion = useReducedMotion();
  const isHome = pathname === "/";

  useEffect(() => {
    if (variant === "subpage") return;

    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!isHome) return;

    const sectionIds = navLinks.map((l) => l.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el != null);
    if (elements.length === 0) return;

    const visibility = new Map<string, IntersectionObserverEntry>();

    const pickActive = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActiveSection(sectionIds[sectionIds.length - 1] ?? null);
        return;
      }

      let active: string | null = null;
      for (const id of sectionIds) {
        const entry = visibility.get(id);
        if (entry?.isIntersecting) active = id;
      }

      if (!active) {
        const probe = window.scrollY + window.innerHeight * 0.35;
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= probe) active = id;
        }
      }

      setActiveSection(active);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id, entry);
        });
        pickActive();
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));

    window.addEventListener("scroll", pickActive, { passive: true });
    window.addEventListener("hashchange", pickActive);
    pickActive();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", pickActive);
      window.removeEventListener("hashchange", pickActive);
    };
  }, [isHome]);

  const handleNavClick = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const modeLabel = mounted && resolvedTheme === "dark" ? "Light" : "Dark";

  return (
    <div className={scrolled ? "scrolled" : ""}>
      <nav
        className="sitenav sticky top-0 z-50 flex h-16 items-center"
        aria-label="Main navigation"
      >
        <Container className="flex items-center justify-between gap-4">
          <Link
            href={isHome ? "#intro" : "/#intro"}
            className="font-mono text-xs font-medium tracking-label uppercase text-ink no-underline transition-colors duration-[140ms] hover:text-accent"
            onClick={() => setMenuOpen(false)}
          >
            {site.name}
          </Link>

          <div className="flex items-center gap-3 sm:gap-6">
            {isHome ? (
              <>
                <div className="hidden items-center gap-5 sm:flex">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <Link
                        key={link.id}
                        href={`#${link.id}`}
                        onClick={() => handleNavClick(link.id)}
                        className="group relative text-sm font-medium text-ink-2 no-underline transition-colors duration-[140ms] hover:text-accent"
                      >
                        {link.label}
                        {isActive && !reducedMotion && (
                          <motion.span
                            layoutId="nav-indicator"
                            className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent"
                            transition={springGentle}
                          />
                        )}
                        {isActive && reducedMotion && (
                          <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent" />
                        )}
                      </Link>
                    );
                  })}
                </div>
                <button
                  type="button"
                  className="cursor-pointer rounded-sm border border-line bg-transparent px-2.5 py-1.5 font-mono text-2xs font-medium tracking-label uppercase text-ink-2 transition-all duration-[140ms] hover:border-line-strong hover:text-ink sm:hidden"
                  aria-expanded={menuOpen}
                  aria-controls={menuId}
                  onClick={() => setMenuOpen((o) => !o)}
                >
                  {menuOpen ? "Close" : "Menu"}
                </button>
              </>
            ) : (
              <div className="flex items-center gap-5">
                <Link
                  href="/#work"
                  className="nav-back-link group inline-flex items-center gap-1 text-sm font-medium text-ink-2 no-underline transition-colors duration-[140ms] hover:text-ink"
                >
                  <span className="nav-back-arrow inline-block transition-transform duration-[140ms] ease-out group-hover:-translate-x-1">
                    ←
                  </span>
                  All work
                </Link>
                <Link
                  href="/#contact"
                  className="text-sm font-medium text-ink-2 no-underline transition-colors duration-[140ms] hover:text-ink"
                >
                  Contact
                </Link>
              </div>
            )}

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color mode"
              className="cursor-pointer rounded-sm border border-line bg-transparent px-2.5 py-1.5 font-mono text-2xs font-medium tracking-label uppercase text-ink-2 transition-all duration-[140ms] hover:border-line-strong hover:text-ink"
            >
              {modeLabel}
            </button>
          </div>
        </Container>
      </nav>

      {isHome && menuOpen && (
        <div id={menuId} className="border-b border-line bg-surface sm:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className="rounded-sm px-2 py-2.5 text-sm font-medium text-ink-2 no-underline transition-colors duration-[140ms] hover:bg-hover hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </div>
  );
}
