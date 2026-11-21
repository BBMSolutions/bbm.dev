import { Camera, Film } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MediaPlaceholderProps {
  title: string;
  description: string;
  dimensions: string;
  format: string;
  mediaType?: "photo" | "video";
  aspect?: "hero" | "landscape" | "portrait" | "wide" | "square" | "auto";
  className?: string;
  compact?: boolean;
}

const aspectClasses: Record<NonNullable<MediaPlaceholderProps["aspect"]>, string> = {
  hero: "min-h-[300px] sm:min-h-[380px] lg:aspect-[16/10]",
  landscape: "min-h-[260px] sm:aspect-[16/10]",
  portrait: "min-h-[280px] sm:aspect-[4/5]",
  wide: "min-h-[240px] sm:aspect-[21/9]",
  square: "min-h-[260px] sm:aspect-square",
  auto: "min-h-[240px]",
};

export function MediaPlaceholder({
  title,
  description,
  dimensions,
  format,
  mediaType = "photo",
  aspect = "landscape",
  className,
  compact = false,
}: MediaPlaceholderProps) {
  const Icon = mediaType === "video" ? Film : Camera;

  return (
    <figure
      className={cn(
        "relative flex w-full flex-col justify-between overflow-hidden rounded-md border border-dashed border-slate-300 bg-white text-slate-900 shadow-[0_1px_2px_rgba(11,18,32,0.04)]",
        aspectClasses[aspect],
        compact ? "p-4 sm:p-5" : "p-5 sm:p-7",
        className
      )}
    >
      {/* Subtle architectural corner registration marks */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-2 left-2 h-3 w-3 border-t-2 border-l-2 border-slate-300"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-2 right-2 h-3 w-3 border-t-2 border-r-2 border-slate-300"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-slate-300"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-2 bottom-2 h-3 w-3 border-r-2 border-b-2 border-slate-300"
      />

      {/* Top slot label */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium tracking-wider text-[#15428b] uppercase">
          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
          {mediaType === "video" ? "Recurso multimedia — Fase 2" : "Espacio fotográfico — Fase 2"}
        </span>
        <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] font-medium text-slate-600">
          Reemplazable
        </span>
      </div>

      {/* Exact 4-point ordered specification required by the client */}
      <dl
        className={cn(
          "my-auto grid gap-2.5 py-3 text-left",
          compact ? "text-xs leading-relaxed" : "text-xs sm:text-sm leading-relaxed"
        )}
      >
        <div>
          <dt className="font-mono text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
            1.- Título
          </dt>
          <dd className="mt-0.5 font-semibold text-slate-900">{title}</dd>
        </div>

        <div>
          <dt className="font-mono text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
            2.- Descripción propuesta
          </dt>
          <dd className="mt-0.5 text-slate-600">{description}</dd>
        </div>

        <div className="grid grid-cols-1 gap-2.5 pt-1 sm:grid-cols-2">
          <div className="rounded border border-slate-200/80 bg-slate-50/70 px-3 py-2">
            <dt className="font-mono text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
              3.- Tamaño (px)
            </dt>
            <dd className="mt-0.5 font-mono text-xs font-medium text-slate-900">
              {dimensions}
            </dd>
          </div>
          <div className="rounded border border-slate-200/80 bg-slate-50/70 px-3 py-2">
            <dt className="font-mono text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
              4.- Formato
            </dt>
            <dd className="mt-0.5 font-mono text-xs font-medium text-slate-900">
              {format}
            </dd>
          </div>
        </div>
      </dl>
    </figure>
  );
}
