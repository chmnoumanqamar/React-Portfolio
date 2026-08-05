import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "./Marquee";
import Reveal from "./Reveal";
import { Sparkles, Code2, ArrowUpRight } from "./Icons";

const ALL_SKILLS = [
  // Frontend
  { name: "React", icon: "⚛️", category: "Frontend", level: "Expert", desc: "Hooks, Context, State & Performance" },
  { name: "JavaScript", icon: "⚡", category: "Frontend", level: "Expert", desc: "ES6+, Async, DOM & Logic" },
  { name: "HTML5", icon: "🌐", category: "Frontend", level: "Advanced", desc: "Semantic Structure & Web Standards" },
  { name: "CSS3", icon: "🎨", category: "Frontend", level: "Advanced", desc: "Flexbox, Grid, Animations & FX" },
  { name: "Tailwind CSS", icon: "🌊", category: "Frontend", level: "Expert", desc: "Utility-first Rapid UI Design" },
  
  // Backend
  { name: "Python", icon: "🐍", category: "Backend", level: "Expert", desc: "Automation, Backend & AI Scripts" },
  { name: "Node.js", icon: "🟢", category: "Backend", level: "Advanced", desc: "Event-driven Server Systems" },
  { name: "Express", icon: "🚀", category: "Backend", level: "Advanced", desc: "REST APIs & Middleware Routing" },
  { name: "REST APIs", icon: "🔌", category: "Backend", level: "Expert", desc: "Endpoint Design & JSON Schemas" },

  // AI & Data
  { name: "Scikit-learn", icon: "🤖", category: "AI & ML", level: "Advanced", desc: "Predictive Models & Machine Learning" },
  { name: "Pandas", icon: "🐼", category: "AI & ML", level: "Advanced", desc: "Data Manipulation & Analysis" },
  { name: "NumPy", icon: "🔢", category: "AI & ML", level: "Advanced", desc: "Numerical & Matrix Computation" },
  { name: "TensorFlow", icon: "🧠", category: "AI & ML", level: "Intermediate", desc: "Neural Networks & Deep Learning" },

  // Tools & DevOps
  { name: "Git", icon: "🌿", category: "Tools", level: "Expert", desc: "Version Control & Branch Workflows" },
  { name: "GitHub", icon: "🐙", category: "Tools", level: "Expert", desc: "CI/CD & Open Source Collaboration" },
  { name: "VS Code", icon: "💻", category: "Tools", level: "Expert", desc: "Extensions, Debugging & Dev Setup" },
  { name: "Postman", icon: "🚀", category: "Tools", level: "Advanced", desc: "API Testing & Automation Suite" },
];

const CATEGORY_TABS = ["All", "Frontend", "Backend", "AI & ML", "Tools"];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSkills = activeTab === "All" 
    ? ALL_SKILLS 
    : ALL_SKILLS.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="relative border-y border-[var(--border)] overflow-hidden" style={{ background: "var(--bg)" }}>
      {/* Dynamic Animated Ambient Background Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[var(--teal)]/10 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[var(--amber)]/10 blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="border-b border-[var(--border)]">
        <Marquee
          items={["3+ YEARS OF EXPERTISE", "FULL STACK + AI/ML", "PAKISTAN", "OPEN FOR OPPORTUNITIES", "CLEAN ARCHITECTURE"]}
          speed={26}
          className="py-3 font-mono text-[13px] uppercase tracking-wide text-[var(--muted)]"
        />
      </div>

      <div className="px-6 md:px-8 max-w-7xl mx-auto py-20 md:py-28 relative z-10">
        
        {/* Header Section with Staggered Entrance */}
        <Reveal direction="up" yOffset={40}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--teal)]/30 bg-[var(--teal)]/10 text-[var(--teal)] font-mono text-xs uppercase tracking-widest font-bold mb-4">
                <Sparkles size={14} className="animate-spin-slow" /> Technical Stack & Skills
              </div>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl lg:text-6xl tracking-tight text-[var(--ink)]">
                All Skills & Technologies
              </h2>
              <p className="mt-4 text-[var(--muted)] max-w-xl text-base md:text-lg leading-relaxed">
                Displaying all core libraries, frameworks, languages, and tools across web development & machine learning.
              </p>
            </div>

            {/* Quick Filter Pill Controls (Default is ALL) */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/20 backdrop-blur-md">
              {CATEGORY_TABS.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-4 py-2 rounded-xl text-xs md:text-sm font-mono font-medium transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? "text-[var(--accent-ink)] font-bold shadow-md" 
                        : "text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--surface)]/40"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSkillTab"
                        className="absolute inset-0 rounded-xl bg-[var(--teal)]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{tab}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* ALL SKILLS GRID - UNIFIED Showcase with Massive Staggered Scroll & Hover Animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.9, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 4) * 0.08,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8, 
                  rotateZ: 0.5,
                  transition: { type: "spring", stiffness: 400, damping: 18 } 
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative p-6 rounded-3xl border shadow-lg cursor-pointer overflow-hidden flex flex-col justify-between"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                {/* Glowing Aura Effect on Mouse Hover */}
                <div 
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[var(--teal)]/20 blur-2xl group-hover:scale-175 group-hover:bg-[var(--teal)]/35 transition-all duration-700 pointer-events-none" 
                />

                {/* Top Row: Icon + Category Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <motion.span 
                    className="text-4xl md:text-5xl drop-shadow-md transition-transform duration-500 inline-block"
                    whileHover={{ scale: 1.3, rotate: 12 }}
                  >
                    {skill.icon}
                  </motion.span>

                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border border-black/10 bg-black/5 flex items-center gap-1.5" style={{ color: "var(--surface-muted)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--teal)] animate-ping" />
                    {skill.category}
                  </span>
                </div>

                {/* Content Details */}
                <div className="mb-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight transition-colors group-hover:text-[var(--accent-ink)]" style={{ color: "var(--surface-ink)" }}>
                      {skill.name}
                    </h3>
                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-[var(--teal)]" />
                  </div>
                  
                  <p className="mt-2 text-xs md:text-sm line-clamp-2 leading-relaxed" style={{ color: "var(--surface-muted)" }}>
                    {skill.desc}
                  </p>
                </div>

                {/* Bottom Bar: Level Badge & Animated Neon Bar */}
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono mb-2" style={{ color: "var(--surface-muted)" }}>
                    <span>Proficiency</span>
                    <span className="font-bold text-[var(--surface-ink)]">{skill.level}</span>
                  </div>

                  {/* Animated Progress Line */}
                  <div className="w-full h-1.5 rounded-full bg-black/10 overflow-hidden relative">
                    <div className="w-1/3 h-full bg-[var(--teal)]/40 group-hover:w-full transition-all duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner Stats */}
        <Reveal direction="up" delay={200} className="mt-16">
          <div 
            className="p-6 md:p-8 rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[var(--teal)]/15 border border-[var(--teal)]/30 flex items-center justify-center text-[var(--teal)]">
                <Code2 size={24} />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg md:text-xl" style={{ color: "var(--surface-ink)" }}>
                  Continuous Learning & Evolution
                </h4>
                <p className="text-xs md:text-sm" style={{ color: "var(--surface-muted)" }}>
                  Always expanding tech stack with cutting-edge tools, AI integrations, and performant frameworks.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-wider font-bold">
              <div className="px-4 py-2.5 rounded-xl border border-black/10 bg-black/5" style={{ color: "var(--surface-ink)" }}>
                {ALL_SKILLS.length} Total Techs
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-[var(--teal)] text-[var(--accent-ink)] font-bold shadow-md">
                100% Production Ready
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
