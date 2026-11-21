import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import {
  BBM_CONTACT,
  INSTITUTIONAL_CLIENTS,
  NAV_LINKS,
} from "@/data/bbm-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070c16] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-white font-mono text-xs font-semibold tracking-widest text-[#0b1220]">
                BBM
              </span>
              <span className="text-sm font-semibold tracking-tight text-white">
                BBM Soluciones Digitales
              </span>
            </div>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-slate-400 sm:text-sm">
              Empresa multidisciplinaria de desarrollo de software a la medida,
              plataformas por suscripción y soluciones digitales para el control
              sano y eficiente de las empresas.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <p className="font-mono text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
              Navegación
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional trust */}
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
              Respaldo y confianza
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-400 sm:text-sm">
              {INSTITUTIONAL_CLIENTS.map((client) => (
                <li key={client.name} className="text-slate-300">
                  {client.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Direct contact */}
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
              Contacto
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={BBM_CONTACT.whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 text-slate-400" />
                  <span>WhatsApp: {BBM_CONTACT.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BBM_CONTACT.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-slate-400" />
                  <span>Tel: {BBM_CONTACT.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={BBM_CONTACT.mailtoUrl()}
                  className="inline-flex items-center gap-2 break-all text-slate-300 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-slate-400" />
                  <span>{BBM_CONTACT.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© 2026 BBM. Todos los derechos reservados.</p>
          <p className="font-mono text-[11px]">
            Chiapas, México · Control, orden y tecnología aplicada
          </p>
        </div>
      </div>
    </footer>
  );
}
