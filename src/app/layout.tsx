import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RouteLoader } from "@/components/route-loader";
import { SmoothScroll } from "@/components/smooth-scroll";
import { PwaRegister } from "@/components/pwa-register";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#0b1220",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  applicationName: "BBM",
  title: {
    default: "BBM | Herramientas Digitales a la Medida y Control Empresarial",
    template: "%s | BBM",
  },
  description:
    "BBM desarrolla herramientas digitales a la medida y plataformas por suscripción para simplificar procesos internos, optimizar flujos de trabajo y dar a cada dueño control total sobre su empresa.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "BBM",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${plusJakartaSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <PwaRegister />
        <SmoothScroll />
        <RouteLoader />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
