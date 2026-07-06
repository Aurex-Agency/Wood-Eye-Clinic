import Link from "next/link";

/*
 * Text-mark approximation of the Wood Eye Clinic logo: the "oo" in wood is
 * drawn as a pair of spectacles in brand blue. Replace with the client's
 * official SVG/PNG logo asset when provided.
 */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group inline-flex flex-col items-start leading-none">
      <span
        className={`flex items-end text-[1.9rem] font-bold tracking-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        <span>w</span>
        <svg
          viewBox="0 0 66 30"
          className="mx-0.5 h-[1.28em] w-auto translate-y-[0.18em] text-brand transition-transform duration-500 group-hover:scale-105"
          aria-hidden="true"
        >
          <circle cx="15" cy="15" r="11.5" fill="none" stroke="currentColor" strokeWidth="4" />
          <circle cx="51" cy="15" r="11.5" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M26.5 13 h13" stroke="currentColor" strokeWidth="3" fill="none" />
          <path d="M4.5 8 L1 2" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <path d="M61.5 8 L65 2" stroke="currentColor" strokeWidth="2.5" fill="none" />
        </svg>
        <span>d</span>
      </span>
      <span
        className={`mt-1 text-[0.68rem] font-medium uppercase tracking-[0.42em] ${
          light ? "text-white/80" : "text-ink/70"
        }`}
      >
        Eye Clinic
      </span>
    </Link>
  );
}
