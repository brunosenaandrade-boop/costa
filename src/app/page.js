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
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-10">
          <p>
            {"\u00A9"} {new Date().getFullYear()} {siteData.brand.name}. Todos os
            direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link href={siteData.contact.instagram} className="transition hover:text-rose-500">
              Instagram
            </Link>
            <Link href={siteData.hero.ctaPrimary.href} className="transition hover:text-rose-500">
              WhatsApp
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
