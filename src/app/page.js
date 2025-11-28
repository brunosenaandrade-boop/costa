import Link from "next/link";
import {
  HeroSection,
  JourneySection,
  AboutSection,
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
      {/* Enhanced background effects */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(244,114,182,0.2),_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(244,114,182,0.1),_transparent_50%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-1/3 h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.1),_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.05),_transparent_60%)]" />

      {/* Floating decorative orbs */}
      <div className="animate-float pointer-events-none absolute left-10 top-40 h-32 w-32 rounded-full bg-rose-200/30 blur-3xl dark:bg-rose-500/10" />
      <div
        className="animate-float-delayed pointer-events-none absolute right-20 top-60 h-40 w-40 rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-500/10"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="animate-float pointer-events-none absolute bottom-1/3 left-1/4 h-48 w-48 rounded-full bg-pink-200/20 blur-3xl dark:bg-pink-500/10"
        style={{ animationDelay: "4s" }}
      />

      {/* Header with glassmorphism */}
      <header className="glass sticky top-0 z-50 mx-auto border-b border-white/20 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <Link href="/" className="group flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.4em] text-rose-500 transition-colors group-hover:text-rose-600">
              {siteData.brand.tagline}
            </span>
            <span className="text-xl font-semibold tracking-tight text-zinc-900 transition-colors group-hover:text-rose-600 dark:text-white md:text-2xl">
              {siteData.brand.name}
            </span>
          </Link>
          <nav className="hidden items-center gap-1 text-sm font-medium text-zinc-700 md:flex dark:text-zinc-200">
            <Link
              href="/agendar"
              className="rounded-full px-4 py-2 transition-all hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-500/10"
            >
              Agenda
            </Link>
            <Link
              href="/produtos"
              className="rounded-full px-4 py-2 transition-all hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-500/10"
            >
              Produtos
            </Link>
            <Link
              href="/looks"
              className="rounded-full px-4 py-2 transition-all hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-500/10"
            >
              Looks
            </Link>
            <Link
              href="#sobre"
              className="rounded-full px-4 py-2 transition-all hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-500/10"
            >
              Sobre
            </Link>
            <Link
              href="#servicos"
              className="rounded-full px-4 py-2 transition-all hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-500/10"
            >
              Servicos
            </Link>
            <Link
              href="#contato"
              className="rounded-full px-4 py-2 transition-all hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-500/10"
            >
              Contato
            </Link>
            <Link
              href="/agendar"
              className="animate-gradient ml-2 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 px-5 py-2.5 text-white shadow-lg shadow-rose-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-rose-500/30"
            >
              Comecar
            </Link>
          </nav>

          {/* Mobile menu button */}
          <Link
            href="/agendar"
            className="rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-rose-500/25 md:hidden"
          >
            Agendar
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-10 md:px-10">
        <HeroSection />
        <JourneySection />
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
        <div id="depoimentos" className="space-y-20">
          <TestimonialsSection />
          <GallerySection />
        </div>
        <FaqSection />
        <div id="contato">
          <ContactSection />
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="relative z-10 overflow-hidden border-t border-white/30 bg-white/80 text-sm text-zinc-600 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/80 dark:text-zinc-400">
        {/* Footer gradient decoration */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent" />

        <div className="mx-auto max-w-6xl px-6 py-12 md:px-10">
          <div className="grid gap-10 md:grid-cols-4">
            {/* Brand column */}
            <div className="flex flex-col gap-4 md:col-span-1">
              <div>
                <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                  {siteData.business.nomeFantasia}
                </span>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  {siteData.brand.tagline}
                </p>
              </div>
              <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                Transformando olhares com tecnicas exclusivas e atendimento
                personalizado em Capivari de Baixo.
              </p>
            </div>

            {/* Business Info - Important for Facebook */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                Empresa
              </span>
              <div className="space-y-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                <p>{siteData.business.razaoSocial}</p>
                <p>CNPJ: {siteData.business.cnpj}</p>
                <p>
                  {siteData.business.endereco.logradouro},{" "}
                  {siteData.business.endereco.numero}
                </p>
                {siteData.business.endereco.complemento && (
                  <p>{siteData.business.endereco.complemento}</p>
                )}
                <p>
                  {siteData.business.endereco.bairro},{" "}
                  {siteData.business.endereco.cidade} -{" "}
                  {siteData.business.endereco.uf}
                </p>
                <p>CEP {siteData.business.endereco.cep}</p>
              </div>
            </div>

            {/* Contact column */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                Contato
              </span>
              <div className="space-y-2 text-xs">
                <p className="text-zinc-500 dark:text-zinc-400">
                  {siteData.contact.phone}
                </p>
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="block text-zinc-500 transition hover:text-rose-500 dark:text-zinc-400"
                >
                  {siteData.contact.email}
                </a>
                <p className="text-zinc-500 dark:text-zinc-400">
                  {siteData.contact.hours}
                </p>
                <div className="flex gap-3 pt-2">
                  <Link
                    href={siteData.contact.instagram}
                    className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 px-3 py-1.5 text-xs font-medium text-pink-600 transition hover:from-pink-500/20 hover:to-purple-500/20 dark:text-pink-400"
                  >
                    Instagram
                  </Link>
                  <Link
                    href={siteData.contact.whatsapp}
                    className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-3 py-1.5 text-xs font-medium text-green-600 transition hover:bg-green-500/20 dark:text-green-400"
                  >
                    WhatsApp
                  </Link>
                </div>
              </div>
            </div>

            {/* Legal column */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                Legal
              </span>
              <div className="flex flex-col gap-2 text-xs">
                <Link
                  href="/privacidade"
                  className="text-zinc-500 transition hover:text-rose-500 dark:text-zinc-400"
                >
                  Politica de Privacidade
                </Link>
                <Link
                  href="/termos"
                  className="text-zinc-500 transition hover:text-rose-500 dark:text-zinc-400"
                >
                  Termos de Uso
                </Link>
              </div>
              <div className="mt-2 space-y-1 text-[10px] text-zinc-400 dark:text-zinc-500">
                <p>Situacao: {siteData.business.situacao}</p>
                <p>Abertura: {siteData.business.dataAbertura}</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-6 dark:border-zinc-800 md:flex-row">
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {"\u00A9"} {new Date().getFullYear()} {siteData.brand.name}. Todos
              os direitos reservados.
            </p>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]"></span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                Online agora
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
