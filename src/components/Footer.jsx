import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 md:px-8 py-8">
      <Reveal once={false}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display font-semibold flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full animate-pulse"
              style={{ background: "linear-gradient(135deg, var(--violet), var(--coral))" }}
            />
            Nouman Qamar
          </span>
          <div className="flex gap-6 font-mono text-[12px] uppercase tracking-wide text-[var(--muted)]">
            <a href="#work" className="hover:text-[var(--violet)] transition-colors hover:scale-105 inline-block">Work</a>
            <a href="#method" className="hover:text-[var(--coral)] transition-colors hover:scale-105 inline-block">Method</a>
            <a href="#about" className="hover:text-[var(--teal)] transition-colors hover:scale-105 inline-block">About</a>
          </div>
          <span className="font-mono text-[12px] text-[var(--muted)]">© 2026 Nouman Qamar · Pakistan</span>
        </div>
      </Reveal>
    </footer>
  );
}
