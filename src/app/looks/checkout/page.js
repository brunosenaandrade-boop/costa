"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { bookingData } from "@/content/booking-data";
import { siteData } from "@/content/site-data";

export default function LooksCheckoutPage() {
  return (
    <Suspense fallback={<CheckoutFallback />}>
      <LooksCheckoutContent />
    </Suspense>
  );
}

function CheckoutFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white via-rose-50 to-white text-sm text-zinc-600 dark:from-zinc-950 dark:via-zinc-950 dark:to-black dark:text-zinc-300">
      Carregando checkout...
    </div>
  );
}

function LooksCheckoutContent() {
  const searchParams = useSearchParams();
  const itemQuery = searchParams.get("items") ?? "";

  const selections = useMemo(() => {
    return itemQuery
      .split(",")
      .map((raw) => raw.trim())
      .filter(Boolean)
      .map((item) => {
        const [id, size] = item.split("_");
        return { id, size };
      })
      .filter((entry) => entry.id);
  }, [itemQuery]);

  const outfits = useMemo(
    () =>
      selections
        .map((entry) => {
          const outfit = bookingData.outfits.find((look) => look.id === entry.id);
          if (!outfit) return null;
          return { ...outfit, size: entry.size ?? outfit.sizes[0] ?? "U" };
        })
        .filter(Boolean),
    [selections]
  );

  const total = useMemo(
    () => outfits.reduce((acc, outfit) => acc + outfit.price, 0),
    [outfits]
  );

  const [isConfirmed, setIsConfirmed] = useState(false);

  if (outfits.length === 0) {
    return (
      <EmptyState
        title="Nenhum look selecionado"
        subtitle="Volte para escolher as pecas que combinam com a sua experiencia."
        actionHref="/looks"
        actionLabel="Ver looks"
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-rose-50 to-white text-zinc-900 dark:from-zinc-950 dark:via-zinc-950 dark:to-black">
      <header className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pb-14 pt-20 md:px-10">
        <nav className="flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-300">
          <Link href="/" className="font-semibold text-zinc-900 dark:text-white">
            {siteData.brand.name}
          </Link>
          <div className="flex gap-4">
            <Link href="/agendar" className="transition hover:text-rose-500">
              Agenda
            </Link>
            <Link href="/produtos" className="transition hover:text-rose-500">
              Produtos
            </Link>
            <Link href="/proposta" className="transition hover:text-rose-500">
              Proposta
            </Link>
          </div>
        </nav>
        <div className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-rose-500">Checkout fashion</p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Confirme sua compra de looks exclusivos.
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
            Finalize o pagamento e receba seu ticket de retirada com detalhes de provador e ajustes.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-24 md:px-10">
        <section className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <div className="rounded-4xl border border-white/10 bg-white px-6 py-6 shadow-[0_30px_90px_-70px_rgba(20,20,20,0.35)] dark:bg-white/[0.06]">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                Pecas selecionadas
              </h2>
              <ul className="mt-4 space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
                {outfits.map((outfit) => (
                  <li
                    key={outfit.id}
                    className="rounded-2xl border border-zinc-100 bg-white px-4 py-4 shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-base font-semibold text-zinc-900 dark:text-white">
                          {outfit.name}
                        </p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-300">
                          Tamanho: {outfit.size}
                        </p>
                      </div>
                      <span className="text-sm font-semibold">
                        R$ {outfit.price.toFixed(2)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-4xl border border-white/10 bg-white px-6 py-6 shadow-[0_30px_90px_-70px_rgba(20,20,20,0.35)] dark:bg-white/[0.06]">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                Pagamento simulado
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Clique no botao abaixo para concluir o prototipo e visualizar o ticket de retirada.
              </p>
              <button
                type="button"
                onClick={() => setIsConfirmed(true)}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-rose-500 dark:hover:bg-rose-400"
              >
                Confirmar pagamento
              </button>
            </div>
          </div>

          <aside className="flex h-fit flex-col gap-4 rounded-3xl border border-rose-200 bg-rose-50 px-6 py-8 text-sm text-rose-700 shadow-lg dark:border-rose-500/40 dark:bg-rose-500/10 dark:text-rose-50">
            <h3 className="text-lg font-semibold">Resumo do pedido</h3>
            <p className="text-xs uppercase tracking-[0.3em] text-rose-500 dark:text-rose-200">
              Codigo referencia
            </p>
            <p className="text-base font-semibold">
              LOOK-{selections.map((item) => item.id.slice(0, 3)).join("").toUpperCase()}
            </p>
            <div className="rounded-2xl border border-white/40 bg-white/70 px-4 py-3 text-sm text-rose-600 dark:border-white/10 dark:bg-white/10 dark:text-rose-100">
              Total: <strong className="text-lg">R$ {total.toFixed(2)}</strong>
            </div>
            <p className="text-xs text-rose-500 dark:text-rose-200/80">
              Prove em ate 7 dias uteis e, se precisar de ajuste, nossa equipe de costura esta
              disponivel.
            </p>
          </aside>
        </section>

        {isConfirmed && (
          <section className="mt-12 rounded-4xl border border-emerald-200 bg-emerald-50 px-6 py-8 text-emerald-700 shadow-[0_30px_90px_-70px_rgba(16,185,129,0.35)] dark:border-emerald-400/30 dark:bg-emerald-500/15 dark:text-emerald-50">
            <h2 className="text-2xl font-semibold">Pagamento confirmado!</h2>
            <p className="mt-2 text-sm">
              Seu ticket de retirada foi enviado por e-mail e WhatsApp. Apresente no balcao CCosta
              Boutique no dia escolhido.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/40 bg-white/80 px-5 py-4 text-sm text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-emerald-50">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
                  Local de retirada
                </p>
                <p>Espaco Fashion CCosta - Rua Harmonia, 125</p>
                <p>Horarios: seg a sab, 10h as 19h</p>
              </div>
              <div className="rounded-3xl border border-white/40 bg-white/80 px-5 py-4 text-sm text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-emerald-50">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
                  Contato
                </p>
                <p>WhatsApp: {siteData.contact.phone}</p>
                <p>E-mail: concierge@ccostabeauty.com</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/agradecimento"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-rose-500 dark:hover:bg-rose-400"
              >
                Ir para pagina final
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-white/20 dark:text-emerald-50"
              >
                Voltar ao inicio
              </Link>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

function EmptyState({ title, subtitle, actionHref, actionLabel }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-rose-50 to-white text-zinc-900 dark:from-zinc-950 dark:via-zinc-950 dark:to-black">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-6 px-6 text-center md:px-10">
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-white">{title}</h1>
        <p className="max-w-xl text-sm text-zinc-600 dark:text-zinc-300">{subtitle}</p>
        <Link
          href={actionHref}
          className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-rose-500 dark:hover:bg-rose-400"
        >
          {actionLabel}
        </Link>
      </div>
    </div>
  );
}

