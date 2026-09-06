import { motion } from "framer-motion";
import TrabajoImg from "../../../assets/image/Trabajo.jpeg";
import ConocenosImg from "../../../assets/image/Conocenos.png";

/* ── Qué Hacemos ── */
export function QueHacemos() {
  const points = [
    "Jardines personalizados para hogares y empresas",
    "Soluciones sostenibles para espacios exteriores",
    "Combinación de diseño natural y funcionalidad",
    "Resultados visibles desde el primer día",
  ];

  return (
    <section id="que-hacemos" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-4xl md:text-5xl leading-tight mb-6"
            style={{ color: "var(--dark)" }}
          >
            Transformamos ideas en{" "}
            <span style={{ color: "var(--green-accent)" }}>espacios vivos</span>
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            En Prismatic, creemos que cada espacio exterior tiene el potencial
            de convertirse en un oasis de tranquilidad y belleza. Nuestro equipo
            de expertos en paisajismo trabaja contigo para diseñar y crear
            jardines que reflejen tu visión y respeten el medio ambiente.
          </p>
          <ul className="space-y-4">
            {points.map((p, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start gap-4"
              >
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                  style={{ background: "var(--green-mid)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-gray-700 leading-relaxed">
                  {p}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div
            className="absolute -bottom-6 -right-6 w-4/5 h-4/5 rounded-3xl -z-10"
            style={{ background: "#e8f5ee" }}
          />
          <img
            src={TrabajoImg}
            alt="Trabajo Prismatic"
            className="w-full h-[480px] object-cover rounded-3xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ── Conócenos ── */
export function Conocenos() {
  return (
    <section
      id="conocenos"
      className="section-padding"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div
            className="absolute -top-6 -left-6 w-4/5 h-4/5 rounded-3xl -z-10"
            style={{ background: "#d4edda" }}
          />
          <img
            src={ConocenosImg}
            alt="Equipo Prismatic"
            className="w-full h-[460px] object-cover rounded-3xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5"
            style={{ background: "#e8f5ee", color: "var(--green-mid)" }}
          >
            Nuestra Historia
          </span>
          <h2
            className="text-4xl md:text-5xl mb-6"
            style={{ color: "var(--dark)" }}
          >
            Conócenos
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Somos un equipo{" "}
              <strong style={{ color: "var(--dark)" }}>
                apasionado por el paisajismo
              </strong>{" "}
              y la sostenibilidad, dedicado a transformar espacios ordinarios en
              extraordinarios ecosistemas verdes.
            </p>
            <p>
              Con años de experiencia en diseño de jardines y arquitectura del
              paisaje, combinamos{" "}
              <strong style={{ color: "var(--green-accent)" }}>
                creatividad
              </strong>
              , conocimiento técnico y un profundo{" "}
              <strong style={{ color: "var(--green-accent)" }}>
                respeto por la tierra
              </strong>{" "}
              para crear espacios que no solo son hermosos, sino también
              funcionales y ecológicamente responsables.
            </p>
            <p>
              Desde pequeños jardines urbanos hasta grandes proyectos
              comerciales, cada proyecto es una oportunidad para conectar a las
              personas con la naturaleza y crear entornos que inspiran paz y
              bienestar.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
