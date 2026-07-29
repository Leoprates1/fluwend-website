import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Empacota o servidor e apenas as dependências realmente usadas em
   * `.next/standalone`. É o que permite a imagem Docker rodar sem
   * `node_modules` completo. Não altera o comportamento do site.
   */
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
