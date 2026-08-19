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
    <section id="top" className="relative pt-20 pb-8 sm:pt-24 sm:pb-10 md:pt-24 md:pb-12 px-4 sm:px-6 md:px-8 overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <div className="hero-mesh">
        <span style={{ width: 420, height: 420, top: -140, left: "8%", background: "var(--glow-1)" }} />
        <span style={{ width: 360, height: 360, top: -60, right: "4%", background: "var(--glow-2)" }} />
        <span style={{ width: 300, height: 300, bottom: -160, left: "40%", background: "var(--glow-3)" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <Reveal delay={60}>
          <h1 className="font-display font-bold tracking-tight leading-[0.92] text-[11vw] sm:text-[8vw] md:text-[5.2vw] lg:text-[4.6vw] uppercase">
            Muhammad
            <br />
            <span className="text-accent">Nouman Qamar</span>
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-6 sm:mt-8 md:mt-10 grid md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 items-center">
            {/* Left Column: Bio & Action Buttons */}
            <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-between">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-[var(--ink)] font-normal max-w-2xl">
                I build full-stack products with AI woven in from React front ends to
                Python-backed machine learning. AI speeds up the build; the architecture,
                the review, and the ship decision are mine.
              </h2>

              {/* Action Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <motion.a
                  href="#work"
                  whileHover={{ y: -3, scale: 1.04, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center gap-2 text-center font-mono font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
                >
                  <span>See the work</span>
                  <span className="text-base font-black leading-none">↗</span>
                </motion.a>
                <motion.a
                  href="#method"
                  whileHover={{ y: -3, scale: 1.04, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center gap-2 text-center font-mono font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all border cursor-pointer hover:border-[var(--accent)]"
                  style={{ background: "var(--surface)", color: "var(--surface-ink)", borderColor: "var(--border)" }}
                >
                  <span>How I build</span>
                  <span className="text-xs">⚡</span>
                </motion.a>
              </div>
            </div>

            {/* Right Column: Clean Down-Curved Rectangle Portrait Card (Without badge) */}
            <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-end">
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.02, transition: { type: "spring", stiffness: 350, damping: 22 } }}
                className="group relative w-full max-w-[210px] sm:max-w-[240px] md:max-w-[260px] lg:max-w-[280px] aspect-[3/4] rounded-2xl sm:rounded-3xl rounded-b-[3.2rem] sm:rounded-b-[3.8rem] border overflow-hidden shadow-2xl transition-all duration-500"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                }}
              >
                {/* Ambient subtle glow behind picture */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[var(--accent)]/20 blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                {/* Clean User Portrait Photo */}
                <img
                  src={noumanImg}
                  alt="Muhammad Nouman Qamar"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 border-t border-[var(--border)] pt-5 sm:pt-6">
            {STATS.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                whileHover={{ y: -3, transition: { type: "spring", stiffness: 350, damping: 20 } }}
                className="p-1 sm:p-0 cursor-default"
              >
                <div className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: s.color }}>
                  {s.n}
                </div>
                <div className="font-mono text-[10px] sm:text-[11px] md:text-[12px] text-[var(--muted)] uppercase tracking-wide mt-1 font-medium">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 sm:mt-10 md:mt-12 border-y border-[var(--border)]">
          <Marquee
            items={["React", "Python", "Node.js", "TensorFlow", "Tailwind CSS", "REST APIs", "Scikit-learn", "Git"]}
            speed={22}
            className="py-2.5 sm:py-3 text-[13px] sm:text-[15px] font-medium text-[var(--muted)]"
          />
        </div>
      </div>
    </section>
  );
}
