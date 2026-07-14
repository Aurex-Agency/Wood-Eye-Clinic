import type { Metadata } from "next";
import Glass from "@/components/Glass";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Areas We Serve in North Mississippi",
  description:
    "Wood Eye Clinic in Pontotoc, MS proudly serves families from Tupelo, Oxford, New Albany, Ripley, Saltillo, and all of North Mississippi with comprehensive eye care since 1981.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Areas We Serve"
        title="Caring for eyes across North Mississippi"
        description="From our home on Main Street in Pontotoc, we welcome families from Tupelo, Oxford, New Albany, Ripley, Saltillo, and beyond. Find your community below for directions and local details."
      />

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, i) => (
            <Reveal key={location.slug} delay={(i % 3) * 90}>
              <Glass
                href={`/locations/${location.slug}`}
                className="group h-full p-7 hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
                  {location.isHome ? "Our hometown" : location.driveTime}
                </p>
                <h2 className="mt-2 font-display text-xl font-bold text-ink">
                  {location.city}, {location.state}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {location.metaDescription.split(". ")[0]}.
                </p>
                <p className="mt-4 text-sm font-semibold text-brand">
                  Details &amp; directions
                  <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </p>
              </Glass>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
