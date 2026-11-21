import type { Metadata } from "next";
import { ArrowUpRight, Clock, Layers, Shield } from "lucide-react";
import { BBM_CONTACT, PARTNER_PREVIEW_AREAS } from "@/data/bbm-content";
import { PartnerNetworkSimulator } from "@/components/section-live-animations";
import { OperationalCapacityOrbitalVisual } from "@/components/visual-illustrations";
import { ContactCta } from "@/components/contact-cta";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Asociados y Otros Servicios",
  description:
    "BBM forma parte de una red de empresas asociadas en construcción, grúas telescópicas, instalaciones especiales y marketing digital. Sección completa próximamente.",
};

export default function AsociadosPage() {
  return (
    <div className="flex flex-col">
      {/* Brief Introduction + Coming Soon Hero */}
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
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-sm border border-[#15428b]/25 bg-[#15428b]/5 px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wider text-[#15428b] uppercase">
                <Clock className="h-3.5 w-3.5" />
                <span>Coming Soon · Vista previa en construcción</span>
              </div>

              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[#0b1220] sm:text-4xl lg:text-5xl">
                Una red de asociados que respalda y amplía nuestra capacidad
                operativa
              </h1>

              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                BBM no opera como una empresa aislada. Pertenecemos a una
                asociación de empresas con experiencia en distintos entornos
                —desde la{" "}
                <strong className="font-semibold text-[#0b1220]">
                  construcción, grúas telescópicas e instalaciones especiales
                </strong>{" "}
                hasta el{" "}
                <strong className="font-semibold text-[#0b1220]">
                  marketing digital
                </strong>
                — lo que refuerza nuestra capacidad para atender proyectos
                integrales con mayor solidez.
              </p>

              <div className="mt-6 rounded-sm border border-slate-200 bg-[#f8f9fb] p-5">
                <p className="font-mono text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                  Estado de esta sección
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                  <strong className="font-semibold text-[#0b1220]">
                    Próximamente (Coming Soon):
                  </strong>{" "}
                  estamos integrando el directorio completo, portafolio y fichas
                  técnicas de cada empresa asociada. Mientras tanto, puedes
                  explorar esta vista previa o consultarnos directamente si tu
                  proyecto requiere alguno de estos servicios.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-5">
              <OperationalCapacityOrbitalVisual />
            </Reveal>
          </div>

          {/* Live Partner Network Animation */}
          <Reveal delay={0.12} className="mt-10">
            <PartnerNetworkSimulator />
          </Reveal>
        </div>
      </section>

      {/* Preview Cards of Partner Areas */}
      <section className="depth-canvas-slate border-b border-slate-200 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-medium tracking-widest text-[#15428b] uppercase">
                Vista previa · Otros servicios
              </p>
              <h2 className="mt-2.5 text-2xl font-semibold tracking-tight text-[#0b1220] sm:text-3xl">
                Áreas que pronto podrás consultar a detalle
              </h2>
            </div>
            <span className="inline-flex w-fit items-center gap-1.5 rounded-sm border border-slate-300 bg-white px-3 py-1 font-mono text-[11px] font-medium text-slate-600 uppercase">
              <Layers className="h-3.5 w-3.5 text-[#15428b]" />
              Directorio próximamente
            </span>
          </Reveal>

          <StaggerGroup className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {PARTNER_PREVIEW_AREAS.map((area) => (
              <StaggerItem
                key={area.title}
                className="flex flex-col justify-between rounded-sm border border-slate-200 bg-white p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-semibold text-[#15428b]">
                      {area.index} · {area.category}
                    </span>
                    <span className="rounded-sm bg-slate-100 px-2 py-0.5 font-mono text-[10px] font-medium text-slate-600 uppercase">
                      Coming Soon
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-[#0b1220]">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {area.summary}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                    <Shield className="h-3.5 w-3.5 text-[#15428b]" />
                    Disponible bajo consulta directa
                  </span>
                  <a
                    href={BBM_CONTACT.whatsappUrl(
                      `Hola equipo BBM, me gustaría consultar información sobre el área de asociados: ${area.title}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "sm" }),
                      "h-8 px-2.5 text-xs font-semibold text-[#15428b] hover:bg-slate-100"
                    )}
                  >
                    <span>Consultar</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <ContactCta
        eyebrow="Soluciones integrales"
        heading="¿Necesitas combinar tecnología con instalaciones o servicios asociados?"
        description="Aunque esta sección se encuentra en preparación, nuestra red operativa ya está activa. Escríbenos y te canalizamos con el área adecuada."
      />
    </div>
  );
}
