import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.slogan}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Imagem de compartilhamento gerada no build — mesma linguagem visual do Hero,
 * sem depender de nenhum arquivo de arte externo.
 */
export default async function OpenGraphImage() {
  const symbol = await readFile(
    join(process.cwd(), "public/brand/fluwend-symbol.png"),
  );
  const symbolSrc = `data:image/png;base64,${symbol.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#05070A",
          backgroundImage:
            "radial-gradient(1000px 600px at 15% -10%, rgba(22,103,255,0.42), transparent 60%), radial-gradient(800px 500px at 95% 110%, rgba(34,211,238,0.22), transparent 60%)",
          color: "#F5F7FA",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={symbolSrc} alt="" width={54} height={71} />
          <span
            style={{
              fontSize: 30,
              letterSpacing: 10,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Fluwend
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 22,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#22D3EE",
            }}
          >
            {siteConfig.positioning}
          </span>
          <span
            style={{
              marginTop: 28,
              fontSize: 68,
              lineHeight: 1.1,
              fontWeight: 700,
              maxWidth: 900,
            }}
          >
            Transformamos empresas em negócios inteligentes.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#98A4B4",
          }}
        >
          <span>Inteligência Artificial · Automação · Tecnologia</span>
          <span>{siteConfig.location.label}</span>
        </div>
      </div>
    ),
    size,
  );
}
