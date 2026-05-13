import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rakesh Shrestha — UI/UX Designer & Product Designer | Kathmandu, Nepal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FFE500",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          border: "16px solid black",
          boxSizing: "border-box",
        }}
      >
        {/* Top badge */}
        <div
          style={{
            background: "#FF006B",
            color: "white",
            padding: "10px 24px",
            border: "4px solid black",
            fontSize: 22,
            textTransform: "uppercase",
            letterSpacing: 2,
            marginBottom: 32,
            display: "flex",
          }}
        >
          UI/UX Designer · Product Designer
        </div>

        {/* Name */}
        <div
          style={{
            background: "black",
            color: "white",
            fontSize: 96,
            fontWeight: 900,
            textTransform: "uppercase",
            padding: "16px 40px",
            letterSpacing: -2,
            lineHeight: 1,
            marginBottom: 16,
            display: "flex",
            boxShadow: "12px 12px 0 #FF006B",
          }}
        >
          RAKESH SHRESTHA
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            color: "black",
            marginBottom: 48,
            display: "flex",
          }}
        >
          Kathmandu, Nepal · Figma Expert · 2× Hackathon Runner-up
        </div>

        {/* Bottom tags */}
        <div style={{ display: "flex", gap: 16 }}>
          {["Neobrutalist Design", "Edtech", "Freelance Available"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "white",
                border: "4px solid black",
                padding: "8px 20px",
                fontSize: 20,
                textTransform: "uppercase",
                display: "flex",
                boxShadow: "4px 4px 0 black",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            fontSize: 22,
            color: "black",
            opacity: 0.6,
            display: "flex",
          }}
        >
          rakeshshrestha.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
