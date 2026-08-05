import Reveal from "./Reveal";

const STEPS = [
  { n: "1", title: "Brief", desc: "Requirements, and the taste bar" },
  { n: "2", title: "Spec", desc: "Architecture, data model, constraints" },
  { n: "3", title: "Build", desc: "Implementation, AI-assisted" },
  { n: "4", title: "Review", desc: "Read the diff, run it, fix it" },
  { n: "5", title: "Ship", desc: "Deploy, domain, DNS, indexing" },
];

const TOOLS = ["Claude Code", "Claude Fable", "Claude Cowork", "Codex"];

function Pill({ step, offset }) {
  return (
    <div
      className={`min-w-0 rounded-3xl border bg-[var(--surface)] px-5 py-6 md:px-6 md:py-7 text-center shadow-lg h-full flex flex-col justify-center ${
        offset ? "md:translate-y-[30px]" : ""
      }`}
      style={{ borderColor: "var(--border)" }}
    >
      <span className="font-display font-semibold text-[14px] md:text-[15px] whitespace-nowrap" style={{ color: "var(--surface-ink)" }}>
        {step.n} · {step.title}
      </span>
      <p
        className="mt-1.5 font-mono text-[9.5px] md:text-[10.5px] uppercase tracking-wide leading-snug"
        style={{ color: "var(--surface-muted)" }}
      >
        {step.desc}
      </p>
    </div>
  );
}

export default function Method() {
  return (
    <section id="method" className="px-6 md:px-8 max-w-6xl mx-auto py-20 md:py-28">
      <Reveal>
        <p className="font-mono text-[13px] uppercase tracking-widest mb-4 text-accent">How I build</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight max-w-3xl leading-tight text-[var(--ink)]">
          I build with AI. Nothing ships that I haven't read, run, and understood.
        </h2>
      </Reveal>

      <div className="mt-16 md:mt-20 md:pb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 90}
              className={i === STEPS.length - 1 ? "col-span-2 md:col-span-1" : ""}
            >
              <Pill step={s} offset={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={120}>
        <div className="mt-14 md:mt-20 flex flex-wrap items-center gap-3">
          {TOOLS.map((t) => (
            <span
              key={t}
              className="font-mono text-[12px] uppercase tracking-wide rounded-full px-3.5 py-1.5 border transition-colors hover:border-[var(--accent)] hover:text-accent"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
            >
              {t}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}