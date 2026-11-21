"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  CheckCircle2,
  Clock,
  FileCheck2,
  Send,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

type StageKey = "created" | "reviewing" | "completed";

interface ProcessScenario {
  title: string;
  area: string;
  person: string;
  initials: string;
  avatarBg: string;
  detail: string;
}

const SCENARIOS: ProcessScenario[] = [
  {
    title: "Compra de materiales y suministros",
    area: "Compras",
    person: "María Morales",
    initials: "MM",
    avatarBg: "bg-sky-100 text-sky-800",
    detail: "$18,450 MXN · Cotización incluida",
  },
  {
    title: "Entrega de pedido a cliente",
    area: "Operaciones",
    person: "Roberto Vázquez",
    initials: "RV",
    avatarBg: "bg-indigo-100 text-indigo-800",
    detail: "Programada para hoy · Con evidencia",
  },
  {
    title: "Cierre de caja del día",
    area: "Administración",
    person: "Laura Herrera",
    initials: "LH",
    avatarBg: "bg-emerald-100 text-emerald-800",
    detail: "Montos cuadrados · Sin diferencias",
  },
];

const STAGES: {
  key: StageKey;
  badge: string;
  headline: string;
  helper: string;
  pillClass: string;
  cardClass: string;
  iconBg: string;
}[] = [
  {
    key: "created",
    badge: "Nueva solicitud",
    headline: "Se envió una nueva solicitud",
    helper: "Te avisamos al instante quién la envió y qué necesita.",
    pillClass: "bg-sky-100 text-sky-800 border-sky-200",
    cardClass: "border-sky-200 bg-sky-50/80",
    iconBg: "bg-sky-600 text-white",
  },
  {
    key: "reviewing",
    badge: "En revisión",
    headline: "Ya se está revisando la solicitud",
    helper: "El encargado verifica los datos y documentos con claridad.",
    pillClass: "bg-amber-100 text-amber-800 border-amber-200",
    cardClass: "border-amber-200 bg-amber-50/80",
    iconBg: "bg-amber-500 text-white",
  },
  {
    key: "completed",
    badge: "Cumplida",
    headline: "Solicitud cumplida y guardada",
    helper: "Todo quedó listo y respaldado automáticamente para tu tranquilidad.",
    pillClass: "bg-emerald-100 text-emerald-800 border-emerald-200",
    cardClass: "border-emerald-200 bg-emerald-50/80",
    iconBg: "bg-emerald-600 text-white",
  },
];

