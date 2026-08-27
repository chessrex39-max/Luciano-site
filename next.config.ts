import type { NextConfig } from "next";

// Site 100% estático (sem rotas dinâmicas, cookies ou dados de requisição),
// então exportamos HTML estático em vez de depender de funções serverless.
// Os headers de segurança equivalentes ficam em vercel.json, já que
// `headers()` do Next não é suportado em output: "export".
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  productionBrowserSourceMaps: false,
};

export default nextConfig;
