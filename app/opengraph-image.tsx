import { ImageResponse } from "next/og";
import { site } from "@/lib/content/site";

export const dynamic = "force-static";
export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#F9F7F2",
          color: "#2A3038",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#6B7280",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#3D8B6E",
            }}
          />
          Portfolio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontWeight: 500,
              maxWidth: 980,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              fontSize: 32,
              lineHeight: 1.35,
              color: "#4B5563",
              maxWidth: 820,
              fontFamily:
                "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
            }}
          >
            {site.positioning}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#6B7280",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          }}
        >
          <span>{site.title}</span>
          <span style={{ color: "#C46A2F" }}>adhamabdelwahab.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
