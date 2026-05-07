import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rakshshrestha.com.np";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Block preview/staging deployments from being indexed.
        // Vercel preview URLs look like: your-project-git-branch-user.vercel.app
        // They are blocked automatically because NEXT_PUBLIC_SITE_URL won't match.
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
