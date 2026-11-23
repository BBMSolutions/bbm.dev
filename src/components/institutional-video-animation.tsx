"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const TOTAL_DURATION_MS = 40_000;
const SCENE_DURATION_MS = 8_000;
const TICK_MS = 100;

const SCENES = [
  {
    id: 0,
    shortLabel: "01 · El reto",
    subtitle:
      "¿Sientes que el papeleo, los retrasos y el desorden frenan el crecimiento de tu empresa?",
    dark: false,
  },
  {
    id: 1,
    shortLabel: "02 · Transformación",
    subtitle:
      "En BBM transformamos tus procesos internos en herramientas digitales claras y hechas a tu medida.",
    dark: false,
  },
  {
    id: 2,
    shortLabel: "03 · Control vivo",
    subtitle:
      "Recibe avisos claros en tiempo real desde computadora, tableta o celular: procesos cumplidos y dinero protegido.",
    dark: false,
  },
  {
    id: 3,
    shortLabel: "04 · Industrias",
    subtitle:
      "Administración, industria, escuelas, servicios, talleres o consultorios: ordenamos tu operación para multiplicar resultados.",
    dark: false,
  },
  {
    id: 4,
    shortLabel: "05 · BBM",
    subtitle:
      "BBM. Control total, procesos claros y tranquilidad para dirigir tu empresa.",
    dark: true,
  },
] as const;

function formatTime(ms: number) {
  const totalSec = Math.min(40, Math.floor(ms / 1000));
  const sec = String(totalSec).padStart(2, "0");
  return `00:${sec}`;
}

