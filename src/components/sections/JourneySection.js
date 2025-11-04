import Link from "next/link";

const journeySteps = [
  {
    title: "1. Escolha seu ritual",
    body: "Selecione extensao, design de sobrancelhas ou mentoria na nossa jornada guiada.",
  },
  {
    title: "2. Defina dia e horario",
    body: "Veja a agenda CCosta em tempo real, bloqueie seu horario e personalize observacoes.",
  },
  {
    title: "3. Finalize pagamentos",
    body: "Pague com PIX ou cartao, receba ticket digital e recomendações de produtos.",
  },
  {
    title: "4. Complete o visual",
    body: "Garanta itens de home care e looks exclusivos com retirada rápida no studio.",
  },
];

export function JourneySection() {
  return (
    <section className="rounded-4xl border border-white/10 bg-white/80 p-8 shadow-[0_60px_120px_-80px_rgba(20,20,20,0.35)] backdrop-blur md:p-12 dark:bg-white/10">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-md space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-rose-500">Como funciona</p>
          <h2 className="text-3xl font-semibold text-zinc-900 md:text-4xl dark:text-white">
            Uma jornada completa de beleza em quatro etapas.
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            Pensamos cada tela para ser intuitiva, com confirmações em tempo real e tickets digitais
            que deixam tudo organizado para o dia do atendimento.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/agendar"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-rose-500 dark:hover:bg-rose-400"
            >
              Comecar agora
            </Link>
            <Link
              href="/produtos"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:border-rose-200 hover:text-rose-600 dark:border-white/10 dark:text-white"
            >
              Conhecer produtos
            </Link>
          </div>
        </div>
        <ul className="grid flex-1 gap-4 md:grid-cols-2">
          {journeySteps.map((step) => (
            <li
              key={step.title}
              className="rounded-3xl border border-zinc-200 bg-white px-5 py-5 text-sm text-zinc-600 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.06] dark:text-zinc-200"
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{step.title}</h3>
              <p className="mt-2 leading-6">{step.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
