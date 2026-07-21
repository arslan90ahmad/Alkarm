import type { Metadata, Viewport } from "next";
import { fontDisplay, fontSans, fontMono } from "@/lib/fonts";
import { BRAND } from "@/lib/brand";
import ClientShell from "@/components/ClientShell";
import PremiumBackgroundLoader from "@/components/PremiumBackgroundLoader";
import "./globals.css";

export const metadata: Metadata = {
  title: `${BRAND.name} — Trusted Real Estate in Al Jalil Garden, Lahore`,
  description:
    "Al Karam Real Estate is the authorized sub-dealer of Al Jalil Developers — specialists in plots, houses, and investment across Al Jalil Garden and Al Noor Orchard, Lahore.",
  keywords: [
    "Al Karam Real Estate",
    "Al Jalil Garden",
    "Al Noor Orchard",
    "Lahore real estate",
    "plots in Lahore",
    "Al Jalil Developers",
  ],
  icons: { icon: "/images/logo.jpg" },
  openGraph: {
    title: BRAND.name,
    description: BRAND.tagline,
    type: "website",
    locale: "en_PK",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050b18",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <div className="site-bg" aria-hidden="true" />
        <PremiumBackgroundLoader />
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
