import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { PROJECTS } from "../data/projects";
import ProjectIcon from "./ProjectIcon";
import { ArrowUpRight } from "./Icons";

const GITHUB_PROFILE = "https://github.com/chmnoumanqamar";

function ProjectCard({ p, i }) {
  return (
    <Reveal delay={i * 100}>
      <motion.a
        href={p.github || GITHUB_PROFILE}
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
        className="glow-card group relative block h-full rounded-2xl sm:rounded-3xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-lg hover:shadow-2xl flex flex-col justify-between cursor-pointer min-w-0 transition-colors"
      >
        {/* Top Header Graphic Banner */}
        <div
          className="relative h-40 sm:h-48 md:h-52 w-full flex flex-col justify-between p-4 sm:p-6 overflow-hidden transition-all duration-500"
          style={{ background: p.gradient }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 opacity-70" />
          
          {/* Glow orb */}
          <div className="absolute -top-10 -left-10 w-36 h-36 rounded-full bg-white/20 blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

          {/* Project number watermark */}
          <span
            className="absolute -right-2 -bottom-4 font-display font-black text-white/20 leading-none select-none pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:text-white/30 text-6xl sm:text-7xl md:text-8xl"
          >
            {String(i + 1).padStart(2, "0")}
          </span>

          {/* Status & External Link Badge */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider font-bold bg-black/40 text-white rounded-full px-3 py-1 sm:px-3.5 sm:py-1.5 backdrop-blur-md border border-white/20 shadow-md">
              {p.status}
            </span>
            <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 grid place-items-center text-white text-base sm:text-lg font-bold shadow-lg transition-all duration-500 group-hover:rotate-45 group-hover:bg-white/30 group-hover:scale-110">
              ↗
            </span>
          </div>

          {/* Project Icon */}
          <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 grid place-items-center text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            <ProjectIcon icon={p.icon} className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-md" />
          </div>
        </div>

        {/* Card Body Details */}
        <div className="p-4 sm:p-6 md:p-7 flex-1 flex flex-col justify-between min-w-0">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl tracking-tight transition-colors group-hover:text-[var(--accent-ink)]" style={{ color: "var(--surface-ink)" }}>
                {p.name}
              </h3>
              <span className="font-mono text-[9.5px] sm:text-[10.5px] font-semibold uppercase tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-black/5 shrink-0" style={{ color: "var(--surface-muted)" }}>
                {p.tag}
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed" style={{ color: "var(--surface-muted)" }}>
              {p.desc}
            </p>
          </div>

          <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-black/5">
            {p.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[9.5px] sm:text-[10.5px] font-semibold uppercase tracking-wider rounded-lg px-2.5 py-1 border border-black/10 bg-black/5 transition-all duration-300 group-hover:border-black/20"
                style={{ color: "var(--surface-ink)" }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </motion.a>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto py-14 sm:py-20 md:py-28">
      <Reveal>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8 sm:mb-12">
          <div>
            <p className="font-mono text-[11px] sm:text-[13px] uppercase tracking-widest mb-3 sm:mb-4 font-bold" style={{ color: "var(--teal)" }}>
              Selected Projects
            </p>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-tight text-[var(--ink)]">
              3 featured builds, ready to scale
            </h2>
          </div>

          {/* GitHub Header Action Link */}
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold text-[var(--teal)] hover:underline"
          >
            <span>View GitHub</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </Reveal>

      {/* Fully Mobile Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} p={p} i={i} />
        ))}
      </div>

      {/* GitHub Call to Action Banner at Bottom */}
      <Reveal delay={150} className="mt-10 sm:mt-14">
        <a
          href={GITHUB_PROFILE}
          target="_blank"
          rel="noreferrer"
          className="group block p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--teal)] transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/10 flex items-center justify-center text-xl sm:text-2xl shrink-0">
                🐙
              </div>
              <div>
                <h4 className="font-display font-bold text-base sm:text-xl" style={{ color: "var(--surface-ink)" }}>
                  Want to inspect more code & open-source builds?
                </h4>
                <p className="text-xs sm:text-sm" style={{ color: "var(--surface-muted)" }}>
                  Explore all repositories, commits, and machine learning scripts on GitHub.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl bg-[var(--teal)] text-[var(--accent-ink)] group-hover:scale-105 transition-transform shrink-0">
              <span>GitHub Profile</span>
              <ArrowUpRight size={16} />
            </div>
          </div>
        </a>
      </Reveal>
    </section>
  );
}
