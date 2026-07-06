import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Glass from "@/components/Glass";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { team } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) return {};
  return {
    title: member.name,
    description: member.intro,
  };
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <>
      <section className="px-6 pb-6 pt-16 sm:pt-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Link
              href={member.isDoctor ? "/about/meet-the-doctors" : "/about/meet-the-team"}
              className="text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
            >
              &larr; Back to {member.isDoctor ? "Meet the Optometrists" : "Meet the Team"}
            </Link>
            <div className="mt-8 flex flex-col items-start gap-8 sm:flex-row sm:items-center">
              <div className="w-40 shrink-0 overflow-hidden rounded-4xl shadow-xl sm:w-48">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.photo}
                  alt={member.name}
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand">
                  {member.joined}
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                  {member.name}
                </h1>
                <p className="mt-2 text-lg font-semibold text-brand-dark">{member.role}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Glass tint className="p-8 sm:p-10">
              <p className="text-xl font-medium leading-relaxed text-ink/85">
                &ldquo;{member.headline}&rdquo;
              </p>
            </Glass>
          </Reveal>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink/75">
            <Reveal>
              <p>{member.intro}</p>
            </Reveal>
            {member.bio.map((paragraph) => (
              <Reveal key={paragraph.slice(0, 40)}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <h2 className="font-display text-2xl font-bold text-ink">
              {member.isDoctor ? "Areas of Focus" : "How They Help"}
            </h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {member.specialties.map((s) => (
                <span
                  key={s}
                  className="glass-surface rounded-full px-4 py-2 text-sm font-semibold text-brand-deep"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          {member.funFact && (
            <Reveal className="mt-10">
              <Glass strong className="p-7">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand">
                  Outside the Clinic
                </p>
                <p className="mt-3 text-lg text-ink/75">{member.funFact}</p>
              </Glass>
            </Reveal>
          )}
        </div>
      </section>

      <CtaBand
        title={
          member.isDoctor
            ? `Schedule a visit with ${member.shortName}`
            : "Come see us in person"
        }
        text="Call us or send a message and we will find a time that works for your family."
      />
    </>
  );
}
