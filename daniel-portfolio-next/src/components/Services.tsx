"use client";

import { Plus, Code2, Database, LayoutTemplate, BrainCircuit } from "lucide-react";
import { Reveal } from "./reveal";

const SERVICES = [
  {
    title: "Full-Stack Engineering",
    description: "Architecting and developing robust, scalable web applications from database schema to responsive frontends using Next.js, Django, and React.",
    icon: Code2,
  },
  {
    title: "System Architecture & APIs",
    description: "Designing secure, high-performance REST and GraphQL APIs, managing PostgreSQL databases, and deploying microservices on Google Cloud Platform.",
    icon: Database,
  },
  {
    title: "AI & ML Integrations",
    description: "Leveraging LLMs, computer vision, and predictive analytics to build intelligent applications like credit scoring and part identification tools.",
    icon: BrainCircuit,
  },
  {
    title: "Web3 & Smart Contracts",
    description: "Developing decentralized applications and writing secure Rust/Soroban smart contracts on the Stellar network for real-world utility.",
    icon: LayoutTemplate,
  },
];

export function Services() {
  return (
    <section className="pt-32 pb-16 w-full" id="services">
      <Reveal>
        <div className="flex items-center justify-between mb-4 border-b border-[var(--border)] pb-2">
          <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[var(--fg-muted)]">
            SERVICES
          </span>
          <Plus size={14} className="text-[var(--fg-muted)]" />
        </div>
        <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--fg)] mb-12 tracking-[-0.01em]">
          What I Do
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {SERVICES.map((service, i) => (
          <Reveal key={service.title} index={i}>
            <div className="pb-10">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-[18px] font-semibold text-[var(--fg)]">
                  {service.title}
                </h3>
                <service.icon size={18} strokeWidth={1.5} className="text-[var(--fg)] opacity-80" />
              </div>
              <p className="text-[15px] text-[var(--fg-secondary)] leading-relaxed">
                {service.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
