import Link from "next/link";
import {
  HeroSection,
  JourneySection,
  ServicesSection,
  ExperienceSection,
  TestimonialsSection,
  GallerySection,
  FaqSection,
  ContactSection,
} from "@/components/sections";
import { siteData } from "@/content/site-data";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-white to-purple-50 text-zinc-900 antialiased dark:from-zinc-950 dark:via-zinc-950 dark:to-black">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,_rgba(244,114,182,0.18),_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(244,114,182,0.08),_transparent_60%)]" />
      <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-10 md:px-10">
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.4em] text-rose-500">
            {siteData.brand.tagline}
          </span>
          <span className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            {siteData.brand.name}
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-700 md:flex dark:text-zinc-200">
          <Link href="/agendar" className="transition hover:text-rose-500">
            Agenda
          </Link>
          <Link href="/produtos" className="transition hover:text-rose-500">
            Produtos
          </Link>
          <Link href="/looks" className="transition hover:text-rose-500">
            Looks
          </Link>
          <Link href="#servicos" className="transition hover:text-rose-500">
            Servicos
          </Link>
          <Link href="#contato" className="transition hover:text-rose-500">
            Contato
          </Link>
          <Link
            href="/agendar"
            className="rounded-full bg-zinc-900 px-4 py-2 text-white transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-rose-500 dark:hover:bg-rose-400"
          >
            Comecar
          </Link>
        </nav>
      </header>
      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 md:px-10">
        <HeroSection />
        <JourneySection />
        <ServicesSection />
        <ExperienceSection />
        <div id="depoimentos" className="space-y-16">
          <TestimonialsSection />
          <GallerySection />
        </div>
        <FaqSection />
        <div id="contato">
          <ContactSection />
        </div>
      </main>
      <footer className="relative z-10 border-t border-white/30 bg-white/60 text-sm text-zinc-600 backdrop-blur dark:border-white/10 dark:bg-black/40 dark:text-zinc-400">
        <div className="mx-auto max-w-6xl px-6 py-8 md:px-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                {siteData.business.nomeFantasia}
              </span>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {siteData.business.razaoSocial}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                CNPJ: {siteData.business.cnpj}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {siteData.business.endereco.logradouro}, {siteData.business.endereco.numero} - {siteData.business.endereco.bairro}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {siteData.business.endereco.cidade} - {siteData.business.endereco.uf}, CEP {siteData.business.endereco.cep}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">Contato</span>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {siteData.contact.phone}
              </p>
              <a href={`mailto:${siteData.contact.email}`} className="text-xs text-zinc-500 transition hover:text-rose-500 dark:text-zinc-400">
                {siteData.contact.email}
              </a>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {siteData.contact.hours}
              </p>
              <div className="flex gap-3 pt-1">
                <Link href={siteData.contact.instagram} className="text-xs transition hover:text-rose-500">
                  Instagram
                </Link>
                <Link href={siteData.contact.whatsapp} className="text-xs transition hover:text-rose-500">
                  WhatsApp
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">Legal</span>
              <Link href="/privacidade" className="text-xs text-zinc-500 transition hover:text-rose-500 dark:text-zinc-400">
                Politica de Privacidade
              </Link>
              <Link href="/termos" className="text-xs text-zinc-500 transition hover:text-rose-500 dark:text-zinc-400">
                Termos de Uso
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-200 pt-4 text-center text-xs text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
            <p>
              {"\u00A9"} {new Date().getFullYear()} {siteData.brand.name}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
