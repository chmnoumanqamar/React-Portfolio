import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Rocket, 
  FileText, 
  Layers, 
  Play, 
  Pause,
  ArrowRight
} from "./Icons";

const STEPS = [
  {
    n: "01",
    title: "Brief",
    shortDesc: "Requirements, & Taste Bar",
    icon: FileText,
    color: "#8BD450",
    fullDesc: "Extracting core vision, setting strict design parameters, and defining the high taste bar before writing a single line of code.",
    checklist: [
      "Deep intent & requirement mapping",
      "UI/UX benchmark & aesthetic direction",
      "Constraint scoping & feature prioritization"
    ],
    tools: ["Claude Code", "Notion", "Figma"]
  },
  {
    n: "02",
    title: "Spec",
    shortDesc: "Architecture & Data Model",
    icon: Layers,
    color: "#38BDF8",
    fullDesc: "Designing robust system architecture, database schema, API endpoints, state management, and type safety constraints.",
    checklist: [
      "Modular file & component hierarchy",
      "State management & data flow blueprint",
      "API contract & JSON schema validation"
    ],
    tools: ["Claude Fable", "Excalidraw", "TypeScript"]
  },
  {
    n: "03",
    title: "Build",
    shortDesc: "AI-Assisted Implementation",
    icon: Cpu,
    color: "#A855F7",
    fullDesc: "Rapid, precise full-stack development leveraging cutting-edge LLMs, automated code generation, and component synthesis.",
    checklist: [
      "High-speed agentic code pair programming",
      "Modern React / Tailwind component build",
      "Interactive physics & micro-animations"
    ],
    tools: ["Claude Cowork", "Cursor AI", "Vite"]
  },
  {
    n: "04",
    title: "Review",
    shortDesc: "Diff Analysis, Testing & Fixes",
    icon: Terminal,
    color: "#F59E0B",
    fullDesc: "Rigorous verification: reading git diffs, inspecting console logs, running automated test suites, and refining edge cases.",
    checklist: [
      "Comprehensive line-by-line diff review",
      "Browser & cross-device runtime testing",
      "Performance optimization & zero-bug sweep"
    ],
    tools: ["Codex", "Oxlint", "Chrome DevTools"]
  },
  {
    n: "05",
    title: "Ship",
    shortDesc: "Deploy, Domain, DNS & Indexing",
    icon: Rocket,
    color: "#EC4899",
    fullDesc: "Seamless automated deployment to edge networks, custom domain DNS configuration, SSL, SEO optimization, and indexing.",
    checklist: [
      "Vercel / Netlify edge deployment pipeline",
      "Lighthouse 100/100 performance tune",
      "Search engine indexing & open-graph meta"
    ],
    tools: ["Vercel", "Git / GitHub", "Cloudflare"]
  },
];

const ALL_AI_TOOLS = ["Claude Code", "Claude Fable", "Claude Cowork", "Codex", "Cursor", "Vite"];

