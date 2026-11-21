import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { BBM_CONTACT, SUBSCRIPTION_PLATFORMS } from "@/data/bbm-content";
import { ProposalsDirectory } from "@/components/proposals-interactive";
import { ContactCta } from "@/components/contact-cta";
import { Reveal } from "@/components/motion-primitives";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Propuestas y Soluciones a la Medida",
  description:
    "Conoce en qué nos especializamos en BBM: procesos burocráticos y administrativos, procesos industriales, procesos académicos y herramientas digitales de servicios.",
};

export default function PropuestasPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="depth-canvas-light relative overflow-hidden border-b border-slate-200">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.07]"
          style={{ backgroundImage: "url('/images/visual-industrial-precision.jpg')" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#eef2f7] to-transparent"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-xs font-medium tracking-widest text-[#15428b] uppercase">
              Propuestas · Soluciones a la medida
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#0b1220] sm:text-4xl lg:text-5xl">
              En qué nos especializamos y qué significa diseñar herramientas a
              tu medida
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Diseñar herramientas a la medida significa crear una plataforma
              exacta para la realidad de tu negocio: sin funciones confusas, sin
              papeleo innecesario y con el control que necesitas para ahorrar
              tiempo, proteger tu dinero y tomar mejores decisiones.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Interactive 4-category deep-dive + FAQs */}
      <ProposalsDirectory />

      {/* Subscription Platforms Compact Reference */}
      <section className="depth-canvas-slate border-t border-slate-200 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium tracking-widest text-[#15428b] uppercase">
              Soluciones listas para implementar
            </p>
            <h2 className="mt-2.5 text-2xl font-semibold tracking-tight text-[#0b1220] sm:text-3xl">
              También contamos con plataformas por suscripción
            </h2>
            <p className="mt-2.5 text-sm text-slate-600 sm:text-base">
              Si administras un taller mecánico automotriz o un consultorio de
              salud, puedes iniciar de inmediato con nuestras herramientas ya
              probadas en operación.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {SUBSCRIPTION_PLATFORMS.map((platform) => (
              <div
                key={platform.id}
                className="flex flex-col justify-between rounded-sm border border-slate-200 bg-white p-6"
              >
                <div>
                  <span className="rounded-sm bg-[#0b1220] px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wider text-white">
                    {platform.name}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-[#0b1220]">
                    {platform.tagline}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {platform.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#15428b]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <a
                    href={BBM_CONTACT.whatsappUrl(
                      `Hola equipo BBM, quisiera información sobre la suscripción de ${platform.name}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "h-10 w-full rounded-sm border-slate-300 text-sm font-medium text-[#0b1220]"
                    )}
                  >
                    <span>Consultar {platform.name}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        eyebrow="Diagnóstico sin compromiso"
        heading="¿Cuál de estos procesos necesitas ordenar primero?"
        description="Platícanos cómo funciona hoy tu operación. Evaluamos tu caso y te presentamos una propuesta clara, realista y enfocada en resultados."
      />
    </div>
  );
}
