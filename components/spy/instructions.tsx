"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Smartphone, Info } from "lucide-react";

export const Instructions = () => {
    const [activeTab, setActiveTab] = useState<'web' | 'mobile'>('web');

    return (
        <section className="py-20 px-4 max-w-4xl mx-auto">
            <div className="bg-card-bg border border-border-color rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                    <span className="text-neon-purple">📱</span> Instrucciones de Uso
                </h2>

                {/* Tabs */}
                <div className="flex bg-white/5 p-1 rounded-lg border border-white/10 mb-8 w-fit mx-auto sm:mx-0">
                    <button
                        onClick={() => setActiveTab("web")}
                        className={`flex items-center gap-2 px-6 py-2 rounded-md text-sm font-medium transition-all ${activeTab === "web"
                            ? 'bg-neon-purple text-white shadow-lg shadow-neon-purple/20'
                            : 'text-white/60 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        <Laptop size={16} /> Escritorio/Web
                    </button>
                    <button
                        onClick={() => setActiveTab("mobile")}
                        className={`flex items-center gap-2 px-6 py-2 rounded-md text-sm font-medium transition-all ${activeTab === "mobile"
                            ? 'bg-neon-blue text-white shadow-lg shadow-neon-blue/20'
                            : 'text-white/60 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        <Smartphone size={16} /> Móvil
                    </button>
                </div>

                {/* Contenido de las tabs */}
                <div className="instructions min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {activeTab === "web" ? (
                            <motion.div
                                key="web"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-8 flex items-start gap-3">
                                    <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                    <span className="text-blue-100/80 text-sm">Para usar en navegadores de escritorio (Chrome, Firefox, Safari, etc.)</span>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        {
                                            num: 1,
                                            title: "Inicia sesión en Instagram",
                                            text: <span>Ve a <strong className="text-white">instagram.com</strong> en tu navegador y asegúrate de estar conectado con tu cuenta.</span>
                                        },
                                        {
                                            num: 2,
                                            title: "Copia el código",
                                            text: "Usa el botón \"Copiar Código\" de arriba para copiar el script al portapapeles."
                                        },
                                        {
                                            num: 3,
                                            title: "Abre las herramientas de desarrollador",
                                            text: <span>Presiona <strong className="text-neon-cyan">F12</strong> o <strong className="text-neon-cyan">Ctrl+Shift+I</strong> (Windows/Linux) o <strong className="text-neon-cyan">Cmd+Option+I</strong> (Mac).</span>
                                        },
                                        {
                                            num: 4,
                                            title: "Ve a la consola",
                                            text: <span>Busca y haz clic en la pestaña <strong className="text-white">"Console"</strong> en las herramientas.</span>
                                        },
                                        {
                                            num: 5,
                                            title: "Pega y ejecuta el código",
                                            text: <span>Pega el código en la consola y presiona <strong className="text-neon-purple">Enter</strong>. La herramienta se cargará.</span>
                                        },
                                        {
                                            num: 6,
                                            title: "Usa la herramienta",
                                            text: "SpyFollower analizará tus seguidores y te mostrará quién no te sigue de vuelta."
                                        }
                                    ].map((step) => (
                                        <div key={step.num} className="flex gap-4 group">
                                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neon-purple font-bold shrink-0 group-hover:bg-neon-purple/20 group-hover:border-neon-purple/50 transition-colors">
                                                {step.num}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold mb-1 group-hover:text-neon-purple transition-colors">{step.title}</h4>
                                                <p className="text-white/60 text-sm leading-relaxed">{step.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="mobile"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-8 flex items-start gap-3">
                                    <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                    <span className="text-blue-100/80 text-sm">Para usar en dispositivos móviles (iPhone, Android)</span>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        {
                                            num: 1,
                                            title: "Copia el código",
                                            text: "Usa el botón \"Copiar Código\" de arriba para copiar el script completo."
                                        },
                                        {
                                            num: 2,
                                            title: "Crea un marcador",
                                            text: "En tu navegador móvil, guarda esta página como marcador o favorito."
                                        },
                                        {
                                            num: 3,
                                            title: "Edita el marcador",
                                            text: <span>Edita el marcador y reemplaza la URL con: <code className="bg-white/10 px-1 py-0.5 rounded text-neon-cyan">javascript:</code> seguido del código copiado.</span>
                                        },
                                        {
                                            num: 4,
                                            title: "Ve a Instagram",
                                            text: <span>Abre <strong className="text-white">instagram.com</strong> en tu navegador móvil e inicia sesión.</span>
                                        },
                                        {
                                            num: 5,
                                            title: "Ejecuta el marcador",
                                            text: "Abre tu lista de marcadores y toca el marcador que creaste para ejecutar SpyFollower."
                                        },
                                        {
                                            num: 6,
                                            title: "Usa la herramienta",
                                            text: "La herramienta se cargará y podrás gestionar tus seguidores directamente desde tu móvil."
                                        }
                                    ].map((step) => (
                                        <div key={step.num} className="flex gap-4 group">
                                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neon-blue font-bold shrink-0 group-hover:bg-neon-blue/20 group-hover:border-neon-blue/50 transition-colors">
                                                {step.num}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold mb-1 group-hover:text-neon-blue transition-colors">{step.title}</h4>
                                                <p className="text-white/60 text-sm leading-relaxed">{step.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
