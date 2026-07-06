import Reveal from "@/components/Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden px-6 pb-6 pt-16 sm:pt-20">
      <div
        className="orb animate-drift left-1/2 top-[-6rem] h-72 w-96 -translate-x-1/2 bg-sky/50"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="glass-chip mx-auto inline-block rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-[0.28em] text-brand-dark">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
