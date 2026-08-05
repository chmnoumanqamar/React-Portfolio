import Reveal from "./Reveal";

const FOCUS = [
  { label: "Full-stack web apps", color: "var(--violet)" },
  { label: "Machine learning models", color: "var(--coral)" },
  { label: "AI-assisted product builds", color: "var(--teal)" },
];

const TRAITS = [
  { n: "End to end", desc: "Ships full builds, not prototypes.", color: "var(--violet)" },
  { n: "AI-assisted", desc: "Uses AI as a tool, not a crutch.", color: "var(--coral)" },
  { n: "Freelance", desc: "Open to remote work, worldwide.", color: "var(--teal)" },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-8 max-w-6xl mx-auto py-20 md:py-28 overflow-hidden">
      <div
        className="absolute -z-10 rounded-full"
        style={{ width: 480, height: 480, top: -120, right: "-10%", background: "var(--glow-3)", filter: "blur(90px)" }}
      />

      <Reveal>
        <p className="font-mono text-[13px] uppercase tracking-widest mb-4" style={{ color: "var(--teal)" }}>
          About
        </p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight max-w-3xl leading-tight text-[var(--ink)]">
          A full stack AI developer, based in <span className="text-accent">Pakistan</span>, building
          products that actually ship.
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {TRAITS.map((t) => (
            <div
              key={t.n}
              className="rounded-2xl border bg-[var(--surface)] p-6"
              style={{ borderColor: "var(--border)", borderTop: `3px solid ${t.color}` }}
            >
              <div className="font-display font-semibold text-lg" style={{ color: t.color }}>
                {t.n}
              </div>
              <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--surface-muted)" }}>
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-2 gap-12">
        <Reveal delay={140}>
          <div className="h-full rounded-2xl p-6 md:p-8" style={{ background: "linear-gradient(140deg, var(--violet), var(--coral))" }}>
            <p className="font-mono text-[12px] uppercase tracking-widest text-white/80 mb-3">
              Full stack AI developer
            </p>
            <p className="font-display text-2xl md:text-3xl font-semibold text-white leading-snug">
              Freelance · Pakistan
            </p>
            <p className="mt-4 text-white/85 text-[15px] leading-relaxed">
              Available for remote projects — from full-stack web apps to machine-learning
              builds, shipped end to end.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="font-mono text-[13px] uppercase tracking-widest text-[var(--muted)] mb-4">
            What I take on
          </p>
          <p className="text-[var(--muted)] mb-6 leading-relaxed">
            Full-stack builds and machine-learning projects, shipped end to end — not
            just prototypes.
          </p>
          <ul className="flex flex-col gap-4">
            {FOCUS.map((f) => (
              <li key={f.label} className="flex items-center gap-3 text-[15px] text-[var(--ink)]">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: f.color }} />
                {f.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
