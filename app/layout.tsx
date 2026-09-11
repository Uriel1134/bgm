import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "BGM Ingénierie & Construction | De la conception à la réalisation",
  description:
    "BGM Ingénierie & Construction — De la conception à la réalisation : Conception • Études • Ingénierie • Construction TCE • VRD • Développement Immobilier à Libreville, Gabon. Siège: Lalala à droite, BP 15 406 - Libreville. Tél: (+241) 077 16 76 07.",
  keywords: [
    "BGM Ingénierie & Construction",
    "BGM",
    "Begnamam",
    "Construction TCE Gabon",
    "VRD Gabon",
    "Développement Immobilier Libreville",
    "Ingénierie BTP Gabon",
    "Conception Architecture 3D",
    "Études techniques bâtiment",
    "Lalala à droite Libreville"
  ],
  authors: [{ name: "BGM Ingénierie & Construction" }],
  openGraph: {
    title: "BGM Ingénierie & Construction — De la conception à la réalisation",
    description: "Conception • Études • Ingénierie • Construction TCE • VRD • Développement Immobilier à Libreville, Gabon.",
    url: "https://bgm-begnamam.ga",
    siteName: "BGM Ingénierie & Construction",
    locale: "fr_GA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://wa.me; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' https://fonts.gstatic.com data:; connect-src 'self' https://wa.me https://api.whatsapp.com; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self' https://wa.me;"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#030914] text-slate-100 min-h-screen flex flex-col antialiased selection:bg-[#CA9625] selection:text-[#024E7E]">
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
