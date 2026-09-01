/**
 * Vector sources bypass `next/image` optimization: the optimizer rejects SVG
 * unless `dangerouslyAllowSVG` is set globally, and vectors gain nothing from
 * being resized anyway.
 */
export function isVector(src: string): boolean {
  return src.toLowerCase().endsWith(".svg");
}
