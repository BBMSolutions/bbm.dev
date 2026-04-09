import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import Navbar from "@/components/navigation/navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background selection:bg-primary/30">
      {/* Navegación con efecto Blur */}
      <Navbar />

      {/* Secciones principales */}
      <HeroSection />

      {/* Aquí es donde explicamos que BBM hace plataformas y optimización */}
      <ServicesSection />

      {/* Espacio para futuras secciones: Portfolio, Testimonios, etc. */}
    </main>
  );
}