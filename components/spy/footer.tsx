import { Github, Twitter, Shield } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-black/40 py-12 mt-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-semibold text-lg mb-2">SpyFollowers</h4>
                        <p className="text-sm text-white/40 max-w-sm">
                            Empoderando a los usuarios con transparencia de datos. Construido solo con fines educativos.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <a href="https://github.com/santiagonzalezarias" className="p-2 text-white/40 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                    </div>
                </div>

                {/* Privacy Notice */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8 backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-neon-purple mt-0.5 shrink-0" />
                        <div className="text-sm text-white/60 leading-relaxed">
                            <strong className="text-white block mb-1">Aviso de privacidad:</strong>
                            Esta herramienta requiere acceso a tu cuenta de Instagram para funcionar correctamente.
                            <span className="text-white/80"> No almacenamos, compartimos ni utilizamos tu información personal para ningún otro fin. </span>
                            Todos los datos se procesan de forma segura (localmente en tu navegador) y únicamente para brindarte el servicio solicitado.
                        </div>
                    </div>
                </div>

                <div className="text-center pt-8 border-t border-white/5 text-xs text-white/20">
                    <p>&copy; {new Date().getFullYear()} SpyFollowers. Úsala responsablemente. </p>
                    <p className="mt-2 text-white/10">Disclaimer: No afiliado con Instagram o Meta.</p>
                    <p className="mt-2 text-white/10">By Santi Arias <a href="https://santiarias.com" className="text-neon-purple">(santiarias.com)</a></p>
                </div>
            </div>
        </footer>
    );
};
