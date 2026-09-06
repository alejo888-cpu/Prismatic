import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Hero1 from "../../../assets/image/Hero1.jpg";
import Hero2 from "../../../assets/image/Hero2.jpg";
import Hero3 from "../../../assets/image/Hero3.jpg";

const slides = [
  {
    img: Hero1,
    eyebrow: "Diseño & mantenimiento de espacios verdes",
    title: "Plantas que transforman un espacio vacío en un lugar con vida",
    text: "Paisajismo residencial y comercial en Medellín y el Valle de Aburrá.",
  },
  {
    img: Hero2,
    eyebrow: "Jardines verticales",
    title: "Diseñamos verde donde no había espacio para un jardín",
    text: "Muros vegetales para porterías, lobbies y fachadas.",
  },
  {
    img: Hero3,
    eyebrow: "Plantas en cada rincón",
    title: "El verde también vive dentro de tu casa",
    text: "Integramos plantas en baños, cocinas y salas, no solo en el patio.",
  },
];

const INTERVAL = 15000;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (i) => setCurrent((i + slides.length) % slides.length);

  return (
    <section
      id="inicio"
      className="relative h-[100svh] min-h-[620px] overflow-hidden text-white"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <img
            src={slides[current].img}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/65" />
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        aria-label="Anterior"
        onClick={() => goTo(current - 1)}
        className="hidden sm:flex absolute left-7 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-white/50 bg-white/10 items-center justify-center text-xl"
      >
        ‹
      </button>
      <button
        aria-label="Siguiente"
        onClick={() => goTo(current + 1)}
        className="hidden sm:flex absolute right-7 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-white/50 bg-white/10 items-center justify-center text-xl"
      >
        ›
      </button>

      {/* Content */}
      <div className="absolute left-0 right-0 bottom-24 sm:bottom-32 z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm opacity-85 mb-3 block">
              {slides[current].eyebrow}
            </span>
            <h1
              className="text-[2.15rem] sm:text-5xl leading-tight max-w-xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {slides[current].title}
            </h1>
            <p className="max-w-md text-sm sm:text-base opacity-90 mb-7">
              {slides[current].text}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col min-[420px]:flex-row gap-3 sm:gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold min-[420px]:px-6"
            style={{ background: "var(--green-light)", color: "var(--dark)" }}
          >
            Solicitar servicio
          </a>
          <Link
            to="/galeria"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold border-2 border-white/80 min-[420px]:px-6"
          >
            Ver proyectos
          </Link>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute left-5 sm:left-7 bottom-8 sm:bottom-11 z-10 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir a la imagen ${i + 1}`}
            onClick={() => goTo(i)}
            className="h-[3px] w-7"
            style={{
              background: i === current ? "#fff" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
