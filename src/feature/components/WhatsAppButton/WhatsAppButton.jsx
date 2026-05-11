import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    return (
        <motion.div
            className="relative mx-auto"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                delay: 0.8,
                type: "spring",
                stiffness: 220,
                damping: 18,
            }}
        >
            {/* Glow Effect */}
            <motion.div
                className="absolute inset-0 rounded-full bg-[#25D366] blur-2xl opacity-40"
                animate={{
                    scale: [1, 1.35, 1],
                    opacity: [0.4, 0.12, 0.4],
                }}
                transition={{
                    duration: 2.2,
                    repeat: Infinity,
                }}
            />

            <motion.a
                href="https://wa.me/573001234567?text=Hola%2C+me+interesa+un+servicio+de+Prismatic"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center gap-3 min-w-[220px] rounded-full px-5 py-4 text-white font-semibold shadow-[0_30px_80px_rgba(37,211,102,0.24)] overflow-hidden"
                style={{
                    background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                }}
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                whileHover={{
                    scale: 1.05,
                    rotate: -0.5,
                }}
                whileTap={{
                    scale: 0.97,
                }}
            >
                {/* Shine Effect */}
                <motion.span
                    className="
                        absolute
                        top-0
                        left-[-120%]
                        w-[120%]
                        h-full
                        bg-white/20
                        skew-x-12
                    "
                    animate={{
                        left: ["-120%", "150%"],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                    }}
                />

                <FaWhatsapp size={28} className="relative z-10" />

                <span className="relative z-10 text-sm sm:text-base">
                    Solicita tu servicio
                </span>
            </motion.a>
        </motion.div>
    );
}