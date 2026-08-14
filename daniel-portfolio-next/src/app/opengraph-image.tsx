import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Daniel Siro Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F9F8F5",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            fontSize: "240px",
            fontWeight: 300,
            letterSpacing: "0.05em",
            color: "rgba(0,0,0,0.04)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            whiteSpace: "nowrap",
          }}
        >
          SIRO
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: "24px",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#888888",
              marginBottom: "24px",
            }}
          >
            Siro Daniel
          </div>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 800,
              color: "#0A0A0A",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
            Software Engineer
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
