import Link from "next/link";
import Glass from "@/components/Glass";
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
        <div className="relative overflow-hidden rounded-4xl bg-brand-deep px-8 py-14 text-center text-white sm:px-14">
          <div
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-sky/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-brand/40 blur-3xl"
            aria-hidden="true"
          />
          <h2 className="relative font-display text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/80">{text}</p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-4 font-bold text-brand-deep shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky"
            >
              Request an Appointment
            </Link>
            <a
              href={clinic.phoneHref}
              className="rounded-full border border-white/40 px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white/10"
            >
              Call {clinic.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
