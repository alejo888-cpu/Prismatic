import { Link } from "react-router-dom";
import garden from "../../../assets/image/Hero2.webp";

export default function Hero() {
  return (
    <section className="garden-hero" id="inicio" aria-labelledby="hero-title">
      <img src={garden} alt="Sendero escalonado entre grandes hojas y vegetación densa" fetchPriority="high" />
      <div className="garden-wrap hero-copy">
        <p className="garden-label">Paisajismo en Envigado, Antioquia</p>
        <h1 id="hero-title">Espacios que<br /><em>respiran verde.</em></h1>
        <p>Diseñamos y cuidamos jardines donde las hojas, sus formas y sus texturas son protagonistas.</p>
        <div className="hero-actions">
          <a className="garden-button" href="#contacto">Hablemos de tu jardín <span aria-hidden="true">↗</span></a>
          <Link className="garden-link" to="/galeria">Explorar galería <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  );
}
