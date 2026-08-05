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
      className="glow-card block rounded-lg sm:rounded-2xl border overflow-hidden shadow-2xl bg-[var(--surface)] hover:-translate-y-1.5"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="flex items-center gap-1 sm:gap-1.5 px-2 py-1.5 sm:px-3 sm:py-2.5" style={{ background: "rgba(0,0,0,0.06)" }}>
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-400/70" />
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400/70" />
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400/70" />
      </div>
      <div className="h-14 sm:h-28 md:h-32 grid place-items-center" style={{ background: p.gradient }}>
        <ProjectIcon icon={p.icon} className="w-5 h-5 sm:w-9 sm:h-9 text-white/90" />
      </div>
      <div className="flex items-center justify-between gap-1 sm:gap-3 px-2 py-1.5 sm:px-4 sm:py-3.5">
        <span className="font-display font-semibold text-[9px] sm:text-[14px] truncate" style={{ color: "var(--surface-ink)" }}>
          {p.name}
        </span>
        <span className="font-mono text-[7px] sm:text-[10px] uppercase tracking-wide shrink-0" style={{ color: "var(--teal)" }}>
          {p.status}
        </span>
      </div>
    </a>
  );
}

export default function GiantMarquee() {
  return (
    <div
      className="relative overflow-hidden select-none border-y border-[var(--border)] min-h-[220px] sm:min-h-[340px] md:min-h-[420px]"
      style={{ background: "var(--bg)" }}
    >
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

      <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-6">
        <div className="w-full max-w-5xl grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
          {PROJECTS.map((p, i) => (
            <MockCard key={p.name} p={p} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
}