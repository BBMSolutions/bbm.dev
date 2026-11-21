"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, MinusCircle } from "lucide-react";
import {
  BBM_CONTACT,
  PROPOSAL_CATEGORIES,
  type ProposalCategory,
} from "@/data/bbm-content";
import { ProposalLiveSimulator } from "@/components/section-live-animations";
import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "¿Qué significa realmente tener una herramienta digital a la medida?",
    a: "Significa que el sistema se adapta a la forma en que trabaja tu empresa y no al revés. En lugar de pagar por programas genéricos llenos de opciones que nadie usa, construimos exactamente lo que necesitas para controlar tu operación de forma clara y sencilla.",
  },
  {
    q: "¿Mi personal necesita saber de tecnología avanzada para usar las plataformas?",
    a: "No. Diseñamos pantallas limpias y fáciles de entender para cualquier persona. Además, nuestra coordinadora de capacitación acompaña a tu equipo paso a paso para asegurar que todos se sientan cómodos usándola.",
  },
  {
    q: "¿Puedo revisar cómo va mi empresa desde mi teléfono o fuera de la oficina?",
    a: "Sí. Nuestras herramientas funcionan en computadora, tableta y celular, permitiéndote supervisar avances, autorizaciones, reportes y flujo de dinero desde donde te encuentres.",
  },
  {
    q: "¿Cuánto tiempo toma ver orden y resultados en los procesos?",
    a: "Desde el diagnóstico inicial se identifican los puntos donde se pierde tiempo o dinero. Una vez puesta en marcha la herramienta, el orden en registros, tiempos de respuesta y visibilidad para dirección se percibe desde las primeras semanas.",
  },
] as const;

export function ProposalsDirectory() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const visibleCategories: ProposalCategory[] =
    activeFilter === "all"
      ? PROPOSAL_CATEGORIES
      : PROPOSAL_CATEGORIES.filter((c) => c.id === activeFilter);

  return (
    <div>
      {/* Sticky sub-navigation filter bar */}
      <div className="sticky top-16 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={cn(
              "shrink-0 rounded-sm border px-3.5 py-1.5 text-xs font-medium transition-colors sm:text-sm",
              activeFilter === "all"
                ? "border-[#0b1220] bg-[#0b1220] text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-[#0b1220]"
            )}
          >
            Todas las especialidades (4)
          </button>
          {PROPOSAL_CATEGORIES.map((cat) => {
            const active = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={cn(
                  "shrink-0 rounded-sm border px-3.5 py-1.5 text-xs font-medium transition-colors sm:text-sm",
                  active
                    ? "border-[#15428b] bg-[#15428b] text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-[#0b1220]"
                )}
              >
                <span className="mr-1.5 font-mono text-[11px] opacity-75">
                  {cat.index}
                </span>
                {cat.shortTitle}
              </button>
            );
          })}
        </div>
      </div>

      {/* Category sections */}
      <div className="divide-y divide-slate-200">
        {visibleCategories.map((cat, idx) => (
          <section
            key={cat.id}
            id={cat.id}
            className={cn(
              "scroll-mt-32 py-16 sm:py-24",
              idx % 2 === 0 ? "bg-white" : "depth-canvas-slate"
            )}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Top header & narrative */}
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-6">
                  <p className="font-mono text-xs font-semibold tracking-widest text-[#15428b] uppercase">
                    Especialidad {cat.index}
                  </p>
                  <h2 className="mt-2.5 text-2xl font-semibold tracking-tight text-[#0b1220] sm:text-3xl">
                    {cat.title}
                  </h2>
                  <p className="mt-3 text-base font-medium text-slate-800">
                    {cat.lead}
                  </p>

                  <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {cat.description.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Practical capabilities list */}
                  <div className="mt-6 rounded-sm border border-slate-200 bg-[#f8f9fb] p-5">
                    <p className="font-mono text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                      Qué resolvemos en esta área
                    </p>
                    <ul className="mt-3 space-y-2.5 text-sm text-slate-700">
                      {cat.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#15428b]" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <a
                      href={BBM_CONTACT.whatsappUrl(
                        `Hola equipo BBM, me gustaría cotizar o conocer una propuesta para: ${cat.title}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "h-11 rounded-sm bg-[#0b1220] px-5 text-sm font-medium text-white hover:bg-[#15428b]"
                      )}
                    >
                      <span>Solicitar propuesta para {cat.shortTitle}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Right side: Live Animation + Real Optimized Photo + Key Metrics */}
                <div className="flex flex-col gap-6 lg:col-span-6">
                  <ProposalLiveSimulator categoryId={cat.id} />

                  <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-200/90 bg-slate-100 shadow-sm">
                    <Image
                      src={cat.imageSrc}
                      alt={cat.imageAlt}
                      fill
                      className="object-cover object-bottom"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {cat.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="depth-card rounded-md border border-slate-200/90 p-4"
                      >
                        <p className="font-mono text-xl font-semibold tracking-tight text-[#15428b] sm:text-2xl">
                          {m.value}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-[#0b1220]">
                          {m.label}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-600">
                          {m.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Before vs After operational clarity */}
              <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-sm border border-slate-200 bg-white p-6">
                  <p className="font-mono text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                    Operación tradicional sin control digital
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
                    {cat.beforeItems.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <MinusCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-sm border border-[#15428b]/25 bg-[#0b1220] p-6 text-white">
                  <p className="font-mono text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                    Con una herramienta a la medida de BBM
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm text-slate-200">
                    {cat.afterItems.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Clear Business FAQ using shadcn Accordion */}
      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs font-medium tracking-widest text-[#15428b] uppercase">
            Preguntas frecuentes
          </p>
          <h2 className="mt-2.5 text-2xl font-semibold tracking-tight text-[#0b1220] sm:text-3xl">
            Dudas comunes antes de iniciar un proyecto
          </h2>
          <p className="mt-2.5 text-sm text-slate-600">
            Explicamos nuestro trabajo en lenguaje directo, pensado para dueños
            de negocio, administradores e ingenieros.
          </p>

          <Accordion className="mt-8 divide-y divide-slate-200 rounded-sm border border-slate-200 bg-white">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${index}`}
                className="border-none px-5 py-1"
              >
                <AccordionTrigger className="py-4 text-left text-sm font-semibold text-[#0b1220] hover:no-underline sm:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-relaxed text-slate-600">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
