import { ImageResponse } from "next/og";
import { portfolioData } from "@/data/portfolio";

export const alt = `${portfolioData.profile.name} - ${portfolioData.profile.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  const { profile } = portfolioData;

  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#050505",
        color: "#fafafa",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: 72,
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          border: "1px solid #27272a",
          display: "flex",
          justifyContent: "space-between",
          padding: "24px 28px",
        }}
      >
        <span
          style={{
            color: "#38bdf8",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </span>
        <span
          style={{
            color: "#a1a1aa",
            fontSize: 24,
          }}
        >
          {profile.location}
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <h1
          style={{
            fontSize: 82,
            letterSpacing: 0,
            lineHeight: 1,
            margin: 0,
            maxWidth: 980,
          }}
        >
          {profile.name}
        </h1>
        <p
          style={{
            color: "#a1a1aa",
            fontSize: 40,
            lineHeight: 1.25,
            margin: 0,
            maxWidth: 900,
          }}
        >
          {profile.role} building web apps, integrations, and automation
          workflows.
        </p>
      </div>

      <div
        style={{
          borderTop: "1px solid #27272a",
          color: "#38bdf8",
          display: "flex",
          fontSize: 26,
          justifyContent: "space-between",
          paddingTop: 28,
        }}
      >
        <span>Next.js</span>
        <span>React</span>
        <span>TypeScript</span>
        <span>Full Stack</span>
      </div>
    </div>,
    size
  );
}