export function LiveControlDashboard() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % (SCENARIOS.length * 3));
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  const scenarioIndex = Math.floor(step / 3);
  const stageIndex = step % 3;
  const activeScenario = SCENARIOS[scenarioIndex];
  const activeStage = STAGES[stageIndex];

  const completedCount = 14 + scenarioIndex + (stageIndex === 2 ? 1 : 0);
  const reviewingCount = stageIndex === 1 ? 2 : 1;

  return (
    <div className="relative mx-auto w-full">
      {/* Soft warm elevation aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 rounded-2xl bg-gradient-to-br from-sky-200/45 via-white/30 to-emerald-200/35 blur-2xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white text-slate-900 shadow-[0_20px_50px_-18px_rgba(15,23,42,0.18)]">
        {/* Friendly top header */}
        <div className="flex items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/80 px-5 py-3.5">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#15428b] text-xs font-bold tracking-wide text-white shadow-xs">
              BBM
            </span>
            <div>
              <p className="text-sm font-semibold text-[#0b1220]">
                Tu negocio al día
              </p>
              <p className="text-xs text-slate-500">
                Avisos claros sin complicaciones
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[11px] font-medium text-emerald-700">
              Todo en orden
            </span>
          </div>
        </div>

        <div className="space-y-4 p-4 sm:p-5">
          {/* Friendly Live Notification Card */}
          <div className="min-h-[108px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeScenario.title}-${activeStage.key}`}
                initial={{ opacity: 0, y: -8, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.99 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "rounded-xl border p-4 transition-colors",
                  activeStage.cardClass
                )}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg shadow-xs",
                      activeStage.iconBg
                    )}
                  >
                    {activeStage.key === "created" && <Send className="h-4 w-4" />}
                    {activeStage.key === "reviewing" && <Clock className="h-4 w-4" />}
                    {activeStage.key === "completed" && (
                      <CheckCircle2 className="h-4 w-4" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600">
                        <Bell className="h-3 w-3 text-[#15428b]" />
                        Aviso instantáneo · {activeScenario.area}
                      </span>
                      <span
                        className={cn(
                          "rounded-full border px-2.5 py-0.5 text-[11px] font-semibold",
                          activeStage.pillClass
                        )}
                      >
                        {activeStage.badge}
                      </span>
                    </div>

                    <p className="mt-1.5 text-sm font-semibold text-[#0b1220]">
                      {activeStage.headline}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
                      {activeStage.helper}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Simple 3-Step Friendly Visual Tracker */}
          <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span
                  className={cn(
                    "flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-semibold",
                    activeScenario.avatarBg
                  )}
                >
                  {activeScenario.initials}
                </span>
                <div>
                  <p className="text-xs font-semibold text-[#0b1220]">
                    {activeScenario.title}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {activeScenario.person} · {activeScenario.detail}
                  </p>
                </div>
              </div>
            </div>

            {/* Clean horizontal progress steps */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {STAGES.map((st, idx) => {
                const isDone = idx < stageIndex;
                const isCurrent = idx === stageIndex;
                return (
                  <div
                    key={st.key}
                    className={cn(
                      "rounded-lg border px-2.5 py-2 text-center transition-all duration-300",
                      isCurrent
                        ? "border-[#15428b]/30 bg-white shadow-xs"
                        : isDone
                          ? "border-emerald-200 bg-emerald-50/70"
                          : "border-slate-200/70 bg-white/50 opacity-65"
                    )}
                  >
                    <div className="mx-auto mb-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold">
                      {isDone ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      ) : isCurrent ? (
                        <span
                          className={cn(
                            "h-2.5 w-2.5 rounded-full",
                            st.key === "created"
                              ? "bg-sky-500"
                              : st.key === "reviewing"
                                ? "bg-amber-500"
                                : "bg-emerald-500"
                          )}
                        />
                      ) : (
                        <span className="h-2 w-2 rounded-full bg-slate-300" />
                      )}
                    </div>
                    <p className="truncate text-[11px] font-semibold text-[#0b1220]">
                      {st.badge}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Simple Summary Row */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="rounded-xl border border-slate-200/80 bg-white px-3 py-2.5 text-center">
              <p className="text-lg font-bold text-sky-700">
                {completedCount + reviewingCount}
              </p>
              <p className="text-[11px] text-slate-500">Solicitudes hoy</p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white px-3 py-2.5 text-center">
              <p className="text-lg font-bold text-amber-600">{reviewingCount}</p>
              <p className="text-[11px] text-slate-500">En revisión</p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white px-3 py-2.5 text-center">
              <p className="text-lg font-bold text-emerald-600">
                {completedCount}
              </p>
              <p className="text-[11px] text-slate-500">Cumplidas</p>
            </div>
          </div>

          {/* Recent friendly activity list */}
          <div className="space-y-1.5">
            {SCENARIOS.map((item, idx) => {
              const isCurrent = idx === scenarioIndex;
              const statusText = isCurrent
                ? activeStage.badge
                : idx < scenarioIndex
                  ? "Cumplida"
                  : "Pendiente";
              const statusColor = isCurrent
                ? activeStage.pillClass
                : idx < scenarioIndex
                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                  : "bg-slate-100 text-slate-500 border-slate-200";

              return (
                <div
                  key={item.title}
                  className={cn(
                    "flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-xs transition-colors",
                    isCurrent
                      ? "border-slate-300 bg-slate-50"
                      : "border-slate-100 bg-white"
                  )}
                >
                  <div className="flex min-w-0 items-center gap-2">
                    <FileCheck2 className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                    <span className="truncate font-medium text-slate-700">
                      {item.title}
                    </span>
                  </div>
                  <span
                    className={cn(
                      "shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold",
                      statusColor
                    )}
                  >
                    {statusText}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Calm friendly footer */}
        <div className="flex items-center justify-between gap-2 border-t border-slate-100 bg-slate-50/90 px-5 py-3 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1.5 font-medium text-slate-700">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            Fácil de usar para cualquier profesionista
          </span>
          <span className="hidden text-[11px] text-slate-500 sm:inline">
            Sin tecnicismos
          </span>
        </div>
      </div>
    </div>
  );
}