export default function Method() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto step cycle if user clicks play
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % STEPS.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % STEPS.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + STEPS.length) % STEPS.length);
  };

  const current = STEPS[activeStep];
  const StepIcon = current.icon;

  return (
    <section id="method" className="relative px-6 md:px-8 max-w-7xl mx-auto py-20 md:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none opacity-20 transition-all duration-1000"
        style={{ background: current.color }}
      />

      {/* Header with bi-directional scroll animation */}
      <Reveal direction="up" yOffset={30}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--teal)]/30 bg-[var(--teal)]/10 text-[var(--teal)] font-mono text-xs uppercase tracking-widest font-bold mb-4">
              <Sparkles size={14} className="animate-spin-slow" /> How I Build
            </div>
            <h2 className="font-display font-semibold text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-[var(--ink)] max-w-4xl">
              I build with AI. Nothing ships that I haven't read, run, and understood.
            </h2>
          </div>

          {/* Controls: Next Arrow (->), Prev Arrow (<-), Step Counter */}
          <div className="flex items-center gap-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] px-3 py-2 rounded-xl border border-[var(--border)] bg-[var(--surface)]/10">
              Step <span className="text-[var(--ink)] font-bold">{current.n}</span> / 05
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--surface-ink)] hover:scale-105 transition-all cursor-pointer flex items-center gap-2 font-mono text-xs"
              title={isPlaying ? "Pause autoplay" : "Autoplay steps"}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              <span className="hidden sm:inline">{isPlaying ? "Pause" : "Auto"}</span>
            </button>

            <div className="flex items-center gap-1.5 p-1 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
              <button
                onClick={prevStep}
                className="p-3 rounded-xl hover:bg-black/10 transition-all cursor-pointer text-[var(--surface-ink)] active:scale-95"
                aria-label="Previous Step"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextStep}
                className="p-3 rounded-xl bg-[var(--teal)] text-[var(--accent-ink)] hover:scale-105 transition-all cursor-pointer shadow-lg active:scale-95 flex items-center gap-1 font-bold"
                aria-label="Next Step"
              >
                <span className="text-xs font-mono font-bold hidden sm:inline">NEXT</span>
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </Reveal>

      {/* STEP INDICATORS PROGRESS TABS BAR */}
      <Reveal direction="up" delay={100}>
        <div className="grid grid-cols-5 gap-2 md:gap-3 mb-8">
          {STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.n}
                onClick={() => setActiveStep(idx)}
                className={`relative p-3 md:p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer overflow-hidden ${
                  isActive
                    ? "shadow-xl border-transparent"
                    : "hover:border-[var(--muted)] opacity-70 hover:opacity-100"
                }`}
                style={{
                  background: isActive ? "var(--surface)" : "rgba(255,255,255,0.02)",
                  borderColor: isActive ? "transparent" : "var(--border)",
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeStepBorder"
                    className="absolute inset-0 rounded-2xl border-2 pointer-events-none"
                    style={{ borderColor: step.color }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}

                <div className="flex items-center justify-between gap-1 mb-1">
                  <span 
                    className="font-mono text-xs md:text-sm font-bold"
                    style={{ color: isActive ? "var(--surface-ink)" : "var(--muted)" }}
                  >
                    {step.n}
                  </span>
                  {isActive && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 rounded-full"
                      style={{ background: step.color }}
                    />
                  )}
                </div>

                <div 
                  className="font-display font-bold text-xs md:text-sm truncate"
                  style={{ color: isActive ? "var(--surface-ink)" : "var(--ink)" }}
                >
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* SPOTLIGHT STEP SHOWCASE WITH SEPARATE MASSIVE ANIMATIONS FOR EVERY PIECE */}
      <div className="relative min-h-[420px] rounded-3xl border shadow-2xl p-6 md:p-10 overflow-hidden" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        
        {/* Animated Background Line Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-400 via-transparent to-transparent" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.n}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10"
          >
            {/* Left Column: Massive Animations for Step Info */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <div>
                
                {/* 1. SEPARATE ANIMATED PIECE: Step Number Badge + Icon */}
                <motion.div 
                  initial={{ opacity: 0, x: -30, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 350, damping: 20 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg border border-black/10"
                    style={{ background: `${current.color}25`, color: current.color }}
                  >
                    <StepIcon size={28} />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-black/10 bg-black/5" style={{ color: "var(--surface-muted)" }}>
                      PHASE {current.n} OF 05
                    </span>
                    <h4 className="font-mono text-xs mt-1 font-semibold" style={{ color: current.color }}>
                      {current.shortDesc}
                    </h4>
                  </div>
                </motion.div>

                {/* 2. SEPARATE ANIMATED PIECE: Massive Title */}
                <motion.h3 
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="font-display font-extrabold text-3xl md:text-5xl tracking-tight mb-4"
                  style={{ color: "var(--surface-ink)" }}
                >
                  {current.n}. {current.title}
                </motion.h3>

                {/* 3. SEPARATE ANIMATED PIECE: Full Description */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl"
                  style={{ color: "var(--surface-muted)" }}
                >
                  {current.fullDesc}
                </motion.p>
              </div>

              {/* 4. SEPARATE ANIMATED PIECE: Tools Badges & Next Step Trigger */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-black/10"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs uppercase font-bold" style={{ color: "var(--surface-muted)" }}>
                    Primary Tools:
                  </span>
                  {current.tools.map((t, i) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.45 + i * 0.08, type: "spring" }}
                      className="font-mono text-xs px-3 py-1 rounded-full border border-black/10 bg-black/5 font-semibold"
                      style={{ color: "var(--surface-ink)" }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                {/* Next Step Interactive Button inside card */}
                <button
                  onClick={nextStep}
                  className="group inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl bg-[var(--teal)] text-[var(--accent-ink)] hover:scale-105 transition-all shadow-md cursor-pointer"
                >
                  <span>Next Step ({STEPS[(activeStep + 1) % STEPS.length].title})</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>

            {/* Right Column: SEPARATE ANIMATED Checklist & Visual Cards */}
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, x: 40, rotateY: -10 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ delay: 0.25, duration: 0.6, type: "spring" }}
                className="p-6 md:p-8 rounded-3xl border border-black/10 bg-black/5 backdrop-blur-sm shadow-inner"
              >
                <h5 className="font-mono text-xs uppercase tracking-widest font-bold mb-4 flex items-center gap-2" style={{ color: "var(--surface-muted)" }}>
                  <Sparkles size={14} style={{ color: current.color }} /> Core Execution Checklist
                </h5>

                <div className="space-y-3.5">
                  {current.checklist.map((item, idx) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 + idx * 0.12, type: "spring", stiffness: 300 }}
                      className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/40 dark:bg-black/20 border border-black/5 shadow-sm hover:scale-[1.02] transition-transform"
                    >
                      <div 
                        className="p-1 rounded-full shrink-0 mt-0.5" 
                        style={{ background: `${current.color}20`, color: current.color }}
                      >
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-xs md:text-sm font-medium leading-snug" style={{ color: "var(--surface-ink)" }}>
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Progress bar inside checklist card */}
                <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-xs font-mono">
                  <span style={{ color: "var(--surface-muted)" }}>Execution Quality</span>
                  <span className="font-bold text-[var(--teal)]">100% Guaranteed</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* BOTTOM AI STACK TOOLS MARQUEE & PILLS WITH STAGGERED SCROLL ANIMATIONS */}
      <Reveal direction="up" delay={200} className="mt-14 md:mt-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)]/20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[var(--teal)] animate-ping" />
            <span className="font-mono text-xs uppercase tracking-wider font-bold text-[var(--ink)]">
              AI Tools & Ecosystem Integration
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {ALL_AI_TOOLS.map((tool, idx) => (
              <motion.span
                key={tool}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="font-mono text-xs uppercase tracking-wide rounded-full px-4 py-2 border transition-all duration-300 hover:border-[var(--teal)] hover:text-[var(--teal)] cursor-pointer"
                style={{ borderColor: "var(--border)", color: "var(--muted)", background: "var(--bg)" }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}