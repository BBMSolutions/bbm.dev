
🚀 bbm.dev - Tech Stack & Guidelines

Este documento detalla las tecnologías y convenciones utilizadas en el desarrollo de la landing page de bbm.dev. Todo el equipo debe seguir estas bases para mantener la consistencia y el rendimiento.



🛠 Core Stack

Framework: Next.js 16 (App Router) - React 19.

Package Manager: pnpm - No usar npm ni yarn para evitar conflictos con el lockfile.

Lenguaje: TypeScript (Strict Mode).

🎨 Estética y UI

Estilos: Tailwind CSS v4 (Configuración basada en CSS vía @theme en globals.css).

Componentes Base: Shadcn/ui (Preset: Nova | Librería: Radix UI).

Iconografía: Lucide React (Priorizar sobre otras librerías para mantener el peso del bundle bajo).

🎞 Animaciones y UX

Motion: Framer Motion 12 - Para micro-interacciones y transiciones.

Scroll: Lenis - Para Smooth Scrolling (pendiente de implementación completa).

🔧 Utilidades de Desarrollo

Para manejar clases de Tailwind dinámicas, usar siempre la función cn() ubicada en @/lib/utils:



TypeScript



import { cn } from "@/lib/utils"



<div className={cn("clase-base", condicion && "clase-extra")} />

📋 Comandos Frecuentes

Instalar dependencias: pnpm install

Levantar entorno local: pnpm dev

Añadir componente de UI: pnpm dlx shadcn@latest add [nombre-componente]