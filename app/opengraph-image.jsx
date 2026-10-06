import { ImageResponse } from "next/og";

export const alt = "Ronny Das — Project Lead & UI/UX Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function SocialImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", background: "#f3f2ed", color: "#1a2227", fontFamily: "sans-serif", borderBottom: "14px solid #955735" }}>
      <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#60655f" }}>INTERFACE THEATRE / PORTFOLIO</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", fontSize: 110, fontWeight: 700, letterSpacing: -6 }}>Ronny Das<span style={{ color: "#955735" }}>.</span></div>
        <div style={{ display: "flex", fontSize: 34 }}>Project Lead &amp; UI/UX Developer</div>
      </div>
      <div style={{ display: "flex", fontSize: 24, color: "#60655f" }}>Clear interfaces. Government &amp; enterprise systems.</div>
    </div>,
    size,
  );
}
