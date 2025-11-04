import { siteData } from "@/content/site-data";
import { cn } from "@/lib/utils";
import { Droplet, Flower2, Palette, Sparkles } from "lucide-react";

const iconMap = {
  Sparkles,
  Droplet,
  Palette,
  Flower2,
};

function ServiceIcon({ name }) {
  const Icon = iconMap[name] ?? Sparkles;
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-rose-500 via-purple-500 to-amber-400 text-white shadow-[0_18px_40px_-20px_rgba(236,72,153,0.7)]">
      <Icon className="h-6 w-6" strokeWidth={1.8} />
    </span>
  );
}

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="space-y-12 rounded-4xl border border-white/10 bg-white/80 p-8 shadow-[0_60px_120px_-80px_rgba(14,14,14,0.5)] backdrop-blur md:p-12 dark:bg-zinc-900/70"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-rose-500">
            Nossos servicos
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-zinc-900 md:text-4xl dark:text-white">
            Menu sensorial para uma jornada 360 graus de beleza.
          </h2>
        </div>
        <p className="max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
          Combine tratamentos, personalize pacotes e desbloqueie experiencias
          exclusivas com consultoria dedicada para cada etapa.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {siteData.services.map((service) => (
          <article
            key={service.name}
            className={cn(
              "group relative overflow-hidden rounded-3xl border border-black/5 bg-white/90 px-8 py-10 transition",
              "shadow-[0_30px_80px_-50px_rgba(30,30,30,0.6)] hover:-translate-y-2 hover:border-rose-500/30 dark:border-white/5 dark:bg-white/[0.03]"
            )}
          >
            <div className="relative z-10 flex flex-col gap-6">
              <ServiceIcon name={service.icon} />
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                  {service.name}
                </h3>
                <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  {service.description}
                </p>
              </div>
              <button className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-rose-600 transition hover:text-rose-500 dark:text-rose-300 dark:hover:text-rose-200">
                Saiba mais
                <span
                  aria-hidden
                  className="translate-x-0 transition group-hover:translate-x-0.5"
                >
                  {"\u2192"}
                </span>
              </button>
            </div>
            <div className="absolute -right-20 top-0 h-52 w-52 rounded-full bg-rose-200/50 opacity-0 blur-3xl transition group-hover:opacity-100 dark:bg-rose-500/30" />
            <div className="absolute -bottom-32 -left-10 h-56 w-56 rounded-full bg-purple-200/40 opacity-0 blur-3xl transition group-hover:opacity-100 dark:bg-purple-500/30" />
          </article>
        ))}
      </div>
    </section>
  );
}
