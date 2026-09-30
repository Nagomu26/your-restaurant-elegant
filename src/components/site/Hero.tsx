import { Phone } from "lucide-react";
import { CONFIG } from "@/lib/config";
import { Reveal } from "./Reveal";

const STATS = [
  { valor: "4.9★", etiqueta: "Valoración de clientes" },
  { valor: "1 min", etiqueta: "Para reservar una mesa" },
  { valor: "7 días", etiqueta: "De antelación máxima" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-paper">
      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full border border-accent/20" aria-hidden="true"></div>
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" aria-hidden="true"></div>
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-6 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.4em] text-accent">
                <span className="inline-block h-px w-12 bg-accent"></span>
                Restaurante básico · {CONFIG.zona}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display text-6xl font-semibold leading-[1.0] tracking-tight text-ink sm:text-7xl lg:text-8xl">
                Cocina de
                <br />
                <em className="text-accent">raíz.</em>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-stone sm:text-xl">
                Recetas clásicas, producto de temporada y mesa puesta.
                Reserva: {CONFIG.nombre}, en {CONFIG.ciudad}.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#reserva"
                  className="btn-sheen inline-flex items-center justify-center rounded-none bg-deep px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-accent"
                >
                  Reservar mesa online
                </a>
                <a
                  href={`tel:${CONFIG.telefonoEnlace}`}
                  className="inline-flex items-center justify-center rounded-none border border-ink bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition-all hover:bg-ink hover:text-paper"
                >
                  <Phone className="mr-2 h-4 w-4 text-accent" aria-hidden="true" />
                  Llamar · {CONFIG.telefono}
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8">
                {STATS.map((stat) => (
                  <div key={stat.etiqueta}>
                    <p className="font-display text-3xl font-semibold leading-none text-ink">{stat.valor}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.15em] text-stone">{stat.etiqueta}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className="lg:col-span-5">
            <div className="relative">
              <div
                className="absolute -inset-4 border border-accent/40"
                aria-hidden="true"
              ></div>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="img/haircut-close.jpg"
                  alt="Detalle de un plato"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}