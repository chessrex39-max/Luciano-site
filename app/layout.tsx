import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const siteUrl = "https://luciano-conrado-preview.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Luciano Conrado Advocacia | Direito Previdenciário",
  description:
    "Advocacia previdenciária conduzida com rigor técnico e atendimento próximo: aposentadorias, benefícios por incapacidade, revisões e recursos junto ao INSS.",
  keywords: [
    "advogado previdenciário",
    "direito previdenciário",
    "aposentadoria INSS",
    "revisão de benefício",
    "auxílio-doença",
    "BPC LOAS",
    "Afogados da Ingazeira",
  ],
  openGraph: {
    title: "Luciano Conrado Advocacia | Direito Previdenciário",
    description:
      "Advocacia previdenciária conduzida com rigor técnico e atendimento próximo: aposentadorias, benefícios por incapacidade, revisões e recursos junto ao INSS.",
    url: siteUrl,
    siteName: "Luciano Conrado Advocacia",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0908",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
