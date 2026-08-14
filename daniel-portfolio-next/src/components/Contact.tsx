"use client";

import { Plus } from "lucide-react";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section className="pt-32 pb-32 w-full" id="contact">
      <Reveal>
        <div className="flex items-center justify-between mb-4 border-b border-[var(--border)] pb-2">
          <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[var(--fg-muted)]">
            CHAT
          </span>
          <Plus size={14} className="text-[var(--fg-muted)]" />
        </div>
        <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--fg)] mb-12 tracking-[-0.01em]">
          Let&apos;s Talk.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <Reveal index={1}>
          <div>
            <p className="text-[16px] text-[var(--fg-secondary)] mb-8 leading-relaxed">
              Whether you have a specific project in mind, need technical consultation, or simply want to say hello — my inbox is always open.
            </p>
            <div className="mb-4">
              <span className="block text-[11px] uppercase tracking-[0.1em] text-[var(--fg-muted)] mb-1">
                Email
              </span>
              <a href="mailto:sirodaniel48@gmail.com" className="link-underline text-[18px] font-medium text-[var(--fg)]">
                sirodaniel48@gmail.com
              </a>
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-[0.1em] text-[var(--fg-muted)] mb-1">
                Location
              </span>
              <span className="text-[18px] font-medium text-[var(--fg)]">
                Kisii, Kenya
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal index={2}>
          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border-b border-[var(--border)] py-2 text-[15px] text-[var(--fg)] placeholder:text-[var(--fg-muted)] focus:outline-none focus:border-[var(--fg)] transition-colors"
                required
              />
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-[var(--border)] py-2 text-[15px] text-[var(--fg)] placeholder:text-[var(--fg-muted)] focus:outline-none focus:border-[var(--fg)] transition-colors"
                required
              />
            </div>
            <div className="relative">
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-transparent border-b border-[var(--border)] py-2 text-[15px] text-[var(--fg)] placeholder:text-[var(--fg-muted)] focus:outline-none focus:border-[var(--fg)] transition-colors resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="self-start bg-[var(--accent)] text-[var(--surface)] px-8 py-3.5 text-[14px] font-medium tracking-wide hover:bg-[var(--accent-hover)] transition-colors duration-150 rounded-none mt-4"
            >
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
