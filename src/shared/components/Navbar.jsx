import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../../assets/icons/Icon2.png";

const MotionLink = motion(Link);

const links = [
  { label: "Inicio", to: "/" },
  { label: "Qué Hacemos", to: "/#que-hacemos" },
  { label: "Conócenos", to: "/#conocenos" },
  { label: "Servicios", to: "/servicios" },
  { label: "Galería", to: "/galeria" },
  { label: "Contacto", to: "/#contacto" },
];

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(() => window.scrollY > 40);
  const [open, setOpen] = useState(false);
  const showSolidBackground = !isHome || scrolled || open;

  useEffect(() => {
    const onScroll = () => {
      const nextScrolled = window.scrollY > 40;
      setScrolled((current) =>
        current === nextScrolled ? current : nextScrolled,
      );
    };

    window.addEventListener("scroll", onScroll, { passive: true });
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidBackground
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <MotionLink
          to="/"
          className="flex items-center gap-3 group"
          whileHover={{ y: -2, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
        >
          <div
            className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/80 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #135b04 0%, #36a20f 100%)",
            }}
          >
            <img
              src={logo}
              alt="Prismatic Paisajismo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <p
              className="text-sm font-semibold"
              style={{ color: showSolidBackground ? "var(--dark)" : "#ffffff" }}
            >
              Prismatic
            </p>
            <p
              className="text-[11px] uppercase tracking-[0.25em]"
              style={{
                color: showSolidBackground
                  ? "#6b7280"
                  : "rgba(255,255,255,0.78)",
              }}
            >
              Paisajismo
            </p>
          </div>
        </MotionLink>

        {/* Desktop nav */}
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.06, delayChildren: 0.3 },
            },
          }}
          className="hidden md:flex items-center gap-7"
        >
          {links.map((l) => (
            <MotionLink
              key={l.to}
              to={l.to}
              className="text-sm font-medium transition-colors duration-200 relative group"
              style={{ color: showSolidBackground ? "var(--dark)" : "#ffffff" }}
              variants={linkVariants}
              whileHover={{ y: -2 }}
            >
              {l.label}
              <span
                className="absolute -bottom-0.5 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-full"
                style={{ background: "var(--green-accent)" }}
              />
            </MotionLink>
          ))}
        </motion.nav>

        {/* Mobile burger */}
        <motion.button
          type="button"
          className="md:hidden p-2 rounded-lg transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {open ? (
            <HiX
              size={24}
              style={{ color: showSolidBackground ? "var(--dark)" : "#ffffff" }}
            />
          ) : (
            <HiMenuAlt3
              size={24}
              style={{ color: showSolidBackground ? "var(--dark)" : "#ffffff" }}
            />
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
            id="mobile-navigation"
            className="md:hidden bg-white border-t border-gray-100 shadow-sm overflow-hidden"
          >
            <nav className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium py-1"
                  style={{ color: "var(--dark)" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
