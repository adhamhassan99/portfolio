import { IBM_Plex_Mono, Newsreader, Schibsted_Grotesk } from "next/font/google";

export const display = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["opsz"],
  style: ["normal", "italic"],
});

export const body = Schibsted_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});
