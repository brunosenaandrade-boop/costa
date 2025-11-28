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
    <span className="animate-gradient group-hover:glow-rose relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-rose-500 via-purple-500 to-amber-400 text-white shadow-[0_18px_40px_-20px_rgba(236,72,153,0.7)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_25px_50px_-20px_rgba(236,72,153,0.9)]">
      <Icon className="h-7 w-7 transition-transform duration-500 group-hover:rotate-12" strokeWidth={1.8} />
    </span>
  );
}

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="noise-overlay relative space-y-12 rounded-4xl border border-white/20 bg-white/80 p-8 shadow-[0_60px_120px_-80px_rgba(14,14,14,0.5)] backdrop-blur md:p-12 dark:border-white/10 dark:bg-zinc-900/70"
    >
      {/* Background decorative elements */}
      <div className="animate-pulse-glow absolute -right-40 top-20 h-80 w-80 rounded-full bg-rose-200/30 blur-3xl dark:bg-rose-500/10" />
      <div
        className="animate-pulse-glow absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-500/10"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-rose-500">
            <span className="h-px w-8 bg-gradient-to-r from-rose-500 to-transparent" />
            Nossos servicos
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-zinc-900 md:text-4xl dark:text-white">
            Menu sensorial para uma{" "}
            <span className="gradient-text">jornada 360 graus</span> de beleza.
          </h2>
        </div>
        <p className="max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
          Combine tratamentos, personalize pacotes e desbloqueie experiencias
          exclusivas com consultoria dedicada para cada etapa.
        </p>
      </div>
      <div className="relative z-10 grid gap-6 md:grid-cols-2">
        {siteData.services.map((service, index) => (
          <article
            key={service.name}
            className={cn(
              "group relative overflow-hidden rounded-3xl border border-black/5 bg-white/90 px-8 py-10 transition-all duration-500",
              "shadow-[0_30px_80px_-50px_rgba(30,30,30,0.6)] hover:-translate-y-3 hover:border-rose-500/40 hover:shadow-[0_40px_100px_-50px_rgba(236,72,153,0.4)] dark:border-white/5 dark:bg-white/[0.03] dark:hover:border-rose-400/30"
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

            <div className="relative z-10 flex flex-col gap-6">
              <ServiceIcon name={service.icon} />
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-zinc-900 transition-colors duration-300 group-hover:text-rose-600 dark:text-white dark:group-hover:text-rose-400">
                  {service.name}
                </h3>
                <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  {service.description}
                </p>
              </div>
              <button className="group/btn inline-flex w-fit items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-sm font-medium text-rose-600 transition-all duration-300 hover:bg-rose-100 hover:shadow-[0_10px_30px_-15px_rgba(236,72,153,0.5)] dark:bg-rose-500/10 dark:text-rose-300 dark:hover:bg-rose-500/20">
                Saiba mais
                <span
                  aria-hidden
                  className="translate-x-0 transition-transform duration-300 group-hover/btn:translate-x-1"
                >
                  {"\u2192"}
                </span>
              </button>
            </div>

            {/* Enhanced glow orbs */}
            <div className="absolute -right-20 top-0 h-52 w-52 rounded-full bg-gradient-to-br from-rose-300/50 to-pink-200/30 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:from-rose-500/30 dark:to-pink-500/20" />
            <div className="absolute -bottom-32 -left-10 h-56 w-56 rounded-full bg-gradient-to-br from-purple-300/40 to-violet-200/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:from-purple-500/30 dark:to-violet-500/20" />

            {/* Corner accent */}
            <div className="absolute right-0 top-0 h-20 w-20 translate-x-10 -translate-y-10 rounded-full bg-gradient-to-br from-rose-400/20 to-purple-400/20 opacity-0 transition-all duration-500 group-hover:translate-x-5 group-hover:-translate-y-5 group-hover:opacity-100" />
          </article>
        ))}
      </div>
    </section>
  );
}
