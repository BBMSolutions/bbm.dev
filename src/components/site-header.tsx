"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, MessageCircle, Phone } from "lucide-react";
import { BBM_CONTACT, NAV_LINKS } from "@/data/bbm-content";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/90 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Monogram */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-none"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#0b1220] font-mono text-xs font-semibold tracking-widest text-white transition-colors group-hover:bg-[#15428b]">
            BBM
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-[#0b1220]">
              BBM Soluciones
            </span>
            <span className="hidden text-[11px] text-slate-500 sm:block">
              Control y herramientas digitales
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Navegación principal" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-[#0b1220]"
                    : "text-slate-600 hover:text-[#0b1220]"
                )}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3.5 -bottom-[17px] h-0.5 bg-[#15428b]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2.5 md:flex">
          <a
            href={BBM_CONTACT.mailtoUrl()}
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "h-9 px-3 text-slate-600 hover:text-[#0b1220]"
            )}
          >
            <Mail className="h-4 w-4" />
            <span>Correo</span>
          </a>
          <a
            href={BBM_CONTACT.whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "h-9 rounded-sm bg-[#0b1220] px-4 text-white hover:bg-[#15428b]"
            )}
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp · {BBM_CONTACT.phoneFormatted}</span>
          </a>
        </div>

        {/* Mobile Drawer */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={BBM_CONTACT.whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className={cn(
              buttonVariants({ variant: "default", size: "icon-sm" }),
              "h-9 w-9 rounded-sm bg-[#0b1220] text-white hover:bg-[#15428b]"
            )}
          >
            <MessageCircle className="h-4 w-4" />
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon-sm"
                  className="h-9 w-9 rounded-sm border-slate-300"
                  aria-label="Abrir menú de navegación"
                />
              }
            >
              <Menu className="h-4 w-4" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white p-0 sm:w-[340px]">
              <SheetHeader className="border-b border-slate-200 px-6 py-5 text-left">
                <SheetTitle className="flex items-center gap-2.5 text-base font-semibold text-[#0b1220]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#0b1220] font-mono text-[10px] font-semibold tracking-widest text-white">
                    BBM
                  </span>
                  BBM Soluciones
                </SheetTitle>
                <SheetDescription className="text-xs text-slate-500">
                  Desarrollo a la medida y control digital para empresas.
                </SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col p-4" aria-label="Menú móvil">
                {NAV_LINKS.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-sm px-3.5 py-3 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-slate-100 text-[#0b1220]"
                          : "text-slate-600 hover:bg-slate-50 hover:text-[#0b1220]"
                      )}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#15428b]" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-auto border-t border-slate-200 bg-slate-50 p-5">
                <p className="font-mono text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                  Contacto directo
                </p>
                <div className="mt-3 flex flex-col gap-2.5">
                  <a
                    href={BBM_CONTACT.whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "h-10 w-full justify-start rounded-sm bg-[#0b1220] px-4 text-white hover:bg-[#15428b]"
                    )}
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp: {BBM_CONTACT.phoneFormatted}</span>
                  </a>
                  <a
                    href={`tel:${BBM_CONTACT.phoneRaw}`}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "h-10 w-full justify-start rounded-sm border-slate-300 bg-white px-4 text-slate-800"
                    )}
                  >
                    <Phone className="h-4 w-4" />
                    <span>Llamar: {BBM_CONTACT.phoneFormatted}</span>
                  </a>
                  <a
                    href={BBM_CONTACT.mailtoUrl()}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "h-10 w-full justify-start rounded-sm border-slate-300 bg-white px-4 text-slate-800"
                    )}
                  >
                    <Mail className="h-4 w-4" />
                    <span className="truncate">{BBM_CONTACT.email}</span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
