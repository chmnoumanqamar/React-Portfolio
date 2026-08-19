import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const ICONS = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.58 2 12.21c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.51-1.11-1.51-.9-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5.01 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.21C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.06 3.76-2.06 4.02 0 4.76 2.65 4.76 6.08V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4V9Z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.47 14.38c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.76.94-.93 1.14-.17.19-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.04-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.5-.17 0-.36-.02-.56-.02-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43s1.04 2.82 1.19 3.02c.15.19 2.05 3.13 4.96 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.11.55-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34z" />
      <path d="M12 2a10 10 0 0 0-8.62 15.03L2 22l5.13-1.35A10 10 0 1 0 12 2Z" />
    </svg>
  ),
  copy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
};

const CHANNELS = [
  { key: "github", label: "GitHub", href: "https://github.com/chmnoumanqamar" },
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-nouman-qamar-18543338b" },
  { key: "whatsapp", label: "WhatsApp", href: "https://wa.me/923207205141" },
];

const EMAIL = "chmnoumanqamar@gmail.com";

// EmailJS public key, service id, and template id from the EmailJS dashboard.
const EMAILJS_PUBLIC_KEY = "DLivNyJrNwgPVnsYQ";
const EMAILJS_SERVICE_ID = "service_a1nc6q7";
const EMAILJS_TEMPLATE_ID = "template_p2us3ky";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            name: form.name,
            from_name: form.name,
            user_name: form.name,
            email: form.email,
            from_email: form.email,
            user_email: form.email,
            reply_to: form.email,
            to_email: EMAIL,
            to_name: "Nouman",
            message: form.message,
            user_message: form.message,
            content: form.message,
            message_html: form.message,
            body: form.message,
          },
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable no-op
    }
  };

  return (
    <section id="contact" className="relative px-6 md:px-8 py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Let's build + Email + Socials */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <Reveal>
              <p className="font-mono text-[13px] uppercase tracking-widest mb-4 font-bold" style={{ color: "var(--teal)" }}>
                Get In Touch
              </p>
              <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl tracking-tight text-[var(--ink)]">
                Let's build.
              </h2>

              <svg viewBox="0 0 260 20" className="w-48 md:w-60 mt-2 mb-8" aria-hidden="true">
                <path
                  d="M2 12 Q 22 2, 42 12 T 82 12 T 122 12 T 162 12 T 202 12 T 242 12"
                  fill="none"
                  stroke="var(--teal)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>

              <p className="text-[var(--muted)] text-base md:text-lg max-w-md leading-relaxed mb-8">
                Have a project idea, want to collaborate, or looking for a developer? Send a message and let's turn your vision into reality.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <div
                  className="inline-flex items-center gap-3 rounded-full pl-6 pr-3 py-2.5 shadow-md border"
                  style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                >
                  <span className="font-mono text-[14px] sm:text-base font-medium" style={{ color: "var(--surface-ink)" }}>
                    {EMAIL}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full shrink-0 animate-pulse" style={{ background: "var(--coral)" }} />
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="w-12 h-12 rounded-full grid place-items-center border shadow-md transition-all hover:scale-105 active:scale-95"
                  style={{ borderColor: "var(--border)", background: "var(--surface)", color: copied ? "var(--teal)" : "var(--surface-ink)" }}
                >
                  <span className="w-5 h-5 block">{copied ? ICONS.check : ICONS.copy}</span>
                </button>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="flex flex-wrap gap-4">
                {CHANNELS.map((c, idx) => (
                  <motion.a
                    key={c.key}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={c.label}
                    title={c.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                    whileHover={{ y: -5, scale: 1.08, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-2xl grid place-items-center shadow-md border transition-colors cursor-pointer"
                    style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--surface-ink)" }}
                  >
                    <span className="w-6 h-6 block">{ICONS[c.key]}</span>
                  </motion.a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Direct Message Form directly in front of Let's build */}
          <div className="lg:col-span-6">
            <Reveal delay={180}>
              <motion.div
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 25 } }}
                className="p-7 md:p-9 rounded-3xl border shadow-2xl transition-colors"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <h3 className="font-display font-bold text-2xl mb-2" style={{ color: "var(--surface-ink)" }}>
                  Send a message directly
                </h3>
                <p className="font-mono text-[12px] uppercase tracking-wide mb-6" style={{ color: "var(--surface-muted)" }}>
                  I'll respond within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider mb-1.5" style={{ color: "var(--surface-muted)" }}>Your Name</label>
                      <input
                        required
                        value={form.name}
                        onChange={update("name")}
                        placeholder="John Doe"
                        className="w-full rounded-xl border px-4 py-3.5 text-[15px] outline-none transition-all focus:ring-2 focus:ring-[var(--teal)]"
                        style={{ borderColor: "var(--border)", background: "var(--bg)", color: "var(--ink)" }}
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider mb-1.5" style={{ color: "var(--surface-muted)" }}>Your Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={update("email")}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border px-4 py-3.5 text-[15px] outline-none transition-all focus:ring-2 focus:ring-[var(--teal)]"
                        style={{ borderColor: "var(--border)", background: "var(--bg)", color: "var(--ink)" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider mb-1.5" style={{ color: "var(--surface-muted)" }}>Project Details</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="What are you building?"
                      className="w-full rounded-xl border px-4 py-3.5 text-[15px] outline-none transition-all focus:ring-2 focus:ring-[var(--teal)] resize-none"
                      style={{ borderColor: "var(--border)", background: "var(--bg)", color: "var(--ink)" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-2 w-full inline-flex items-center justify-center gap-3 text-white font-mono font-bold text-base px-6 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: "linear-gradient(120deg, var(--violet), var(--coral))" }}
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                    {status !== "sending" && <span className="text-xl">↗</span>}
                  </button>

                  {status === "success" && (
                    <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-center">
                      <p className="font-mono text-[13px] font-semibold" style={{ color: "var(--teal)" }}>
                        ✓ Message sent! I'll get back to you soon.
                      </p>
                    </div>
                  )}
                  {status === "error" && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-center">
                      <p className="font-mono text-[13px] font-semibold" style={{ color: "var(--coral)" }}>
                        Couldn't send that. Please email me directly at {EMAIL}
                      </p>
                    </div>
                  )}
                </form>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="dot-pattern h-16 md:h-20 mt-20 -mx-6 md:-mx-8" aria-hidden="true" />
    </section>
  );
}