import { useState } from "react";
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
  const [selected, setSelected] = useState(0);
  const scene = scenes[selected];

  return (
    <section id="ambientes" className="garden-portfolio" aria-labelledby="portfolio-title">
      <div className="garden-wrap garden-section portfolio-layout">
        <div>
          <p className="garden-label">Galería de Prismatic</p>
          <h2 id="portfolio-title">Elige un<br /><em>ambiente.</em></h2>
          <div className="scene-picker" role="group" aria-label="Ambiente para explorar">
            {scenes.map(({ title }, index) => (
              <button type="button" key={title} aria-pressed={selected === index}
                aria-controls="scene-photo" onClick={() => setSelected(index)}>
                {title}<span aria-hidden="true">{selected === index ? "↗" : "→"}</span>
              </button>
            ))}
          </div>
          <Link className="garden-link" to="/galeria">Ver galería completa →</Link>
        </div>
        <figure id="scene-photo" aria-live="polite">
          <img src={scene.image} alt={scene.alt} loading="lazy" />
          <figcaption>{scene.title}</figcaption>
        </figure>
      </div>
    </section>
  );
}
