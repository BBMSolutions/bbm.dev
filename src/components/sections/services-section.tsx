"use client";

import { motion } from "framer-motion";
import { Laptop, Layout, Settings, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Plataformas a Medida",
        description: "Desarrollamos ecosistemas digitales robustos diseñados específicamente para las necesidades de tu empresa.",
        icon: <Layout className="h-6 w-6 text-primary" />,
        className: "md:col-span-2",
    },
    {
        title: "Optimización de Procesos",
        description: "Digitalizamos flujos de trabajo manuales para maximizar la eficiencia operativa.",
        icon: <Settings className="h-6 w-6 text-primary" />,
        className: "md:col-span-1",
    },
    {
        title: "Soluciones Cloud",
        description: "Infraestructura escalable que crece al ritmo de tu proyecto.",
        icon: <Share2 className="h-6 w-6 text-primary" />,
        className: "md:col-span-1",
    },
    {
        title: "Consultoría Tecnológica",
        description: "Te guiamos en la elección del stack adecuado para garantizar el éxito a largo plazo.",
        icon: <Laptop className="h-6 w-6 text-primary" />,
        className: "md:col-span-2",
    },
];

export default function ServicesSection() {
    return (
        <section className="py-24 px-6">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Soluciones de calidad para <br />
                        <span className="text-muted-foreground">proyectos ambiciosos</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/50",
                                service.className
                            )}
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                                {service.icon}
                            </div>
                            <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                            <p className="text-muted-foreground">{service.description}</p>

                            {/* Efecto visual de fondo */}
                            <div className="absolute -bottom-8 -right-8 h-32 w-32 bg-primary/5 blur-3xl transition-opacity opacity-0 group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}