import { ImageResponse } from "next/og";
import { isValidLocale, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export const runtime = "edge";
export const alt = "Optimal Təkər Mərkəzi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { lang: string } }) {
  const lang = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const dict = getDictionary(lang);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0A0A0B",
          backgroundImage:
            "radial-gradient(ellipse at 80% 20%, #1a1a1d 0%, #0A0A0B 60%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              border: "2px solid white",
              display: "flex",
            }}
          />
          <span style={{ color: "white", fontSize: 26, fontWeight: 700, letterSpacing: -0.5 }}>
            OPTIMAL TƏKƏR MƏRKƏZİ
          </span>
        </div>
        <div
          style={{
            marginTop: 56,
            fontSize: 66,
            fontWeight: 700,
            color: "white",
            letterSpacing: -2,
            lineHeight: 1.05,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>{dict.hero.headline}</span>
          <span style={{ color: "#FF5A1F" }}>{dict.hero.headlineAccent}</span>
        </div>
        <div style={{ marginTop: 28, fontSize: 26, color: "rgba(255,255,255,0.55)", display: "flex" }}>
          {dict.hero.eyebrow}
        </div>
      </div>
    ),
    { ...size }
  );
}
