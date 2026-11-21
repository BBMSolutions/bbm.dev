"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, MessageCircle, Phone } from "lucide-react";
import { BBM_CONTACT } from "@/data/bbm-content";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const INQUIRY_TOPICS = [
  {
    id: "administrativo",
    label: "Control administrativo y financiero",
    message:
      "Hola equipo BBM, me interesa digitalizar y controlar los procesos administrativos y el flujo de dinero en mi empresa.",
  },
  {
    id: "industrial",
    label: "Procesos industriales",
    message:
      "Hola equipo BBM, buscamos automatizar y supervisar procesos industriales o de producción en nuestra empresa.",
  },
  {
    id: "academico",
    label: "Gestión académica",
    message:
      "Hola equipo BBM, nos interesa una plataforma para digitalizar la gestión escolar y académica.",
  },
  {
    id: "servicios",
    label: "Plataforma de servicios / ventas",
    message:
      "Hola equipo BBM, queremos una plataforma o sitio profesional para conectar con más clientes y vender nuestros servicios.",
  },
  {
    id: "suscripcion",
    label: "BBM TALLERES o BBM CONSULTORIOS",
    message:
      "Hola equipo BBM, me gustaría conocer más sobre sus plataformas por suscripción (BBM Talleres / BBM Consultorios).",
  },
  {
    id: "general",
    label: "Otro proyecto a la medida",
    message:
      "Hola equipo BBM, me gustaría conversar sobre una solución digital a la medida para mi negocio.",
  },
] as const;

interface ContactCtaProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
}

export function ContactCta({
  eyebrow = "Contacto directo",
  heading = "Toma el control operativo de tu empresa hoy mismo",
  description = "Cuéntanos qué proceso deseas ordenar, acelerar o proteger. Un especialista de BBM atenderá tu solicitud de manera directa, clara y sin tecnicismos.",
}: ContactCtaProps) {
  const [selectedId, setSelectedId] = useState<string>(INQUIRY_TOPICS[0].id);
  const [copiedField, setCopiedField] = useState<"phone" | "email" | null>(null);

  const selectedTopic =
    INQUIRY_TOPICS.find((t) => t.id === selectedId) ?? INQUIRY_TOPICS[0];

  const handleCopy = async (value: string, field: "phone" | "email") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Clipboard API may be unavailable in restricted contexts
    }
  };

  return (
    <section
      id="contacto"
      className="depth-canvas-dark relative overflow-hidden border-t border-slate-800 text-white"
    >
      {/* Layered photographic depth backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
        style={{ backgroundImage: "url('/images/bg-executive-depth.jpg')" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#070d19]/85 via-[#0b1426]/80 to-[#070d19]/95"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left column: Value & direct credentials */}
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-medium tracking-widest text-slate-400 uppercase">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {heading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              {description}
            </p>

            <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between gap-3 rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-slate-400" />
                  <div>
                    <p className="font-mono text-[10px] tracking-wider text-slate-400 uppercase">
                      Teléfono y WhatsApp
                    </p>
                    <p className="font-mono text-sm font-medium text-white">
                      {BBM_CONTACT.phoneFormatted}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(BBM_CONTACT.phoneRaw, "phone")}
                  className="inline-flex items-center gap-1.5 rounded-sm border border-white/15 px-2.5 py-1 text-xs text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {copiedField === "phone" ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between gap-3 rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3">
                <div className="flex min-w-0 items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-slate-400" />
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] tracking-wider text-slate-400 uppercase">
                      Correo electrónico
                    </p>
                    <p className="truncate font-mono text-sm font-medium text-white">
                      {BBM_CONTACT.email}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(BBM_CONTACT.email, "email")}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-sm border border-white/15 px-2.5 py-1 text-xs text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {copiedField === "email" ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right column: Interactive quick contact launcher */}
          <div className="lg:col-span-7">
            <div className="rounded-md border border-white/12 bg-white/[0.04] p-6 sm:p-8">
              <p className="font-mono text-[11px] font-medium tracking-wider text-slate-400 uppercase">
                1. Selecciona el tema de tu interés
              </p>
              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {INQUIRY_TOPICS.map((topic) => {
                  const active = topic.id === selectedId;
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setSelectedId(topic.id)}
                      className={cn(
                        "rounded-sm border px-3.5 py-3 text-left text-xs font-medium transition-colors sm:text-sm",
                        active
                          ? "border-[#3b82f6] bg-[#15428b]/30 text-white"
                          : "border-white/10 bg-white/[0.02] text-slate-300 hover:border-white/25 hover:text-white"
                      )}
                    >
                      {topic.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 rounded-sm border border-white/10 bg-[#070c16] p-4">
                <p className="font-mono text-[10px] tracking-wider text-slate-400 uppercase">
                  Mensaje preparado
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-200 sm:text-sm">
                  “{selectedTopic.message}”
                </p>
              </div>

              <p className="mt-6 font-mono text-[11px] font-medium tracking-wider text-slate-400 uppercase">
                2. Inicia conversación por tu canal preferido
              </p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <a
                  href={BBM_CONTACT.whatsappUrl(selectedTopic.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-11 flex-1 rounded-sm bg-white px-5 text-sm font-semibold text-[#0b1220] hover:bg-slate-200"
                  )}
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Enviar por WhatsApp</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={BBM_CONTACT.mailtoUrl(
                    `Consulta BBM — ${selectedTopic.label}`,
                    `${selectedTopic.message}\n\nQuedo atento a su respuesta.`
                  )}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-11 flex-1 rounded-sm border-white/25 bg-transparent px-5 text-sm font-medium text-white hover:bg-white/10 hover:text-white"
                  )}
                >
                  <Mail className="h-4 w-4" />
                  <span>Enviar por correo</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
