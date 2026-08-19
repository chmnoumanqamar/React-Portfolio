import { motion } from "framer-motion";
import Marquee from "./Marquee";
import Reveal from "./Reveal";

const ALL_SKILLS = [
  { name: "React", icon: "⚛️", tag: "Frontend" },
  { name: "JavaScript", icon: "⚡", tag: "Frontend" },
  { name: "HTML5", icon: "🌐", tag: "Frontend" },
  { name: "CSS3", icon: "🎨", tag: "Frontend" },
  { name: "Tailwind CSS", icon: "🌊", tag: "Frontend" },
  { name: "Python", icon: "🐍", tag: "Backend" },
  { name: "Node.js", icon: "🟢", tag: "Backend" },
  { name: "Express", icon: "🚀", tag: "Backend" },
  { name: "REST APIs", icon: "🔌", tag: "Backend" },
  { name: "Pandas", icon: "🐼", tag: "AI / ML" },
  { name: "NumPy", icon: "🔢", tag: "AI / ML" },
  { name: "Git", icon: "🌿", tag: "Tools" },
  { name: "GitHub", icon: "🐙", tag: "Tools" },
  { name: "VS Code", icon: "💻", tag: "Tools" },
  { name: "Postman", icon: "🚀", tag: "Tools" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
    filter: "blur(3px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 22,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative border-y border-[var(--border)] overflow-hidden" style={{ background: "var(--bg)" }}>
      {/* Marquee Header */}
      <div className="border-b border-[var(--border)]">
        <Marquee
          items={["ALL CORE SKILLS & STACK", "FULL STACK + AI/ML", "PAKISTAN", "OPEN FOR WORK"]}
          speed={26}
          className="py-3 font-mono text-[11px] sm:text-[13px] uppercase tracking-wide text-[var(--muted)]"
        />
      </div>

      <div className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto py-14 sm:py-20 md:py-28">

        {/* Title Header with Reverse Scroll Animation */}
        <Reveal direction="up" yOffset={24} once={false}>
          <p className="font-mono text-[11px] sm:text-[13px] uppercase tracking-widest mb-3 sm:mb-4 font-bold" style={{ color: "var(--teal)" }}>
            Technical Expertise
          </p>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-tight max-w-2xl text-[var(--ink)]">
            All Core Skills & Stack
          </h2>
          <p className="mt-3 sm:mt-4 text-[var(--muted)] max-w-xl text-sm sm:text-base leading-relaxed mb-8 sm:mb-12">
            Every library, framework, tool, and language used across full-stack development and machine learning projects — all shown together.
          </p>
        </Reveal>

        {/* Display ALL Skills with Staggered Forward and Reverse Scroll Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5"
        >
          {ALL_SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -6,
                transition: { type: "spring", stiffness: 400, damping: 20 },
              }}
              whileTap={{ scale: 0.96 }}
              className="group relative p-3.5 sm:p-5 md:p-6 rounded-2xl md:rounded-3xl border shadow-md hover:shadow-xl cursor-default flex flex-col justify-between overflow-hidden transition-colors duration-300 min-w-0"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                willChange: "transform, opacity",
              }}
            >
              {/* Ambient Glow on Hover */}
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-[var(--teal)]/15 blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

              <div className="flex items-center justify-between gap-1.5 mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6 inline-block">
                  {skill.icon}
                </span>
                <span
                  className="font-mono text-[8.5px] sm:text-[9.5px] md:text-[10px] uppercase font-bold tracking-wider px-1.5 sm:px-2 py-0.5 rounded-full border border-black/10 bg-black/5 shrink-0"
                  style={{ color: "var(--surface-muted)" }}
                >
                  {skill.tag}
                </span>
              </div>

              <div className="min-w-0">
                <h3 className="font-display font-bold text-sm sm:text-base md:text-xl tracking-tight transition-colors truncate group-hover:text-[var(--accent-ink)]" style={{ color: "var(--surface-ink)" }}>
                  {skill.name}
                </h3>
              </div>

              {/* Bottom accent line expand animation */}
              <div className="mt-3 w-full h-1 rounded-full bg-black/10 overflow-hidden">
                <div className="w-0 h-full bg-[var(--teal)] transition-all duration-400 ease-out group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
