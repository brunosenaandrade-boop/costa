"use client";

import Link from "next/link";
import { BookingFlow } from "@/components/booking/BookingFlow";
import { siteData } from "@/content/site-data";

export default function AgendarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-white text-zinc-900 dark:from-zinc-950 dark:via-zinc-950 dark:to-black">
      <header className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pb-16 pt-20 text-center md:px-10">
        <nav className="flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-300">
          <Link href="/" className="font-semibold text-zinc-900 dark:text-white">
            {siteData.brand.name}
          </Link>
          <div className="flex gap-4">
            <Link href="/produtos" className="transition hover:text-rose-500">
              Produtos
            </Link>
            <Link href="/looks" className="transition hover:text-rose-500">
              Looks
            </Link>
            <Link href="/proposta" className="transition hover:text-rose-500">
              Proposta
            </Link>
          </div>
        </nav>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-rose-500">
            Agenda exclusiva
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Reserve seu ritual com a assinatura Cinthia Costa.
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
            Escolha o servico, bloqueie o melhor horario e finalize o pagamento em um unico
            fluxo. Em minutos voce recebe o ticket digital com todas as informacoes.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-24 md:px-10">
        <BookingFlow />
      </main>
    </div>
  );
}
