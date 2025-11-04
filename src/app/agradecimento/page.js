"use client";

import Link from "next/link";
import { siteData } from "@/content/site-data";

export default function AgradecimentoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-rose-50 to-white text-zinc-900 dark:from-zinc-950 dark:via-zinc-950 dark:to-black">
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center gap-12 px-6 py-20 text-center md:px-10">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-rose-500">
            Obrigado por escolher a CC
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Sua experiencia esta confirmada.
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
            Enviamos todos os tickets para o seu e-mail e WhatsApp. Nossa equipe esta disponivel
            para qualquer ajuste ou duvida ate o dia do atendimento.
          </p>
        </header>

        <section className="grid w-full gap-6 text-sm text-zinc-600 md:grid-cols-3 dark:text-zinc-300">
          <InfoCard
            title="Endereco"
            content="Rua Harmonia, 123 - Capivari de Baixo | Santa Catarina. Estacionamento conveniado ao lado."
          />
          <InfoCard
            title="Contato direto"
            content={`WhatsApp: ${siteData.contact.phone}\nInstagram: @cinthia_costalash`}
          />
          <InfoCard
            title="Cuidados pre atendimento"
            content="Chegue com cilios limpos, evite maquiagem oleosa e cafeina nas 4h anteriores ao procedimento."
          />
        </section>

        <section className="grid w-full gap-6 rounded-4xl border border-white/10 bg-white px-6 py-8 text-left shadow-[0_30px_90px_-70px_rgba(20,20,20,0.35)] md:grid-cols-2 dark:bg-white/[0.06]">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Como aproveitar ao maximo
            </h2>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
              <li>Chegue 10 minutos antes para customizarmos o mapping do seu olhar.</li>
              <li>Se comprou produtos ou looks, leve o ticket digital com QR code.</li>
              <li>
                Use a mascara Sleep Satin na primeira noite para preservar a curvatura dos cilios.
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Depois da sua visita
            </h2>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
              <li>Agende a manutencao de cilios direto pelo link enviado em ate 15 dias.</li>
              <li>
                Para ajustes de roupas, fale com nossa consultora de moda pelo WhatsApp e agende a
                prova express.
              </li>
              <li>Compartilhe seu resultado marcando @cinthia_costalash e use #olharCCosta.</li>
            </ul>
          </div>
        </section>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-rose-500 dark:hover:bg-rose-400"
          >
            Voltar ao inicio
          </Link>
          <Link
            href="/agendar"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-rose-200 hover:text-rose-600 dark:border-white/10 dark:text-white"
          >
            Agendar novo servico
          </Link>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ title, content }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white px-5 py-6 shadow-sm dark:bg-white/[0.06]">
      <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500 dark:text-rose-200">
        {title}
      </h3>
      <p className="mt-2 whitespace-pre-line text-sm text-zinc-600 dark:text-zinc-300">
        {content}
      </p>
    </div>
  );
}
