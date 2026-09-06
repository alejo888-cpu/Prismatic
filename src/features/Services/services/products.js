import {
  GiGardeningShears,
  GiWateringCan,
  GiTreeSwing,
  GiGrass,
  GiWoodenFence,
} from "react-icons/gi";

import { MdPool, MdPestControl, MdLandscape } from "react-icons/md";

import { TbSpray } from "react-icons/tb";

// Services Images
import Services1 from "../../../assets/image/Services1.png";
import Services2 from "../../../assets/image/Services2.png";
import Services3 from "../../../assets/image/Services3.png";
import Services4 from "../../../assets/image/Services4.png";
import Services5 from "../../../assets/image/Services5.png";
import Services6 from "../../../assets/image/Services6.png";
import Services7 from "../../../assets/image/Services7.png";
import Services8 from "../../../assets/image/Services8.png";
import Services9 from "../../../assets/image/Services9.png";
import Services10 from "../../../assets/image/Services10.png";

const serviceImages = [
  Services1,
  Services2,
  Services3,
  Services4,
  Services5,
  Services6,
  Services7,
  Services8,
  Services9,
  Services10,
];

const serviceData = [
  { label: "Mantenimiento\nde Prados", icon: GiGrass },
  { label: "Hidrolavado\nResidencial", icon: TbSpray },
  { label: "Instalación\nde Riegos", icon: GiWateringCan },
  { label: "Mantenimiento\nde Piscinas", icon: MdPool },
  { label: "Abonos y\nFumigaciones", icon: MdPestControl },
  { label: "Cuidado de\nZonas Verdes", icon: GiTreeSwing },
  { label: "Poda y Tala\nde Árboles", icon: GiGardeningShears },
  { label: "Paisajismo", icon: MdLandscape },
  { label: "Cerramientos\ny Linderos", icon: GiWoodenFence },
  { label: "Jardinero\nen Casa", icon: GiGardeningShears },
];

export const services = serviceData.map((service, index) => ({
  id: index + 1,
  ...service,
  img: serviceImages[index],
}));
