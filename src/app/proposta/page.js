"use client";

import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/content/site-data";

const plans = [
  {
    title: "Plano 1 - IA Texto",
    subtitle: "Automacao essencial para seu atendimento.",
    priceSetup: "Setup unico: R$ 1.200,00",
    priceMonthly: "Mensalidade: R$ 150,00",
    description: "Inclui site profissional, chatbot com agendamento, confirmacao de horarios, integracao de pagamentos e painel administrativo basico.",
  },
  {
    title: "Plano 2 - IA Voz Cinthia",
    subtitle: "Recepcionista virtual com a sua voz real.",
    priceSetup: "Setup unico: R$ 2.500,00",
    priceMonthly: "Mensalidade: R$ 300,00",
    description: "Tudo do plano texto, mais clonagem de voz profissional, respostas faladas naturais, integracao completa com WhatsApp e suporte mensal ampliado.",
  },
];

const benefits = [
  "Reduz custos com atendimento humano.",
  "Nunca perde agendamentos ou follow-up.",
  "Atendimento 24 horas por dia, todos os dias.",
  "Imagem moderna e premium para o studio.",
  "Cliente sente que esta falando diretamente com voce.",
];

export default function PropostaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-white text-zinc-900 dark:from-zinc-950 dark:via-zinc-950 dark:to-black">
      <header className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:px-10">
        <nav className="flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-300">
          <Link href="/" className="font-semibold text-zinc-900 dark:text-white">
            {siteData.brand.name}
          </Link>
          <div className="hidden items-center gap-4 md:flex">
            <Link href="/agendar" className="transition hover:text-rose-500">
              Agenda
            </Link>
            <Link href="/produtos" className="transition hover:text-rose-500">
              Produtos
            </Link>
            <Link href="/looks" className="transition hover:text-rose-500">
              Looks
            </Link>
            <Link href="/proposta" className="font-semibold text-rose-500">
              Proposta
            </Link>
          </div>
        </nav>
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-rose-500">
              Proposta exclusiva
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Sistema inteligente para o Estudio Cinthia Costa.
            </h1>
            <p className="max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
              Modernize o atendimento com um site leve, IA que conversa com as clientes e
              pagamentos confirmados automaticamente pelo WhatsApp. Tudo com a sua voz e a
              identidade do studio.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/agendar"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-rose-500 dark:hover:bg-rose-400"
              >
                Ver prototipo ao vivo
              </Link>
              <Link
                href="https://wa.me/5548991921003"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-rose-200 hover:text-rose-600 dark:border-white/10 dark:text-white"
              >
                Falar com Bruno
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute -top-12 -left-10 h-72 w-72 rounded-full bg-rose-200/60 blur-3xl dark:bg-rose-500/30" />
            <div className="absolute -bottom-16 -right-8 h-60 w-60 rounded-full bg-purple-200/60 blur-3xl dark:bg-purple-500/30" />
            <div className="relative overflow-hidden rounded-4xl border border-white/40 bg-white shadow-[0_50px_140px_-80px_rgba(20,20,20,0.4)] dark:border-white/10 dark:bg-white/5">
              <Image
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1400&q=80"
                alt="Cintia Costa apresentando atendimento moderno."
                width={520}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 md:px-10">
        <section className="grid gap-10 rounded-4xl border border-white/10 bg-white px-8 py-10 shadow-[0_40px_120px_-80px_rgba(20,20,20,0.35)] md:grid-cols-[1.2fr_1fr] dark:bg-white/[0.06]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">Objetivo do projeto</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Entregar uma plataforma completa que leva o cliente do interesse ao pagamento
              em poucos cliques, mantendo a sua assinatura pessoal em cada contato.
            </p>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-rose-500" />
                Site leve, com seus servicos em destaque e direcionamento para WhatsApp.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-rose-500" />
                IA que conversa, agenda, confirma e cobra automaticamente 24 horas por dia.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-rose-500" />
                Versao premium com sua voz real, garantindo proximidade total com as clientes.
              </li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-4xl border border-white/40 bg-white shadow-lg dark:border-white/10 dark:bg-white/10">
            <Image
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
              alt="Profissional aplicando extensao de cilios com tecnologia."
              width={640}
              height={640}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">Planos disponiveis</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {plans.map((plan) => (
              <article
                key={plan.title}
                className="flex h-full flex-col gap-5 rounded-4xl border border-zinc-200 bg-white px-6 py-8 text-sm text-zinc-600 shadow-[0_30px_80px_-60px_rgba(20,20,20,0.25)] transition hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.06] dark:text-zinc-300"
              >
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{plan.title}</h3>
                  <p className="text-sm text-rose-500">{plan.subtitle}</p>
                </div>
                <p>{plan.description}</p>
                <div className="rounded-3xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600 dark:border-rose-500/40 dark:bg-rose-500/20 dark:text-rose-100">
                  <p>{plan.priceSetup}</p>
                  <p>{plan.priceMonthly}</p>
                  <p className="text-xs opacity-80">Cobre configuracao, IA e suporte tecnico.</p>
                </div>
                <Link
                  href="https://wa.me/5548991921003"
                  className="mt-auto inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-rose-500 dark:hover:bg-rose-400"
                >
                  Quero este plano
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6 rounded-4xl border border-white/10 bg-white px-8 py-10 text-sm text-zinc-600 shadow-[0_30px_90px_-70px_rgba(20,20,20,0.3)] dark:bg-white/[0.06] dark:text-zinc-300">
          <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">
            Beneficios imediatos
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-3xl border border-zinc-100 bg-white px-4 py-4 text-sm shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
              >
                {benefit}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-4xl border border-amber-200 bg-amber-50 px-8 py-10 text-amber-800 shadow-[0_30px_90px_-70px_rgba(234,179,8,0.35)] dark:border-amber-400/30 dark:bg-amber-500/20 dark:text-amber-50">
          <h2 className="text-3xl font-semibold">Bonus especial para fechamento neste mes</h2>
          <p className="mt-4 text-sm">
            Desconto exclusivo no plano premium: setup por R$ 2.200,00 a vista. Condicao valida
            somente para contratos assinados ate o ultimo dia do mes corrente.
          </p>
        </section>

        <section className="rounded-4xl border border-white/10 bg-white px-8 py-10 shadow-[0_30px_90px_-70px_rgba(20,20,20,0.3)] dark:bg-white/[0.06]">
          <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
              <p className="text-xs uppercase tracking-[0.3em] text-rose-500">
                Consultoria dedicada
              </p>
              <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">
                Fale direto com Bruno Sena
              </h2>
              <p>
                Especialista em IA aplicada a negocios, automacao de atendimento e criacao de
                experiencias digitais para studios de beleza. Atendimento presencial ou remoto
                conforme sua necessidade.
              </p>
              <ul className="space-y-2">
                <li>Whatsapp: (48) 99864-9898</li>
                <li>Email: concierge@ccostabeauty.com</li>
                <li>Local: Capivari de Baixo - SC</li>
              </ul>
              <div className="flex gap-3">
                <Link
                  href="https://wa.me/5548991921003"
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-rose-500 dark:hover:bg-rose-400"
                >
                  Marcar reuniao
                </Link>
                <Link
                  href="/agradecimento"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:border-rose-200 hover:text-rose-600 dark:border-white/10 dark:text-white"
                >
                  Ver fluxo completo
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-4xl border border-white/40 bg-white shadow-lg dark:border-white/10 dark:bg-white/10">
              <Image
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80"
                alt="Equipe trabalhando com tecnologia e atendimento humanizado."
                width={760}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
