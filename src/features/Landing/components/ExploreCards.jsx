import { Link } from "react-router-dom";
import exterior from "../../../assets/image/Galeria2.jpeg";
import detalle from "../../../assets/image/Galeria3.jpeg";
import interior from "../../../assets/image/Galeria6.jpeg";

const scenes = [
  { image: exterior, title: "Jardines exteriores", alt: "Jardín bajo con bordes curvos junto a una cerca" },
  { image: detalle, title: "Composiciones de follaje", alt: "Hojas verdes y púrpura agrupadas bajo un árbol" },
  { image: interior, title: "Verde de interior", alt: "Planta de hojas altas en una matera de interior" },
];

export default function ExploreCards() {
  return (
    <section className="garden-wrap garden-section">
      <div className="garden-heading">
        <div><p className="garden-label">Galería</p><h2>El jardín en detalle</h2></div>
        <Link className="garden-link" to="/galeria">Ver toda la galería →</Link>
      </div>
      <div className="garden-scenes">
        {scenes.map(({ image, title, alt }) => (
          <figure key={title}><img src={image} alt={alt} loading="lazy" /><figcaption>{title}</figcaption></figure>
        ))}
      </div>
    </section>
  );
}
