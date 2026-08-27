import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#0b0908",
          color: "#f4ede3",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c8a24c",
            marginBottom: 24,
            display: "flex",
          }}
        >
          Preview NEXO
        </div>
        <div
          style={{
            fontSize: 100,
            fontWeight: 700,
            lineHeight: 1,
            display: "flex",
          }}
        >
          Luciano Conrado
        </div>
        <div
          style={{
            fontSize: 32,
            marginTop: 24,
            color: "rgba(244,237,227,0.72)",
            display: "flex",
          }}
        >
          Advocacia Previdenciária, Afogados da Ingazeira, PE
        </div>
      </div>
    ),
    { ...size }
  );
}
