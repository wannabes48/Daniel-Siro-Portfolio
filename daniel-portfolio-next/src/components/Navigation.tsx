"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-200 ${
        isScrolled
          ? "bg-[rgba(249,248,245,0.85)] backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[720px] px-6 sm:px-8 md:px-12 flex justify-between items-center h-16">
        <Link
          href="/"
          className="link-underline font-sans font-medium text-[14px] text-[var(--fg)] tracking-[0.05em]"
        >
          SIRO DANIEL
        </Link>
        <Link
          href="#contact"
          className="bg-[var(--accent)] text-[var(--surface)] px-5 py-2 text-[13px] font-medium tracking-[0.05em] hover:bg-[var(--accent-hover)] transition-colors scale-100 hover:scale-[1.01] duration-150 rounded-none"
        >
          Let&apos;s Work
        </Link>
      </div>
    </nav>
  );
}
