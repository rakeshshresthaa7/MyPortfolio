import type { Metadata } from "next";
import "./globals.css";

// ─── Change this to your real production domain once deployed ───────────────
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rakshshrestha.com.np";

export const metadata: Metadata = {
  // ── Basic ──────────────────────────────────────────────────────────────────
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rakesh Shrestha — UI/UX Designer & Product Designer | Kathmandu, Nepal",
    template: "%s | Rakesh Shrestha",
  },
  description:
    "Rakesh Shrestha is a UI/UX Designer and Product Designer based in Kathmandu, Nepal. Specialising in Figma, user-centered design, edtech, and frontend development. 2× hackathon runner-up.",
  keywords: [
    "UI/UX Designer Kathmandu",
    "Product Designer Nepal",
    "Figma Designer Nepal",
    "UX Designer Kathmandu",
    "Rakesh Shrestha designer",
    "portfolio Nepal",
    "edtech designer",
    "frontend designer Nepal",
  ],
  authors: [{ name: "Rakesh Shrestha", url: SITE_URL }],
  creator: "Rakesh Shrestha",
  publisher: "Rakesh Shrestha",

  // ── Canonical + robots ─────────────────────────────────────────────────────
  // metadataBase handles absolute URL resolution for all relative paths below.
  // The canonical is set per-page via alternates; the global fallback is the root.
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ─────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Rakesh Shrestha Portfolio",
    title: "Rakesh Shrestha — UI/UX Designer & Product Designer | Kathmandu, Nepal",
    description:
      "UI/UX Designer and Product Designer based in Kathmandu, Nepal. Figma expert, 2× hackathon runner-up, passionate about edtech and user-centered design.",
    images: [
      {
        url: "/og.png",          // place a 1200×630 image at public/og.png
        width: 1200,
        height: 630,
        alt: "Rakesh Shrestha — UI/UX Designer Portfolio",
      },
    ],
  },

  // ── Twitter / X card ───────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Rakesh Shrestha — UI/UX Designer & Product Designer",
    description:
      "UI/UX Designer based in Kathmandu, Nepal. Figma expert, 2× hackathon runner-up.",
    images: ["/og.png"],
    // creator: "@yourhandle",   // add if you have a Twitter/X account
  },

  // ── Icons ──────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },

  // ── Verification (fill in after Search Console setup) ─────────────────────
  verification: {
    google: [
      process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ?? "",
      process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_2 ?? "",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
