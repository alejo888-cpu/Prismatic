import { motion } from "framer-motion";
import { gallery } from "../services/gallery";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

export default function Gallery() {
  return (
    <motion.section
      id="galeria"
      className="section-padding bg-white"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.4em] mb-4 text-green-600">
            Proyectos recientes
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold"
            style={{ color: "var(--dark)" }}
          >
            Galería de trabajos
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Descubre algunos de los proyectos que hemos diseñado y mantenido
            para clientes satisfechos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-3xl shadow-xl"
            >
              <img
                src={item.img}
                alt={`Galería ${item.id}`}
                className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
