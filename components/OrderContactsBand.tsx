import Icon from "@/components/Icon";
import { clinic } from "@/lib/site";

/*
 * Prominent, reusable "order your contacts online" promo band. Placed on the
 * high-traffic pages so returning patients can reorder in one tap. Uses a bright
 * sky-to-brand gradient so it stands apart from the deeper appointment CTA band.
 */
export default function OrderContactsBand({
  title = "Need more contacts?",
  text = "Reorder your contact lenses online anytime — quick, easy, and shipped straight to your door.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-sky via-brand to-brand-dark px-8 py-10 shadow-xl sm:px-12">
          {/* soft glow accents */}
          <div className="orb animate-drift -right-16 -top-20 h-64 w-64 bg-white/20" aria-hidden="true" />
          <div
            className="orb animate-drift -bottom-24 -left-12 h-64 w-64 bg-brand-deep/40"
            style={{ animationDelay: "-9s" }}
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-center gap-7 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:text-left">
            <div className="flex flex-col items-center gap-5 sm:flex-row lg:items-center">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white shadow-inner backdrop-blur-sm">
                <Icon name="lens" className="h-9 w-9" />
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {title}
                </h2>
                <p className="mt-2 max-w-xl text-white/90">{text}</p>
              </div>
            </div>

            <a
              href={clinic.orderContactsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-brand-deep shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky"
            >
              Order Contacts Online
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
