import Reveal from "./Reveal";
import { PROJECTS } from "../data/projects";
import ProjectIcon from "./ProjectIcon";

function ProjectCard({ p, i }) {
  return (
    <Reveal delay={i * 100}>
      <a
        href="#contact"
        className="glow-card group block h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden hover:-translate-y-1.5"
      >
        <div className="relative h-44 md:h-52 w-full flex flex-col justify-between p-5 overflow-hidden" style={{ background: p.gradient }}>
          <span
            className="absolute -right-3 -bottom-6 font-display font-bold text-white/15 leading-none select-none pointer-events-none"
            style={{ fontSize: "7rem" }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>

          <div className="relative z-10 flex items-start justify-between">
            <span className="font-mono text-[11px] uppercase tracking-wide bg-black/25 text-white rounded-full px-3 py-1 backdrop-blur-sm">
              {p.status}
            </span>
            <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm grid place-items-center text-white transition-transform duration-300 group-hover:rotate-45">
              ↗
            </span>
          </div>

          <div className="relative z-10 w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm grid place-items-center text-white">
            <ProjectIcon icon={p.icon} className="w-5 h-5" />
          </div>
        </div>
        <div className="p-5 md:p-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-display font-semibold text-lg" style={{ color: "var(--surface-ink)" }}>
              {p.name}
            </h3>
            <span className="font-mono text-[11px] whitespace-nowrap" style={{ color: "var(--surface-muted)" }}>
              {p.tag}
            </span>
          </div>
          <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--surface-muted)" }}>
            {p.desc}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[10.5px] uppercase tracking-wide rounded-full px-2.5 py-1 border"
                style={{ borderColor: "var(--border)", color: "var(--surface-muted)" }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </a>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" className="px-6 md:px-8 max-w-6xl mx-auto py-20 md:py-28">
      <Reveal>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="font-mono text-[13px] uppercase tracking-widest mb-4" style={{ color: "var(--teal)" }}>
              The work
            </p>
            <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight text-[var(--ink)]">
              3 builds, ready to grow
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
