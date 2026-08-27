#!/usr/bin/env bash
# Redeploy do preview na Vercel.
#
# Por que este script existe: o adaptador da Vercel (@vercel/next) para o
# Next.js 16.3.1 com Turbopack, na versão do CLI usada neste projeto, não
# copia o HTML gerado por `output: "export"` para o deployment (a página
# fica 404 mesmo com o build passando). O workaround é gerar o export
# estático localmente com `next build` e montar o Build Output API v3 na mão,
# pulando a etapa de build automática da Vercel com `--prebuilt`.
#
# Antes de rodar de novo: teste se `npx vercel deploy --yes --prod` (sem
# --prebuilt) já funciona normalmente. Se a Vercel corrigir o adaptador,
# este script deixa de ser necessário.

set -euo pipefail
cd "$(dirname "$0")"

if ! command -v vercel >/dev/null 2>&1; then
  echo "Vercel CLI não encontrada. Instale e autentique uma versão confiável antes do deploy."
  exit 1
fi

echo "1/4 — build estático (next build)"
rm -rf .next out
npm run build

echo "2/4 — montando Build Output API v3"
rm -rf .vercel/output
mkdir -p .vercel/output/static
cp -r out/. .vercel/output/static/

cat > .vercel/output/config.json << 'EOF'
{
  "version": 3,
  "routes": [
    {
      "src": "/(.*)",
      "headers": {
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
        "Cross-Origin-Opener-Policy": "same-origin",
        "Cross-Origin-Resource-Policy": "same-origin",
        "X-DNS-Prefetch-Control": "off",
        "X-Permitted-Cross-Domain-Policies": "none",
        "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
        "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline'; script-src-attr 'none'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; media-src 'self'; connect-src 'self'; frame-src 'none'; worker-src 'self'; manifest-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests",
        "X-Robots-Tag": "noindex, nofollow"
      },
      "continue": true
    },
    { "handle": "filesystem" }
  ]
}
EOF

echo "3/4 — deploy (prebuilt, production)"
vercel deploy --prebuilt --yes --prod

echo "4/4 — conferindo"
curl -sI https://luciano-conrado-preview.vercel.app | head -5
