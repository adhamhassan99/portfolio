"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { faqItems } from "@/lib/content/faq";
import { springSnappy, springSoft, instant } from "@/lib/motion/variants";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="faq"
      className="border-y border-line-subtle bg-surface-2 py-section"
    >
      <Container>
        <SectionLabel index="07" label=" FAQ" className="mb-0" />

        <div className="flex max-w-content flex-col">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.question} delay={i * 0.07}>
                <div className="border-b border-line-subtle">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="faq-btn flex w-full cursor-pointer items-baseline justify-between gap-4 border-none bg-transparent px-1 py-5 text-left font-[inherit]"
                  >
                    <span
                      className={`faq-q text-base font-semibold ${isOpen ? "text-ink" : "text-ink-2"}`}
                    >
                      {item.question}
                    </span>
                    <motion.span
                      className="font-mono text-base leading-none text-ink-muted"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={reducedMotion ? instant : springSnappy}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
                        transition={reducedMotion ? instant : springSoft}
                        className="overflow-hidden"
                      >
                        <p className="max-w-prose px-1 pb-5 text-[0.9375rem] text-pretty text-ink-2">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
