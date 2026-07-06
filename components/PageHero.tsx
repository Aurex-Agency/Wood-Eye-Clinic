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
    <section className="px-6 pb-6 pt-16 sm:pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand">{eyebrow}</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
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
