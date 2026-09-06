import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLeaf, FaSeedling } from "react-icons/fa";
import { MdAccessTime, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { HiArrowUpRight } from "react-icons/hi2";
import WhatsAppButton from "./WhatsAppButton";
import logo from "../../assets/icons/Icon2.png";

const quickLinks = [
  { label: "Inicio", to: "/" },
  { label: "Qué Hacemos", to: "/#que-hacemos" },
  { label: "Conócenos", to: "/#conocenos" },
  { label: "Servicios", to: "/servicios" },
  { label: "Galería", to: "/galeria" },
  { label: "Contacto", to: "/#contacto" },
];
const serviceLinks = [
  "Mantenimiento de Prados",
  "Instalación de Riegos",
  "Paisajismo",
  "Poda y Tala",
  "Cuidado de Zonas Verdes",
];

const schedule = [
  { day: "Lunes a Viernes", hours: "8:00 AM - 6:00 PM" },
  { day: "Sábados", hours: "9:00 AM - 2:00 PM" },
  { day: "Domingos", hours: "Cerrado" },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebook,
    href: "https://www.facebook.com/people/Prismatic-Landscaping/61562594528812/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/prismatic_landscaping/",
  },
];

export default function Footer() {
  return (
    <footer>
      {/* CTA bar */}
      <section
        id="contacto"
        className="py-20 px-6"
        style={{ background: "var(--cream)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{ color: "var(--dark)" }}
          >
            Contáctanos
          </h2>
          <p className="text-gray-500 mb-8">
            ¿Tienes un proyecto en mente? Estamos aquí para ayudarte a hacerlo
            realidad.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton />
          </div>

          {/* Schedule */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-left max-w-lg mx-auto mt-8">
            <div className="flex items-center gap-2 mb-5">
              <MdAccessTime
                style={{ color: "var(--green-accent)" }}
                size={18}
              />
              <h3
                className="font-semibold text-sm"
                style={{ color: "var(--dark)" }}
              >
                Horario de Atención
              </h3>
            </div>
            {schedule.map((s) => (
              <div
                key={s.day}
                className="flex justify-between py-3 border-b border-gray-100 last:border-0"
              >
                <span className="text-sm text-gray-600">{s.day}</span>
                <span
                  className="text-sm font-medium"
                  style={{
                    color: s.hours === "Cerrado" ? "#9ca3af" : "var(--dark)",
                  }}
                >
                  {s.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark footer */}
      <div
        className="relative rounded-t-[2.5rem] overflow-hidden"
        style={{
          background:
            "linear-gradient(170deg, #0e1f11 0%, #091409 60%, #060f07 100%)",
        }}
      >
        {/* Línea de brillo: 1px nítido, sin desenfoque */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(134,239,172,0.15) 8%, rgba(134,239,172,0.7) 28%, #bbf7d0 50%, rgba(134,239,172,0.7) 72%, rgba(134,239,172,0.15) 92%, transparent 100%)",
          }}
        />
        {/* Ambiente ajustado debajo de la línea (opacidad en capas, sin blur) */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{
            height: "6px",
            background:
              "linear-gradient(180deg, rgba(134,239,172,0.18) 0%, rgba(134,239,172,0.06) 60%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{
            height: "60px",
            background:
              "radial-gradient(ellipse 55% 100% at 50% 0%, rgba(74,222,128,0.055) 0%, transparent 100%)",
          }}
        />

        {/* Marca de agua sutil */}
        <div
          className="absolute right-8 top-8 select-none pointer-events-none"
          style={{ opacity: 0.025 }}
        >
          <FaSeedling
            style={{
              width: "clamp(140px, 18vw, 240px)",
              height: "clamp(140px, 18vw, 240px)",
              color: "#86efac",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Franja de marca */}
          <div
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-14 pb-10 border-b"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-2xl overflow-hidden flex items-center justify-center flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #2d5a3d 0%, #1e3d29 100%)",
                  boxShadow: "0 0 0 1px rgba(134,239,172,0.15)",
                }}
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-semibold text-lg tracking-tight">
                  Prismatic
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  Paisajismo · Diseño · Naturaleza
                </p>
              </div>
            </div>

            <p
              className="text-sm max-w-xs sm:text-right leading-relaxed"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              Transformando espacios con naturaleza
              <br className="hidden sm:block" /> y diseño desde 2020.
            </p>
          </div>

          {/* Grid principal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
            {/* Social */}
            <div className="space-y-5">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "rgba(134,239,172,0.6)" }}
              >
                Síguenos
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          "rgba(74,222,128,0.12)";
                        e.currentTarget.style.borderColor =
                          "rgba(134,239,172,0.35)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          "rgba(255,255,255,0.04)";
                        e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.08)";
                      }}
                    >
                      <Icon
                        size={16}
                        style={{ color: "rgba(255,255,255,0.55)" }}
                      />
                    </a>
                  );
                })}
              </div>

              <div className="pt-2">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                  style={{ color: "rgba(134,239,172,0.75)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#86efac")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(134,239,172,0.75)")
                  }
                >
                  Solicitar cotización
                  <HiArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Enlaces rápidos */}
            <div className="space-y-5">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "rgba(134,239,172,0.6)" }}
              >
                Navegación
              </p>
              <ul className="space-y-3">
                {quickLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.9)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                      }
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Servicios */}
            <div className="space-y-5">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "rgba(134,239,172,0.6)" }}
              >
                Servicios
              </p>
              <ul className="space-y-3">
                {serviceLinks.map((l) => (
                  <li key={l}>
                    <Link
                      to="/servicios"
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.9)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                      }
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div className="space-y-5">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "rgba(134,239,172,0.6)" }}
              >
                Contacto
              </p>
              <ul className="space-y-4">
                {[
                  { Icon: MdPhone, text: "+57 3007282538" },
                  { Icon: MdEmail, text: "prismaticland@gmail.com" },
                  { Icon: MdLocationOn, text: "Envigado, Antioquia" },
                ].map(({ Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "rgba(74,222,128,0.08)",
                        border: "1px solid rgba(134,239,172,0.15)",
                      }}
                    >
                      <Icon size={13} style={{ color: "#86efac" }} />
                    </div>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Barra inferior */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-xs"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            <span>
              © {new Date().getFullYear()} Prismatic. Todos los derechos
              reservados.
            </span>
            <span className="flex items-center gap-1.5">
              Hecho con
              <FaLeaf size={12} style={{ color: "rgba(134,239,172,0.5)" }} />
              en Medellín
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
