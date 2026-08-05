import Marquee from "./Marquee";
import Reveal from "./Reveal";

const STATS = [
  { n: "03", label: "Projects shipped", color: "var(--violet)" },
  { n: "04", label: "Skill domains", color: "var(--coral)" },
  { n: "01", label: "Country — Pakistan", color: "var(--teal)" },
];

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-8 overflow-hidden">
      <div className="hero-mesh">
        <span style={{ width: 420, height: 420, top: -140, left: "8%", background: "var(--glow-1)" }} />
        <span style={{ width: 360, height: 360, top: -60, right: "4%", background: "var(--glow-2)" }} />
        <span style={{ width: 300, height: 300, bottom: -160, left: "40%", background: "var(--glow-3)" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        

        <Reveal delay={80}>
          <h1 className="font-display font-semibold tracking-tight leading-[0.95] text-[13vw] md:text-[6.2vw] uppercase">
            Muhammad
            <br />
            <span className="text-accent">Nouman Qamar</span>
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-8 md:mt-10 grid md:grid-cols-[1.3fr_1fr] gap-8 md:gap-16 items-start">
            <h2 className="text-xl md:text-2xl leading-snug text-[var(--ink)]">
              I build full-stack products with AI woven in from React front ends to
              Python-backed machine learning. AI speeds up the build; the architecture,
              the review, and the ship decision are mine.
            </h2>

            <div className="flex flex-col gap-3 md:items-end">
              <a
                href="#work"
                className="w-full md:w-auto text-center text-white font-mono text-sm px-6 py-3 rounded-full transition-transform hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: "linear-gradient(120deg, var(--violet), var(--coral))" }}
              >
                See the work
              </a>
              <a
                href="#method"
                className="w-full md:w-auto text-center border font-mono text-sm px-6 py-3 rounded-full transition-colors hover:border-[var(--violet)] hover:text-[var(--violet)]"
                style={{ borderColor: "var(--border)", color: "var(--ink)" }}
              >
                How I build
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-14 md:mt-20 grid grid-cols-3 gap-6 border-t border-[var(--border)] pt-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-5xl font-semibold" style={{ color: s.color }}>
                  {s.n}
                </div>
                <div className="font-mono text-[11px] md:text-[13px] text-[var(--muted)] uppercase tracking-wide mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 md:mt-16 border-y border-[var(--border)]">
          <Marquee
            items={["React", "Python", "Node.js", "TensorFlow", "Tailwind CSS", "REST APIs", "Scikit-learn", "Git"]}
            speed={22}
            className="py-3 text-[15px] font-medium text-[var(--muted)]"
          />
        </div>
      </div>
    </section>
  );
}
