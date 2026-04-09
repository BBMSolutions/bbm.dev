import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { cn } from "@/lib/utils";

// Configuración de fuentes
const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

// SEO y Metadatos de BBM
export const metadata: Metadata = {
  title: "BBM.dev | Soluciones Tecnológicas de Alto Impacto",
  description: "Desarrollo de plataformas a medida y optimización de procesos para empresas modernas.",
  keywords: ["Desarrollo Web", "Software a medida", "BBM", "Optimización de procesos"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}