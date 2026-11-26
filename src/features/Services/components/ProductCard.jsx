import { useState } from "react";
import { services } from "../services/products";
import leaves from "../../../assets/image/Hero3.webp";

const categories = ["Todos", ...new Set(services.map(service => service.category))];

export default function ProductCard() {
  const [category, setCategory] = useState("Todos");
  const visible = category === "Todos" ? services : services.filter(service => service.category === category);

  return (
    <section className="botanic-page" id="servicios" aria-labelledby="services-title">
      <div className="garden-wrap">
        <header className="catalog-intro">
          <div>
            <p className="garden-label">Servicios de paisajismo</p>
            <h1 id="services-title">Del diseño<br /><em>al cuidado.</em></h1>
            <p>Encuentra el servicio que necesita tu espacio, desde instalar el riego hasta cuidar un jardín que ya está creciendo.</p>
          </div>
          <img src={leaves} alt="Detalle de hojas de distintos tamaños y texturas" />
        </header>
        <div className="catalog-filters" role="group" aria-label="Filtrar servicios por categoría">
          {categories.map(name => <button key={name} aria-pressed={category === name} onClick={() => setCategory(name)}>{name}</button>)}
        </div>
        <ul className="catalog-list">
          {visible.map(service => (
            <li key={service.id}>
              <img src={service.img} alt="" loading="lazy" />
              <div><p>{service.category}</p><h2>{service.label}</h2></div>
              <a className="catalog-inquiry" href={'https://wa.me/573007282538?text=' + encodeURIComponent('Hola, Prismatic. Me interesa el servicio de ' + service.label + '.')} aria-label={'Consultar por WhatsApp sobre ' + service.label}>Consultar ↗</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
