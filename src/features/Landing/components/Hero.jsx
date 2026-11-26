import { Link } from "react-router-dom";
import garden from "../../../assets/image/Hero2.webp";
import leaves from "../../../assets/image/Hero3.webp";

export default function Hero() {
  return (
    <section className="garden-hero" id="inicio" aria-labelledby="hero-title">
      <div className="garden-wrap garden-cover">
        <div className="hero-copy">
          <p className="garden-label">Paisajismo · Envigado, Antioquia</p>
          <h1 id="hero-title">El arte de<br /><em>cultivar verde.</em></h1>
          <p>De una matera en casa a un jardín abierto. Diseñamos y cuidamos espacios a partir de las formas y texturas del follaje.</p>
          <div className="hero-actions">
            <a className="garden-button" href="#contacto">Hablemos de tu jardín ↗</a>
            <a className="garden-link" href="#ambientes">Explorar ambientes ↓</a>
          </div>
        </div>
        <Link className="cover-photo" to="/galeria" aria-label="Ver la galería de Prismatic">
          <img className="cover-leaves" src={leaves} alt="Detalle de follaje de distintas formas y tonos" fetchPriority="high" />
          <img className="cover-path" src={garden} alt="Sendero rodeado de vegetación" />
        </Link>
      </div>
    </section>
  );
}
