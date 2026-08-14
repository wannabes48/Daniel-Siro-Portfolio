"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { heroFadeUp } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-32 w-full max-w-3xl mx-auto">
      {/* Absolute Watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 whitespace-nowrap"
        style={{
          fontSize: "clamp(80px, 12vw, 160px)",
          fontWeight: 300,
          letterSpacing: "0.05em",
          color: "var(--color-watermark)",
        }}
      >
        SIRO
      </div>

      {/* Content Stack */}
      <div className="relative z-10 flex flex-col items-start w-full">
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={heroFadeUp}
          className="text-[11px] uppercase font-semibold text-[var(--fg-muted)] mb-6"
          style={{ letterSpacing: "0.15em" }}
        >
          Daniel Siro
        </motion.div>

        <motion.h1
          custom={2}
          initial="hidden"
          animate="visible"
          variants={heroFadeUp}
          className="font-[800] text-[var(--fg)] leading-[1.1] mb-6"
          style={{
            fontSize: "clamp(40px, 6vw, 72px)",
            letterSpacing: "-0.02em",
          }}
        >
          Full-Stack <br /> Software Engineer.
        </motion.h1>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={heroFadeUp}
          className="text-[15px] sm:text-[16px] text-[var(--fg-secondary)] max-w-xl mb-12 leading-relaxed"
        >
          I build robust, scalable applications across the stack—from high-performance Next.js 
          frontends to complex Django backends and Web3 smart contracts on Stellar.
        </motion.p>

        <motion.div custom={4} initial="hidden" animate="visible" variants={heroFadeUp}>
          <Link
            href="#contact"
            className="inline-block bg-[var(--accent)] text-[var(--surface)] px-8 py-3.5 text-[14px] font-medium tracking-wide hover:bg-[var(--accent-hover)] transition-colors duration-150 rounded-none"
          >
            Let&apos;s Talk
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
