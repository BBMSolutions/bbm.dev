"use client";

import { motion, Variants } from "framer-motion"; // Importamos el tipo Variants
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";

export default function HeroSection() {
    // Definimos explícitamente el tipo Variants para que TypeScript no se queje
    const FADE_UP_ANIMATION_VARIANTS: Variants = {
        hidden: { opacity: 0, y: 10 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring", // Ahora TS sabe que este "spring" es válido
                duration: 0.8
            }
        },
    };

    return (
        <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-24 md:pt-48 md:pb-32">
            {/* Background Decor */}
            <div className="absolute top-0 -z-10 h-full w-full">
                <div className="absolute bottom-auto left-1/2 right-auto top-0 h-[500px] w-[800px] -translate-x-1/2 translate-y-[-10%] rounded-full bg-primary/5 blur-[120px]" />
            </div>

            <motion.div
                initial="hidden"
                animate="show"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
                className="text-center"
            >
                <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex justify-center">
                    <span className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                        <Code2 size={16} />
                        Software de alto impacto
                    </span>
                </motion.div>

                <motion.h1
                    variants={FADE_UP_ANIMATION_VARIANTS}
                    className="mt-8 text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl"
                >
                    Diseñamos las plataformas <br />
                    <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        que tu empresa merece
                    </span>
                </motion.h1>

                <motion.p
                    variants={FADE_UP_ANIMATION_VARIANTS}
                    className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
                >
                    En **BBM** optimizamos tus procesos internos con soluciones digitales a medida.
                    Desde plataformas corporativas hasta herramientas de gestión avanzada.
                </motion.p>

                <motion.div
                    variants={FADE_UP_ANIMATION_VARIANTS}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Button size="lg" className="h-12 gap-2 px-8 text-base font-semibold">
                        Iniciar un proyecto <ArrowRight size={18} />
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                        Ver soluciones
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}