import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", siteName: "Freb’s Fotos", title: "Freb’s Fotos — Photography & Film", description: "Portraits, editorial, and moving image by Baltimore photographer and filmmaker Frebruk Mikre.", url: siteUrl, images: [{ url: "/social-preview.jpg", width: 1200, height: 630, alt: "Freb’s Fotos — Frebruk Mikre, Photography & Film" }] },
  twitter: { card: "summary_large_image", title: "Freb’s Fotos — Photography & Film", images: ["/social-preview.jpg"] },
  title: "Freb's Fotos — Photographer & Filmmaker",
  description: "Visual emotion by Frebruk Mikre. Portrait, editorial, campaign, and film work.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
