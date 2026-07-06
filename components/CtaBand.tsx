import Link from "next/link";
import { clinic } from "@/lib/site";

export default function CtaBand({
  title = "Ready to see clearly?",
  text = "Schedule an appointment today and experience eye care that treats you like family.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-5xl bg-gradient-to-br from-brand-deep via-brand-dark to-brand px-8 py-14 text-center text-white sm:px-14">
          {/* animated glow orbs behind the frosted panel */}
          <div
            className="orb animate-drift -right-20 -top-24 h-72 w-72 bg-sky/30"
            aria-hidden="true"
          />
          <div
            className="orb animate-drift -bottom-28 -left-16 h-72 w-72 bg-brand/50"
            style={{ animationDelay: "-9s" }}
            aria-hidden="true"
          />

          {/* frosted glass overlay for depth */}
          <div
            className="glass-dark pointer-events-none absolute inset-4 rounded-[2rem] opacity-70"
            aria-hidden="true"
          />

          <div className="relative">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">{text}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-4 font-bold text-brand-deep shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky"
              >
                Request an Appointment
              </Link>
              <a
                href={clinic.phoneHref}
                className="rounded-full border border-white/40 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15"
              >
                Call {clinic.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
