import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/layout/Header";
import {LanguageProvider} from "@/lib/i18n/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://santiago-feijoo-portafolio.vercel.app";
const siteName = "Santiago Feijoo | Portfolio";
const title = "Santiago Feijoo | Full Stack Developer";
const description =
  "Portfolio de Santiago Feijoo, Full Stack Developer y Analista Funcional. Proyectos, experiencia profesional y contacto.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Santiago Feijoo",
  },
  description,
  keywords: [
    "Santiago Feijoo",
    "Full Stack Developer",
    "Desarrollador Full Stack",
    "Analista Funcional",
    "Portfolio desarrollador",
    "Next.js",
    "React",
    "TypeScript",
    "Java",
  ],
  authors: [{ name: "Santiago Feijoo", url: siteUrl }],
  creator: "Santiago Feijoo",
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Santiago Feijoo",
  jobTitle: "Full Stack Developer",
  url: siteUrl,
  image: `${siteUrl}/foto-selfie.jpg`,
  sameAs: [
    "https://github.com/SantiagoIvan",
    "https://www.linkedin.com/in/santiago-iv%C3%A1n-feijoo-b6b72b1a4/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="es" className="dark">
          <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased
              min-h-screen
              bg-linear-to-b
              from-black
              via-emerald-950
              to-emerald-900/20
              `}
          >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
            />
            <LanguageProvider>
                <Header/>
                <main>{children}</main>
            </LanguageProvider>
          </body>
      </html>
  );
}
