import { useState } from "react";
import Marquee from "./Marquee";
import Reveal from "./Reveal";

const GROUPS = [
  { name: "Frontend", items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"], color: "var(--violet)", desc: "What people click on and use." },
  { name: "Backend", items: ["Python", "Node.js", "Express", "REST APIs"], color: "var(--teal)", desc: "The logic and data behind the UI." },
  { name: "AI / ML", items: ["Scikit-learn", "Pandas", "NumPy", "TensorFlow"], color: "var(--coral)", desc: "Models, training, and predictions." },
  { name: "Tools", items: ["Git", "GitHub", "VS Code", "Postman"], color: "var(--amber)", desc: "The daily workflow." },
];

export default function Skills() {
  const [index, setIndex] = useState(0);
  const group = GROUPS[index];

  const next = () => setIndex((i) => (i + 1) % GROUPS.length);
  const prev = () => setIndex((i) => (i - 1 + GROUPS.length) % GROUPS.length);

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
          <p className="font-mono text-[13px] uppercase tracking-widest mb-4" style={{ color: "var(--amber)" }}>
            The stack
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight max-w-2xl text-[var(--ink)]">
            Full stack, with AI/ML underneath.
          </h2>
          <p className="mt-4 text-[var(--muted)] max-w-xl">
            React and Tailwind up front, Python and Node behind it, Scikit-learn and
            TensorFlow for the machine-learning layer.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 rounded-3xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
            <div className="p-8 md:p-10 min-h-[260px] flex flex-col" style={{ borderTop: `4px solid ${group.color}` }}>
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <span className="font-mono text-[12px] uppercase tracking-widest" style={{ color: group.color }}>
                    {String(index + 1).padStart(2, "0")} / {String(GROUPS.length).padStart(2, "0")}
                  </span>
                  <h3 className="font-display font-semibold text-2xl md:text-3xl mt-2 text-[var(--ink)]">{group.name}</h3>
                  <p className="text-[var(--muted)] text-[14px] mt-1">{group.desc}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous category"
                    className="w-10 h-10 rounded-full border grid place-items-center transition-colors hover:border-[var(--teal)] hover:text-[var(--teal)]"
                    style={{ borderColor: "var(--border)", color: "var(--ink)" }}
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next category"
                    className="w-10 h-10 rounded-full grid place-items-center text-white transition-transform hover:-translate-y-0.5"
                    style={{ background: "linear-gradient(120deg, var(--violet), var(--coral))" }}
                  >
                    →
                  </button>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="font-display text-base md:text-lg rounded-xl px-5 py-3 bg-[var(--surface)] border-2 inline-block"
                    style={{ borderColor: group.color, color: "var(--surface-ink)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-8 flex gap-2">
                {GROUPS.map((g, i) => (
                  <button
                    key={g.name}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show ${g.name}`}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{ width: i === index ? 28 : 10, background: i === index ? g.color : "var(--border)" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
