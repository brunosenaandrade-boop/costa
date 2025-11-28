import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/content/site-data";

const hero = siteData.hero;
const moodboard = siteData.moodboard;

export function HeroSection() {
  return (
    <section className="noise-overlay relative isolate overflow-hidden rounded-4xl border border-white/20 bg-gradient-to-br from-rose-100 via-white to-purple-100 px-6 py-24 shadow-[0_40px_120px_-60px_rgba(240,90,171,0.6)] dark:border-white/10 dark:from-zinc-900 dark:via-zinc-950 dark:to-slate-900 sm:py-32 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-16">
      {/* Animated gradient orbs */}
      <div className="animate-pulse-glow absolute -left-32 top-20 h-72 w-72 rounded-full bg-gradient-to-br from-rose-300/50 to-pink-400/30 blur-3xl dark:from-rose-500/20 dark:to-pink-500/10" />
      <div
        className="animate-pulse-glow absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-gradient-to-br from-purple-300/50 to-violet-400/30 blur-3xl dark:from-purple-500/20 dark:to-violet-500/10"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 flex flex-col gap-8">
        <span className="shimmer-border inline-flex max-w-fit items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-black/70 backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-white/80">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500"></span>
          </span>
          {hero.eyebrow}
        </span>
        <h1 className="animate-fade-in-up text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-white">
          <span className="gradient-text">
            {hero.title.split(" ").slice(0, 2).join(" ")}
          </span>{" "}
          {hero.title.split(" ").slice(2).join(" ")}
        </h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          {hero.subtitle}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={hero.ctaPrimary.href}
            className="animate-gradient group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_20px_60px_-20px_rgba(236,72,153,0.7)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-20px_rgba(236,72,153,0.8)]"
          >
            <span className="relative z-10">{hero.ctaPrimary.label}</span>
            <span className="absolute inset-0 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
          <Link
            href={hero.ctaSecondary.href}
            className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-zinc-900/20 bg-white/70 px-8 py-3 text-sm font-semibold text-zinc-900 backdrop-blur transition-all duration-300 hover:border-rose-500/50 hover:bg-white hover:shadow-[0_20px_40px_-20px_rgba(236,72,153,0.3)] dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:border-rose-400/50"
          >
            {hero.ctaSecondary.label}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
        <dl className="flex flex-wrap gap-4 pt-4 text-sm text-zinc-700 dark:text-zinc-200">
          {hero.stats.map((stat, index) => (
            <div
              key={stat.label}
              className="hover-lift flex flex-col rounded-2xl bg-white/50 px-4 py-3 backdrop-blur dark:bg-white/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <dt className="text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                {stat.label}
              </dt>
              <dd className="gradient-text text-2xl font-bold">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="relative mt-16 flex justify-center lg:mt-0">
        <div className="grid max-w-md grid-cols-2 gap-4">
          {moodboard.map((item, index) => (
            <div
              key={item.src}
              className={`group relative overflow-hidden rounded-3xl border border-white/60 bg-white/40 shadow-[0_30px_80px_-40px_rgba(240,90,171,0.4)] backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_100px_-40px_rgba(240,90,171,0.6)] dark:border-white/10 dark:bg-white/10 ${index % 2 === 0 ? "animate-float" : "animate-float-delayed"}`}
              style={{ transform: `translateY(${index % 2 === 0 ? "0" : "40px"})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <Image
                src={item.src}
                alt={item.alt}
                width={320}
                height={400}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
        {/* Enhanced glow orbs */}
        <div className="animate-float absolute -right-16 -top-10 h-56 w-56 rounded-full bg-gradient-to-br from-rose-300/70 to-pink-200/50 blur-3xl dark:from-rose-500/30 dark:to-pink-500/20" />
        <div className="animate-float-delayed absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-gradient-to-br from-purple-300/70 to-violet-200/50 blur-3xl dark:from-purple-500/30 dark:to-violet-500/20" />
        {/* Sparkle decorations */}
        <div className="absolute right-10 top-10 h-3 w-3 animate-pulse rounded-full bg-rose-400/80 shadow-[0_0_20px_rgba(244,114,182,0.8)]" />
        <div
          className="absolute bottom-20 left-5 h-2 w-2 animate-pulse rounded-full bg-purple-400/80 shadow-[0_0_15px_rgba(168,85,247,0.8)]"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 right-20 h-2 w-2 animate-pulse rounded-full bg-pink-400/80 shadow-[0_0_15px_rgba(236,72,153,0.8)]"
          style={{ animationDelay: "0.5s" }}
        />
      </div>
    </section>
  );
}
