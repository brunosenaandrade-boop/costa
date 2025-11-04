import { siteData } from "@/content/site-data";

export function FaqSection() {
  return (
    <section className="space-y-8 rounded-4xl border border-white/10 bg-white/80 p-8 shadow-[0_50px_140px_-90px_rgba(30,30,30,0.5)] backdrop-blur md:p-12 dark:bg-zinc-900/70">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.3em] text-rose-500">FAQ</p>
        <h2 className="text-3xl font-semibold text-zinc-900 md:text-4xl dark:text-white">
          Respostas rapidas para o que voce precisa.
        </h2>
        <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-300">
          Se ainda ficou com duvidas, nossa equipe de concierge esta disponivel
          via WhatsApp para personalizar sua experiencia.
        </p>
      </div>
      <div className="space-y-4">
        {siteData.faqs.map((faq) => (
          <details
            key={faq.question}
            className="group overflow-hidden rounded-3xl border border-black/5 bg-white/90 p-6 shadow-[0_30px_80px_-60px_rgba(40,40,40,0.5)] transition hover:-translate-y-1 hover:border-rose-500/30 open:bg-white dark:border-white/5 dark:bg-white/[0.04] dark:open:bg-white/[0.06]"
          >
            <summary className="cursor-pointer list-none text-lg font-semibold text-zinc-900 outline-none transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-500 dark:text-white">
              {faq.question}
            </summary>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
