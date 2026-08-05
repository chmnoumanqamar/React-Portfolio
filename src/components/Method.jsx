import { motion } from "framer-motion";
import Reveal from "./Reveal";

const STEPS = [
  { n: "1", title: "Brief", desc: "Requirements, and the taste bar" },
  { n: "2", title: "Spec", desc: "Architecture, data model, constraints" },
  { n: "3", title: "Build", desc: "Implementation, AI-assisted" },
  { n: "4", title: "Review", desc: "Read the diff, run it, fix it" },
  { n: "5", title: "Ship", desc: "Deploy, domain, DNS, indexing" },
];

const TOOLS = ["CLAUDE CODE", "CLAUDE FABLE", "CLAUDE COWORK", "CODEX"];

function StepPill({ step, offset, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        scale: 1.04,
        y: -5,
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
      whileTap={{ scale: 0.98 }}
      style={{ willChange: "transform, opacity" }}
      className={`group relative rounded-2xl md:rounded-3xl border bg-[var(--surface)] p-4 sm:p-5 md:px-6 md:py-7 text-center shadow-md hover:shadow-xl h-full flex flex-col justify-center cursor-pointer overflow-hidden transition-all duration-300 min-w-0 ${
        offset ? "md:translate-y-[30px]" : ""
      }`}
      style={{ borderColor: "var(--border)" }}
    >
      {/* Ambient Glow backdrop effect on hover */}
      <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-[var(--teal)]/15 blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

      <motion.span 
        className="font-display font-semibold text-sm sm:text-base md:text-[15px] block transition-transform duration-300 group-hover:scale-105 min-w-0"
        style={{ color: "var(--surface-ink)" }}
      >
        <span className="text-[var(--teal)] font-mono font-bold mr-1">{step.n} ·</span> {step.title}
      </motion.span>

      <p
        className="mt-1.5 font-mono text-[9px] sm:text-[10px] md:text-[10.5px] uppercase tracking-wide leading-snug transition-colors group-hover:text-[var(--surface-ink)]"
        style={{ color: "var(--surface-muted)" }}
      >
        {step.desc}
      </p>

      {/* Bottom neon accent indicator line */}
      <div className="mt-3 w-full h-1 rounded-full bg-black/10 overflow-hidden">
        <div className="w-0 h-full bg-[var(--teal)] transition-all duration-400 ease-out group-hover:w-full" />
      </div>
    </motion.div>
  );
}

export default function Method() {
  return (
    <section id="method" className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto py-14 sm:py-20 md:py-28 relative overflow-hidden">
      
      {/* Header with Smooth Scroll animation */}
      <Reveal direction="up" yOffset={24}>
        <p className="font-mono text-[11px] sm:text-[13px] uppercase tracking-widest mb-3 sm:mb-4 font-bold text-[var(--teal)]">
          How I build
        </p>
        <h2 className="font-display font-semibold text-2xl sm:text-4xl md:text-5xl tracking-tight max-w-3xl leading-tight text-[var(--ink)]">
          I build with AI. Nothing ships that I haven't read, run, and understood.
        </h2>
      </Reveal>

      {/* 5 Step Cards Responsive Grid Layout (Pic 3 Layout) */}
      <div className="mt-10 sm:mt-16 md:mt-20 md:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3.5 sm:gap-4 md:gap-5">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className={i === STEPS.length - 1 ? "col-span-1 sm:col-span-2 md:col-span-1" : ""}
            >
              <StepPill step={s} offset={i % 2 === 1} index={i} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Tool Pills with Smooth Staggered Entrance */}
      <Reveal delay={100} direction="up" yOffset={20}>
        <div className="mt-10 sm:mt-14 md:mt-20 flex flex-wrap items-center gap-2 sm:gap-3">
          {TOOLS.map((t, idx) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: idx * 0.06, duration: 0.4 }}
              whileHover={{ 
                scale: 1.08, 
                borderColor: "var(--teal)", 
                color: "var(--teal)",
                transition: { duration: 0.2 } 
              }}
              style={{ willChange: "transform, opacity" }}
              className="font-mono text-[11px] sm:text-[12px] uppercase tracking-wide rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 border transition-all cursor-pointer"
              style={{ borderColor: "var(--border)", color: "var(--muted)", background: "var(--bg)" }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}