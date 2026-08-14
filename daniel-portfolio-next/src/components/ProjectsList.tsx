"use client";

import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { PROJECTS } from "@/lib/data";

export function ProjectsList() {
  return (
    <section className="pt-32 pb-16 w-full" id="projects">
      <Reveal>
        <div className="flex items-center justify-between mb-4 border-b border-[var(--border)] pb-2">
          <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[var(--fg-muted)]">
            SHOWCASE
          </span>
          <Plus size={14} className="text-[var(--fg-muted)]" />
        </div>
        <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--fg)] mb-8 tracking-[-0.01em]">
          Projects
        </h2>
      </Reveal>

      <div className="flex flex-col">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.slug} index={i} className="w-full">
            <Link
              href={`/projects/${project.slug}`}
              className="group flex items-center justify-between py-5 border-b border-[var(--border)] transition-colors duration-200 hover:bg-[var(--surface-hover)] -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8"
            >
              <div className="flex items-center gap-4 md:gap-8">
                <span className="text-[12px] text-[var(--fg-muted)] font-mono">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="text-[18px] md:text-[20px] font-semibold text-[var(--fg)]">
                  {project.title}
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[11px] uppercase tracking-[0.15em] font-medium text-[var(--fg-muted)] hidden sm:block">
                  {project.category}
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
