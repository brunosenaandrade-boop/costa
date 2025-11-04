"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { bookingData } from "@/content/booking-data";
import { siteData } from "@/content/site-data";
import { cn } from "@/lib/utils";

export default function LooksPage() {
  const [sizes, setSizes] = useState({});
  const [selected, setSelected] = useState([]);
  const [feedback, setFeedback] = useState("");

  function handleSelectSize(id, size) {
    setSizes((prev) => ({ ...prev, [id]: size }));
    setFeedback("");
    setSelected((prev) =>
      prev.map((item) => (item.id === id ? { ...item, size } : item))
    );
  }

  function toggleOutfit(id) {
    const size = sizes[id];
    if (!size) {
      setFeedback("Escolha um tamanho antes de adicionar ao checkout.");
      return;
    }
    setFeedback("");
    setSelected((prev) => {
      const exists = prev.find((item) => item.id === id);
      if (exists) {
        return prev.filter((item) => item.id !== id);
      }
      return [...prev, { id, size }];
    });
  }

  const total = useMemo(() => {
    return selected.reduce((acc, item) => {
      const outfit = bookingData.outfits.find((look) => look.id === item.id);
      return outfit ? acc + outfit.price : acc;
    }, 0);
  }, [selected]);

  const checkoutHref =
    selected.length > 0
      ? `/looks/checkout?items=${encodeURIComponent(
          selected.map((item) => `${item.id}_${item.size}`).join(",")
        )}`
      : "#";

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
          <p className="text-xs uppercase tracking-[0.3em] text-rose-500">
            CCosta Fashion Drop
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Looks que combinam com o seu novo olhar.
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
            Escolha roupas exclusivas do studio para completar o visual. Monte seu pedido e finalize
            em poucos cliques.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-24 md:px-10">
        {feedback && (
          <div className="mb-6 rounded-3xl border border-amber-200 bg-amber-50 px-5 py-3 text-sm text-amber-800 shadow-sm dark:border-amber-400/20 dark:bg-amber-500/15 dark:text-amber-100">
            {feedback}
          </div>
        )}
        <section className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {bookingData.outfits.map((outfit) => {
              const isSelected = selected.some((item) => item.id === outfit.id);
              const chosenSize = sizes[outfit.id] ?? "";
              return (
                <article
                  key={outfit.id}
                  className={cn(
                    "flex h-full flex-col gap-4 rounded-3xl border px-6 py-6 transition",
                    isSelected
                      ? "border-rose-400 bg-rose-50 shadow-lg dark:border-rose-400/60 dark:bg-rose-500/20"
                      : "border-zinc-200 bg-white hover:border-rose-200 dark:border-white/10 dark:bg-white/[0.05]"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
                      {outfit.name}
                    </h2>
                    <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-600 dark:bg-rose-500/20 dark:text-rose-200">
                      R$ {outfit.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">{outfit.description}</p>
                  <div className="space-y-2 text-xs text-zinc-500 dark:text-zinc-300">
                    <p className="font-semibold uppercase tracking-[0.3em] text-rose-500">
                      Tamanhos
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {outfit.sizes.map((size) => {
                        const active = chosenSize === size;
                        return (
                          <button
                            key={size}
                            type="button"
                            onClick={() => handleSelectSize(outfit.id, size)}
                            className={cn(
                              "rounded-full border px-4 py-2 text-xs font-semibold transition",
                              active
                                ? "border-zinc-900 bg-zinc-900 text-white dark:border-rose-500 dark:bg-rose-500"
                                : "border-zinc-200 hover:border-rose-200 hover:text-rose-600 dark:border-white/10 dark:text-white"
                            )}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleOutfit(outfit.id)}
                    className={cn(
                      "mt-auto inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition",
                      isSelected
                        ? "border-zinc-900 bg-zinc-900 text-white hover:bg-zinc-800 dark:border-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400"
                        : "border-zinc-200 text-zinc-700 hover:border-rose-200 hover:text-rose-600 dark:border-white/10 dark:text-white"
                    )}
                  >
                    {isSelected ? "Remover do checkout" : "Adicionar ao checkout"}
                  </button>
                </article>
              );
            })}
          </div>

          <aside className="flex h-fit flex-col gap-5 rounded-3xl border border-white/10 bg-white px-6 py-8 shadow-[0_30px_90px_-70px_rgba(20,20,20,0.35)] dark:bg-white/[0.06]">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Pedido de looks
            </h3>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
              {selected.length > 0 ? (
                selected.map((item) => {
                  const outfit = bookingData.outfits.find((look) => look.id === item.id);
                  if (!outfit) return null;
                  return (
                    <li key={item.id} className="flex items-center justify-between">
                      <span>
                        {outfit.name} • {item.size}
                      </span>
                      <span>R$ {outfit.price.toFixed(2)}</span>
                    </li>
                  );
                })
              ) : (
                <li>Escolha um look para iniciar o checkout.</li>
              )}
            </ul>
            <div className="rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm text-rose-600 dark:border-rose-400/40 dark:bg-rose-500/15 dark:text-rose-100">
              Total: <strong className="text-lg">R$ {total.toFixed(2)}</strong>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-300">
              Pagamento exclusivo para retirada na loja. Caso queira envio, alinhamos pelo WhatsApp.
            </p>
            <Link
              href={checkoutHref}
              aria-disabled={selected.length === 0}
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-rose-500 dark:hover:bg-rose-400",
                selected.length === 0 && "pointer-events-none opacity-40"
              )}
            >
              Ir para checkout
            </Link>
            <Link
              href="/agradecimento"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-rose-200 hover:text-rose-600 dark:border-white/10 dark:text-white"
            >
              Encerrar sem comprar
            </Link>
          </aside>
        </section>
      </main>
    </div>
  );
}
