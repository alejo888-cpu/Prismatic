import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../../../assets/icons/Icon2.png";

const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Qué Hacemos", href: "#que-hacemos" },
    { label: "Conócenos", href: "#conocenos" },
    { label: "Servicios", href: "#servicios" },
    { label: "Galería", href: "#galeria" },
    { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const linkVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#inicio"
                    className="flex items-center gap-3 group"
                    whileHover={{ y: -2, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 250, damping: 20 }}
                >
                    <div
                        className="w-14 h-14 rounded-full overflow-hidden flex border-white shadow-lg"
                        style={{ background: "linear-gradient(135deg, #135b04 0%, #36a20f 100%)" }}
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-16 h-16 object-cover"
                        />
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-sm font-semibold" style={{ color: "var(--dark)" }}>
                            Prismatic
                        </p>
                        <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500">
                            Paisajismo
                        </p>
                    </div>
                </motion.a>

                {/* Desktop nav */}
                <motion.nav
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } },
                    }}
                    className="hidden md:flex items-center gap-7"
                >
                    {links.map((l) => (
                        <motion.a
                            key={l.href}
                            href={l.href}
                            className="text-sm font-medium transition-colors duration-200 relative group"
                            style={{ color: "var(--dark)" }}
                            variants={linkVariants}
                            whileHover={{ y: -2 }}
                        >
                            {l.label}
                            <span
                                className="absolute -bottom-0.5 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-full"
                                style={{ background: "var(--green-accent)" }}
                            />
                        </motion.a>
                    ))}
                </motion.nav>

                {/* Mobile burger */}
                <motion.button
                    className="md:hidden p-2 rounded-lg transition-colors"
                    onClick={() => setOpen(!open)}
                    aria-label="Menú"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {open ? (
                        <HiX size={24} style={{ color: "var(--dark)" }} />
                    ) : (
                        <HiMenuAlt3 size={24} style={{ color: "var(--dark)" }} />
                    )}
                </motion.button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <nav className="px-6 py-4 flex flex-col gap-4">
                            {links.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    className="text-sm font-medium py-1"
                                    style={{ color: "var(--dark)" }}
                                >
                                    {l.label}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}