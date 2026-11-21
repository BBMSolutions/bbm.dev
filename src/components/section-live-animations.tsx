"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CalendarCheck2,
  Car,
  Check,
  CheckCircle2,
  ClipboardList,
  Cog,
  FileSpreadsheet,
  FileText,
  GraduationCap,
  HeartPulse,
  Megaphone,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Smartphone,
  Store,
  Truck,
  UserCheck,
  Wallet,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ========================================================================== */
/* 1A. BBM TALLERES — Car Service Track + Live Client Message Bubble          */
/* ========================================================================== */

const TALLER_STAGES = [
  {
    label: "Recibido",
    progress: 12,
    chat: "Hola Carlos, ya recibimos tu auto en el taller. Te iremos avisando cada avance.",
    time: "09:15 am",
  },
  {
    label: "Revisando",
    progress: 42,
    chat: "Detectamos el detalle en frenos y afinación. Cotización lista para tu visto bueno.",
    time: "11:00 am",
  },
  {
    label: "En taller",
    progress: 72,
    chat: "Nuestro técnico ya está trabajando en tu vehículo con las refacciones listas.",
    time: "02:30 pm",
  },
  {
    label: "Listo",
    progress: 100,
    chat: "¡Tu auto quedó listo! Puedes pasar a recogerlo hoy a partir de las 5:00 pm.",
    time: "04:45 pm",
  },
] as const;

