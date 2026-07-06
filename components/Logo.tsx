import Link from "next/link";

/*
 * Official Wood Eye Clinic wordmark. On dark surfaces (footer) the transparent
 * PNG/WebP is rendered to white via a filter so it stays legible.
 */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Wood Eye Clinic — home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.webp"
        alt="Wood Eye Clinic"
        className="h-11 w-auto transition-transform duration-500 hover:scale-[1.03] sm:h-12"
        style={light ? { filter: "brightness(0) invert(1)" } : undefined}
      />
    </Link>
  );
}
