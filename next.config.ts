import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Image optimisation ────────────────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"], // serve modern formats automatically
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256],
  },

  // ── Security + performance HTTP headers ──────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent MIME-type sniffing (security + perf)
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Prevent clickjacking
          { key: "X-Frame-Options", value: "DENY" },
          // Force HTTPS
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          // Referrer policy
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Permissions policy — disable unused browser features
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        // Long-term cache for static assets (images, fonts, JS chunks)
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Cache public assets (favicon, OG image, CV, profile photo)
        source: "/(favicon\\.png|og\\.png|profile\\.png|.*\\.pdf)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
    ];
  },

  // ── Compression ───────────────────────────────────────────────────────────
  compress: true,

  // ── Strict mode for catching React issues early ───────────────────────────
  reactStrictMode: true,
};

export default nextConfig;
