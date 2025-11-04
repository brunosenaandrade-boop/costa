"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { bookingData } from "@/content/booking-data";
import { siteData } from "@/content/site-data";
import { cn } from "@/lib/utils";

export default function ProdutosPage() {
  const [selected, setSelected] = useState([]);

  function toggleProduct(id) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((productId) => productId !== id) : [...prev, id]
    );
  }

  const total = useMemo(() => {
    return selected.reduce((acc, id) => {
      const product = bookingData.upsellProducts.find((item) => item.id === id);
      return product ? acc + product.price : acc;
    }, 0);
  }, [selected]);

  const checkoutHref =
    selected.length > 0
      ? `/produtos/checkout?items=${encodeURIComponent(selected.join(","))}`
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
            <Link href="/looks" className="transition hover:text-rose-500">
              Looks
            </Link>
            <Link href="/proposta" className="transition hover:text-rose-500">
              Proposta
            </Link>
          </div>
        </nav>
        <div className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-rose-500">Home care CCosta</p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Produtos que prolongam o efeito do seu ritual.
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
            Combine a experiencia no studio com cuidados premium pensados para a extensao de cilios.
            Monte seu kit e finalize junto com o agendamento.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-24 md:px-10">
        <section className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {bookingData.upsellProducts.map((product) => {
              const isSelected = selected.includes(product.id);
              return (
                <article
                  key={product.id}
                  className={cn(
                    "flex h-full flex-col gap-4 rounded-3xl border px-6 py-6 transition",
                    isSelected
                      ? "border-rose-400 bg-rose-50 shadow-lg dark:border-rose-400/60 dark:bg-rose-500/20"
                      : "border-zinc-200 bg-white hover:border-rose-200 dark:border-white/10 dark:bg-white/[0.04]"
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
                      {product.name}
                    </h2>
                    <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-600 dark:bg-rose-500/20 dark:text-rose-200">
                      R$ {product.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">{product.description}</p>
                  <ul className="space-y-2 text-xs text-zinc-500 dark:text-zinc-300">
                    {product.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-rose-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => toggleProduct(product.id)}
                    className={cn(
                      "mt-auto inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition",
                      isSelected
                        ? "border-zinc-900 bg-zinc-900 text-white hover:bg-zinc-800 dark:border-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400"
                        : "border-zinc-200 text-zinc-700 hover:border-rose-200 hover:text-rose-600 dark:border-white/10 dark:text-white"
                    )}
                  >
                    {isSelected ? "Remover do kit" : "Adicionar ao kit"}
                  </button>
                </article>
              );
            })}
          </div>

          <aside className="flex h-fit flex-col gap-5 rounded-3xl border border-white/10 bg-white px-6 py-8 shadow-[0_30px_80px_-60px_rgba(20,20,20,0.3)] dark:bg-white/[0.06]">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Seu carrinho beauty
            </h3>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
              {selected.length > 0 ? (
                selected.map((id) => {
                  const product = bookingData.upsellProducts.find((item) => item.id === id);
                  if (!product) return null;
                  return (
                    <li key={id} className="flex items-center justify-between">
                      <span>{product.name}</span>
                      <span>R$ {product.price.toFixed(2)}</span>
                    </li>
                  );
                })
              ) : (
                <li>Seu kit esta vazio. Escolha um ou mais produtos.</li>
              )}
            </ul>
            <div className="rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm text-rose-600 dark:border-rose-400/40 dark:bg-rose-500/15 dark:text-rose-100">
              Total: <strong className="text-lg">R$ {total.toFixed(2)}</strong>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-300">
              Retire no dia do seu agendamento ou receba pelos Correios. Confirme a opcao no checkout.
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
              href="/looks"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-rose-200 hover:text-rose-600 dark:border-white/10 dark:text-white"
            >
              Ver looks CCosta
            </Link>
          </aside>
        </section>
      </main>
    </div>
  );
}
