import { useState } from "react";
import { gallery } from "../services/gallery";

export default function Gallery() {
  const [selected, setSelected] = useState(1);
  const photo = gallery[selected];

  function move(step) {
    setSelected(index => (index + step + gallery.length) % gallery.length);
  }

  return (
    <section className="botanic-page botanic-album" id="galeria" aria-labelledby="album-title">
      <div className="garden-wrap">
        <div className="album-spread">
          <header>
            <p className="garden-label">Galería de Prismatic</p>
            <h1 id="album-title">Jardines<br /><em>en detalle.</em></h1>
            <p>Recorre nuestros ambientes, desde un borde de jardín hasta el rincón verde de una sala.</p>
            <div className="album-controls">
              <button onClick={() => move(-1)} aria-label="Fotografía anterior">←</button>
              <span>{selected + 1} / {gallery.length}</span>
              <button onClick={() => move(1)} aria-label="Fotografía siguiente">→</button>
            </div>
          </header>
          <figure aria-live="polite">
            <img src={photo.img} alt={photo.title} />
            <figcaption>{photo.title}</figcaption>
          </figure>
        </div>
        <div className="album-index" role="group" aria-label="Seleccionar fotografía">
          {gallery.map((item, index) => (
            <button key={item.id} onClick={() => setSelected(index)} aria-label={item.title} aria-pressed={selected === index}>
              <img src={item.img} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
