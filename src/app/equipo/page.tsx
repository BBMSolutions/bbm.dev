import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Briefcase, ShieldCheck, UserRound, Users } from "lucide-react";
import { BBM_CONTACT, TEAM_MEMBERS } from "@/data/bbm-content";
import { MultidisciplinaryTeamStage } from "@/components/team-stage-animation";
import { TeamValueComparison } from "@/components/team-value-comparison";
import { CompanyExperienceBadges } from "@/components/company-experience-badges";
import { ContactCta } from "@/components/contact-cta";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Equipo — Conócenos",
  description:
    "Conoce a los ingenieros y licenciados detrás de BBM: un equipo multidisciplinario listo para cubrir cada ámbito de control, procesos y tecnología en tu empresa.",
};

export default function EquipoPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="depth-canvas-light relative overflow-hidden border-b border-slate-200">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.08]"
          style={{ backgroundImage: "url('/images/visual-studio-depth.jpg')" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#eef2f7] to-transparent"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-8">
              <p className="font-mono text-xs font-medium tracking-widest text-[#15428b] uppercase">
                Equipo · Conócenos
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#0b1220] sm:text-4xl lg:text-5xl">
                Especialistas multidisciplinarios respaldando cada proyecto
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Detrás de BBM no hay improvisación ni soluciones genéricas:
                contamos con ingenieros y administradores capaces de analizar tu
                operación, construir la herramienta adecuada, instalar el
                equipamiento necesario y capacitar a tu personal.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-3 rounded-sm border border-slate-200 bg-[#f8f9fb] p-4">
                <div>
                  <p className="font-mono text-2xl font-semibold text-[#0b1220]">
                    7
                  </p>
                  <p className="mt-0.5 text-xs text-slate-600">
                    Especialistas clave en áreas complementarias
                  </p>
                </div>
                <div>
                  <p className="font-mono text-2xl font-semibold text-[#15428b]">
                    360°
                  </p>
                  <p className="mt-0.5 text-xs text-slate-600">
                    Cobertura: negocio, procesos, diseño, software y hardware
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Unique Multidisciplinary Team Stage Animation */}
          <Reveal delay={0.1} className="mt-10">
            <MultidisciplinaryTeamStage />
          </Reveal>

          {/* Marketing Value Comparison: Traditional Provider vs BBM Team */}
          <Reveal delay={0.14} className="mt-6">
            <TeamValueComparison />
          </Reveal>
        </div>
      </section>

      {/* Team Members Directory */}
      <section className="depth-canvas-slate border-b border-slate-200 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs font-medium tracking-widest text-[#15428b] uppercase">
              Representantes y especialistas
            </p>
            <h2 className="mt-2.5 text-2xl font-semibold tracking-tight text-[#0b1220] sm:text-3xl">
              Quiénes dan vida y soporte a tu plataforma
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:text-base">
              Cada integrante cubre un frente específico para garantizar que tu
              proyecto avance con orden, claridad y respaldo técnico real.
            </p>
          </Reveal>

          <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member, index) => (
              <StaggerItem
                key={member.name}
                className="flex flex-col overflow-hidden rounded-sm border border-slate-200 bg-white"
              >
                <div className="border-b border-slate-200 bg-slate-50/50 p-4">
                  {member.photoSrc ? (
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md border border-slate-200/80 bg-slate-100">
                      <Image
                        src={member.photoSrc}
                        alt={`Retrato profesional de ${member.name}`}
                        fill
                        className="object-cover object-bottom"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center rounded-md border border-slate-200/90 bg-gradient-to-b from-white via-slate-50 to-slate-100/80 px-6 text-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-xs">
                        <UserRound className="h-9 w-9" aria-hidden="true" />
                      </div>
                      <p className="mt-4 text-sm font-semibold text-[#0b1220]">
                        Sin fotografía disponible
                      </p>
                      <p className="mt-1 max-w-[210px] text-xs leading-relaxed text-slate-500">
                        Retrato profesional de este especialista en proceso de
                        actualización.
                      </p>

                      {/* Especificación preservada de forma oculta para futura fotografía real */}
                      <div hidden data-phase2-photo-spec={member.name}>
                        <p>1.- Título: {member.media.title}</p>
                        <p>2.- Descripción: {member.media.description}</p>
                        <p>3.- Tamaño: {member.media.dimensions}</p>
                        <p>4.- Formato: {member.media.format}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] font-semibold text-[#15428b]">
                        0{index + 1}
                      </span>
                      <span className="rounded-sm bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                        {member.role}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-semibold tracking-tight text-[#0b1220]">
                      {member.name}
                    </h3>
                    <p className="mt-0.5 text-xs font-medium text-slate-500">
                      {member.degree}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {member.description}
                    </p>

                    {member.experienceCompanies &&
                      member.experienceCompanies.length > 0 && (
                        <CompanyExperienceBadges
                          heading={member.experienceHighlight}
                          companies={member.experienceCompanies}
                        />
                      )}
                  </div>

                  <div className="mt-5 border-t border-slate-100 pt-3.5">
                    <p className="font-mono text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                      Enfoque principal
                    </p>
                    <p className="mt-1 text-xs font-medium text-[#0b1220]">
                      {member.specialty}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Why Multidisciplinary + Open Talent Recruitment */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <Reveal className="rounded-sm border border-slate-200 bg-[#f8f9fb] p-6 sm:p-8 lg:col-span-7">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-widest text-[#15428b] uppercase">
                <ShieldCheck className="h-4 w-4" />
                <span>Capacidad integral</span>
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0b1220]">
                Todos los ámbitos cubiertos para cualquier reto empresarial
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Al combinar ingeniería industrial, mecánica eléctrica,
                electrónica y comunicaciones, administración de empresas y
                desarrollo de software, entendemos tu negocio desde el piso de
                operación hasta la dirección general. Eso nos permite entregar
                soluciones prácticas que sí se usan y sí generan control.
              </p>
            </Reveal>

            <Reveal
              delay={0.08}
              className="flex flex-col justify-between rounded-sm border border-slate-200 bg-[#0b1220] p-6 text-white sm:p-8 lg:col-span-5"
            >
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-widest text-slate-400 uppercase">
                  <Users className="h-4 w-4" />
                  <span>Talento BBM</span>
                </div>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  ¿Eres especialista y te gustaría formar parte de BBM?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Seguimos sumando personas capacitadas, responsables y
                  comprometidas que busquen resolver retos reales para empresas
                  y negocios.
                </p>
              </div>
              <div className="mt-6">
                <a
                  href={BBM_CONTACT.mailtoUrl(
                    "Postulación de talento — BBM",
                    "Hola equipo BBM,\n\nMe interesa conocer oportunidades para integrarme a su equipo de trabajo. Adjunto mi perfil y experiencia.\n\nSaludos."
                  )}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-11 w-full rounded-sm bg-white px-5 text-sm font-semibold text-[#0b1220] hover:bg-slate-200"
                  )}
                >
                  <Briefcase className="h-4 w-4" />
                  <span>Enviar perfil por correo</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactCta
        eyebrow="Habla con nuestro equipo"
        heading="Pon a un equipo completo a trabajar en el orden de tu empresa"
        description="Agenda una conversación directa con nuestros especialistas para revisar tus objetivos sin compromiso."
      />
    </div>
  );
}
