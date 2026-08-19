import Link from "next/link";
import Icon from "@/components/Icon";
import type { Service } from "@/lib/site";

/*
 * Wide glass service panel used in the home-page stacked-cards scroll section.
 * Pure frosted glass (our standard styling), no colour. Cards are made to
 * stack via sticky positioning by the parent section.
 */
export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="glass-pane group flex items-center gap-4 overflow-hidden rounded-[1.75rem] p-5 transition-transform duration-300 hover:-translate-y-0.5 sm:gap-7 sm:p-9"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/60 bg-white/40 text-brand-dark shadow-inner backdrop-blur-md transition-colors duration-500 group-hover:bg-brand/80 group-hover:text-white sm:h-20 sm:w-20 sm:rounded-2xl">
        <Icon name={service.icon} className="h-6 w-6 sm:h-9 sm:w-9" />
      </span>

      <div className="min-w-0 flex-1">
        <span className="font-display text-xs font-bold tracking-[0.3em] text-brand/60">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-0.5 font-display text-lg font-bold text-ink sm:text-2xl">
          {service.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/70 sm:text-base">
          {service.summary}
        </p>
      </div>

      <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform duration-300 group-hover:translate-x-1 sm:flex">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}
