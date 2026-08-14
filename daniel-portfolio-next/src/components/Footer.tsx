export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative overflow-hidden pb-12 pt-8 mt-16 border-t border-[var(--border)]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-24 z-10 relative">
        <p className="text-[13px] text-[var(--fg-muted)]">
          Copyright © {currentYear} Siro Daniel. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-[13px] text-[var(--fg)] font-medium">
          <a href="#" className="link-underline">LinkedIn</a>
          <span className="text-[var(--fg-muted)]">·</span>
          <a href="#" className="link-underline">GitHub</a>
          <span className="text-[var(--fg-muted)]">·</span>
          <a href="#" className="link-underline">TikTok</a>
        </div>
      </div>

      {/* Repeating Watermark */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 whitespace-nowrap translate-y-1/4"
        style={{
          fontSize: "clamp(80px, 12vw, 160px)",
          fontWeight: 300,
          letterSpacing: "0.05em",
          color: "var(--watermark)",
        }}
      >
        SIRO
      </div>
    </footer>
  );
}
