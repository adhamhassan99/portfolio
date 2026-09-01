"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
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
    if (!isHome) return;

    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

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
          >
            {site.name}
          </Link>

          <div className="flex items-center gap-6">
            {isHome ? (
              <div className="hidden items-center gap-5 sm:flex">
                {navLinks.map((link) => {
                  const href = `#${link.id}`;
                  const isActive = activeSection === link.id;

                  return (
                    <Link
                      key={link.id}
                      href={href}
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
    </div>
  );
}
