"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { bookingData } from "@/content/booking-data";
import { siteData } from "@/content/site-data";

export default function ProdutosCheckoutPage() {
  return (
    <Suspense fallback={<CheckoutFallback />}>
      <ProdutosCheckoutContent />
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

function ProdutosCheckoutContent() {
  const searchParams = useSearchParams();
  const itemQuery = searchParams.get("items") ?? "";
  const itemIds = useMemo(
    () =>
      itemQuery
        .split(",")
        .map((id) => id.trim())
        .filter(Boolean),
    [itemQuery]
  );

  const selectedProducts = useMemo(
    () =>
      bookingData.upsellProducts.filter((product) => itemIds.includes(product.id)),
    [itemIds]
  );

  const total = useMemo(
    () => selectedProducts.reduce((acc, product) => acc + product.price, 0),
    [selectedProducts]
  );

  const [deliveryMode, setDeliveryMode] = useState("retirada");
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (selectedProducts.length === 0) {
    return (
      <EmptyState
        title="Seu kit ainda esta vazio"
        subtitle="Escolha os produtos ideais para manter seus cilios impecaveis."
        actionHref="/produtos"
        actionLabel="Voltar para produtos"
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
            <Link href="/looks" className="transition hover:text-rose-500">
              Looks
            </Link>
            <Link href="/proposta" className="transition hover:text-rose-500">
              Proposta
            </Link>
          </div>
        </nav>
        <div className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-rose-500">Checkout beauty</p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Confirme seu kit CCosta.
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
            Escolha como deseja receber e finalize o pagamento. Assim que confirmar, voce recebe o
            ticket digital com orientacoes de retirada.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-24 md:px-10">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <section className="space-y-6">
            <div className="rounded-4xl border border-white/10 bg-white px-6 py-6 shadow-[0_30px_90px_-70px_rgba(20,20,20,0.35)] dark:bg-white/[0.06]">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                Produtos selecionados
              </h2>
              <ul className="mt-4 space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
                {selectedProducts.map((product) => (
                  <li
                    key={product.id}
                    className="rounded-2xl border border-zinc-100 bg-white px-4 py-4 shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-base font-semibold text-zinc-900 dark:text-white">
                          {product.name}
                        </p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-300">
                          {product.description}
                        </p>
                      </div>
                      <span className="text-sm font-semibold">
                        R$ {product.price.toFixed(2)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-4xl border border-white/10 bg-white px-6 py-6 shadow-[0_30px_90px_-70px_rgba(20,20,20,0.35)] dark:bg-white/[0.06]">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                Como deseja receber?
              </h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <DeliveryButton
                  label="Retirar no studio"
                  description="Disponivel em ate 2 dias uteis apos confirmacao."
                  isActive={deliveryMode === "retirada"}
                  onClick={() => setDeliveryMode("retirada")}
                />
                <DeliveryButton
                  label="Entrega pelos Correios"
                  description="Prazo medio 5 dias uteis. Acrescimo de R$ 19,00."
                  isActive={deliveryMode === "entrega"}
                  onClick={() => setDeliveryMode("entrega")}
                />
              </div>
            </div>

            <div className="rounded-4xl border border-white/10 bg-white px-6 py-6 shadow-[0_30px_90px_-70px_rgba(20,20,20,0.35)] dark:bg-white/[0.06]">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                Pagamento simulado
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Este prototipo demonstra a experiencia. Ao clicar em confirmar, exibiremos o ticket
                final com orientacoes de retirada.
              </p>
              <button
                type="button"
                onClick={() => setIsConfirmed(true)}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-rose-500 dark:hover:bg-rose-400"
              >
                Confirmar pagamento
              </button>
            </div>
          </section>

          <aside className="flex h-fit flex-col gap-4 rounded-3xl border border-rose-200 bg-rose-50 px-6 py-8 text-sm text-rose-700 shadow-lg dark:border-rose-500/40 dark:bg-rose-500/10 dark:text-rose-50">
            <h3 className="text-lg font-semibold">Resumo do pedido</h3>
            <p className="text-xs uppercase tracking-[0.3em] text-rose-500 dark:text-rose-200">
              Numero do carrinho
            </p>
            <p className="text-base font-semibold">CC-{itemIds.join("").toUpperCase()}</p>
            <div className="rounded-2xl border border-white/40 bg-white/70 px-4 py-3 text-sm text-rose-600 dark:border-white/10 dark:bg-white/10 dark:text-rose-100">
              Total: <strong className="text-lg">R$ {total.toFixed(2)}</strong>
            </div>
            <p className="text-xs text-rose-500 dark:text-rose-200/80">
              {bookingData.storePolicies.pickup}
            </p>
            <p className="text-xs text-rose-500 dark:text-rose-200/80">
              {bookingData.storePolicies.exchange}
            </p>
          </aside>
        </div>

        {isConfirmed && (
          <section className="mt-12 rounded-4xl border border-emerald-200 bg-emerald-50 px-6 py-8 text-emerald-700 shadow-[0_30px_90px_-70px_rgba(16,185,129,0.35)] dark:border-emerald-400/30 dark:bg-emerald-500/15 dark:text-emerald-50">
            <h2 className="text-2xl font-semibold">Pagamento confirmado!</h2>
            <p className="mt-2 text-sm">
              Enviamos um ticket para o seu e-mail com QR code. Apresente na recepcao do studio para
              retirar ou acompanhe pelo link de rastreio.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/40 bg-white/80 px-5 py-4 text-sm text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-emerald-50">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
                  Retirada
                </p>
                <p>Rua Harmonia, 123 - Capivari de Baixo | Santa Catarina</p>
                <p>Disponivel a partir de 02/12 - 14h</p>
              </div>
              <div className="rounded-3xl border border-white/40 bg-white/80 px-5 py-4 text-sm text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-emerald-50">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
                  Contato rapido
                </p>
                <p>WhatsApp: {siteData.contact.phone}</p>
                <p>Instagram: @cinthia_costalash</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/looks"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-rose-500 dark:hover:bg-rose-400"
              >
                Ver roupas e looks
              </Link>
              <Link
                href="/agradecimento"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-white/20 dark:text-emerald-50"
              >
                Ir para agradecimento
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

function DeliveryButton({ label, description, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-full rounded-3xl border px-5 py-5 text-left transition",
        isActive
          ? "border-rose-400 bg-rose-50 shadow-lg dark:border-rose-400/60 dark:bg-rose-500/20"
          : "border-zinc-200 bg-white hover:border-rose-200 dark:border-white/10 dark:bg-white/[0.05]"
      )}
    >
      <p className="text-sm font-semibold text-zinc-900 dark:text-white">{label}</p>
      <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-300">{description}</p>
    </button>
  );
}

