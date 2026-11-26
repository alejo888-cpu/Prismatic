import { Link } from "react-router-dom";
import leaves from "../../../assets/image/Hero3.webp";

const offerings = [
  ["Diseño de jardines", "Combinamos alturas, siluetas y tonos de hoja para dar forma a tu espacio."],
  ["Cuidado de zonas verdes", "Mantenimiento de prados, poda y cuidado de las plantas de tu jardín."],
  ["Sistemas de riego", "Instalación de riego para acompañar las necesidades de cada zona verde."],
];

export function QueHacemos() {
  return (
    <section id="que-hacemos" className="garden-services"><div className="garden-wrap garden-section garden-columns">
      <div><p className="garden-label">Servicios</p><h2>Del diseño<br />al cuidado.</h2>
        <Link className="garden-link" to="/servicios">Ver todos los servicios →</Link>
      </div>
      <dl>{offerings.map(([name, description]) => (
        <div key={name}><dt>{name}</dt><dd>{description}</dd></div>
      ))}</dl>
    </div></section>
  );
}

export function Conocenos() {
  return (
    <section id="conocenos" className="garden-story">
      <img src={leaves} alt="Detalle de hojas con nervaduras, tamaños y tonos de verde distintos" loading="lazy" />
      <div><p className="garden-label">Conócenos</p><h2>Una mirada<br />al follaje.</h2>
        <p>En Prismatic nos gusta lo que ocurre cuando una hoja ancha se encuentra con una textura fina. Partimos de esos detalles para diseñar jardines en hogares y empresas, desde una matera de interior hasta un espacio abierto.</p>
      </div>
    </section>
  );
}
