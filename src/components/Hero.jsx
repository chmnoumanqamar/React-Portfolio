import { motion } from "framer-motion";
import Marquee from "./Marquee";
import Reveal from "./Reveal";
import noumanImg from "../assets/nouman.png";

const STATS = [
  { n: "03", label: "Projects shipped", color: "var(--violet)" },
  { n: "04", label: "Skill domains", color: "var(--coral)" },
  { n: "01", label: "Country Pakistan", color: "var(--teal)" },
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
          <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left Column: Bio & Lower Buttons */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <h2 className="text-xl md:text-2xl leading-relaxed text-[var(--ink)] font-normal">
                I build full-stack products with AI woven in from React front ends to
                Python-backed machine learning. AI speeds up the build; the architecture,
                the review, and the ship decision are mine.
              </h2>

              {/* Action Buttons positioned lower with generous spacing */}
              <div className="mt-8 sm:mt-12 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <motion.a
                  href="#work"
                  whileHover={{ y: -3, scale: 1.04, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center gap-2 text-center font-mono font-bold text-sm px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
                >
                  <span>See the work</span>
                  <span className="text-base font-black leading-none">↗</span>
                </motion.a>
                <motion.a
                  href="#method"
                  whileHover={{ y: -3, scale: 1.04, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center gap-2 text-center font-mono font-bold text-sm px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all border cursor-pointer hover:border-[var(--accent)]"
                  style={{ background: "var(--surface)", color: "var(--surface-ink)", borderColor: "var(--border)" }}
                >
                  <span>How I build</span>
                  <span className="text-xs">⚡</span>
                </motion.a>
              </div>
            </div>

            {/* Right Column: Down-Curved Rectangle Portrait Card */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 350, damping: 22 } }}
                className="group relative w-full max-w-[270px] sm:max-w-[310px] aspect-[4/5] rounded-3xl rounded-b-[3.8rem] border overflow-hidden shadow-2xl transition-all duration-500"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                }}
              >
                {/* Ambient glow behind portrait */}
                <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[var(--accent)]/20 blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80 z-10 pointer-events-none" />

                {/* User Portrait Photo */}
                <img
                  src={noumanImg}
                  alt="Muhammad Nouman Qamar"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Bottom Floating Glass Badge */}
                <div className="absolute bottom-4 inset-x-3.5 z-20 flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-xl">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse" />
                    <span className="font-mono text-[10.5px] sm:text-[11.5px] uppercase tracking-wider font-bold">
                      Available for work
                    </span>
                  </div>
                  <span className="font-mono text-[9.5px] sm:text-[10.5px] text-white/75 uppercase tracking-wide">
                    PK · Remote
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 sm:mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 border-t border-[var(--border)] pt-6">
            {STATS.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 350, damping: 20 } }}
                className="p-2 sm:p-0 cursor-default"
              >
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold" style={{ color: s.color }}>
                  {s.n}
                </div>
                <div className="font-mono text-[11px] sm:text-[12px] md:text-[13px] text-[var(--muted)] uppercase tracking-wide mt-1 font-medium">
                  {s.label}
                </div>
              </motion.div>
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
