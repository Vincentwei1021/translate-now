import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://translatenow.dev";

export const metadata: Metadata = {
  title: "Free Online Translator & Translation Tool | TranslateNow",
  description:
    "Translate text between 100+ languages for free. Online translator with auto-detect & one-click copy. The best free translation tool — no sign-up required.",
  keywords: [
    "online translator",
    "free translation tool",
    "translate text online",
    "language translator",
    "free online translator",
    "text translator",
    "translate to english",
    "translate to spanish",
    "translate to chinese",
    "ai translator online",
    "multilingual translator",
  ],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Free Online Translator & Translation Tool | TranslateNow",
    description:
      "Translate text between 100+ languages instantly — free online translator with auto-detect. No sign-up.",
    url: siteUrl,
    siteName: "TranslateNow",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "TranslateNow — Free Online Translator & Translation Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Translator & Translation Tool | TranslateNow",
    description:
      "Translate text between 100+ languages instantly — free online translator with auto-detect. No sign-up.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: { index: true, follow: true },
  other: {
    "theme-color": "#d97706",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>{children}</body>
    </html>
  );
}
