/**
 * SeoKeywords — visually hidden, screen-reader accessible keyword block.
 * Rendered server-side so search engine crawlers index all variations.
 * Uses sr-only (clip pattern) — not display:none or visibility:hidden,
 * which search engines may ignore.
 */
export default function SeoKeywords() {
  // ── High-priority name terms (rendered first) ──────────────────────────────
  const nameTerms = [
    "Rakesh",
    "Rakesh Shrestha",
    "Rakesh Shrestha portfolio",
    "Rakesh Shrestha designer",
    "Rakesh Shrestha UI UX designer",
    "Rakesh Shrestha product designer",
    "Rakesh Shrestha Kathmandu",
    "Rakesh Shrestha Nepal",
    "Rakesh designer Nepal",
    "Rakesh UI UX Nepal",
    "Rakesh product designer Kathmandu",
    "Rakesh Shrestha Figma",
    "Rakesh Shrestha freelance",
    "Rakesh Shrestha hire",
    "Rakesh Shrestha portfolio Nepal",
    "Rakesh Shrestha portfolio Kathmandu",
  ];

  // ── Typo / misspelling variations ─────────────────────────────────────────
  // Covers: adjacent-key swaps, dropped letters, doubled letters,
  // phonetic misspellings, transpositions, and common autocorrect errors.
  const firstNameTypos = [
    // dropped / swapped letters
    "Rkesh", "Raesh", "Raksh", "Rakeh", "Rakes",
    "Raksh", "Raeksh", "Rkaesh", "Rakehs",
    // doubled letters
    "Rrakesh", "Raakesh", "Rakkesh", "Rakeesh", "Rakessh", "Rakeshh",
    // adjacent-key swaps (qwerty)
    "Rakesh", "Tskesh", "Eakesh", "Rakwsh", "Rakrsh", "Rakdsh",
    "Rakeah", "Rakewh", "Rakeeh", "Rakedh", "Rakexh", "Rakezh",
    "Rakesg", "Rakesj", "Rakesk", "Rakesn", "Rakesb",
    // phonetic / common misspellings
    "Rakash", "Rukesh", "Rikesh", "Rokesh",
    "Rakesh", "Rachesh", "Ragesh", "Ravesh", "Rapesh",
    "Racesh", "Raxesh", "Razesh",
    // missing first letter
    "akesh", "Akesh",
    // transpositions
    "Arkehs", "Rkaesh", "Rakseh", "Rakehs",
    // common autocorrect
    "Rakesh", "Rakes h", "Ra kesh", "R akesh",
  ];

  const lastNameTypos = [
    // dropped letters
    "Shresth", "Shresta", "Shresth", "Hrestha", "Srestha",
    "Shesta", "Shrtha", "Shretha", "Shrsha",
    // doubled letters
    "Sshrestha", "Shhrestha", "Shrrestha", "Shreestha",
    "Shresstha", "Shresttha", "Shresthaa",
    // adjacent-key swaps (qwerty)
    "Shrewtha", "Shrertha", "Shredtha", "Shresfha", "Shresgha",
    "Shresthq", "Shresthw", "Shresthz",
    "Ahrestha", "Whrestha", "Dhrestha", "Ehrestha", "Zhrestha",
    "Sgretha", "Sjrestha", "Snrestha", "Sbrestha",
    // phonetic / common misspellings
    "Shrestha", "Shresta", "Shreshta", "Shrastha", "Shrustha",
    "Shristha", "Shreestha", "Shrstha", "Shristah",
    "Srestha", "Shrestha", "Sretha", "Shrestha",
    "Shristah", "Shretsha", "Shretha", "Shrestah",
    // transpositions
    "Shrsetha", "Sherstah", "Shreaths", "Shrsetah",
    // common autocorrect
    "Shres tha", "Shre stha", "Sh restha",
  ];

  // Build typo keyword list — full name combos + each part alone
  const typoKeywords: string[] = [];

  // "Rakesh Shrestha" with first name typo
  for (const t of firstNameTypos) {
    typoKeywords.push(`${t} Shrestha`);
    typoKeywords.push(`${t} Shrestha designer`);
    typoKeywords.push(`${t} Shrestha portfolio`);
    typoKeywords.push(`${t} Shrestha Nepal`);
    typoKeywords.push(`${t} Shrestha Kathmandu`);
  }

  // "Rakesh Shrestha" with last name typo
  for (const t of lastNameTypos) {
    typoKeywords.push(`Rakesh ${t}`);
    typoKeywords.push(`Rakesh ${t} designer`);
    typoKeywords.push(`Rakesh ${t} portfolio`);
    typoKeywords.push(`Rakesh ${t} Nepal`);
    typoKeywords.push(`Rakesh ${t} Kathmandu`);
  }

  // Both parts typo'd (most common scenario — user gets both wrong)
  for (const fn of firstNameTypos.slice(0, 15)) {
    for (const ln of lastNameTypos.slice(0, 10)) {
      typoKeywords.push(`${fn} ${ln}`);
    }
  }

  // Standalone first-name typos (e.g. someone just searches "Rkesh designer")
  for (const t of firstNameTypos) {
    typoKeywords.push(`${t} designer`);
    typoKeywords.push(`${t} UI UX designer Nepal`);
  }

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

  const all = [...nameTerms, ...typoKeywords, ...branded, ...generic];

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
