import { motion } from "framer-motion";
import { services } from "../../data/products";

export default function ProductCard() {
    return (
        <motion.section
            id="servicios"
            className="section-padding"
            style={{ background: "#f9fafb" }}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-14"
                >
                    <h2 className="text-4xl md:text-5xl mb-4" style={{ color: "var(--dark)" }}>
                        Nuestros{" "}
                        <span style={{ color: "var(--green-accent)" }}>Servicios</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Ofrecemos una amplia gama de servicios profesionales para transformar
                        y mantener tus espacios verdes.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {services.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <motion.div
                                key={s.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                whileHover={{ y: -4, scale: 1.02 }}
                                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                                style={{ aspectRatio: "3/4" }}
                            >
                                {/* Background image */}
                                <img
                                    src={s.img}
                                    alt={s.label}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <Icon className="mb-2 opacity-90" size={20} />
                                    <p className="text-xs font-semibold leading-snug whitespace-pre-line">
                                        {s.label}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.section>
    );
}