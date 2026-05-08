/**
 * SeoKeywords — visually hidden, screen-reader accessible keyword block.
 * Rendered server-side so search engine crawlers index all variations.
 * Uses sr-only (clip pattern) — not display:none or visibility:hidden,
 * which search engines may ignore.
 */
export default function SeoKeywords() {
  const roles = [
    "ui ux designer",
    "product designer",
    "user interface designer",
    "user experience designer",
    "web designer",
    "mobile app designer",
    "digital designer",
  ];

  const styles = [
    "neo brutalism",
    "neobrutalist",
    "brutalist ui",
    "modern brutalism",
    "bold ui",
    "experimental ui",
    "graphic heavy ui",
    "creative brutalism",
  ];

  const types = [
    "portfolio",
    "website",
    "case study",
    "best design",
    "creative",
    "modern",
    "professional",
    "freelance",
    "hire",
    "award winning",
    "showcase",
    "minimal",
  ];

  const locations = ["nepal", "kathmandu", "asia", "remote", "global"];

  // Generate all combinations: "Rakesh Shrestha [role] [style] [type] [location]"
  const branded: string[] = [];
  for (const role of roles) {
    for (const style of styles) {
      for (const type of types) {
        for (const loc of locations) {
          branded.push(`Rakesh Shrestha ${role} ${style} ${type} ${loc}`);
        }
      }
    }
  }

  // Generic (non-branded) combinations: "[role] [style] [type] [location]"
  const generic: string[] = [];
  for (const role of roles) {
    for (const style of styles) {
      for (const type of types) {
        for (const loc of locations) {
          generic.push(`${role} ${style} ${type} ${loc}`);
        }
      }
    }
  }

  const all = [...branded, ...generic];

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0,0,0,0)",
        whiteSpace: "nowrap",
        border: 0,
      }}
    >
      {all.map((kw, i) => (
        <span key={i}>{kw} </span>
      ))}
    </div>
  );
}
