import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Dynamic portfolio",
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
                bg-gradient-to-b
                from-black
                via-black
                to-emerald-950
              `}
          >
            <Header/>
            <main>{children}</main>
          </body>
      </html>
  );
}
