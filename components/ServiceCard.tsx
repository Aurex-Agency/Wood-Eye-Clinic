import Link from "next/link";
import Icon from "@/components/Icon";
import type { Service } from "@/lib/site";

/*
 * Home-page service card in the "colour glowing through frosted glass" style:
 * a vivid gradient rises from the bottom, a frosted glass sheet covers the top
 * and fades out toward the bottom so the colour stays vivid there, a fine dot
 * texture sits over the glass, and the whole card keeps our glass edge + shine.
 * One cohesive cool-toned glow per card.
 */
const glows = [
  { from: "#34d399", to: "#047857" }, // emerald
  { from: "#38bdf8", to: "#0369a1" }, // sky
  { from: "#818cf8", to: "#4338ca" }, // indigo
  { from: "#2dd4bf", to: "#0f766e" }, // teal
  { from: "#22d3ee", to: "#0e7490" }, // cyan
  { from: "#60a5fa", to: "#1e40af" }, // blue
];

export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const g = glows[index % glows.length];
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex min-h-[17rem] flex-col overflow-hidden rounded-[1.75rem] shadow-xl ring-1 ring-inset ring-white/30 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
    >
      {/* vivid gradient glow rising from the bottom */}
      <span
        aria-hidden
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={{
          background: `radial-gradient(155% 125% at 50% 122%, ${g.from} 0%, ${g.to} 42%, transparent 82%)`,
        }}
      />
      {/* fine dot texture */}
      <span
        aria-hidden
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.95) 1px, transparent 1.4px)",
          backgroundSize: "15px 15px",
        }}
      />
      {/* frosted glass sheet over the top, fading to reveal the colour below */}
      <span
        aria-hidden
        className="absolute inset-0 backdrop-blur-2xl"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.55) 44%, rgba(255,255,255,0.18) 74%, rgba(255,255,255,0) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 66%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, #000 0%, #000 66%, transparent 100%)",
        }}
      />
      {/* top-edge shine */}
      <span
        aria-hidden
        className="absolute inset-x-5 top-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)",
        }}
      />

      {/* content */}
      <div className="relative flex h-full flex-col p-7">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/60 text-brand-dark shadow-sm backdrop-blur-md transition-transform duration-500 group-hover:scale-105">
          <Icon name={service.icon} />
        </span>
        <h3 className="mt-5 font-display text-lg font-bold text-ink">{service.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/70">{service.summary}</p>
        <p className="mt-auto pt-6 text-sm font-bold text-white drop-shadow-[0_1px_5px_rgba(0,25,20,0.45)]">
          Learn more
          <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </p>
      </div>
    </Link>
  );
}
