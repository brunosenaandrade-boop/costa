import Link from "next/link";
import { siteData } from "@/content/site-data";

export function ExperienceSection() {
  const { experience, contact } = siteData;

  return (
    <section className="relative overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-rose-600 via-fuchsia-600 to-purple-600 px-8 py-16 text-white shadow-[0_40px_120px_-70px_rgba(190,24,93,0.9)] md:px-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.28),_transparent_60%)]" />
      <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-white/70">
            {experience.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            {experience.title}
          </h2>
          <p className="text-lg text-white/85">{experience.description}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={contact.whatsapp}
              className="inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-rose-600 transition hover:bg-white"
            >
              Falar no WhatsApp
            </Link>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90">
              {contact.phone}
            </span>
          </div>
        </div>
        <ul className="grid gap-4 md:w-80">
          {experience.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 rounded-3xl bg-white/12 p-4 text-sm leading-6 text-white/90 backdrop-blur transition hover:bg-white/18"
            >
              <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/80 font-semibold text-rose-600">
                *
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
