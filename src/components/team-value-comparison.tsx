"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  Award,
  CheckCircle2,
  Cpu,
  GraduationCap,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const DIFFERENTIATORS = [
  {
    id: "diagnostico",
    tab: "Entendimiento real",
    icon: Cpu,
    metricLabel: "Antes de escribir una sola línea",
    metricValue: "100% enfocado en tu negocio",
    typicalRisk: "Un proveedor común solo programa lo que le dictas, sin entender tu operación diaria ni detectar fugas.",
    bbmAdvantage:
      "Ingenieros industriales y mecánicos analizan tu operación real para resolver el problema de raíz.",
    proofTag: "Diagnóstico operativo + proceso claro",
  },
  {
    id: "adopcion",
    tab: "Tu equipo sí lo usa",
    icon: GraduationCap,
    metricLabel: "Adopción sin fricciones",
    metricValue: "Cero tecnicismos",
    typicalRisk:
      "Sistemas complicados que tu personal no entiende y termina abandonando para volver al papel.",
    bbmAdvantage:
      "Pantallas diseñadas para ser simples más acompañamiento y capacitación directa para todo tu personal.",
    proofTag: "Diseño accesible + capacitación incluida",
  },
  {
    id: "trayectoria",
    tab: "Experiencia probada",
    icon: Award,
    metricLabel: "Trayectoria comprobada",
    metricValue: "+30 años combinados",
    typicalRisk:
      "Incertidumbre sobre si el proveedor ha resuelto retos exigentes o si abandonará el proyecto.",
    bbmAdvantage:
      "Especialistas con experiencia real en proyectos para AT&T, Toyota, BBVA, H-E-B, PEMEX y Panasonic.",
    proofTag: "Estándar corporativo a tu alcance",
  },
  {
    id: "integral",
    tab: "Software + respaldo físico",
    icon: ShieldCheck,
    metricLabel: "Solución completa",
    metricValue: "1 solo equipo",
    typicalRisk:
      "Tienes que contratar aparte a quien instale redes, cámaras, accesos y equipamiento técnico.",
    bbmAdvantage:
      "Integramos tu plataforma digital con redes certificadas, CCTV y control de acceso en un mismo frente.",
    proofTag: "Control digital + infraestructura segura",
  },
] as const;

export function TeamValueComparison() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % DIFFERENTIATORS.length);
    }, 3600);
    return () => clearInterval(timer);
  }, [paused]);

  const current = DIFFERENTIATORS[activeIdx];
  const ActiveIcon = current.icon;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm sm:p-7"
    >
      {/* Header + Interactive Differentiator Pills */}
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="font-mono text-[11px] font-semibold tracking-wider text-[#15428b] uppercase">
            Por qué elegir un equipo multidisciplinario
          </p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight text-[#0b1220] sm:text-xl">
            La diferencia entre un proveedor aislado y el respaldo de BBM
          </h3>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {DIFFERENTIATORS.map((item, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition-all",
                  isActive
                    ? "border-[#0b1220] bg-[#0b1220] text-white shadow-xs"
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:text-[#0b1220]"
                )}
              >
                {item.tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Animated Side-by-Side Contrast Stage */}
      <div className="mt-6 min-h-[172px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-4 lg:grid-cols-12"
          >
            {/* Left: Typical Risk / Common Frustration */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/90 p-5 lg:col-span-5">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <AlertCircle className="h-4 w-4 text-slate-400" />
                    Enfoque tradicional o aislado
                  </span>
                  <XCircle className="h-4 w-4 text-slate-400" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {current.typicalRisk}
                </p>
              </div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-1/3 rounded-full bg-slate-400" />
              </div>
            </div>

            {/* Right: BBM Multidisciplinary Guarantee */}
            <div className="flex flex-col justify-between rounded-xl border border-emerald-200/90 bg-gradient-to-br from-sky-50/60 via-white to-emerald-50/70 p-5 shadow-xs lg:col-span-7">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#15428b]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#15428b] text-white">
                      <ActiveIcon className="h-3.5 w-3.5" />
                    </span>
                    Con el equipo multidisciplinario BBM
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {current.metricValue}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed font-medium text-[#0b1220] sm:text-base">
                  {current.bbmAdvantage}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/70 pt-3">
                <span className="text-xs font-medium text-slate-500">
                  {current.metricLabel}
                </span>
                <span className="font-mono text-[11px] font-semibold text-emerald-700">
                  ✓ {current.proofTag}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Subtle auto-advance indicator strip */}
      <div className="mt-5 grid grid-cols-4 gap-2">
        {DIFFERENTIATORS.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Ver diferenciador: ${item.tab}`}
            onClick={() => setActiveIdx(idx)}
            className="h-1.5 overflow-hidden rounded-full bg-slate-100"
          >
            <motion.div
              animate={{
                width: idx === activeIdx ? "100%" : idx < activeIdx ? "100%" : "0%",
                opacity: idx === activeIdx ? 1 : idx < activeIdx ? 0.4 : 0,
              }}
              transition={{ duration: idx === activeIdx ? 0.45 : 0.2 }}
              className="h-full rounded-full bg-gradient-to-r from-[#15428b] to-emerald-500"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
