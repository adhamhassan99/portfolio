/** Split "01 / Problem" into index + label for SectionLabel. */
export function parseSectionLabel(full: string): { index: string; label: string } {
  const slash = full.indexOf(" / ");
  if (slash === -1) return { index: full, label: "" };
  return {
    index: full.slice(0, slash),
    label: full.slice(slash + 2),
  };
}
