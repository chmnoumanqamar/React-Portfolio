import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#method", label: "Method" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);

      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? y / max : 0);

      const threshold = y + 160;
      let current = "#top";
      for (const el of sections) {
        if (el.offsetTop <= threshold) {
          current = `#${el.id}`;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--bg)]/90 backdrop-blur border-b border-[var(--border)]" : "border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold tracking-tight text-[15px] flex items-center gap-2 uppercase">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: "linear-gradient(135deg, var(--violet), var(--coral))" }}
          />
          Nouman Qamar
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-[13px] uppercase tracking-wide">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative pb-1 transition-colors hover:text-[var(--ink)]"
                style={{ color: active === l.href ? "var(--ink)" : "var(--muted)" }}
              >
                {l.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] rounded-full transition-all duration-300 group-hover:w-full ${
                    active === l.href ? "w-full" : "w-0"
                  }`}
                  style={{
                    background: "linear-gradient(90deg, var(--violet), var(--coral))",
                  }}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-mono text-white transition-transform hover:-translate-y-0.5"
            style={{ background: "linear-gradient(120deg, var(--violet), var(--coral))" }}
          >
            Let's talk
          </a>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            className="font-mono text-sm border border-[var(--border)] rounded px-3 py-1.5"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-[var(--bg)] border-b border-[var(--border)] px-6 py-4">
          <ul className="flex flex-col gap-4 font-mono text-sm uppercase tracking-wide">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="hover:text-[var(--accent)] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="progress-bar" style={{ transform: `scaleX(${progress})` }} />
    </header>
  );
}

