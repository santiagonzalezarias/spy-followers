"use client";

import { motion } from "framer-motion";
import { Lock, Smartphone } from "lucide-react";

export const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center pt-24 pb-12 px-4 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-neon-purple/20 blur-[120px] rounded-full -z-10 pointer-events-none" />

            {/* Header / Logo */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 mb-12 border border-border-color bg-card-bg backdrop-blur-md px-4 py-2 rounded-full"
            >
                <Lock className="w-4 h-4 text-neon-cyan" />
                <span className="text-sm font-medium tracking-wide">SpyFollowers V2.0</span>
            </motion.div>

            {/* Main Hero Content */}
            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-b from-white to-white/60"
            >
                Analiza tus <span className="text-neon-purple drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]">Seguidores</span>
                <br />
                <span className="text-neon-blue drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]">Hazlo Simple.</span>
            </motion.h1>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12"
            >
                Descubre quién no te sigue de vuelta en Instagram. <br className="hidden md:block" />
                Seguro, script del lado del cliente. Sin contraseñas.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 text-sm text-neon-cyan/80 bg-neon-cyan/10 px-4 py-2 rounded-lg border border-neon-cyan/20"
            >
                <Smartphone className="w-4 h-4" />
                <span>Funciona en Móvil y Escritorio</span>
            </motion.div>
        </section>
    );
};
