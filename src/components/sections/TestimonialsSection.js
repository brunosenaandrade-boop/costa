import { siteData } from "@/content/site-data";

export function TestimonialsSection() {
  return (
    <section className="space-y-8 rounded-4xl border border-white/10 bg-white/80 p-8 shadow-[0_50px_120px_-70px_rgba(15,15,15,0.5)] backdrop-blur md:p-12 dark:bg-zinc-900/70">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-rose-500">
          Depoimentos
        </p>
        <h2 className="text-3xl font-semibold text-zinc-900 md:text-4xl dark:text-white">
          Historias reais de clientes apaixonadas.
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {siteData.testimonials.map((testimonial) => (
          <figure
            key={testimonial.author}
            className="relative flex h-full flex-col gap-6 rounded-3xl border border-black/5 bg-white/90 p-6 text-left shadow-[0_30px_60px_-50px_rgba(40,40,40,0.6)] transition hover:-translate-y-1 hover:border-rose-500/30 dark:border-white/5 dark:bg-white/[0.03]"
          >
            <svg
              aria-hidden
              width="48"
              height="48"
              viewBox="0 0 48 48"
              className="text-rose-500/60"
            >
              <path
                fill="currentColor"
                d="M20 18v20H4V28c0-2.2.387-4.163 1.16-5.88C5.933 20.4 6.947 19.033 8.2 17.8 9.453 16.567 10.86 15.6 12.42 14.9 13.98 14.2 15.66 13.8 17.46 13.7l.94 4.3c-1.12.08-2.213.433-3.28 1.06-1.067.627-1.973 1.44-2.72 2.44-.747 1-.953 2.12-.62 3.36H20Zm24 0v20H28V28c0-2.2.387-4.163 1.16-5.88C29.933 20.4 30.947 19.033 32.2 17.8 33.453 16.567 34.86 15.6 36.42 14.9c1.56-.7 3.24-1.1 5.04-1.2l.94 4.3c-1.12.08-2.213.433-3.28 1.06-1.067.627-1.973 1.44-2.72 2.44-.747 1-.953 2.12-.62 3.36H44Z"
              />
            </svg>
            <blockquote className="text-base leading-7 text-zinc-700 dark:text-zinc-200">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-auto">
              <p className="font-semibold text-zinc-900 dark:text-white">
                {testimonial.author}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {testimonial.role}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
