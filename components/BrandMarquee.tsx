import Link from "next/link";

const brands = [
  "Ray-Ban",
  "Oakley",
  "Prada",
  "Coach",
  "Versace",
  "Michael Kors",
  "Marc Jacobs",
  "Costa",
  "Maui Jim",
  "Kendra Scott",
  "Calvin Klein",
  "Nike",
  "Kate Spade",
  "Dolce & Gabbana",
  "Lilly Pulitzer",
  "Tory Burch",
];

function BrandRow() {
  return (
    <ul className="flex shrink-0 items-center gap-14 pr-14" aria-hidden="true">
      {brands.map((brand) => (
        <li
          key={brand}
          className="whitespace-nowrap font-display text-2xl font-bold tracking-tight text-ink/25 transition-colors"
        >
          {brand}
        </li>
      ))}
    </ul>
  );
}

export default function BrandMarquee() {
  return (
    <section className="py-14">
      <p className="text-center text-sm font-bold uppercase tracking-[0.3em] text-brand">
        Frames from brands you love
      </p>
      <p className="sr-only">
        We carry frames and sunglasses from {brands.join(", ")}, and more.
      </p>
      <div className="marquee-mask mt-8 overflow-hidden">
        <div className="marquee flex w-max">
          <BrandRow />
          <BrandRow />
        </div>
      </div>
      <p className="mt-8 text-center">
        <Link
          href="/services/eyewear-and-glasses"
          className="text-sm font-bold text-brand underline-offset-4 transition-colors hover:text-brand-dark hover:underline"
        >
          Browse our optical boutique &rarr;
        </Link>
      </p>
    </section>
  );
}
