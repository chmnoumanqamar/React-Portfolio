import Marquee from "./Marquee";
import Reveal from "./Reveal";

const SKILL_CATEGORIES = [
  {
    name: "Frontend",
    color: "var(--violet)",
    items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    name: "Backend",
    color: "var(--teal)",
    items: ["Python", "Node.js", "Express", "REST APIs"],
  },
  {
    name: "AI / ML",
    color: "var(--coral)",
    items: ["Scikit-learn", "Pandas", "NumPy", "TensorFlow"],
  },
  {
    name: "Tools",
    color: "var(--teal)",
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
];


export default function Skills() {
  return (
    <section id="skills" className="border-y border-[var(--border)]" style={{ background: "var(--bg)" }}>
      <div className="border-b border-[var(--border)]">
        <Marquee
          items={["3 PROJECTS BUILT", "FULL STACK + AI/ML", "PAKISTAN", "OPEN FOR WORK"]}
          speed={26}
          className="py-3 font-mono text-[13px] uppercase tracking-wide text-[var(--muted)]"
        />
      </div>

      <div className="px-6 md:px-8 max-w-6xl mx-auto py-20 md:py-28">
        <Reveal>
          <p className="font-mono text-[13px] uppercase tracking-widest mb-4 font-bold" style={{ color: "var(--amber)" }}>
            The stack
          </p>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight max-w-2xl text-[var(--ink)]">
            Full stack, with AI/ML underneath.
          </h2>
          <p className="mt-4 text-[var(--muted)] max-w-xl text-base leading-relaxed mb-12">
            Every tool, library, and framework used to design, build, and deploy high-performance full-stack web applications and machine learning models.
          </p>
        </Reveal>

        {/* Displaying All Skills categorized directly in clear rows/lines */}
        <div className="flex flex-col gap-6">
          {SKILL_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 80}>
              <div
                className="p-6 md:p-8 rounded-3xl border shadow-lg flex flex-col md:flex-row md:items-center gap-6 justify-between transition-all duration-300 hover:border-black/30"
                style={{ borderColor: "var(--border)", background: "var(--surface)" }}
              >
                {/* Category Title Badge */}
                <div className="min-w-[160px] shrink-0">
                  <span className="font-mono text-[11px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-black/10 bg-black/5" style={{ color: cat.color }}>
                    0{i + 1} / {cat.name}
                  </span>
                  <h3 className="font-display font-bold text-2xl mt-2" style={{ color: "var(--surface-ink)" }}>
                    {cat.name}
                  </h3>
                </div>

                {/* All Skill Items in One Line / Row Layout */}
                <div className="flex flex-wrap gap-2.5 md:gap-3.5 flex-1">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="font-display font-bold text-sm md:text-lg rounded-2xl px-5 py-3 border-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default bg-white/40"
                      style={{
                        borderColor: cat.color,
                        color: "var(--surface-ink)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


