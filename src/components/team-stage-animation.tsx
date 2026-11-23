"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const TEAM_PILLARS = [
  {
    id: "raul",
    shortName: "Ing. Raúl Carpio",
    initials: "RC",
    discipline: "Negocio y campo",
    role: "Agente de Negocios · Ing. Mecánico Eléctrico",
    promise:
      "Entendemos tu operación real desde la primera plática, incluyendo flotillas, maquinaria e industria.",
    photoSrc: "/images/team/raul-carpio.webp",
  },
  {
    id: "gabriel",
    shortName: "Ing. Gabriel Bruno",
    initials: "GB",
    discipline: "Dirección de proyecto",
    role: "Project Manager · Ing. en Desarrollo de Software",
    promise:
      "Un solo liderazgo coordinando tiempos, alcances y entregas puntuales para que nunca pierdas claridad.",
    photoSrc: "/images/team/gabriel-bruno.webp",
  },
  {
    id: "melquiades",
    shortName: "Ing. José Melquiades",
    initials: "JM",
    discipline: "Lógica y solidez",
    role: "Lógica de Negocios y Tecnología",
    promise:
      "El motor interno de tu plataforma funciona con precisión, estabilidad y resguardo seguro de tu información.",
    photoSrc: "/images/team/melquiades.webp",
  },
  {
    id: "bryan",
    shortName: "Ing. Bryan Fermín",
    initials: "BF",
    discipline: "Simpleza y diseño",
    role: "Accesibilidad y Diseño Digital",
    promise:
      "Convertimos procesos complejos en pantallas claras que cualquier trabajador entiende a la primera.",
    photoSrc: undefined,
  },
  {
    id: "karolyna",
    shortName: "Lic. Karolyna Carpio",
    initials: "KC",
    discipline: "Capacitación y operación",
    role: "Coordinadora de Capacitación y Operaciones",
    promise:
      "Acompañamos a tu personal paso a paso para que adopten la herramienta con naturalidad y resultados medibles.",
    photoSrc: "/images/team/karolyna-carpio.webp",
  },
  {
    id: "diego",
    shortName: "Ing. Diego Zamorano",
    initials: "DZ",
    discipline: "Análisis de procesos",
    role: "Analista de Procesos · Ing. Industrial",
    promise:
      "Detectamos cuellos de botella y fugas antes de construir, con rigor probado en proyectos internacionales.",
    photoSrc: "/images/team/diego-zamorano.webp",
  },
  {
    id: "damian",
    shortName: "Ing. Damián Carpio",
    initials: "DC",
    discipline: "Infraestructura y seguridad",
    role: "Comunicaciones, Redes y Seguridad Física",
    promise:
      "Más de 30 años respaldando centros de datos, redes certificadas, cámaras y control de acceso físico.",
    photoSrc: undefined,
  },
] as const;

export function MultidisciplinaryTeamStage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % TEAM_PILLARS.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [paused]);

  const current = TEAM_PILLARS[activeIdx];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-[#081020] via-[#0d1a33] to-[#112447] p-5 text-white shadow-lg sm:p-8"
    >
      {/* Subtle layered ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 h-64 w-64 rounded-full bg-[#2563eb]/20 blur-[90px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-[#10b981]/15 blur-[90px]"
      />

      <div className="relative">
        {/* Top executive bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] font-medium tracking-widest text-sky-300 uppercase">
              Un solo frente multidisciplinario
            </p>
            <h2 className="mt-1 text-lg font-semibold tracking-tight text-white sm:text-xl">
              7 especialistas trabajando en sincronía para tu empresa
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300">
            <ShieldCheck className="h-4 w-4" />
            <span>Cobertura 360° activa</span>
          </div>
        </div>

        {/* 7-Specialist Interactive Formation Row */}
        <div className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7">
          {TEAM_PILLARS.map((member, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={member.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={cn(
                  "group relative flex flex-col items-center rounded-xl border px-2.5 py-3 text-center transition-all duration-300",
                  isActive
                    ? "border-sky-400/70 bg-white/12 shadow-[0_8px_24px_-8px_rgba(56,189,248,0.45)]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.07]"
                )}
              >
                {/* Avatar / Real Portrait Thumbnail */}
                <div className="relative">
                  {isActive && (
                    <motion.span
                      layoutId="team-stage-ring"
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="pointer-events-none absolute -inset-1 rounded-full border-2 border-sky-400"
                    />
                  )}
                  <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-[#15284c]">
                    {member.photoSrc ? (
                      <Image
                        src={member.photoSrc}
                        alt={member.shortName}
                        fill
                        className="object-cover object-top"
                        sizes="56px"
                      />
                    ) : (
                      <span className="font-mono text-sm font-bold tracking-wider text-sky-200">
                        {member.initials}
                      </span>
                    )}
                  </div>
                </div>

                <p className="mt-2.5 line-clamp-1 text-xs font-semibold text-white">
                  {member.shortName}
                </p>
                <p
                  className={cn(
                    "mt-0.5 line-clamp-1 text-[10px]",
                    isActive ? "font-medium text-sky-300" : "text-slate-400"
                  )}
                >
                  {member.discipline}
                </p>

                {/* Subtle active beam indicator pointing to center convergence card */}
                {isActive && (
                  <motion.span
                    layoutId="team-stage-beam"
                    className="mt-2 h-1 w-8 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Central Convergence Spotlight Card */}
        <div className="mt-6 rounded-xl border border-white/15 bg-white/[0.06] p-4 backdrop-blur-sm sm:p-5">
          <div className="min-h-[76px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-500/15 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-sky-200 uppercase">
                      Pilar 0{activeIdx + 1} · {current.discipline}
                    </span>
                    <span className="text-xs text-slate-300">
                      {current.role}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed font-medium text-white sm:text-base">
                    “{current.promise}”
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-2 rounded-lg border border-emerald-400/25 bg-emerald-500/10 px-3.5 py-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <div className="text-left">
                    <p className="font-mono text-[10px] tracking-wider text-emerald-300 uppercase">
                      Respaldo BBM
                    </p>
                    <p className="text-xs font-semibold text-white">
                      {current.shortName}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
