import Reveal from "./Reveal";
import { PROJECTS } from "../data/projects";
import ProjectIcon from "./ProjectIcon";

function ProjectCard({ p, i }) {
  return (
    <Reveal delay={i * 120}>
      <a
        href="#contact"
        className="glow-card group relative block h-full rounded-3xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl flex flex-col justify-between"
      >
        {/* Top Header Graphic Banner */}
        <div
          className="relative h-48 md:h-56 w-full flex flex-col justify-between p-6 overflow-hidden transition-all duration-500"
          style={{ background: p.gradient }}
        >
          {/* Subtle overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 opacity-70" />
          
          {/* Animated subtle blur orb */}
          <div className="absolute -top-10 -left-10 w-36 h-36 rounded-full bg-white/20 blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

          {/* Big project number watermark */}
          <span
            className="absolute -right-3 -bottom-6 font-display font-black text-white/20 leading-none select-none pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:text-white/30"
            style={{ fontSize: "7.5rem" }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>

          {/* Status & Arrow Bar */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-wider font-bold bg-black/40 text-white rounded-full px-3.5 py-1.5 backdrop-blur-md border border-white/20 shadow-md">
              {p.status}
            </span>
            <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 grid place-items-center text-white text-lg font-bold shadow-lg transition-transform duration-500 group-hover:rotate-45 group-hover:bg-white/30 group-hover:scale-110">
              ↗
            </span>
          </div>

          {/* Project Icon */}
          <div className="relative z-10 w-13 h-13 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 grid place-items-center text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            <ProjectIcon icon={p.icon} className="w-6 h-6 text-white drop-shadow-md" />
          </div>
        </div>

        {/* Card Body Details */}
        <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3 mb-2">
              <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight transition-colors" style={{ color: "var(--surface-ink)" }}>
                {p.name}
              </h3>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/5" style={{ color: "var(--surface-muted)" }}>
                {p.tag}
              </span>
            </div>
            <p className="mt-3 text-[14px] leading-relaxed" style={{ color: "var(--surface-muted)" }}>
              {p.desc}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-black/5">
            {p.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[10.5px] font-semibold uppercase tracking-wider rounded-lg px-3 py-1.5 border border-black/10 bg-black/5 transition-all duration-300 group-hover:border-black/20"
                style={{ color: "var(--surface-ink)" }}
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
            <p className="font-mono text-[13px] uppercase tracking-widest mb-4 font-bold" style={{ color: "var(--teal)" }}>
              Selected Projects
            </p>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-[var(--ink)]">
              3 featured builds, ready to scale
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}

