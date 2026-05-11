import { motion } from "framer-motion";
import HeroImg from "../../../assets/image/Hero.png";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: "easeOut" },
});

export default function Hero() {
    return (
        <section
            id="inicio"
            className="min-h-screen flex items-center pt-20"
            style={{ background: "#ffffff" }}
        >
            <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-16">
                {/* Text side */}
                <div>
                    <motion.div {...fadeUp(0.1)}>
                        <span
                            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6"
                            style={{
                                background: "#e8f5ee",
                                color: "var(--green-mid)",
                            }}
                        >
                            Paisajismo &amp; Diseño Verde
                        </span>
                    </motion.div>

                    <motion.h1
                        {...fadeUp(0.2)}
                        className="text-5xl md:text-6xl leading-tight mb-6"
                        style={{ fontFamily: "'Playfair Display', serif", color: "var(--dark)" }}
                    >
                        Aquí comienza tu conexión con la{" "}
                        <em
                            className="not-italic"
                            style={{ color: "var(--green-accent)" }}
                        >
                            naturaleza
                        </em>{" "}
                        y el diseño.
                    </motion.h1>

                    <motion.p
                        {...fadeUp(0.35)}
                        className="text-base md:text-lg leading-relaxed mb-10 max-w-md"
                        style={{ color: "#4a5568" }}
                    >
                        Creamos espacios verdes modernos que combinan sostenibilidad,
                        estética y bienestar.
                    </motion.p>

                    <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-4">
                        <a
                            href="#galeria"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                            style={{ background: "var(--green-mid)" }}
                        >
                            Explorar Proyectos →
                        </a>
                        <a
                            href="#contacto"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold border-2 transition-all duration-200 hover:scale-[1.02]"
                            style={{
                                borderColor: "var(--green-mid)",
                                color: "var(--green-mid)",
                            }}
                        >
                            Solicitar Servicio
                        </a>
                    </motion.div>
                </div>

                {/* Image side */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="relative"
                >
                    <div
                        className="absolute -top-6 -right-6 w-full h-full rounded-3xl -z-10"
                        style={{ background: "#e8f5ee" }}
                    />
                    <img
                        src={HeroImg}
                        alt="Jardín diseñado por Prismatic"
                        className="w-full h-[460px] object-cover rounded-3xl shadow-xl"
                    />
                    {/* floating badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                        className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-4 shadow-lg border border-gray-100"
                    >
                        <p className="text-xs text-gray-400 mb-1">Último proyecto</p>
                        <p className="text-sm font-semibold" style={{ color: "var(--dark)" }}>
                            Jardín Residencial · Medellín
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}