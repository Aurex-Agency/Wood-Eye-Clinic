import Link from "next/link";

/*
 * Official Wood Eye Clinic wordmark. The dark version is used on light
 * surfaces (header); the white & blue version is used in the dark footer.
 */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Wood Eye Clinic home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={light ? "/logo-light.webp" : "/logo.webp"}
        alt="Wood Eye Clinic"
        className="h-12 w-auto transition-transform duration-500 hover:scale-[1.03] sm:h-16"
      />
    </Link>
  );
}
