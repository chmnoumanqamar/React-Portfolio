const PATHS = {
  code: <path d="m9 18-6-6 6-6M15 6l6 6-6 6" />,
  chart: <path d="M4 20V10M12 20V4M20 20v-6" />,
  lock: (
    <>
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
};

export default function ProjectIcon({ icon, className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {PATHS[icon]}
    </svg>
  );
}
