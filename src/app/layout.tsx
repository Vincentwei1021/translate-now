import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://translatenow.dev";

export const metadata: Metadata = {
  title: "Free Online Translator — Translate Text Instantly | TranslateNow",
  description:
    "Translate text between 100+ languages instantly. Auto-detect source language, copy translations with one click — free, no sign-up required.",
  keywords: [
    "free online translator",
    "translate text online",
    "language translator",
    "online translation",
    "text translator",
    "translate to english",
    "translate to spanish",
    "translate to chinese",
  ],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Free Online Translator | TranslateNow",
    description: "Translate text between 100+ languages instantly — free, no sign-up.",
    url: siteUrl,
    siteName: "TranslateNow",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Translator | TranslateNow",
    description: "Translate text between 100+ languages instantly — free, no sign-up.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>{children}</body>
    </html>
  );
}
