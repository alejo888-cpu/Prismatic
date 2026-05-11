import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";
import logo from "../../../assets/icons/Icon2.png";

const quickLinks = ["Inicio", "Qué Hacemos", "Conócenos", "Servicios", "Galería", "Contacto"];
const serviceLinks = ["Mantenimiento de Prados", "Instalación de Riegos", "Paisajismo", "Poda y Tala", "Cuidado de Zonas Verdes"];

const schedule = [
    { day: "Lunes a Viernes", hours: "8:00 AM - 6:00 PM" },
    { day: "Sábados", hours: "9:00 AM - 2:00 PM" },
    { day: "Domingos", hours: "Cerrado" },
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
                    <h2 className="text-4xl md:text-5xl mb-4" style={{ color: "var(--dark)" }}>
                        Contáctanos
                    </h2>
                    <p className="text-gray-500 mb-8">
                        ¿Tienes un proyecto en mente? Estamos aquí para ayudarte a hacerlo realidad.
                    </p>
                    <div className="mt-6 flex justify-center">
                        <WhatsAppButton />
                    </div>

                    {/* Schedule */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-left max-w-lg mx-auto mt-8">
                        <div className="flex items-center gap-2 mb-5">
                            <MdAccessTime style={{ color: "var(--green-accent)" }} size={18} />
                            <h3 className="font-semibold text-sm" style={{ color: "var(--dark)" }}>
                                Horario de Atención
                            </h3>
                        </div>
                        {schedule.map((s) => (
                            <div key={s.day} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                                <span className="text-sm text-gray-600">{s.day}</span>
                                <span className="text-sm font-medium" style={{ color: s.hours === "Cerrado" ? "#9ca3af" : "var(--dark)" }}>
                                    {s.hours}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dark footer */}
            <div className="px-6 py-14" style={{ background: "var(--dark)" }}>
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2.5 mb-4">
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
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-5">
                            Transformando espacios con naturaleza y diseño desde 2020.
                        </p>
                        <div className="flex gap-3">
                            {[FaFacebook, FaInstagram, FaTwitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                                    style={{ background: "#2a2a2a" }}
                                    onMouseEnter={e => e.currentTarget.style.background = "#36a20f"}
                                    onMouseLeave={e => e.currentTarget.style.background = "#969696"}
                                >
                                    <Icon size={15} className="text-gray-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-gray-400 text-sm font-semibold mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map((l) => (
                                <li key={l}>
                                    <a href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="text-gray-400 text-sm hover:text-gray-600 transition-colors duration-200">
                                        {l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-gray-400 text-sm font-semibold mb-4">Servicios</h4>
                        <ul className="space-y-2.5">
                            {serviceLinks.map((l) => (
                                <li key={l}>
                                    <a href="#servicios" className="text-gray-400 text-sm hover:text-gray-600 transition-colors duration-200">
                                        {l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-gray-400 text-sm font-semibold mb-4">Contacto</h4>
                        <ul className="space-y-3">
                            {[
                                { Icon: MdPhone, text: "+57 300 7282538" },
                                { Icon: MdEmail, text: "info@prismatic.com" },
                                { Icon: MdLocationOn, text: "Envigado, Antioquia" },
                            ].map(({ Icon, text }) => (
                                <li key={text} className="flex items-start gap-2.5">
                                    <Icon size={16} style={{ color: "var(--green-light)", flexShrink: 0, marginTop: 2 }} />
                                    <span className="text-gray-400 text-sm">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-3">
                    <p className="text-gray-500 text-xs">© 2025 Prismatic. Todos los derechos reservados.</p>
                    <p className="text-gray-600 text-xs">Hecho con 🌿 en Medellín</p>
                </div>
            </div>
        </footer>
    );
}