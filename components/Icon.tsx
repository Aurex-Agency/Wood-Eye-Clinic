/* Lightweight inline icon set keyed by name, used on service cards. */
const paths: Record<string, React.ReactNode> = {
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  child: (
    <>
      <circle cx="12" cy="7" r="4" />
      <path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  drop: (
    <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 5 3 8.5 7 10 4-1.5 7-5 7-10V6l-7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  lens: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M8.5 9.5a5 5 0 0 1 4-1.4" />
    </>
  ),
  glasses: (
    <>
      <circle cx="7" cy="14" r="4" />
      <circle cx="17" cy="14" r="4" />
      <path d="M11 13.5c.6-.6 1.4-.6 2 0" />
      <path d="M3 13.5 4.5 7M21 13.5 19.5 7" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M9 20h6M12 16v4" />
    </>
  ),
  spark: (
    <path d="M12 2l2.2 6.6L21 11l-6.8 2.4L12 20l-2.2-6.6L3 11l6.8-2.4L12 2Z" />
  ),
  lab: (
    <>
      <path d="M9 3v6L4 18a3 3 0 0 0 2.7 4.4h10.6A3 3 0 0 0 20 18l-5-9V3" />
      <path d="M7.5 3h9" />
    </>
  ),
};

export default function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? paths.eye}
    </svg>
  );
}
