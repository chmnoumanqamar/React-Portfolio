import { PROJECTS } from "../data/projects";
import ProjectIcon from "./ProjectIcon";

const ROWS = [
  { text: "W", speed: 40 },
  { text: "O", speed: 34 },
  { text: "R", speed: 46 },
  { text: "K", speed: 30 },
];

function MockCard({ p, i }) {
  return (
    <a
      href="#work"
      className="glow-card group relative block rounded-2xl md:rounded-3xl border overflow-hidden shadow-2xl bg-[var(--surface)] hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 ease-out flex flex-col justify-between"
      style={{ borderColor: "var(--border)", transformStyle: "preserve-3d" }}
    >
      {/* Top Browser Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 sm:px-4 sm:py-3 border-b border-black/5" style={{ background: "rgba(0,0,0,0.06)" }}>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 shadow-inner" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 shadow-inner" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80 shadow-inner" />
        </div>
        <span className="font-mono text-[9px] sm:text-[11px] uppercase tracking-wider font-semibold opacity-70 px-2 py-0.5 rounded bg-black/10 text-[var(--surface-ink)]">
          {p.tag}
        </span>
      </div>

      {/* Main Visual Header Area */}
      <div className="relative h-28 sm:h-44 md:h-52 grid place-items-center overflow-hidden group" style={{ background: p.gradient }}>
        {/* Animated background shapes/glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/10 opacity-70" />
        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-white/20 blur-2xl group-hover:scale-150 transition-transform duration-700" />
        
        {/* Giant background number overlay */}
        <span
          className="absolute -right-2 -bottom-4 font-display font-black text-white/20 leading-none select-none pointer-events-none group-hover:scale-110 group-hover:text-white/30 transition-all duration-500"
          style={{ fontSize: "6rem" }}
        >
          0{i + 1}
        </span>

        {/* Center Animated Icon Badge */}
        <div className="relative z-10 p-4 sm:p-5 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
          <ProjectIcon icon={p.icon} className="w-7 h-7 sm:w-11 sm:h-11 text-white drop-shadow-md" />
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3 z-10 font-mono text-[9px] sm:text-[11px] uppercase tracking-wider font-bold bg-black/40 text-white backdrop-blur-md rounded-full px-3 py-1 border border-white/20 shadow-md">
          {p.status}
        </div>
      </div>

      {/* Content Details */}
      <div className="p-3.5 sm:p-5 md:p-6 flex-1 flex flex-col justify-between" style={{ background: "var(--surface)" }}>
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <h3 className="font-display font-bold text-sm sm:text-xl md:text-2xl tracking-tight" style={{ color: "var(--surface-ink)" }}>
              {p.name}
            </h3>
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/5 grid place-items-center text-xs font-bold shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" style={{ color: "var(--surface-ink)" }}>
              ↗
            </span>
          </div>
          <p className="text-[11px] sm:text-[13px] md:text-[14px] leading-relaxed line-clamp-2" style={{ color: "var(--surface-muted)" }}>
            {p.desc}
          </p>
        </div>

        <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
          {p.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider rounded-md px-2 py-0.5 sm:px-2.5 sm:py-1 border border-black/10 bg-black/5"
              style={{ color: "var(--surface-ink)" }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function GiantMarquee() {
  return (
    <div
      id="work"
      className="relative overflow-hidden select-none border-y border-[var(--border)] min-h-[360px] sm:min-h-[520px] md:min-h-[620px] py-12 md:py-16"
      style={{ background: "var(--bg)" }}
    >
      {/* Background Marquee Animated Text */}
      {ROWS.map((row, i) => (
        <div key={i} className="overflow-hidden whitespace-nowrap leading-[0.8]" style={{ opacity: 0.92 - i * 0.06 }}>
          <div
            className="marquee-track font-display font-bold uppercase text-[22vw] md:text-[11vw]"
            style={{ color: "var(--coral)", animationDuration: `${row.speed}s`, animationDirection: i % 2 ? "reverse" : "normal" }}
          >
            <span className="shrink-0 pr-8">{row.text.repeat(20)}</span>
            <span className="shrink-0 pr-8" aria-hidden="true">{row.text.repeat(20)}</span>
          </div>
        </div>
      ))}

      {/* Prominent Overlay Cards Container */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 py-6">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {PROJECTS.map((p, i) => (
            <MockCard key={p.name} p={p} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
}