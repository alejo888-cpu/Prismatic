import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  return (
    <footer id="contacto" className="garden-footer"><div className="garden-wrap">
      <div className="garden-columns">
        <div><p className="garden-label">Contacto</p><h2>Cuéntanos sobre<br />tu espacio.</h2><WhatsAppButton /></div>
        <div className="garden-details">
          <address>Envigado, Antioquia<br /><a href="tel:+573007282538">+57 300 728 2538</a><br /><a href="mailto:prismaticland@gmail.com">prismaticland@gmail.com</a></address>
          <p>Lunes a viernes · 8 a. m. a 6 p. m.<br />Sábados · 9 a. m. a 2 p. m.<br />Domingos · Cerrado</p>
        </div>
      </div>
      <div className="garden-colophon"><span>Prismatic Paisajismo</span><div>
        <a href="https://www.instagram.com/prismatic_landscaping/">Instagram ↗</a>
        <a href="https://www.facebook.com/people/Prismatic-Landscaping/61562594528812/">Facebook ↗</a>
      </div></div>
    </div></footer>
  );
}