/* -------------------------------------------------------------------------- */
/* SCENE 1 (00:00 - 00:08): Cluttered desk, falling papers, fast clock        */
/* -------------------------------------------------------------------------- */
function SceneOneProblem() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.03 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-[#f8f9fb] via-[#eef2f7] to-[#e2e8f0]"
    >
      <motion.svg
        viewBox="0 0 800 420"
        className="h-full w-full max-w-[780px]"
        fill="none"
        initial={{ scale: 0.96 }}
        animate={{ scale: 1.04 }}
        transition={{ duration: 8, ease: "linear" }}
      >
        {/* Isometric Desk Surface */}
        <polygon
          points="120,285 400,190 680,285 400,380"
          fill="#ffffff"
          stroke="#cbd5e1"
          strokeWidth="2"
        />
        <polygon
          points="120,285 400,380 400,396 120,301"
          fill="#cbd5e1"
        />
        <polygon
          points="680,285 400,380 400,396 680,301"
          fill="#94a3b8"
        />

        {/* Messy Paper Stack Left */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.g
            key={`left-paper-${i}`}
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.22, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <polygon
              points={`${230 + (i % 2) * 5},${260 - i * 11} ${315 + (i % 2) * 5},${232 - i * 11} ${370 + (i % 2) * 5},${252 - i * 11} ${285 + (i % 2) * 5},${280 - i * 11}`}
              fill={i % 2 === 0 ? "#ffffff" : "#f1f5f9"}
              stroke="#94a3b8"
              strokeWidth="1.4"
            />
          </motion.g>
        ))}

        {/* Messy Paper Stack Center-Right */}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <motion.g
            key={`right-paper-${i}`}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.18, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <polygon
              points={`${395 - (i % 2) * 6},${290 - i * 11} ${488 - (i % 2) * 6},${258 - i * 11} ${548 - (i % 2) * 6},${280 - i * 11} ${455 - (i % 2) * 6},${312 - i * 11}`}
              fill={i % 3 === 0 ? "#fef3c7" : "#ffffff"}
              stroke="#94a3b8"
              strokeWidth="1.4"
            />
          </motion.g>
        ))}

        {/* Drifting loose sticky notes */}
        <motion.rect
          x="338"
          y="145"
          width="36"
          height="32"
          rx="3"
          fill="#fde68a"
          stroke="#f59e0b"
          strokeWidth="1.5"
          animate={{ y: [130, 175, 165], rotate: [-8, 12, -4], opacity: [0, 1, 0.9] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect
          x="492"
          y="138"
          width="32"
          height="28"
          rx="3"
          fill="#fef3c7"
          stroke="#f59e0b"
          strokeWidth="1.5"
          animate={{ y: [115, 162, 150], rotate: [10, -10, 6], opacity: [0, 1, 0.85] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        />

        {/* Stylized Fast-Ticking Clock (Top-Right) */}
        <g transform="translate(565, 125)">
          <circle cx="0" cy="0" r="36" fill="#ffffff" stroke="#64748b" strokeWidth="3" />
          <circle cx="0" cy="0" r="28" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
          <motion.line
            x1="0"
            y1="0"
            x2="0"
            y2="-20"
            stroke="#f59e0b"
            strokeWidth="3"
            strokeLinecap="round"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "0px 0px" }}
          />
          <motion.line
            x1="0"
            y1="0"
            x2="14"
            y2="0"
            stroke="#0b1220"
            strokeWidth="3"
            strokeLinecap="round"
            animate={{ rotate: 360 }}
            transition={{ duration: 7.2, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "0px 0px" }}
          />
          <circle cx="0" cy="0" r="3.5" fill="#0b1220" />
        </g>

        {/* Floating Amber Alert Badges */}
        {[
          { cx: 292, cy: 170, delay: 0.4 },
          { cx: 468, cy: 175, delay: 1.1 },
          { cx: 388, cy: 120, delay: 1.8 },
        ].map((alert) => (
          <motion.g
            key={`${alert.cx}-${alert.cy}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0.95, 1.08, 0.95], opacity: 1 }}
            transition={{
              scale: { duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: alert.delay },
              opacity: { duration: 0.4, delay: alert.delay },
            }}
            style={{ transformOrigin: `${alert.cx}px ${alert.cy}px` }}
          >
            <circle cx={alert.cx} cy={alert.cy} r="17" fill="#f59e0b" />
            <rect x={alert.cx - 2} y={alert.cy - 8} width="4" height="10" rx="2" fill="#ffffff" />
            <circle cx={alert.cx} cy={alert.cy + 6.5} r="2.2" fill="#ffffff" />
          </motion.g>
        ))}
      </motion.svg>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* SCENE 2 (00:08 - 00:16): Papers align & transform via cobalt wave -> laptop*/
/* -------------------------------------------------------------------------- */
function SceneTwoTransformation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55 }}
      className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-[#ffffff] via-[#f1f6fd] to-[#e0ecff]"
    >
      <svg viewBox="0 0 800 420" className="h-full w-full max-w-[780px]" fill="none">
        <defs>
          <linearGradient id="v2-wave" x1="140" y1="210" x2="660" y2="210" gradientUnits="userSpaceOnUse">
            <stop stopColor="#94a3b8" stopOpacity="0.2" />
            <stop offset="0.5" stopColor="#15428b" />
            <stop offset="1" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>

        {/* Clean Minimalist Desk */}
        <polygon points="130,305 400,220 670,305 400,385" fill="#ffffff" stroke="#dbe5f2" strokeWidth="2" />

        {/* Cobalt Wave Sweep */}
        <motion.path
          d="M 110 215 C 240 135, 310 275, 400 205 C 490 135, 570 250, 690 190"
          stroke="url(#v2-wave)"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.2 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Lifting paper cards aligning and gliding into laptop */}
        {[
          { x: 165, y: 170, delay: 0.2 },
          { x: 225, y: 120, delay: 0.55 },
          { x: 195, y: 245, delay: 0.9 },
        ].map((card, i) => (
          <motion.g
            key={`card-${i}`}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{
              x: 400 - card.x,
              y: 190 - card.y,
              opacity: [1, 1, 0],
              scale: [1, 0.85, 0.4],
            }}
            transition={{
              duration: 3.2,
              delay: card.delay,
              repeat: Infinity,
              repeatDelay: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <rect
              x={card.x - 28}
              y={card.y - 20}
              width="56"
              height="40"
              rx="6"
              fill="#ffffff"
              stroke="#15428b"
              strokeWidth="2"
            />
            <line x1={card.x - 16} y1={card.y - 6} x2={card.x + 16} y2={card.y - 6} stroke="#15428b" strokeWidth="2.5" strokeLinecap="round" />
            <line x1={card.x - 16} y1={card.y + 5} x2={card.x + 8} y2={card.y + 5} stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
          </motion.g>
        ))}

        {/* Sleek Minimalist Laptop Centerpiece */}
        <motion.g
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Screen */}
          <rect x="302" y="128" width="196" height="130" rx="10" fill="#0b1220" stroke="#334155" strokeWidth="3" />
          <rect x="312" y="138" width="176" height="110" rx="5" fill="#ffffff" />

          {/* Clean Organized UI Inside Laptop */}
          <rect x="322" y="148" width="52" height="10" rx="3" fill="#15428b" />
          <rect x="382" y="148" width="96" height="10" rx="3" fill="#e2e8f0" />

          {/* Animated Growing Bars */}
          {[
            { x: 326, h: 36, color: "#15428b", delay: 0.8 },
            { x: 350, h: 52, color: "#0ea5e9", delay: 1.1 },
            { x: 374, h: 44, color: "#2563eb", delay: 1.4 },
            { x: 398, h: 64, color: "#10b981", delay: 1.7 },
          ].map((bar) => (
            <motion.rect
              key={bar.x}
              x={bar.x}
              width="16"
              rx="3"
              fill={bar.color}
              initial={{ y: 236, height: 0 }}
              animate={{ y: 236 - bar.h, height: bar.h }}
              transition={{ duration: 0.9, delay: bar.delay, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}

          {/* Verified Shield Inside Screen */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "450px 202px" }}
          >
            <circle cx="450" cy="202" r="22" fill="#ecfdf5" stroke="#10b981" strokeWidth="2.5" />
            <path d="M 441 202 L 447 208 L 459 195" stroke="#10b981" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          </motion.g>

          {/* Laptop Base */}
          <polygon points="274,258 526,258 552,292 248,292" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />
          <rect x="372" y="274" width="56" height="6" rx="3" fill="#94a3b8" />
        </motion.g>
      </svg>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* SCENE 3 (00:16 - 00:24): Synchronized Tablet, Laptop & Phone + Green Cards */
/* -------------------------------------------------------------------------- */
function SceneThreeMultiDevice() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55 }}
      className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-[#f8f9fb] via-[#ffffff] to-[#ecfdf5]/60"
    >
      <motion.svg
        viewBox="0 0 800 420"
        className="h-full w-full max-w-[780px]"
        fill="none"
        initial={{ x: -16 }}
        animate={{ x: 16 }}
        transition={{ duration: 8, ease: "linear" }}
      >
        {/* Clean Light Oak Desk Line */}
        <rect x="70" y="305" width="660" height="14" rx="7" fill="#e2d5c3" />

        {/* Left: Tablet */}
        <g transform="translate(105, 160)">
          <rect x="0" y="0" width="150" height="145" rx="12" fill="#0b1220" />
          <rect x="10" y="10" width="130" height="125" rx="6" fill="#ffffff" />
          <rect x="20" y="22" width="55" height="8" rx="4" fill="#15428b" />
          <rect x="20" y="42" width="110" height="22" rx="5" fill="#eff6ff" />
          <rect x="20" y="72" width="110" height="22" rx="5" fill="#ecfdf5" />
          <rect x="20" y="102" width="78" height="18" rx="5" fill="#f1f5f9" />
          <circle cx="114" cy="83" r="6" fill="#10b981" />
        </g>

        {/* Center: Laptop */}
        <g transform="translate(285, 120)">
          <rect x="0" y="0" width="240" height="165" rx="12" fill="#0b1220" />
          <rect x="10" y="10" width="220" height="145" rx="6" fill="#ffffff" />
          <rect x="22" y="22" width="84" height="10" rx="4" fill="#15428b" />
          <rect x="176" y="22" width="42" height="10" rx="5" fill="#d1fae5" />
          {/* Progress bars */}
          <rect x="22" y="48" width="196" height="16" rx="4" fill="#f1f5f9" />
          <motion.rect
            x="22"
            y="48"
            height="16"
            rx="4"
            fill="#15428b"
            initial={{ width: 20 }}
            animate={{ width: 158 }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <rect x="22" y="76" width="196" height="16" rx="4" fill="#f1f5f9" />
          <motion.rect
            x="22"
            y="76"
            height="16"
            rx="4"
            fill="#0ea5e9"
            initial={{ width: 30 }}
            animate={{ width: 180 }}
            transition={{ duration: 2.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <rect x="22" y="104" width="196" height="16" rx="4" fill="#f1f5f9" />
          <motion.rect
            x="22"
            y="104"
            height="16"
            rx="4"
            fill="#10b981"
            initial={{ width: 20 }}
            animate={{ width: 196 }}
            transition={{ duration: 2.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <rect x="-20" y="165" width="280" height="16" rx="4" fill="#cbd5e1" />
        </g>

        {/* Right: Smartphone */}
        <g transform="translate(595, 168)">
          <rect x="0" y="0" width="84" height="137" rx="14" fill="#0b1220" />
          <rect x="7" y="10" width="70" height="117" rx="8" fill="#ffffff" />
          <rect x="16" y="22" width="38" height="7" rx="3.5" fill="#15428b" />
          <rect x="16" y="40" width="52" height="24" rx="5" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.2" />
          <rect x="16" y="72" width="52" height="20" rx="5" fill="#eff6ff" />
          <rect x="16" y="100" width="52" height="16" rx="5" fill="#f1f5f9" />
        </g>

        {/* 3 Sequential Floating Notification Cards gliding Phone -> Laptop */}
        {[0, 1, 2].map((n) => (
          <motion.g
            key={`notif-${n}`}
            initial={{ x: 615, y: 120 - n * 10, opacity: 0, scale: 0.85 }}
            animate={{
              x: [615, 425, 360],
              y: [115, 72 + n * 8, 86],
              opacity: [0, 1, 1, 0],
              scale: [0.88, 1, 1, 0.9],
            }}
            transition={{
              duration: 3.4,
              delay: n * 1.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <rect
              x="-52"
              y="-20"
              width="104"
              height="40"
              rx="10"
              fill="#ffffff"
              stroke="#10b981"
              strokeWidth="2"
            />
            <circle cx="-30" cy="0" r="11" fill="#10b981" />
            <path d="M -34.5 0 L -31.5 3 L -25.5 -3" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="-12" y="-7" width="48" height="5" rx="2.5" fill="#0b1220" />
            <rect x="-12" y="3" width="32" height="4" rx="2" fill="#94a3b8" />
          </motion.g>
        ))}
      </motion.svg>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* SCENE 4 (00:24 - 00:32): Lateral pan across 4 Industry Dioramas            */
/* -------------------------------------------------------------------------- */
function SceneFourIndustries() {
  const dioramas = [
    { x: 115, label: "Oficina", accent: "#15428b", type: "office" },
    { x: 305, label: "Industria", accent: "#0ea5e9", type: "industry" },
    { x: 495, label: "Talleres", accent: "#f59e0b", type: "workshop" },
    { x: 685, label: "Consultorios", accent: "#10b981", type: "clinic" },
  ] as const;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55 }}
      className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-[#ffffff] via-[#f8fafc] to-[#eef2f7]"
    >
      <motion.svg
        viewBox="0 0 800 420"
        className="h-full w-full max-w-[780px]"
        fill="none"
        initial={{ x: 24 }}
        animate={{ x: -24 }}
        transition={{ duration: 8, ease: "linear" }}
      >
        {/* Continuous Luminous Connecting Flow Line */}
        <motion.path
          d="M 40 280 H 760"
          stroke="#15428b"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {dioramas.map((d, idx) => (
          <motion.g
            key={d.label}
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Isometric Base Tile */}
            <polygon
              points={`${d.x - 74},250 ${d.x},218 ${d.x + 74},250 ${d.x},282`}
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="2"
            />
            <polygon
              points={`${d.x - 74},250 ${d.x},282 ${d.x},292 ${d.x - 74},260`}
              fill="#cbd5e1"
            />
            <polygon
              points={`${d.x + 74},250 ${d.x},282 ${d.x},292 ${d.x + 74},260`}
              fill="#94a3b8"
            />

            {/* Miniature Iconic Structure */}
            {d.type === "office" && (
              <g>
                <rect x={d.x - 28} y="168" width="56" height="72" rx="4" fill="#15428b" />
                <rect x={d.x - 18} y="180" width="14" height="12" rx="2" fill="#bfdbfe" />
                <rect x={d.x + 4} y="180" width="14" height="12" rx="2" fill="#bfdbfe" />
                <rect x={d.x - 18} y="200" width="14" height="12" rx="2" fill="#bfdbfe" />
                <rect x={d.x + 4} y="200" width="14" height="12" rx="2" fill="#bfdbfe" />
              </g>
            )}
            {d.type === "industry" && (
              <g>
                <polygon
                  points={`${d.x - 36},240 ${d.x - 36},185 ${d.x - 12},198 ${d.x - 12},185 ${d.x + 12},198 ${d.x + 12},185 ${d.x + 36},198 ${d.x + 36},240`}
                  fill="#0ea5e9"
                />
                <rect x={d.x - 12} y="216" width="24" height="24" rx="2" fill="#e0f2fe" />
              </g>
            )}
            {d.type === "workshop" && (
              <g>
                <rect x={d.x - 34} y="208" width="68" height="24" rx="8" fill="#f59e0b" />
                <path d={`M ${d.x - 22} 208 L ${d.x - 12} 192 H ${d.x + 12} L ${d.x + 22} 208 Z`} fill="#fbbf24" />
                <circle cx={d.x - 18} cy="234" r="8" fill="#0b1220" />
                <circle cx={d.x + 18} cy="234" r="8" fill="#0b1220" />
              </g>
            )}
            {d.type === "clinic" && (
              <g>
                <rect x={d.x - 30} y="176" width="60" height="64" rx="6" fill="#0f766e" />
                <rect x={d.x - 6} y="192" width="12" height="32" rx="2" fill="#ffffff" />
                <rect x={d.x - 16} y="202" width="32" height="12" rx="2" fill="#ffffff" />
              </g>
            )}

            {/* Emerald Verification Shield Floating Above */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2 + idx * 0.65, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: `${d.x}px 128px` }}
            >
              <path
                d={`M ${d.x} 106 L ${d.x + 18} 113 V 126 C ${d.x + 18} 137, ${d.x + 10} 145, ${d.x} 149 C ${d.x - 10} 145, ${d.x - 18} 137, ${d.x - 18} 126 V 113 L ${d.x} 106 Z`}
                fill="#10b981"
              />
              <path
                d={`M ${d.x - 7} 127 L ${d.x - 2} 132 L ${d.x + 8} 121`}
                stroke="#ffffff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.g>

            {/* Minimal clean category label */}
            <text
              x={d.x}
              y="322"
              textAnchor="middle"
              fill="#0b1220"
              fontSize="13"
              fontWeight="600"
              fontFamily="system-ui, sans-serif"
            >
              {d.label}
            </text>
          </motion.g>
        ))}
      </motion.svg>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* SCENE 5 (00:32 - 00:40): Deep Obsidian Outro + Hexagonal BBM Lockup        */
/* -------------------------------------------------------------------------- */
function SceneFiveOutro() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-[#070d19] via-[#0b1426] to-[#112242]"
    >
      <motion.svg
        viewBox="0 0 800 420"
        className="h-full w-full max-w-[780px]"
        fill="none"
        initial={{ scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 7.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          <radialGradient id="v5-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.35" />
            <stop offset="65%" stopColor="#0ea5e9" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#070d19" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="v5-stroke" x1="320" y1="115" x2="480" y2="275" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="0.5" stopColor="#2563eb" />
            <stop offset="1" stopColor="#10b981" />
          </linearGradient>
        </defs>

        <circle cx="400" cy="195" r="185" fill="url(#v5-glow)" />

        {/* Converging luminous lines */}
        <motion.line
          x1="80"
          y1="195"
          x2="310"
          y2="195"
          stroke="#38bdf8"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.85, 0.3] }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.line
          x1="720"
          y1="195"
          x2="490"
          y2="195"
          stroke="#10b981"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.85, 0.3] }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Assembling Hexagonal Emblem */}
        <motion.polygon
          points="400,104 478,149 478,241 400,286 322,241 322,149"
          stroke="url(#v5-stroke)"
          strokeWidth="3.5"
          fill="#0b1324"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.polygon
          points="400,118 465,156 465,234 400,272 335,234 335,156"
          fill="#15428b"
          fillOpacity="0.32"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ transformOrigin: "400px 195px" }}
        />

        {/* BBM Brand Lockup */}
        <motion.text
          x="400"
          y="207"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="44"
          fontWeight="700"
          letterSpacing="8"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          BBM
        </motion.text>

        <motion.text
          x="400"
          y="322"
          textAnchor="middle"
          fill="#cbd5e1"
          fontSize="14"
          letterSpacing="3"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          CONTROL · ORDEN · TECNOLOGÍA APLICADA
        </motion.text>
      </motion.svg>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN 40-SECOND INSTITUTIONAL MOTION PLAYER                                 */
/* -------------------------------------------------------------------------- */

export function InstitutionalVideoAnimation() {
  const [elapsedMs, setElapsedMs] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setElapsedMs((prev) => {
        const next = prev + TICK_MS;
        return next >= TOTAL_DURATION_MS ? 0 : next;
      });
    }, TICK_MS);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const sceneIndex = Math.min(
    SCENES.length - 1,
    Math.floor(elapsedMs / SCENE_DURATION_MS)
  );
  const currentScene = SCENES[sceneIndex];
  const progressPercent = (elapsedMs / TOTAL_DURATION_MS) * 100;

  const jumpToScene = (idx: number) => {
    setElapsedMs(idx * SCENE_DURATION_MS);
    setIsPlaying(true);
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-[#0b1220] shadow-md">
      {/* 16:9 Cinema Stage */}
      <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-video">
        {/* Top chapter pill */}
        <div className="pointer-events-none absolute top-3 right-3 left-3 z-20 flex items-center justify-between gap-2">
          <span
            className={cn(
              "rounded-full border px-3 py-1 font-mono text-[10px] font-semibold tracking-wider uppercase backdrop-blur-md transition-colors",
              currentScene.dark
                ? "border-white/15 bg-white/10 text-sky-300"
                : "border-slate-300/80 bg-white/85 text-[#15428b]"
            )}
          >
            {currentScene.shortLabel}
          </span>
          <span
            className={cn(
              "rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium backdrop-blur-md transition-colors",
              currentScene.dark
                ? "border-white/15 bg-white/10 text-slate-200"
                : "border-slate-300/80 bg-white/85 text-slate-700"
            )}
          >
            {formatTime(elapsedMs)} / 00:40
          </span>
        </div>

        {/* Animated Scene Switcher */}
        <AnimatePresence mode="wait">
          {sceneIndex === 0 && <SceneOneProblem key="scene-0" />}
          {sceneIndex === 1 && <SceneTwoTransformation key="scene-1" />}
          {sceneIndex === 2 && <SceneThreeMultiDevice key="scene-2" />}
          {sceneIndex === 3 && <SceneFourIndustries key="scene-3" />}
          {sceneIndex === 4 && <SceneFiveOutro key="scene-4" />}
        </AnimatePresence>

        {/* Editorial Subtitle Bar */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#0b1220]/90 via-[#0b1220]/65 to-transparent px-4 pt-10 pb-3.5 sm:px-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentScene.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
              className="mx-auto max-w-xl text-center text-xs leading-relaxed font-medium text-white sm:text-sm"
            >
              {currentScene.subtitle}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Interactive Player Controls & Chapter Timeline */}
      <div className="border-t border-white/10 bg-[#080f1d] px-4 py-3 text-white">
        {/* Continuous 40s Progress Bar */}
        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            style={{ width: `${progressPercent}%` }}
            className="h-full rounded-full bg-gradient-to-r from-[#2563eb] via-[#0ea5e9] to-[#10b981] transition-[width] duration-100 ease-linear"
          />
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              aria-label={isPlaying ? "Pausar animación" : "Reproducir animación"}
              className="inline-flex h-8 items-center gap-1.5 rounded-sm border border-white/15 bg-white/5 px-2.5 text-xs font-medium text-white transition-colors hover:bg-white/15"
            >
              {isPlaying ? (
                <>
                  <Pause className="h-3.5 w-3.5" />
                  <span>Pausar</span>
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5" />
                  <span>Reproducir</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => jumpToScene(0)}
              aria-label="Reiniciar desde el principio"
              className="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-white/15 bg-white/5 text-slate-300 transition-colors hover:bg-white/15 hover:text-white"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Clickable 5-Chapter Pills */}
          <div className="flex flex-wrap items-center gap-1">
            {SCENES.map((sc) => (
              <button
                key={sc.id}
                type="button"
                onClick={() => jumpToScene(sc.id)}
                className={cn(
                  "rounded-sm px-2 py-1 font-mono text-[10px] transition-colors",
                  sc.id === sceneIndex
                    ? "bg-[#15428b] font-semibold text-white"
                    : "text-slate-400 hover:bg-white/10 hover:text-white"
                )}
              >
                0{sc.id + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
