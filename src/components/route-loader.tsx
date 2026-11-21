"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const ROUTE_LABELS: Record<string, { code: string; label: string }> = {
  "/": { code: "BBM://INICIO", label: "Preparando panel principal" },
  "/propuestas": { code: "BBM://PROPUESTAS", label: "Cargando soluciones a la medida" },
  "/equipo": { code: "BBM://EQUIPO", label: "Cargando especialistas BBM" },
  "/asociados": { code: "BBM://ASOCIADOS", label: "Cargando red de asociados" },
};

export function RouteLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const duration = isFirstRender.current ? 920 : 680;
    isFirstRender.current = false;

    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 0);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname]);

  const routeInfo = ROUTE_LABELS[pathname] ?? {
    code: "BBM://PLATAFORMA",
    label: "Sincronizando entorno",
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={`loader-${pathname}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#060c18] px-6 text-white"
          role="status"
          aria-live="polite"
          aria-label="Cargando plataforma BBM"
        >
          {/* Multi-layered vibrant yet serious ambient lighting */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-[#2563eb]/25 blur-[110px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -bottom-32 h-80 w-80 rounded-full bg-[#0ea5e9]/20 blur-[110px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#10b981]/10 blur-[90px]"
          />

          <div className="relative flex w-full max-w-sm flex-col items-center">
            {/* Programming + Enterprise Emblem */}
            <div className="relative flex items-center gap-4">
              {/* Left code bracket */}
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="font-mono text-2xl font-semibold text-[#38bdf8] sm:text-3xl"
              >
                {"<"}
              </motion.span>

              {/* Center BBM Core Box with animated orbital ring */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-md border border-white/15 bg-[#0d1930] shadow-[0_0_40px_rgba(37,99,235,0.35)]">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                  className="pointer-events-none absolute -inset-[2px] rounded-md border border-transparent border-t-[#38bdf8] border-r-[#2563eb]"
                />
                <span className="font-mono text-base font-bold tracking-[0.18em] text-white">
                  BBM
                </span>
              </div>

              {/* Right code bracket */}
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="font-mono text-2xl font-semibold text-[#10b981] sm:text-3xl"
              >
                {"/>"}
              </motion.span>
            </div>

            {/* Enterprise Control Telemetry Bars */}
            <div className="mt-7 grid w-full grid-cols-3 gap-2">
              {[
                { label: "SISTEMA", color: "bg-[#2563eb]", delay: 0 },
                { label: "PROCESOS", color: "bg-[#0ea5e9]", delay: 0.1 },
                { label: "CONTROL", color: "bg-[#10b981]", delay: 0.2 },
              ].map((bar) => (
                <div
                  key={bar.label}
                  className="rounded-sm border border-white/10 bg-white/[0.03] px-2.5 py-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-wider text-slate-400">
                      {bar.label}
                    </span>
                    <span className={`h-1.5 w-1.5 rounded-full ${bar.color}`} />
                  </div>
                  <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ x: "0%" }}
                      transition={{
                        duration: 0.55,
                        delay: bar.delay,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`h-full w-full ${bar.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Main vibrant progress bar */}
            <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left" }}
                className="h-full w-full bg-gradient-to-r from-[#2563eb] via-[#0ea5e9] to-[#10b981]"
              />
            </div>

            {/* Status line */}
            <div className="mt-3 flex w-full items-center justify-between font-mono text-[11px]">
              <span className="text-[#38bdf8]">{routeInfo.code}</span>
              <span className="text-slate-300">{routeInfo.label}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
