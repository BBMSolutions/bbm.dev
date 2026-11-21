import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Laptop,
  Mail,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Wrench,
} from "lucide-react";
import {
  BBM_CONTACT,
  INSTITUTIONAL_CLIENTS,
  METHODOLOGY_STEPS,
  PROPOSAL_CATEGORIES,
  SUBSCRIPTION_PLATFORMS,
} from "@/data/bbm-content";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { LiveControlDashboard } from "@/components/live-control-dashboard";
import { SubscriptionPlatformSimulator } from "@/components/section-live-animations";
import {
  DiagnosticBlueprintVisual,
  SpecialInstallationsVisual,
} from "@/components/visual-illustrations";
import { ContactCta } from "@/components/contact-cta";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HERO_METRICS = [
  { value: "70%", label: "Procesos internos más rápidos" },
  { value: "214%", label: "Mayor fiabilidad y respaldo" },
  { value: "192%", label: "Impulso en ingresos operativos" },
  { value: "+37%", label: "Protección en flujo de dinero" },
] as const;

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 01 · HERO — Multi-layered depth + Live Administration System Loop */}
      <section className="depth-canvas-light relative overflow-hidden border-b border-slate-200/90">
        {/* Layer 1: Recessed photographic architectural depth */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.07]"
          style={{ backgroundImage: "url('/images/visual-studio-depth.jpg')" }}
        />
        {/* Layer 2: Soft directional light & depth separation */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#eef2f7] to-transparent"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-sm border border-[#15428b]/20 bg-white/90 px-3 py-1.5 font-mono text-[11px] font-medium tracking-wider text-[#15428b] uppercase shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#15428b]" />
                Soluciones digitales para empresas
              </div>

              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[#0b1220] sm:text-5xl lg:text-[50px] lg:leading-[1.08]">
                Control total de tu empresa en herramientas hechas a tu medida.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                En <strong className="font-semibold text-[#0b1220]">BBM</strong>{" "}
                diseñamos plataformas claras para computadora, tableta y celular
                que simplifican tus procesos internos, ahorran tiempo y dinero,
                y le dan al dueño tranquilidad y visibilidad real sobre cada
                movimiento.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={BBM_CONTACT.whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 rounded-sm bg-[#0b1220] px-6 text-sm font-semibold text-white shadow-sm hover:bg-[#15428b]"
                  )}
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Hablar por WhatsApp</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href={BBM_CONTACT.mailtoUrl()}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 rounded-sm border-slate-300 bg-white/90 px-5 text-sm font-medium text-[#0b1220] shadow-xs hover:bg-white"
                  )}
                >
                  <Mail className="h-4 w-4" />
                  <span>Enviar correo</span>
                </a>

                <Link
                  href="/propuestas"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "lg" }),
                    "h-12 rounded-sm px-4 text-sm font-medium text-[#15428b] hover:bg-white/70 hover:text-[#0b1220]"
                  )}
                >
                  <span>Explorar propuestas</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-300/70 pt-5 text-xs text-slate-600">
                <span className="inline-flex items-center gap-1.5">
                  <Laptop className="h-3.5 w-3.5 text-[#15428b]" />
                  Web y escritorio
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Smartphone className="h-3.5 w-3.5 text-[#15428b]" />
                  Celular y tableta
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#15428b]" />
                  Avisos en tiempo real
                </span>
              </div>
            </Reveal>

            {/* Looping Administration System Interface Animation */}
            <Reveal delay={0.1} className="lg:col-span-6">
              <LiveControlDashboard />
            </Reveal>
          </div>

          {/* Elevated Impact Strip */}
          <StaggerGroup className="depth-card-elevated mt-14 grid grid-cols-2 divide-x divide-y divide-slate-200/80 overflow-hidden rounded-md lg:grid-cols-4 lg:divide-y-0">
            {HERO_METRICS.map((metric) => (
              <StaggerItem key={metric.label} className="p-5 sm:p-6">
                <p className="font-mono text-2xl font-semibold tracking-tight text-[#0b1220] sm:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-1.5 text-xs leading-snug text-slate-600 sm:text-sm">
                  {metric.label}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 02 · RESPALDO INSTITUCIONAL (Corrected Info + Tech Badge) */}
      <section className="depth-canvas-slate border-b border-slate-200/90 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="font-mono text-xs font-medium tracking-widest text-[#15428b] uppercase">
                01 · Respaldo comprobado
              </p>
              <h2 className="mt-2.5 text-2xl font-semibold tracking-tight text-[#0b1220]">
                Organizaciones de renombre confían y operan con tecnología BBM
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Estas cuatro organizaciones cuentan con y utilizan tecnología
                desarrollada por BBM en ámbitos que exigen precisión, seriedad y
                control real.
              </p>

              {/* Editorial photographic accent card */}
              <div className="mt-6 overflow-hidden rounded-md border border-slate-300/70 bg-white shadow-sm">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/visual-industrial-precision.jpg"
                    alt="Entorno técnico y operativo moderno respaldado por ingeniería"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/75 via-[#0b1220]/15 to-transparent" />
                  <p className="absolute right-3 bottom-2.5 left-3 font-mono text-[10px] tracking-wider text-white/90 uppercase">
                    Tecnología aplicada en entornos reales
                  </p>
                </div>
              </div>
            </Reveal>

            <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
              {INSTITUTIONAL_CLIENTS.map((client) => (
                <StaggerItem
                  key={client.name}
                  className="depth-card flex flex-col justify-between rounded-md border border-slate-200/90 p-5"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <span className="font-mono text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                          {client.category}
                        </span>
                        <h3 className="mt-1.5 text-base font-semibold tracking-tight text-[#0b1220]">
                          {client.name}
                        </h3>
                      </div>
                      <div className="relative flex h-12 w-14 shrink-0 items-center justify-center rounded-md border border-slate-200/80 bg-white p-1.5 shadow-[0_1px_2px_rgba(11,18,32,0.04)]">
                        <Image
                          src={client.logo}
                          alt={client.logoAlt}
                          fill
                          className="object-contain p-1.5"
                          sizes="56px"
                        />
                      </div>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {client.summary}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 border-t border-slate-200/70 pt-3">
                    <Cpu className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="font-mono text-[10px] font-semibold tracking-wider text-emerald-700 uppercase">
                      {client.badge}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* 03 · QUÉ HACEMOS Y CÓMO LO HACEMOS */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Editorial photographic depth banner */}
          <Reveal className="mb-14 overflow-hidden rounded-lg border border-slate-200/90 shadow-md">
            <div className="relative grid grid-cols-1 lg:grid-cols-12">
              <div className="relative min-h-[220px] lg:col-span-6 lg:min-h-[280px]">
                <Image
                  src="/images/visual-control-operations.jpg"
                  alt="Espacio ejecutivo moderno orientado al orden y control empresarial"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220]/30 to-transparent" />
              </div>
              <div className="depth-canvas-dark flex flex-col justify-center p-6 text-white sm:p-8 lg:col-span-6">
                <p className="font-mono text-[11px] font-medium tracking-widest text-sky-300 uppercase">
                  Tranquilidad directiva
                </p>
                <h2 className="mt-2.5 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  Saber exactamente qué ocurre en tu empresa cambia la forma en
                  que diriges
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Cuando cada solicitud, entrega y movimiento queda respaldado
                  automáticamente, dejas de apagar incendios y recuperas el
                  control total de tu tiempo y tus resultados.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="font-mono text-xs font-medium tracking-widest text-[#15428b] uppercase">
                02 · Qué hacemos
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0b1220] sm:text-3xl">
                Simplificamos tu operación interna para que el negocio crezca con orden
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Nuestro punto fuerte es el desarrollo a la medida de
                herramientas digitales que funcionan en computadora, tableta y
                teléfono. No vendemos programas complicados: construimos
                sistemas prácticos adaptados exactamente a la forma en que opera
                tu empresa.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#15428b]" />
                  <span>
                    <strong className="font-semibold text-[#0b1220]">
                      Control total para el dueño o director:
                    </strong>{" "}
                    supervisa procesos, avances y personal sin perseguir
                    reportes manuales.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#15428b]" />
                  <span>
                    <strong className="font-semibold text-[#0b1220]">
                      Decisiones basadas en datos claros:
                    </strong>{" "}
                    recapitula la información clave de tu operación en segundos.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#15428b]" />
                  <span>
                    <strong className="font-semibold text-[#0b1220]">
                      Prevención de fugas y errores:
                    </strong>{" "}
                    detecta comportamientos anómalos, retrabajos y pérdidas de
                    dinero a tiempo.
                  </span>
                </li>
              </ul>

              <div className="mt-8">
                <DiagnosticBlueprintVisual />
              </div>
            </Reveal>

            {/* Cómo lo hacemos: 4 steps */}
            <div className="lg:col-span-7">
              <Reveal>
                <p className="font-mono text-xs font-medium tracking-widest text-[#15428b] uppercase">
                  03 · Cómo lo hacemos
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0b1220] sm:text-3xl">
                  Un proceso claro, de principio a fin
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Acompañamos a tu empresa desde el diagnóstico inicial hasta la
                  capacitación completa de tu personal, hablando siempre en un
                  lenguaje claro y orientado a resultados.
                </p>
              </Reveal>

              <StaggerGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {METHODOLOGY_STEPS.map((item) => (
                  <StaggerItem
                    key={item.step}
                    className="depth-card flex flex-col justify-between rounded-md border border-slate-200/90 p-6"
                  >
                    <div>
                      <span className="font-mono text-xs font-semibold text-[#15428b]">
                        PASO {item.step}
                      </span>
                      <h3 className="mt-2 text-base font-semibold text-[#0b1220]">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>

              {/* Quick preview of the 4 specialties */}
              <Reveal
                delay={0.1}
                className="depth-card-elevated mt-8 rounded-md p-6"
              >
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div>
                    <p className="font-mono text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                      Especialidades a la medida
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-[#0b1220]">
                      Cuatro áreas clave donde transformamos tu operación
                    </h3>
                  </div>
                  <Link
                    href="/propuestas"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#15428b] hover:underline"
                  >
                    <span>Ver detalle completo</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {PROPOSAL_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/propuestas#${cat.id}`}
                      className="group flex items-start justify-between gap-3 rounded-sm border border-slate-200 bg-slate-50/70 p-4 transition-all hover:border-[#15428b] hover:bg-white hover:shadow-xs"
                    >
                      <div>
                        <span className="font-mono text-[11px] font-semibold text-[#15428b]">
                          {cat.index}
                        </span>
                        <p className="mt-1 text-sm font-semibold text-[#0b1220]">
                          {cat.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-600">
                          {cat.lead}
                        </p>
                      </div>
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-[#15428b]" />
                    </Link>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 04 · PLATAFORMAS PROPIAS POR SUSCRIPCIÓN (With Live Workflow Animations + MediaPlaceholders) */}
      <section className="depth-canvas-slate border-b border-slate-200/90 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-xs font-medium tracking-widest text-[#15428b] uppercase">
              04 · Plataformas por suscripción
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0b1220] sm:text-3xl">
              Soluciones ya desarrolladas y listas para operar en tu negocio
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Además del desarrollo a la medida, BBM cuenta con plataformas
              propias bajo modelo de suscripción diseñadas específicamente para
              resolver la operación diaria de talleres automotrices y
              consultorios de salud en México.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {SUBSCRIPTION_PLATFORMS.map((platform) => (
              <Reveal
                key={platform.id}
                className="depth-card-elevated flex flex-col justify-between rounded-md p-6 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-sm bg-[#0b1220] px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wider text-white">
                      {platform.name}
                    </span>
                    <span className="font-mono text-[11px] text-slate-500 uppercase">
                      Modelo suscripción
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#0b1220]">
                    {platform.tagline}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {platform.description}
                  </p>

                  {/* Live animated workflow strip (preserving MediaPlaceholder below) */}
                  <div className="mt-5">
                    <SubscriptionPlatformSimulator platformId={platform.id} />
                  </div>

                  <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
                    {platform.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#15428b]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="relative aspect-[14/9] w-full overflow-hidden rounded-md border border-slate-200/90 bg-slate-100 shadow-xs">
                    <Image
                      src={platform.imageSrc}
                      alt={platform.imageAlt}
                      fill
                      className="object-cover object-bottom"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <a
                    href={BBM_CONTACT.whatsappUrl(
                      `Hola equipo BBM, me gustaría solicitar una demostración de ${platform.name}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "h-10 w-full rounded-sm border-slate-300 bg-white font-medium text-[#0b1220] hover:bg-slate-50"
                    )}
                  >
                    <span>Solicitar demostración de {platform.name}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 · RECURSOS VISUALES Y MULTIMEDIA PROPUESTOS */}
      <section className="border-b border-slate-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-medium tracking-widest text-[#15428b] uppercase">
                05 · Experiencia visual y casos en operación
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0b1220] sm:text-3xl">
                Tecnología práctica diseñada para el día a día real
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Nuestras herramientas se adaptan tanto a la oficina del director
                como al trabajo activo en piso, mostrador o campo.
              </p>
            </div>
            <Link
              href="/equipo"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#15428b] hover:underline"
            >
              <span>Conoce a los especialistas detrás de BBM</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <MediaPlaceholder
                aspect="landscape"
                mediaType="video"
                title="Video institucional — Cómo BBM transforma la operación de una empresa"
                description="Video breve (45 a 60 segundos) sin tecnicismos: muestra el contraste entre una oficina saturada de papeleo y una empresa ordenada trabajando con plataformas de BBM en computadora y celular, cerrando con la tranquilidad del dueño revisando sus reportes."
                dimensions="1920 × 1080 px (Full HD)"
                format="MP4 (H.264) / WebM"
              />
            </Reveal>
            <Reveal delay={0.08} className="grid grid-cols-1 gap-6 lg:col-span-5">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl border border-slate-200/90 bg-slate-100 shadow-sm">
                <Image
                  src="/images/sections/uso-multidispositivo.webp"
                  alt="Uso multidispositivo de plataformas BBM en computadora, tableta y teléfono"
                  fill
                  className="object-cover object-bottom"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <SpecialInstallationsVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 06 · CAPACIDAD OPERATIVA AMPLIADA (RED DE ASOCIADOS) */}
      <section className="depth-canvas-slate py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="depth-card-elevated rounded-md p-6 sm:p-10">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-widest text-[#15428b] uppercase">
                  <Wrench className="h-3.5 w-3.5" />
                  <span>06 · Asociación empresarial</span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0b1220] sm:text-3xl">
                  Más que software: una red operativa que respalda tu proyecto
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  BBM forma parte de una asociación de empresas que amplía
                  nuestra capacidad para resolver necesidades integrales: desde{" "}
                  <strong className="font-medium text-[#0b1220]">
                    instalaciones especiales
                  </strong>{" "}
                  (cámaras de seguridad, redes y cerrojos inteligentes) hasta{" "}
                  <strong className="font-medium text-[#0b1220]">
                    grúas telescópicas, construcción y marketing digital
                  </strong>
                  .
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
                <Link
                  href="/asociados"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-11 rounded-sm bg-[#0b1220] px-5 text-sm font-medium text-white hover:bg-[#15428b]"
                  )}
                >
                  <span>Ver vista previa de asociados</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 07 · LLAMADO A LA ACCIÓN FINAL */}
      <ContactCta />
    </div>
  );
}
