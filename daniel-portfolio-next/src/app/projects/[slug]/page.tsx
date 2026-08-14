import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-32 w-full">
      <Reveal>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors mb-16"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>
      </Reveal>

      <Reveal index={1}>
        <div className="mb-4">
          <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[var(--fg-muted)]">
            PROJECT
          </span>
        </div>
        <h1 className="text-[40px] md:text-[56px] font-bold text-[var(--fg)] mb-8 tracking-[-0.02em] leading-tight">
          {project.title}
        </h1>
      </Reveal>

      <Reveal index={2}>
        <div className="w-full aspect-video bg-[var(--border)] mb-12 relative overflow-hidden">
          {/* Using a standard div as placeholder, replace with next/image if images exist */}
          <div className="absolute inset-0 flex items-center justify-center text-[var(--fg-muted)] font-mono text-sm">
            {project.image} (Placeholder)
          </div>
        </div>
      </Reveal>

      <div className="max-w-2xl">
        <Reveal index={3}>
          <p className="text-[16px] text-[var(--fg-secondary)] leading-relaxed mb-10">
            {project.description}
          </p>

          <div className="mb-16">
            <h3 className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[var(--fg-muted)] mb-4">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[13px] text-[var(--fg-secondary)] border border-[var(--border)] px-3 py-1.5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
