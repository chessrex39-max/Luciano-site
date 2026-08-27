import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Preview de prospecção: não deve ser indexado nem competir com o site
// oficial do escritório antes do fechamento e da publicação autorizada.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
