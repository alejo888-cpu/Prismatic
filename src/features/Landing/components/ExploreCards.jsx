import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiciosImg from "../../../assets/image/Services1.png";
import GaleriaImg from "../../../assets/image/Galeria1.jpeg";
import ConocenosImg from "../../../assets/image/Conocenos.png";

const MotionLink = motion(Link);

const cards = [
    {
        img: ServiciosImg,
        title: "Servicios",
        text: "Mantenimiento, riego automático, poda y diseño de jardines interiores y exteriores.",
        to: "/servicios",
        cta: "Ver todos los servicios →",
    },
    {
        img: GaleriaImg,
        title: "Galería",
        text: "Proyectos reales que hemos diseñado e instalado en Medellín y Envigado.",
        to: "/galeria",
        cta: "Ver galería completa →",
    },
    {
        img: ConocenosImg,
        title: "Conócenos",
        text: "Un equipo enfocado en el follaje, no en la flor: el verde es nuestro sello.",
        to: "/#conocenos",
        cta: "Conoce nuestra historia →",
    },
];

export default function ExploreCards() {
    return (
        <section className="section-padding" style={{ background: "var(--cream)" }}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-xl mx-auto mb-14">
                    <span className="text-xs uppercase tracking-widest" style={{ color: "var(--green-mid)" }}>
                        Explora Prismatic
                    </span>
                    <h2 className="text-3xl md:text-4xl mt-3" style={{ color: "var(--dark)", fontFamily: "'Playfair Display', serif" }}>
                        Cada rincón, un espacio vivo
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {cards.map((c, i) => (
                        <MotionLink
                            key={c.title}
                            to={c.to}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="block rounded-2xl overflow-hidden bg-white border border-gray-100 group"
                        >
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src={c.img}
                                    alt={c.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--dark)" }}>{c.title}</h3>
                                <p className="text-sm text-gray-500 mb-3">{c.text}</p>
                                <span className="text-sm font-medium" style={{ color: "var(--green-mid)" }}>{c.cta}</span>
                            </div>
                        </MotionLink>
                    ))}
                </div>
            </div>
        </section>
    );
}
