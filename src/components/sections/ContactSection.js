import Link from "next/link";
import { PhoneCall, Instagram, MapPin, Clock3, Sparkles } from "lucide-react";
import { siteData } from "@/content/site-data";

export function ContactSection() {
  const contact = siteData.contact;

  return (
    <section className="noise-overlay relative overflow-hidden rounded-4xl border border-white/10 bg-zinc-950 px-8 py-14 text-white shadow-[0_60px_130px_-90px_rgba(0,0,0,1)] md:px-16 md:py-20">
      {/* Animated gradient orbs */}
      <div className="animate-pulse-glow absolute -right-32 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-rose-500/50 to-pink-600/30 blur-3xl" />
      <div
        className="animate-pulse-glow absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gradient-to-br from-purple-500/40 to-violet-600/20 blur-3xl"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="animate-float absolute right-1/4 top-1/4 h-40 w-40 rounded-full bg-gradient-to-br from-pink-500/20 to-rose-500/10 blur-2xl"
        style={{ animationDelay: "1s" }}
      />

      {/* Sparkle decorations */}
      <div className="absolute left-10 top-10 h-2 w-2 animate-pulse rounded-full bg-rose-400 shadow-[0_0_15px_rgba(244,114,182,0.8)]" />
      <div
        className="absolute right-20 top-20 h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-20 right-10 h-2 w-2 animate-pulse rounded-full bg-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.8)]"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.35em] text-white/60">
            <Sparkles className="h-4 w-4 text-rose-400" />
            Concierge Cinthia Costa
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Reserve seu{" "}
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              ritual exclusivo
            </span>{" "}
            com nossa equipe.
          </h2>
          <p className="max-w-xl text-base text-white/70">
            Atendimento personalizado por WhatsApp, telefone ou Instagram.
            Escolha o canal preferido e receba sugestoes de pacotes em minutos.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>
              Resposta rapida
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span>
              Atendimento VIP
            </span>
          </div>
        </div>

        <div className="grid gap-4 text-sm">
          <Link
            href={contact.whatsapp}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-3xl bg-gradient-to-r from-green-500/20 to-green-600/10 px-6 py-4 font-medium text-white transition-all duration-300 hover:from-green-500/30 hover:to-green-600/20 hover:shadow-[0_20px_40px_-20px_rgba(34,197,94,0.4)]"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <PhoneCall className="h-5 w-5 text-green-400 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.8} />
            <span className="relative z-10">{contact.phone} - WhatsApp</span>
          </Link>

          <Link
            href={contact.instagram}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500/20 via-purple-500/15 to-orange-500/10 px-6 py-4 font-medium text-white transition-all duration-300 hover:from-pink-500/30 hover:via-purple-500/25 hover:to-orange-500/20 hover:shadow-[0_20px_40px_-20px_rgba(236,72,153,0.4)]"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <Instagram className="h-5 w-5 text-pink-400 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.8} />
            <span className="relative z-10">@cinthia_costalash</span>
          </Link>

          <div className="group inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-6 py-4 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
            <MapPin className="h-5 w-5 text-rose-400 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.8} />
            <span className="text-white/80">{contact.address}</span>
          </div>

          <div className="group inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-6 py-4 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
            <Clock3 className="h-5 w-5 text-purple-400 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.8} />
            <span className="text-white/80">{contact.hours}</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent" />
    </section>
  );
}
