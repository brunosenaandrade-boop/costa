import Image from "next/image";
import { siteData } from "@/content/site-data";

export function GallerySection() {
  return (
    <section
      id="galeria"
      className="space-y-6 rounded-4xl border border-white/10 bg-white/80 p-8 shadow-[0_50px_120px_-80px_rgba(30,30,30,0.5)] backdrop-blur md:p-12 dark:bg-zinc-900/70"
    >
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.3em] text-rose-500">
          Galeria
        </p>
        <h2 className="text-3xl font-semibold text-zinc-900 md:text-4xl dark:text-white">
          Olhares Cinthia Costa em cada detalhe.
        </h2>
        <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
          Registros de alongamentos, bastidores do studio e cuidados especiais
          para inspirar seu proximo ritual de beleza.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {siteData.gallery.map((item, index) => (
          <div
            key={item.src + index}
            className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white/40 shadow-[0_30px_80px_-60px_rgba(70,70,70,0.5)] transition hover:-translate-y-1 dark:border-white/5 dark:bg-white/5"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={400}
              height={500}
              className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 md:h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
