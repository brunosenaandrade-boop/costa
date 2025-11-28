import { siteData } from "@/content/site-data";

export function TestimonialsSection() {
  return (
    <section className="noise-overlay relative space-y-8 overflow-hidden rounded-4xl border border-white/20 bg-white/80 p-8 shadow-[0_50px_120px_-70px_rgba(15,15,15,0.5)] backdrop-blur md:p-12 dark:border-white/10 dark:bg-zinc-900/70">
      {/* Background decorative elements */}
      <div className="animate-pulse-glow absolute -left-20 top-10 h-60 w-60 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-500/10" />
      <div
        className="animate-pulse-glow absolute -right-20 bottom-10 h-60 w-60 rounded-full bg-purple-200/40 blur-3xl dark:bg-purple-500/10"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 flex flex-col gap-4">
        <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-rose-500">
          <span className="h-px w-8 bg-gradient-to-r from-rose-500 to-transparent" />
          Depoimentos
        </p>
        <h2 className="text-3xl font-semibold text-zinc-900 md:text-4xl dark:text-white">
          Historias reais de clientes{" "}
          <span className="gradient-text">apaixonadas.</span>
        </h2>
      </div>
      <div className="relative z-10 grid gap-6 md:grid-cols-3">
        {siteData.testimonials.map((testimonial, index) => (
          <figure
            key={testimonial.author}
            className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-black/5 bg-white/90 p-6 text-left shadow-[0_30px_60px_-50px_rgba(40,40,40,0.6)] transition-all duration-500 hover:-translate-y-2 hover:border-rose-500/40 hover:shadow-[0_40px_80px_-40px_rgba(236,72,153,0.3)] dark:border-white/5 dark:bg-white/[0.03] dark:hover:border-rose-400/30"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

            {/* Quote icon with glow */}
            <div className="relative">
              <div className="absolute -left-2 -top-2 h-16 w-16 rounded-full bg-rose-500/10 blur-xl transition-all duration-500 group-hover:bg-rose-500/20 group-hover:blur-2xl" />
              <svg
                aria-hidden
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className="relative z-10 text-rose-500/60 transition-all duration-500 group-hover:scale-110 group-hover:text-rose-500"
              >
                <path
                  fill="currentColor"
                  d="M20 18v20H4V28c0-2.2.387-4.163 1.16-5.88C5.933 20.4 6.947 19.033 8.2 17.8 9.453 16.567 10.86 15.6 12.42 14.9 13.98 14.2 15.66 13.8 17.46 13.7l.94 4.3c-1.12.08-2.213.433-3.28 1.06-1.067.627-1.973 1.44-2.72 2.44-.747 1-.953 2.12-.62 3.36H20Zm24 0v20H28V28c0-2.2.387-4.163 1.16-5.88C29.933 20.4 30.947 19.033 32.2 17.8 33.453 16.567 34.86 15.6 36.42 14.9c1.56-.7 3.24-1.1 5.04-1.2l.94 4.3c-1.12.08-2.213.433-3.28 1.06-1.067.627-1.973 1.44-2.72 2.44-.747 1-.953 2.12-.62 3.36H44Z"
                />
              </svg>
            </div>

            <blockquote className="relative z-10 text-base leading-7 text-zinc-700 dark:text-zinc-200">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            <figcaption className="relative z-10 mt-auto flex items-center gap-3">
              {/* Avatar placeholder with gradient */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-purple-500 text-sm font-bold text-white shadow-lg">
                {testimonial.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-semibold text-zinc-900 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {testimonial.role}
                </p>
              </div>
            </figcaption>

            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 transition-all duration-500 group-hover:w-full" />
          </figure>
        ))}
      </div>
    </section>
  );
}
