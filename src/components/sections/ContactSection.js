import Link from "next/link";
import { PhoneCall, Instagram, MapPin, Clock3 } from "lucide-react";
import { siteData } from "@/content/site-data";

export function ContactSection() {
  const contact = siteData.contact;

  return (
    <section className="relative overflow-hidden rounded-4xl border border-white/10 bg-zinc-950 px-8 py-14 text-white shadow-[0_60px_130px_-90px_rgba(0,0,0,1)] md:px-16 md:py-20">
      <div className="absolute -right-32 top-10 h-64 w-64 rounded-full bg-rose-500/40 blur-3xl" />
      <div className="absolute -left-24 -bottom-20 h-60 w-60 rounded-full bg-purple-500/30 blur-3xl" />
      <div className="relative z-10 flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-white/60">
            Concierge Cinthia Costa
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Reserve seu ritual exclusivo com nossa equipe.
          </h2>
          <p className="max-w-xl text-base text-white/70">
            Atendimento personalizado por WhatsApp, telefone ou Instagram.
            Escolha o canal preferido e receba sugestoes de pacotes em minutos.
          </p>
        </div>
        <div className="grid gap-4 text-sm">
          <Link
            href={contact.whatsapp}
            className="inline-flex items-center gap-3 rounded-3xl bg-white/10 px-6 py-4 font-medium text-white transition hover:bg-white/20"
          >
            <PhoneCall className="h-5 w-5" strokeWidth={1.8} />
            {contact.phone} - WhatsApp
          </Link>
          <Link
            href={contact.instagram}
            className="inline-flex items-center gap-3 rounded-3xl bg-white/10 px-6 py-4 font-medium text-white transition hover:bg-white/20"
          >
            <Instagram className="h-5 w-5" strokeWidth={1.8} />
            @cinthia_costalash
          </Link>
          <p className="inline-flex items-center gap-3 rounded-3xl bg-white/5 px-6 py-4">
            <MapPin className="h-5 w-5" strokeWidth={1.8} />
            {contact.address}
          </p>
          <p className="inline-flex items-center gap-3 rounded-3xl bg-white/5 px-6 py-4">
            <Clock3 className="h-5 w-5" strokeWidth={1.8} />
            {contact.hours}
          </p>
        </div>
      </div>
    </section>
  );
}
