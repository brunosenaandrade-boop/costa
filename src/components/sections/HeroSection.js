import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/content/site-data";

const hero = siteData.hero;
const moodboard = siteData.moodboard;

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-rose-100 via-white to-purple-100 px-6 py-24 shadow-[0_40px_120px_-60px_rgba(240,90,171,0.6)] dark:from-zinc-900 dark:via-zinc-950 dark:to-slate-900 sm:py-32 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-16">
      <div className="flex flex-col gap-8">
        <span className="inline-flex max-w-fit items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-black/70 backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-white/80">
          {hero.eyebrow}
        </span>
        <h1 className="text-balance font-semibold text-4xl tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-white">
          {hero.title}
        </h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          {hero.subtitle}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={hero.ctaPrimary.href}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-black px-8 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_-30px_rgba(12,12,12,0.9)] transition hover:-translate-y-0.5 hover:bg-zinc-900 dark:bg-rose-500 dark:hover:bg-rose-400"
          >
            {hero.ctaPrimary.label}
          </Link>
          <Link
            href={hero.ctaSecondary.href}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-900/20 bg-white/70 px-8 py-3 text-sm font-semibold text-zinc-900 backdrop-blur transition hover:border-zinc-900/50 hover:bg-white dark:border-white/20 dark:bg-transparent dark:text-white"
          >
            {hero.ctaSecondary.label}
          </Link>
        </div>
        <dl className="flex flex-wrap gap-8 pt-4 text-sm text-zinc-700 dark:text-zinc-200">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <dt className="text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                {stat.label}
              </dt>
              <dd className="text-2xl font-semibold">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="relative mt-16 flex justify-center lg:mt-0">
        <div className="grid max-w-md grid-cols-2 gap-4">
          {moodboard.map((item, index) => (
            <div
              key={item.src}
              className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/40 shadow-[0_30px_80px_-40px_rgba(240,90,171,0.4)] backdrop-blur transition hover:-translate-y-2 dark:border-white/5 dark:bg-white/10"
              style={{ transform: `translateY(${index % 2 === 0 ? "0" : "40px"})` }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={320}
                height={400}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="absolute -right-16 -top-10 h-56 w-56 rounded-full bg-rose-200/70 blur-3xl dark:bg-rose-500/30" />
        <div className="absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-purple-200/70 blur-3xl dark:bg-purple-500/30" />
      </div>
    </section>
  );
}
