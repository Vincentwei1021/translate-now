import Script from "next/script";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-heading", weight: ["400","500","600","700","800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://translate.toolboxlite.com";

export const metadata: Metadata = {
  title: "Free Online Translator — 100+ Languages | TranslateNow",
  description: "Translate text between 100+ languages instantly. Auto-detect source language, glossary support. Free, fast, no sign-up.",
  keywords: ["translator", "online translator", "translate text", "free translator", "language translator", "100 languages"],
  metadataBase: new URL(siteUrl), alternates: { canonical: "/" },
  openGraph: { title: "Free Translator — 100+ Languages | TranslateNow", description: "Translate text instantly. 100+ languages.", url: siteUrl, siteName: "TranslateNow", type: "website" },
  twitter: { card: "summary_large_image", title: "Free Translator | TranslateNow", description: "100+ languages, instant translation. Free." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5881105388002876" crossOrigin="anonymous" strategy="afterInteractive" />
      </head>
      <body className={`${jakarta.variable} ${inter.variable} font-sans antialiased bg-gray-50 text-gray-900`}>{children}</body>
    </html>
  );
}
