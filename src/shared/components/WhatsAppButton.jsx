import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a className="garden-button" href="https://wa.me/573007282538?text=Hola%2C+me+interesa+un+servicio+de+Prismatic" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp aria-hidden="true" /> Escríbenos por WhatsApp
    </a>
  );
}
