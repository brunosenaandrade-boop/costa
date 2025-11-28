import { siteData } from "@/content/site-data";
import { Heart, Target, Sparkles, Lightbulb, CheckCircle2 } from "lucide-react";

const iconMap = {
  Excelencia: Target,
  Transparencia: Lightbulb,
  Cuidado: Heart,
  Inovacao: Sparkles,
};

export function AboutSection() {
  const { about, business } = siteData;

  return (
    <section
      id="sobre"
      className="noise-overlay relative space-y-16 overflow-hidden rounded-4xl border border-white/20 bg-gradient-to-br from-white via-rose-50/30 to-purple-50/30 p-8 shadow-[0_60px_120px_-80px_rgba(14,14,14,0.4)] backdrop-blur md:p-12 dark:border-white/10 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900"
    >
      {/* Background decorative elements */}
      <div className="animate-pulse-glow absolute -left-40 top-40 h-96 w-96 rounded-full bg-rose-200/20 blur-3xl dark:bg-rose-500/5" />
      <div
        className="animate-pulse-glow absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-purple-200/20 blur-3xl dark:bg-purple-500/5"
        style={{ animationDelay: "2s" }}
      />

      {/* Header */}
      <div className="relative z-10 text-center">
        <p className="inline-flex items-center justify-center gap-2 text-sm uppercase tracking-[0.3em] text-rose-500">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-rose-500" />
          Conheca nosso studio
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-rose-500" />
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-zinc-900 md:text-4xl dark:text-white">
          Transformando <span className="gradient-text">olhares</span> e
          elevando a <span className="gradient-text">autoconfianca</span>
        </h2>
      </div>

      {/* Mission & About Grid */}
      <div className="relative z-10 grid gap-8 lg:grid-cols-2">
        {/* Missao Card */}
        <div className="group relative overflow-hidden rounded-3xl border border-rose-200/50 bg-white/80 p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_rgba(236,72,153,0.3)] dark:border-white/10 dark:bg-white/5">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-rose-500/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

          <div className="relative z-10">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30">
              <Target className="h-7 w-7" strokeWidth={1.8} />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-white">
              {about.missao.title}
            </h3>
            <p className="leading-relaxed text-zinc-600 dark:text-zinc-300">
              {about.missao.description}
            </p>
          </div>

          {/* Decorative corner */}
          <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-rose-200/50 to-pink-200/30 blur-2xl transition-all duration-500 group-hover:scale-150 dark:from-rose-500/20 dark:to-pink-500/10" />
        </div>

        {/* Quem Somos Card */}
        <div className="group relative overflow-hidden rounded-3xl border border-purple-200/50 bg-white/80 p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_rgba(168,85,247,0.3)] dark:border-white/10 dark:bg-white/5">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-purple-500/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

          <div className="relative z-10">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 text-white shadow-lg shadow-purple-500/30">
              <Heart className="h-7 w-7" strokeWidth={1.8} />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-white">
              {about.quemSomos.title}
            </h3>
            <p className="leading-relaxed text-zinc-600 dark:text-zinc-300">
              {about.quemSomos.description}
            </p>
          </div>

          {/* Decorative corner */}
          <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-purple-200/50 to-violet-200/30 blur-2xl transition-all duration-500 group-hover:scale-150 dark:from-purple-500/20 dark:to-violet-500/10" />
        </div>
      </div>

      {/* Highlights */}
      <div className="relative z-10 rounded-3xl border border-white/50 bg-white/60 p-8 backdrop-blur dark:border-white/10 dark:bg-white/5">
        <h4 className="mb-6 text-center text-lg font-semibold text-zinc-900 dark:text-white">
          Por que escolher o{" "}
          <span className="gradient-text">Cinthia Costa Beauty Studio</span>?
        </h4>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {about.quemSomos.highlights.map((highlight, index) => (
            <div
              key={index}
              className="group flex items-start gap-3 rounded-2xl bg-white/80 p-4 transition-all duration-300 hover:bg-rose-50 hover:shadow-md dark:bg-white/5 dark:hover:bg-rose-500/10"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-rose-500 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm text-zinc-700 dark:text-zinc-300">
                {highlight}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Valores */}
      <div className="relative z-10">
        <h4 className="mb-8 text-center text-lg font-semibold text-zinc-900 dark:text-white">
          Nossos <span className="gradient-text">Valores</span>
        </h4>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {about.valores.map((valor, index) => {
            const Icon = iconMap[valor.title] || Sparkles;
            return (
              <div
                key={valor.title}
                className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white/90 p-6 text-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-rose-500/30 hover:shadow-[0_20px_50px_-20px_rgba(236,72,153,0.3)] dark:border-white/5 dark:bg-white/5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <div className="relative z-10">
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-100 to-purple-100 text-rose-500 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg dark:from-rose-500/20 dark:to-purple-500/20">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <h5 className="mb-2 font-semibold text-zinc-900 dark:text-white">
                    {valor.title}
                  </h5>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {valor.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Business Info Footer */}
      <div className="relative z-10 rounded-2xl border border-zinc-200/50 bg-zinc-50/80 p-6 text-center dark:border-white/10 dark:bg-white/5">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          <strong className="text-zinc-800 dark:text-zinc-200">
            {business.nomeFantasia}
          </strong>{" "}
          | CNPJ: {business.cnpj} | {business.atividade}
        </p>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
          {business.endereco.logradouro}, {business.endereco.numero}
          {business.endereco.complemento &&
            ` - ${business.endereco.complemento}`}
          , {business.endereco.bairro}, {business.endereco.cidade} -{" "}
          {business.endereco.uf}
        </p>
      </div>
    </section>
  );
}