function TalleresLiveVisual() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % TALLER_STAGES.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  const current = TALLER_STAGES[step];

  return (
    <div className="overflow-hidden rounded-xl border border-amber-200/80 bg-gradient-to-br from-amber-50/70 via-white to-slate-50 p-4 shadow-xs">
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900">
          <Car className="h-4 w-4 text-amber-600" />
          Seguimiento visual del vehículo
        </span>
        <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-semibold text-amber-800">
          {current.label}
        </span>
      </div>

      {/* Animated Road / Progress Track with Gliding Car */}
      <div className="relative mt-5 mb-2 px-2">
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
          <motion.div
            animate={{ width: `${current.progress}%` }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full bg-gradient-to-r from-amber-500 to-emerald-500"
          />
        </div>
        <motion.div
          animate={{ left: `calc(${current.progress}% - 14px)` }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -top-2.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#0b1220] text-white shadow-sm"
        >
          <Car className="h-3.5 w-3.5" />
        </motion.div>

        <div className="mt-3 grid grid-cols-4 text-center text-[10px] font-medium text-slate-500">
          {TALLER_STAGES.map((st, idx) => (
            <span
              key={st.label}
              className={cn(
                idx <= step ? "font-semibold text-[#0b1220]" : "text-slate-400"
              )}
            >
              {st.label}
            </span>
          ))}
        </div>
      </div>

      {/* Friendly Customer WhatsApp Bubble */}
      <div className="mt-3 rounded-xl border border-emerald-200/80 bg-emerald-50/70 p-3">
        <div className="flex items-center justify-between gap-2 text-[11px] font-medium text-emerald-800">
          <span className="inline-flex items-center gap-1.5">
            <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
            Aviso automático al cliente
          </span>
          <span className="text-[10px] text-emerald-700/80">{current.time}</span>
        </div>
        <div className="mt-1.5 min-h-[38px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={current.label}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.28 }}
              className="text-xs leading-relaxed text-slate-700"
            >
              “{current.chat}”
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================== */
/* 1B. BBM CONSULTORIOS — Clean Medical Agenda + Instant Prescription Card    */
/* ========================================================================== */

const CLINIC_SLOTS = [
  {
    time: "10:00",
    patient: "Ana Sofía Ruiz",
    specialty: "Medicina Familiar",
    actionTitle: "Cita confirmada sin esperas",
    stamp: "Agenda ordenada",
  },
  {
    time: "11:00",
    patient: "Jorge Mendoza",
    specialty: "Odontología",
    actionTitle: "Receta digital emitida en 1 clic",
    stamp: "Receta lista ✓",
  },
  {
    time: "12:00",
    patient: "Lucía Paredes",
    specialty: "Psicología",
    actionTitle: "Historial clínico guardado y seguro",
    stamp: "Expediente al día ✓",
  },
] as const;

function ConsultoriosLiveVisual() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % CLINIC_SLOTS.length);
    }, 2700);
    return () => clearInterval(timer);
  }, []);

  const current = CLINIC_SLOTS[idx];

  return (
    <div className="overflow-hidden rounded-xl border border-teal-200/80 bg-gradient-to-br from-teal-50/70 via-white to-sky-50/50 p-4 shadow-xs">
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-900">
          <HeartPulse className="h-4 w-4 text-teal-600" />
          Agenda e historial de tu consultorio
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-teal-100 px-2.5 py-0.5 text-[11px] font-semibold text-teal-800">
          <CalendarCheck2 className="h-3 w-3" />
          Hoy
        </span>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-12">
        {/* Left: Daily schedule slots */}
        <div className="space-y-1.5 sm:col-span-6">
          {CLINIC_SLOTS.map((slot, i) => {
            const active = i === idx;
            return (
              <div
                key={slot.time}
                className={cn(
                  "flex items-center justify-between gap-2 rounded-lg border px-2.5 py-2 text-xs transition-all duration-300",
                  active
                    ? "border-teal-400 bg-white shadow-xs"
                    : "border-slate-200/70 bg-white/60 opacity-70"
                )}
              >
                <div className="flex items-center gap-2 truncate">
                  <span
                    className={cn(
                      "rounded px-1.5 py-0.5 text-[10px] font-bold",
                      active
                        ? "bg-teal-600 text-white"
                        : "bg-slate-100 text-slate-600"
                    )}
                  >
                    {slot.time}
                  </span>
                  <span className="truncate font-medium text-[#0b1220]">
                    {slot.patient}
                  </span>
                </div>
                {active && (
                  <span className="h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                )}
              </div>
            );
          })}
        </div>

        {/* Right: Digital Prescription & Record Stamp */}
        <div className="flex flex-col justify-between rounded-lg border border-teal-200/80 bg-white p-3 sm:col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.patient}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.28 }}
              className="flex h-full flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-teal-700">
                  <FileText className="h-3.5 w-3.5" />
                  <span>{current.specialty}</span>
                </div>
                <p className="mt-1.5 text-xs font-semibold text-[#0b1220]">
                  {current.actionTitle}
                </p>
                <p className="mt-1 text-[11px] text-slate-500">
                  Paciente: {current.patient}
                </p>
              </div>

              <div className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>{current.stamp}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export function SubscriptionPlatformSimulator({
  platformId,
}: {
  platformId: "bbm-talleres" | "bbm-consultorios" | string;
}) {
  if (platformId === "bbm-talleres") {
    return <TalleresLiveVisual />;
  }
  return <ConsultoriosLiveVisual />;
}

/* ========================================================================== */
/* 2A. PROPUESTAS 01 — Paperwork to Protected Money Transformation            */
/* ========================================================================== */

const ADMIN_PHASES = [
  {
    headline: "Adiós al papeleo y la talacha repetitiva",
    badge: "70% más rápido",
    meterWidth: 74,
    meterLabel: "Tiempo ahorrado en trámites internos",
    moneyStatus: "Documentos respaldados automáticamente",
  },
  {
    headline: "Cada peso y autorización registrados paso a paso",
    badge: "0 robos hormiga",
    meterWidth: 92,
    meterLabel: "Control del flujo de dinero",
    moneyStatus: "Reportes claros directos al dueño",
  },
  {
    headline: "Más tiempo productivo y mejores ingresos",
    badge: "+37% protección",
    meterWidth: 100,
    meterLabel: "Control administrativo saludable",
    moneyStatus: "Sin errores ni confusiones entre áreas",
  },
] as const;

function AdminPaperlessVisual() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((prev) => (prev + 1) % ADMIN_PHASES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const current = ADMIN_PHASES[phase];

  return (
    <div className="overflow-hidden rounded-xl border border-blue-200/80 bg-gradient-to-br from-blue-50/70 via-white to-emerald-50/50 p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0b1220]">
          <Wallet className="h-4 w-4 text-[#15428b]" />
          De carpetas y papel a control protegido
        </span>
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
          {current.badge}
        </span>
      </div>

      {/* Visual Transformation Diagram: Messy Paper -> Arrow -> Shielded Control */}
      <div className="mt-4 grid grid-cols-11 items-center gap-2">
        <div className="col-span-4 rounded-lg border border-dashed border-slate-300 bg-slate-100/80 p-3 text-center">
          <motion.div
            animate={{ opacity: [0.9, 0.45, 0.9], y: [0, -2, 0] }}
            transition={{ duration: 2.8, repeat: Infinity }}
            className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-400 shadow-xs"
          >
            <FileSpreadsheet className="h-5 w-5" />
          </motion.div>
          <p className="mt-1.5 text-[11px] font-medium text-slate-500 line-through">
            Papeleo lento
          </p>
        </div>

        <div className="col-span-3 flex flex-col items-center justify-center">
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#15428b] text-white shadow-xs"
          >
            <ArrowRight className="h-4 w-4" />
          </motion.div>
          <span className="mt-1 text-[10px] font-semibold text-[#15428b]">
            Con BBM
          </span>
        </div>

        <div className="col-span-4 rounded-lg border border-emerald-200 bg-white p-3 text-center shadow-xs">
          <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-xs">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <p className="mt-1.5 text-[11px] font-semibold text-emerald-800">
            Dinero protegido
          </p>
        </div>
      </div>

      {/* Animated Savings & Control Bar */}
      <div className="mt-4 rounded-lg border border-slate-200/80 bg-white p-3.5">
        <div className="min-h-[40px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.headline}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.28 }}
            >
              <p className="text-xs font-semibold text-[#0b1220]">
                {current.headline}
              </p>
              <p className="mt-0.5 text-[11px] text-slate-500">
                {current.moneyStatus}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-3">
          <div className="flex items-center justify-between text-[10px] font-medium text-slate-500">
            <span>{current.meterLabel}</span>
            <span className="font-semibold text-[#15428b]">
              {current.meterWidth}%
            </span>
          </div>
          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <motion.div
              animate={{ width: `${current.meterWidth}%` }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-[#15428b] to-emerald-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================== */
/* 2B. PROPUESTAS 02 — Animated Production Floor & Station Conveyor           */
/* ========================================================================== */

const INDUSTRIAL_STATIONS = [
  {
    name: "Materia prima",
    status: "Inventario verificado sin faltantes",
    pos: 16,
  },
  {
    name: "Producción y calidad",
    status: "Turno activo · Máquinas sin paros",
    pos: 50,
  },
  {
    name: "Producto listo",
    status: "Lote completo listo para entrega",
    pos: 84,
  },
] as const;

function IndustrialFloorVisual() {
  const [station, setStation] = useState(0);
  const [batchCount, setBatchCount] = useState(128);

  useEffect(() => {
    const timer = setInterval(() => {
      setStation((prev) => {
        const next = (prev + 1) % INDUSTRIAL_STATIONS.length;
        if (next === 0) setBatchCount((c) => c + 1);
        return next;
      });
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const current = INDUSTRIAL_STATIONS[station];

  return (
    <div className="overflow-hidden rounded-xl border border-slate-300/80 bg-gradient-to-br from-slate-100 via-white to-sky-50/50 p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0b1220]">
          <Cog className="h-4 w-4 animate-spin text-[#15428b]" style={{ animationDuration: "8s" }} />
          Línea de producción controlada en tiempo real
        </span>
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
          {batchCount} lotes hoy
        </span>
      </div>

      {/* Visual 3-Station Conveyor Belt */}
      <div className="relative mt-5">
        <div className="grid grid-cols-3 gap-2">
          {INDUSTRIAL_STATIONS.map((st, idx) => {
            const active = idx === station;
            const done = idx < station;
            return (
              <div
                key={st.name}
                className={cn(
                  "rounded-lg border p-2.5 text-center transition-all duration-300",
                  active
                    ? "border-[#15428b] bg-white shadow-xs"
                    : done
                      ? "border-emerald-200 bg-emerald-50/60"
                      : "border-slate-200 bg-white/60"
                )}
              >
                <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-md bg-slate-100 text-[#0b1220]">
                  {idx === 0 && <ClipboardList className="h-4 w-4 text-sky-700" />}
                  {idx === 1 && <Cog className="h-4 w-4 text-amber-600" />}
                  {idx === 2 && <PackageCheck className="h-4 w-4 text-emerald-600" />}
                </div>
                <p className="mt-1.5 text-[11px] font-semibold text-[#0b1220]">
                  {st.name}
                </p>
              </div>
            );
          })}
        </div>

        {/* Moving unit along the belt */}
        <div className="relative mt-4 h-3 rounded-full bg-slate-200">
          <motion.div
            animate={{ left: `calc(${current.pos}% - 18px)` }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -top-1.5 flex h-6 w-9 items-center justify-center rounded-md bg-[#15428b] text-white shadow-sm"
          >
            <Truck className="h-3.5 w-3.5" />
          </motion.div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-xs">
        <span className="font-medium text-slate-700">{current.status}</span>
        <span className="shrink-0 font-semibold text-emerald-700">
          Sin merma
        </span>
      </div>
    </div>
  );
}

/* ========================================================================== */
/* 2C. PROPUESTAS 03 — Friendly Digital Classroom & Report Card Board         */
/* ========================================================================== */

const STUDENTS = [
  { name: "Sofía Hernández", grade: "9.8", tuition: "Al día" },
  { name: "Mateo Castillo", grade: "9.4", tuition: "Al día" },
  { name: "Valentina Cruz", grade: "9.6", tuition: "Al día" },
] as const;

function AcademicSchoolVisual() {
  const [checkedCount, setCheckedCount] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCheckedCount((prev) => (prev >= STUDENTS.length ? 1 : prev + 1));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/70 via-white to-sky-50/50 p-5 shadow-xs">
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-950">
          <GraduationCap className="h-4 w-4 text-indigo-600" />
          Control escolar fácil para maestros y directivos
        </span>
        <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-[11px] font-semibold text-indigo-800">
          Grupo 3° B
        </span>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-12">
        {/* Attendance check-in list */}
        <div className="space-y-1.5 sm:col-span-7">
          {STUDENTS.map((student, idx) => {
            const isChecked = idx < checkedCount;
            return (
              <motion.div
                key={student.name}
                animate={{
                  backgroundColor: isChecked ? "#ffffff" : "rgba(255,255,255,0.55)",
                  borderColor: isChecked ? "#a7f3d0" : "#e2e8f0",
                }}
                className="flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-xs"
              >
                <div className="flex items-center gap-2 truncate">
                  <span
                    className={cn(
                      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
                      isChecked
                        ? "bg-emerald-500 text-white"
                        : "bg-slate-200 text-slate-400"
                    )}
                  >
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="truncate font-medium text-[#0b1220]">
                    {student.name}
                  </span>
                </div>
                <span className="shrink-0 font-semibold text-indigo-700">
                  {student.grade}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Instant Boleta & Colegiatura Summary */}
        <div className="flex flex-col justify-between rounded-lg border border-indigo-200/80 bg-white p-3.5 sm:col-span-5">
          <div>
            <p className="text-[11px] font-semibold text-indigo-700">
              Boleta y pagos automáticos
            </p>
            <p className="mt-1.5 text-2xl font-bold text-[#0b1220]">
              {checkedCount}/{STUDENTS.length}
            </p>
            <p className="text-[11px] text-slate-500">
              Asistencias registradas hoy
            </p>
          </div>

          <div className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>Colegiaturas al día</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================== */
/* 2D. PROPUESTAS 04 — Visual Bridge Connecting Clients to Your Business      */
/* ========================================================================== */

const SERVICE_STEPS = [
  {
    clientAction: "Busca tu servicio en línea",
    businessResult: "Tu negocio aparece profesional 24/7",
    badge: "Presencia digital",
  },
  {
    clientAction: "Pide cotización o cita en 1 clic",
    businessResult: "Recibes la solicitud ordenada al instante",
    badge: "+1 Cliente nuevo",
  },
  {
    clientAction: "Ve el avance de su trabajo",
    businessResult: "Cliente contento que te recomienda",
    badge: "Venta cerrada ✓",
  },
] as const;

function ServicesBridgeVisual() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % SERVICE_STEPS.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  const current = SERVICE_STEPS[step];

  return (
    <div className="overflow-hidden rounded-xl border border-sky-200/80 bg-gradient-to-br from-sky-50/70 via-white to-indigo-50/40 p-5 shadow-xs">
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0b1220]">
          <Store className="h-4 w-4 text-sky-600" />
          Puente directo entre tus clientes y tu negocio
        </span>
        <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-[11px] font-semibold text-sky-800">
          {current.badge}
        </span>
      </div>

      {/* Left Client <-> Animated Signal Bridge <-> Right Business */}
      <div className="mt-4 grid grid-cols-11 items-center gap-2">
        <div className="col-span-4 rounded-xl border border-sky-200 bg-white p-3 text-center shadow-xs">
          <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-700">
            <Smartphone className="h-4 w-4" />
          </div>
          <p className="mt-1.5 text-xs font-semibold text-[#0b1220]">Cliente</p>
          <p className="mt-0.5 text-[10px] leading-snug text-slate-500">
            Desde su celular
          </p>
        </div>

        {/* Flowing connection dots */}
        <div className="col-span-3 flex items-center justify-center gap-1.5">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              animate={{
                scale: [0.8, 1.35, 0.8],
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: dot * 0.25,
              }}
              className="h-2.5 w-2.5 rounded-full bg-sky-500"
            />
          ))}
        </div>

        <div className="col-span-4 rounded-xl border border-emerald-200 bg-white p-3 text-center shadow-xs">
          <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <Store className="h-4 w-4" />
          </div>
          <p className="mt-1.5 text-xs font-semibold text-[#0b1220]">
            Tu Negocio
          </p>
          <p className="mt-0.5 text-[10px] leading-snug text-slate-500">
            Ventas en orden
          </p>
        </div>
      </div>

      <div className="mt-4 min-h-[54px] rounded-lg border border-slate-200/80 bg-white px-3.5 py-2.5">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.badge}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.28 }}
            className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-xs font-medium text-slate-600">
              {current.clientAction}
            </p>
            <p className="text-xs font-semibold text-emerald-700">
              → {current.businessResult}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function ProposalLiveSimulator({ categoryId }: { categoryId: string }) {
  switch (categoryId) {
    case "burocraticos":
      return <AdminPaperlessVisual />;
    case "industriales":
      return <IndustrialFloorVisual />;
    case "academicos":
      return <AcademicSchoolVisual />;
    case "servicios":
      return <ServicesBridgeVisual />;
    default:
      return <AdminPaperlessVisual />;
  }
}

/* ========================================================================== */
/* 3. EQUIPO — Friendly Human Relay Timeline (Not a dark console!)            */
/* ========================================================================== */

const TEAM_RELAY = [
  {
    step: "1",
    title: "Escuchamos tu negocio",
    people: "Ing. Raúl Carpio e Ing. Diego Zamorano",
    initials: "RD",
    outcome: "Entendemos tu operación real sin palabras complicadas.",
    color: "bg-sky-100 text-sky-800 border-sky-200",
  },
  {
    step: "2",
    title: "Planeamos con orden",
    people: "Ing. Gabriel Bruno",
    initials: "GB",
    outcome: "Fechas claras y seguimiento puntual de principio a fin.",
    color: "bg-indigo-100 text-indigo-800 border-indigo-200",
  },
  {
    step: "3",
    title: "Creamos algo fácil de usar",
    people: "Ing. José Melquiades e Ing. Bryan Fermín",
    initials: "JB",
    outcome: "Pantallas amigables con seguridad sólida detrás.",
    color: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    step: "4",
    title: "Capacitamos e instalamos",
    people: "Lic. Karolyna Carpio e Ing. Damián Carpio",
    initials: "KD",
    outcome: "Tu personal domina el sistema y tus instalaciones quedan protegidas.",
    color: "bg-emerald-100 text-emerald-800 border-emerald-200",
  },
] as const;

export function TeamCoordinationSimulator() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TEAM_RELAY.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs font-semibold text-[#15428b]">
            Acompañamiento humano paso a paso
          </p>
          <p className="mt-0.5 text-sm font-semibold text-[#0b1220]">
            Así trabajamos juntos en tu proyecto
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
          <UserCheck className="h-3.5 w-3.5" />
          Un equipo completo contigo
        </span>
      </div>

      {/* Connected Human Avatars Relay */}
      <div className="relative mt-6">
        {/* Progress rail (desktop) */}
        <div
          aria-hidden="true"
          className="absolute top-5 right-8 left-8 hidden h-1 rounded-full bg-slate-100 lg:block"
        >
          <motion.div
            animate={{ width: `${(active / (TEAM_RELAY.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full bg-gradient-to-r from-[#15428b] to-emerald-500"
          />
        </div>

        <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_RELAY.map((item, idx) => {
            const isCurrent = idx === active;
            const isDone = idx < active;
            return (
              <motion.div
                key={item.step}
                animate={{
                  y: isCurrent ? -3 : 0,
                }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "flex flex-col rounded-xl border p-4 transition-all duration-300",
                  isCurrent
                    ? "border-[#15428b]/40 bg-sky-50/50 shadow-sm"
                    : isDone
                      ? "border-emerald-200/80 bg-emerald-50/30"
                      : "border-slate-200/80 bg-slate-50/50"
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full border text-xs font-bold shadow-xs",
                      isCurrent
                        ? "border-[#15428b] bg-[#15428b] text-white"
                        : item.color
                    )}
                  >
                    {isDone ? <Check className="h-4 w-4 text-emerald-700" /> : item.initials}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    Paso {item.step}
                  </span>
                </div>

                <p className="mt-3 text-sm font-semibold text-[#0b1220]">
                  {item.title}
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#15428b]">
                  {item.people}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {item.outcome}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ========================================================================== */
/* 4. ASOCIADOS — Hub-and-Spoke Ecosystem Map                                 */
/* ========================================================================== */

const ECOSYSTEM_NODES = [
  {
    title: "Grúas telescópicas",
    subtitle: "Maniobras y soporte en obra",
    icon: Truck,
  },
  {
    title: "Instalaciones especiales",
    subtitle: "Cámaras, redes y cerrojos",
    icon: ShieldCheck,
  },
  {
    title: "Construcción",
    subtitle: "Proyectos e infraestructura",
    icon: Building2,
  },
  {
    title: "Marketing digital",
    subtitle: "Atracción y crecimiento",
    icon: Megaphone,
  },
] as const;

export function PartnerNetworkSimulator() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % ECOSYSTEM_NODES.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50 to-sky-50/50 p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs font-semibold text-[#15428b]">
            Ecosistema de respaldo empresarial
          </p>
          <p className="mt-0.5 text-sm font-semibold text-[#0b1220]">
            BBM conectado con especialistas en distintos rubros
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-800">
          <Wrench className="h-3.5 w-3.5" />
          Red activa
        </span>
      </div>

      {/* Hub-and-Spoke Visual Layout */}
      <div className="mt-6 grid grid-cols-1 items-center gap-4 lg:grid-cols-11">
        {/* Left 2 nodes */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
          {ECOSYSTEM_NODES.slice(0, 2).map((node, idx) => {
            const Icon = node.icon;
            const isActive = active === idx;
            return (
              <motion.div
                key={node.title}
                animate={{ scale: isActive ? 1.02 : 1 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "flex items-center gap-3 rounded-xl border p-3.5 transition-colors",
                  isActive
                    ? "border-[#15428b] bg-white shadow-sm"
                    : "border-slate-200/80 bg-white/70"
                )}
              >
                <span
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                    isActive
                      ? "bg-[#15428b] text-white"
                      : "bg-slate-100 text-slate-600"
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#0b1220]">
                    {node.title}
                  </p>
                  <p className="text-xs text-slate-500">{node.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Center BBM Hub with pulsing rings */}
        <div className="flex flex-col items-center justify-center py-2 lg:col-span-3">
          <div className="relative flex h-24 w-24 items-center justify-center">
            <motion.span
              animate={{ scale: [1, 1.32, 1], opacity: [0.35, 0, 0.35] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border-2 border-[#15428b]"
            />
            <div className="relative flex h-20 w-20 flex-col items-center justify-center rounded-full bg-[#0b1220] text-white shadow-md">
              <span className="font-mono text-sm font-bold tracking-widest">
                BBM
              </span>
              <span className="mt-0.5 text-[9px] text-sky-300">
                Asociación
              </span>
            </div>
          </div>
          <p className="mt-2 text-center text-[11px] font-medium text-slate-500">
            Un solo punto de contacto
          </p>
        </div>

        {/* Right 2 nodes */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
          {ECOSYSTEM_NODES.slice(2, 4).map((node, i) => {
            const idx = i + 2;
            const Icon = node.icon;
            const isActive = active === idx;
            return (
              <motion.div
                key={node.title}
                animate={{ scale: isActive ? 1.02 : 1 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "flex items-center gap-3 rounded-xl border p-3.5 transition-colors",
                  isActive
                    ? "border-[#15428b] bg-white shadow-sm"
                    : "border-slate-200/80 bg-white/70"
                )}
              >
                <span
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                    isActive
                      ? "bg-[#15428b] text-white"
                      : "bg-slate-100 text-slate-600"
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#0b1220]">
                    {node.title}
                  </p>
                  <p className="text-xs text-slate-500">{node.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
