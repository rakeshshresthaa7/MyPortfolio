import ScrollProgress from "@/components/story/ScrollProgress";
import Navigation from "@/components/story/Navigation";
import HeroStory from "@/components/story/HeroStory";
import JourneyTimeline from "@/components/story/JourneyTimeline";
import SkillsShowcase from "@/components/story/SkillsShowcase";
import ProjectsGallery from "@/components/story/ProjectsGallery";
import AchievementsSection from "@/components/story/AchievementsSection";
import ContactStory from "@/components/story/ContactStory";
import SeoKeywords from "@/components/SeoKeywords";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rakeshshrestha.vercel.app";

// ── JSON-LD: Person ──────────────────────────────────────────────────────────
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rakesh Shrestha",
  url: SITE_URL,
  image: `${SITE_URL}/profile.png`,
  jobTitle: "UI/UX Designer & Product Designer",
  description:
    "UI/UX Designer and Product Designer based in Kathmandu, Nepal. Specialising in Figma, user-centered design, edtech, and frontend development.",
  email: "rakesh.shresthaa7@gmail.com",
  telephone: "+977-9863664362",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  sameAs: [
    "https://www.linkedin.com/in/rakesh-shrestha-2b9b34286",
    "https://github.com/rakeshshresthaa",
  ],
  knowsAbout: [
    "UI/UX Design",
    "Product Design",
    "Figma",
    "User Research",
    "Prototyping",
    "React",
    "Next.js",
  ],
};

// ── JSON-LD: WebSite (enables Google Sitelinks Search Box if eligible) ───────
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Rakesh Shrestha Portfolio",
  url: SITE_URL,
  description:
    "Portfolio of Rakesh Shrestha — UI/UX Designer & Product Designer based in Kathmandu, Nepal.",
  author: {
    "@type": "Person",
    name: "Rakesh Shrestha",
  },
};

// ── JSON-LD: CreativeWork — featured projects ────────────────────────────────
const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Featured Design Projects by Rakesh Shrestha",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "CreativeWork",
        name: "Gunasho (e Suchana)",
        description:
          "Redesigned a digital grievance platform for local government, creating intuitive user flows for complaint submission and tracking.",
        creator: { "@type": "Person", name: "Rakesh Shrestha" },
        genre: "Gov-Tech Platform",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "CreativeWork",
        name: "BigAI Portfolio",
        description:
          "Designed a complete company portfolio site with emphasis on services, case studies, and brand identity.",
        creator: { "@type": "Person", name: "Rakesh Shrestha" },
        genre: "Corporate Website",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "CreativeWork",
        name: "E Library System",
        description:
          "End-to-end UX design for book management, borrowing workflows, and admin dashboards.",
        creator: { "@type": "Person", name: "Rakesh Shrestha" },
        genre: "Education Platform",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* ── Structured data injected into <head> via Next.js script tag ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <SeoKeywords />
        <ScrollProgress />
        <Navigation />
        <HeroStory />
        <JourneyTimeline />
        <SkillsShowcase />
        <ProjectsGallery />
        <AchievementsSection />
        <ContactStory />
      </div>
    </>
  );
}
