"use client";

import { motion } from "framer-motion";

/* ========================================================================== */
/* TASK 3: Replaces "Trabajo multidisciplinario de diagnóstico"               */
/* Pure visual metaphor: Chaotic tangled paths -> BBM Prism -> Clean Tracks   */
/* ========================================================================== */

export function DiagnosticBlueprintVisual() {
  return (
    <div
      role="img"
      aria-label="Ilustración visual de diagnóstico y ordenamiento de procesos empresariales"
      className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50 to-sky-50/60 p-4 shadow-sm sm:p-5"
    >
      <svg
        viewBox="0 0 520 260"
        className="h-auto w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="diag-clean-1" x1="260" y1="75" x2="480" y2="75" gradientUnits="userSpaceOnUse">
            <stop stopColor="#15428b" />
            <stop offset="1" stopColor="#0ea5e9" />
          </linearGradient>
          <linearGradient id="diag-clean-2" x1="260" y1="130" x2="480" y2="130" gradientUnits="userSpaceOnUse">
            <stop stopColor="#15428b" />
            <stop offset="1" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id="diag-clean-3" x1="260" y1="185" x2="480" y2="185" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0f766e" />
            <stop offset="1" stopColor="#10b981" />
          </linearGradient>
          <radialGradient id="diag-lens" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Subtle ambient prism halo */}
        <circle cx="255" cy="130" r="88" fill="url(#diag-lens)" />

        {/* Left Side: Tangled / bottlenecked paths */}
        <path
          d="M 24 62 C 85 18, 92 178, 152 142 C 188 120, 184 68, 224 118"
          stroke="#94a3b8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="6 6"
          opacity="0.7"
        />
        <path
          d="M 24 134 C 76 196, 118 44, 166 94 C 192 122, 198 164, 224 130"
          stroke="#cbd5e1"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 24 200 C 86 210, 98 84, 148 168 C 176 212, 196 146, 224 142"
          stroke="#94a3b8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="4 6"
          opacity="0.65"
        />

        {/* Animated bottleneck pulse nodes on the left */}
        <motion.circle
          cx="106"
          cy="112"
          r="6"
          fill="#f59e0b"
          animate={{ scale: [1, 1.35, 1], opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="162"
          cy="152"
          r="5"
          fill="#f59e0b"
          animate={{ scale: [1, 1.4, 1], opacity: [0.45, 0.95, 0.45] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
        <circle cx="24" cy="62" r="4.5" fill="#94a3b8" />
        <circle cx="24" cy="134" r="4.5" fill="#94a3b8" />
        <circle cx="24" cy="200" r="4.5" fill="#94a3b8" />

        {/* Right Side: Clean, parallel optimized flow tracks */}
        <path
          d="M 288 112 C 324 112, 326 75, 360 75 L 468 75"
          stroke="url(#diag-clean-1)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 294 130 L 468 130"
          stroke="url(#diag-clean-2)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 288 148 C 324 148, 326 185, 360 185 L 468 185"
          stroke="url(#diag-clean-3)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Animated smooth data packets gliding along clean tracks */}
        <motion.circle
          r="5"
          fill="#0ea5e9"
          animate={{ cx: [345, 464], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          cy="75"
        />
        <motion.circle
          r="5"
          fill="#2563eb"
          animate={{ cx: [310, 464], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.45 }}
          cy="130"
        />
        <motion.circle
          r="5"
          fill="#10b981"
          animate={{ cx: [345, 464], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
          cy="185"
        />

        {/* End verified checkmark nodes */}
        {[
          { cy: 75, fill: "#0ea5e9" },
          { cy: 130, fill: "#15428b" },
          { cy: 185, fill: "#10b981" },
        ].map((node) => (
          <g key={node.cy}>
            <circle cx="478" cy={node.cy} r="13" fill={node.fill} />
            <path
              d={`M 472.5 ${node.cy} L 476.5 ${node.cy + 4} L 484 ${node.cy - 4.5}`}
              stroke="#ffffff"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        ))}

        {/* Center BBM Diagnostic Lens */}
        <motion.circle
          cx="255"
          cy="130"
          r="46"
          stroke="#15428b"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          opacity="0.4"
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "255px 130px" }}
        />
        <circle cx="255" cy="130" r="36" fill="#0b1220" />
        <circle cx="255" cy="130" r="31" stroke="#38bdf8" strokeWidth="1.5" opacity="0.55" />
        {/* Stylized geometric prism mark inside hub */}
        <polygon
          points="255,109 273,120 273,140 255,151 237,140 237,120"
          stroke="#ffffff"
          strokeWidth="2"
          fill="#15428b"
        />
        <circle cx="255" cy="130" r="5" fill="#38bdf8" />
      </svg>
    </div>
  );
}

/* ========================================================================== */
/* TASK 2: Replaces "Instalaciones especiales y respaldo físico"              */
/* Pure visual architectural blueprint: CCTV sweep + Network hub + Smart Lock */
/* ========================================================================== */

export function SpecialInstallationsVisual() {
  return (
    <div
      role="img"
      aria-label="Plano visual interactivo de instalaciones especiales: cámaras de seguridad, red y cerrojos inteligentes"
      className="relative overflow-hidden rounded-xl border border-slate-800 bg-[#081020] p-4 shadow-md sm:p-5"
    >
      <svg
        viewBox="0 0 460 250"
        className="h-auto w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cctv-cone" x1="60" y1="48" x2="215" y2="175" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" stopOpacity="0.45" />
            <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="wifi-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Architectural Facility Floorplan Walls */}
        <rect
          x="22"
          y="20"
          width="416"
          height="210"
          rx="8"
          stroke="#1e293b"
          strokeWidth="2.5"
          fill="#0c172c"
        />
        {/* Interior room dividers */}
        <path
          d="M 22 135 H 148 M 192 135 H 235 V 20 M 235 162 V 230 M 320 20 V 105 H 438"
          stroke="#1e3a5f"
          strokeWidth="2"
        />

        {/* Animated CCTV Sweeping Coverage Cone (Top-Left Camera) */}
        <motion.g
          animate={{ rotate: [-12, 16, -12] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "54px 46px" }}
        >
          <path d="M 54 46 L 205 92 L 154 185 Z" fill="url(#cctv-cone)" />
        </motion.g>

        {/* Camera Hardware Emblem (Top-Left) */}
        <circle cx="54" cy="46" r="14" fill="#0f2342" stroke="#38bdf8" strokeWidth="1.8" />
        <rect x="46" y="41" width="12" height="9" rx="2" fill="#38bdf8" />
        <polygon points="58,43 64,40 64,51 58,48" fill="#7dd3fc" />
        <motion.circle
          cx="49"
          cy="44"
          r="1.8"
          fill="#ef4444"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />

        {/* Structured Network Conduits from Central Router */}
        <path d="M 278 124 H 378 V 62" stroke="#2563eb" strokeWidth="2" strokeDasharray="5 5" opacity="0.7" />
        <path d="M 278 124 H 176 V 188" stroke="#2563eb" strokeWidth="2" strokeDasharray="5 5" opacity="0.7" />
        <path d="M 278 124 V 188 H 378" stroke="#10b981" strokeWidth="2" strokeDasharray="5 5" opacity="0.7" />

        {/* Pulsing Network Core Waves (Center-Right) */}
        <circle cx="278" cy="124" r="56" fill="url(#wifi-glow)" />
        {[0, 1].map((ring) => (
          <motion.circle
            key={ring}
            cx="278"
            cy="124"
            r="16"
            stroke="#38bdf8"
            strokeWidth="1.5"
            animate={{ r: [16, 48], opacity: [0.75, 0] }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              delay: ring * 1.3,
              ease: "easeOut",
            }}
          />
        ))}
        {/* Router Core Node */}
        <circle cx="278" cy="124" r="16" fill="#15428b" stroke="#60a5fa" strokeWidth="2" />
        <path
          d="M 271 128 C 275 123, 281 123, 285 128 M 274 123 C 276 120, 280 120, 282 123"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="278" cy="131" r="1.8" fill="#38bdf8" />

        {/* Connected Endpoint Nodes */}
        <rect x="364" y="48" width="28" height="22" rx="4" fill="#102542" stroke="#60a5fa" strokeWidth="1.6" />
        <line x1="370" y1="74" x2="386" y2="74" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" />

        <rect x="162" y="176" width="28" height="22" rx="4" fill="#102542" stroke="#60a5fa" strokeWidth="1.6" />
        <line x1="168" y1="202" x2="184" y2="202" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" />

        {/* Animated Data Pulses on Conduits */}
        <motion.circle
          r="3.5"
          fill="#38bdf8"
          animate={{ cx: [278, 378], opacity: [1, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
          cy="124"
        />
        <motion.circle
          r="3.5"
          fill="#10b981"
          animate={{ cx: [278, 378], opacity: [1, 1, 0] }}
          transition={{ duration: 2.1, repeat: Infinity, ease: "linear", delay: 0.7 }}
          cy="188"
        />

        {/* Smart Lock Access Control (Bottom-Right Door) */}
        <motion.circle
          cx="388"
          cy="188"
          r="22"
          stroke="#10b981"
          strokeWidth="1.5"
          animate={{ scale: [1, 1.22, 1], opacity: [0.65, 0.15, 0.65] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "388px 188px" }}
        />
        <circle cx="388" cy="188" r="16" fill="#064e3b" stroke="#34d399" strokeWidth="1.8" />
        {/* Padlock icon */}
        <rect x="381" y="187" width="14" height="10" rx="2" fill="#34d399" />
        <path
          d="M 384 187 V 183 C 384 180.5, 392 180.5, 392 183 V 187"
          stroke="#a7f3d0"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/* ========================================================================== */
/* TASK 4: Replaces "Red de asociados y capacidad operativa BBM"              */
/* Pure visual orbital constellation: BBM Core + 4 Iconic Partner Satellites  */
/* ========================================================================== */

export function OperationalCapacityOrbitalVisual() {
  return (
    <div
      role="img"
      aria-label="Constelación visual de la red de asociados y capacidad operativa de BBM"
      className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-[#070f20] via-[#0c1a36] to-[#081226] p-4 shadow-lg sm:p-6"
    >
      <svg
        viewBox="0 0 460 300"
        className="h-auto w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="orbital-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
            <stop offset="65%" stopColor="#1d4ed8" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#070f20" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient radial core light */}
        <circle cx="230" cy="150" r="135" fill="url(#orbital-core-glow)" />

        {/* Concentric rotating orbital rings */}
        <motion.circle
          cx="230"
          cy="150"
          r="116"
          stroke="#38bdf8"
          strokeWidth="1.2"
          strokeDasharray="6 10"
          opacity="0.35"
          animate={{ rotate: 360 }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "230px 150px" }}
        />
        <motion.circle
          cx="230"
          cy="150"
          r="78"
          stroke="#60a5fa"
          strokeWidth="1.2"
          strokeDasharray="4 8"
          opacity="0.4"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "230px 150px" }}
        />

        {/* Connecting luminous spokes */}
        <line x1="230" y1="150" x2="108" y2="74" stroke="#38bdf8" strokeWidth="1.6" opacity="0.45" />
        <line x1="230" y1="150" x2="352" y2="74" stroke="#34d399" strokeWidth="1.6" opacity="0.45" />
        <line x1="230" y1="150" x2="108" y2="226" stroke="#fbbf24" strokeWidth="1.6" opacity="0.45" />
        <line x1="230" y1="150" x2="352" y2="226" stroke="#818cf8" strokeWidth="1.6" opacity="0.45" />

        {/* Animated energy pulses radiating from BBM core */}
        <motion.circle
          r="3.5"
          fill="#38bdf8"
          animate={{ cx: [230, 108], cy: [150, 74], opacity: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          r="3.5"
          fill="#34d399"
          animate={{ cx: [230, 352], cy: [150, 74], opacity: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.55 }}
        />
        <motion.circle
          r="3.5"
          fill="#fbbf24"
          animate={{ cx: [230, 108], cy: [150, 226], opacity: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
        />
        <motion.circle
          r="3.5"
          fill="#818cf8"
          animate={{ cx: [230, 352], cy: [150, 226], opacity: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1.65 }}
        />

        {/* Satellite 1 (Top-Left): Telescopic Crane Boom Silhouette */}
        <motion.g
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="108" cy="74" r="28" fill="#0f2342" stroke="#38bdf8" strokeWidth="2" />
          {/* Crane boom icon */}
          <path d="M 94 84 L 116 62 L 122 65 L 102 85 Z" fill="#38bdf8" />
          <line x1="119" y1="65" x2="119" y2="79" stroke="#bae6fd" strokeWidth="1.8" />
          <path d="M 116 79 C 116 82, 122 82, 122 79" stroke="#bae6fd" strokeWidth="1.8" />
          <rect x="92" y="83" width="16" height="5" rx="1.5" fill="#7dd3fc" />
        </motion.g>

        {/* Satellite 2 (Top-Right): Security Shield & Camera */}
        <motion.g
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="352" cy="74" r="28" fill="#092c27" stroke="#34d399" strokeWidth="2" />
          <path
            d="M 352 57 L 365 62 V 73 C 365 81, 359 87, 352 90 C 345 87, 339 81, 339 73 V 62 L 352 57 Z"
            stroke="#34d399"
            strokeWidth="2"
            fill="#10b981"
            fillOpacity="0.22"
          />
          <path
            d="M 347 74 L 350.5 77.5 L 358 69.5"
            stroke="#a7f3d0"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Satellite 3 (Bottom-Left): Construction / Infrastructure */}
        <motion.g
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          <circle cx="108" cy="226" r="28" fill="#2c220a" stroke="#fbbf24" strokeWidth="2" />
          <rect x="96" y="216" width="11" height="21" rx="1.5" stroke="#fbbf24" strokeWidth="1.8" fill="#f59e0b" fillOpacity="0.2" />
          <rect x="109" y="210" width="12" height="27" rx="1.5" stroke="#fcd34d" strokeWidth="1.8" fill="#fbbf24" fillOpacity="0.25" />
          <line x1="113" y1="216" x2="117" y2="216" stroke="#fef3c7" strokeWidth="1.5" />
          <line x1="113" y1="222" x2="117" y2="222" stroke="#fef3c7" strokeWidth="1.5" />
          <line x1="113" y1="228" x2="117" y2="228" stroke="#fef3c7" strokeWidth="1.5" />
        </motion.g>

        {/* Satellite 4 (Bottom-Right): Digital Marketing & Growth Signal */}
        <motion.g
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        >
          <circle cx="352" cy="226" r="28" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
          <path
            d="M 339 234 L 347 225 L 353 229 L 364 216"
            stroke="#a5b4fc"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="357,216 364,216 364,223"
            stroke="#a5b4fc"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Central BBM Hexagonal Core */}
        <motion.circle
          cx="230"
          cy="150"
          r="46"
          stroke="#38bdf8"
          strokeWidth="1.5"
          animate={{ scale: [1, 1.14, 1], opacity: [0.45, 0.1, 0.45] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "230px 150px" }}
        />
        <polygon
          points="230,108 266,129 266,171 230,192 194,171 194,129"
          fill="#0b1220"
          stroke="#38bdf8"
          strokeWidth="2.2"
        />
        <polygon
          points="230,118 258,134 258,166 230,182 202,166 202,134"
          fill="#15428b"
          fillOpacity="0.6"
        />
        <text
          x="230"
          y="155"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="15"
          fontWeight="700"
          letterSpacing="3"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
        >
          BBM
        </text>
      </svg>
    </div>
  );
}
