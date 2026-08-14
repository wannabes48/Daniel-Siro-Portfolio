"use client";

const SKILLS = [
  "React / Next.js",
  "Python / Django",
  "Flutter",
  "TypeScript",
  "GCP",
  "Rust / Soroban",
  "Machine Learning",
  "Gemini AI",
  "Web3",
  "PostgreSQL",
  "Tailwind CSS",
];

export function Marquee() {
  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden border-t border-b border-[var(--border)] py-4 bg-[var(--bg)]">
      <div className="marquee-track items-center">
        {/* Render two identical sets of items for seamless loop */}
        {[...Array(2)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex shrink-0 items-center">
            {SKILLS.map((skill, i) => (
              <div key={`${groupIndex}-${i}`} className="flex items-center">
                <span className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--fg)] whitespace-nowrap mx-6">
                  {skill}
                </span>
                <span className="text-[var(--fg-muted)]">·</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
