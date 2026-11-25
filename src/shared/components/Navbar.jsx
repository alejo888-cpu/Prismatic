import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/icons/Icon2.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!open) return;
    function closeOnEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("garden-menu-toggle")?.focus();
      }
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="garden-header"><div className="garden-wrap garden-bar">
      <Link to="/" className="garden-brand" onClick={() => setOpen(false)}><img src={logo} alt="" />Prismatic</Link>
      <button type="button" id="garden-menu-toggle" aria-expanded={open} aria-controls="garden-nav" onClick={() => setOpen(!open)}>{open ? "Cerrar ×" : "Menú ☰"}</button>
      <nav id="garden-nav" aria-label="Navegación principal" className={open ? "is-open" : ""} onClick={() => setOpen(false)}>
        <NavLink end to="/">Inicio</NavLink><NavLink to="/servicios">Servicios</NavLink>
        <NavLink to="/galeria">Galería</NavLink><Link to="/#conocenos">Conócenos</Link>
        <Link className="garden-nav-contact" to={pathname + "#contacto"}>Contacto ↗</Link>
      </nav>
    </div></header>
  );
}
