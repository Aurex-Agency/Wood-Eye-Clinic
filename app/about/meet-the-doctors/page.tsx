import type { Metadata } from "next";
import Link from "next/link";
import Glass from "@/components/Glass";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { doctors } from "@/lib/site";

export const metadata: Metadata = {
  title: "Meet the Optometrists",
  description:
    "Meet Dr. William Terry Wood, Dr. Miranda Maynard, and Dr. Joseph Caleb Warren, the optometrists of Wood Eye Clinic in Pontotoc, MS.",
};

export default function MeetTheDoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet the Optometrists"
        title="Doctors who treat you like family"
        description="Our three optometrists bring decades of combined experience, advanced training, and deep roots in the Pontotoc community."
      />

      <section className="px-6 py-10">
        <div className="mx-auto max-w-5xl space-y-8">
          {doctors.map((doc, i) => (
            <Reveal key={doc.slug} delay={i * 100}>
              <Glass strong className="p-8 sm:p-10">
                <div className="flex flex-col gap-8 sm:flex-row">
                  <div className="w-full shrink-0 overflow-hidden rounded-3xl sm:w-52">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={doc.photo}
                      alt={doc.name}
                      className="aspect-[4/5] h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
                      {doc.joined}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-bold text-ink">{doc.name}</h2>
                    <p className="mt-1 font-semibold text-brand-dark">{doc.role}</p>
                    <p className="mt-4 leading-relaxed text-ink/70">{doc.intro}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {doc.specialties.slice(0, 4).map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-sky/50 px-3 py-1 text-xs font-semibold text-brand-deep"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/team/${doc.slug}`}
                      className="mt-6 inline-block rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-brand-dark"
                    >
                      Read {doc.shortName}&apos;s Full Story
                    </Link>
                  </div>
                </div>
              </Glass>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
