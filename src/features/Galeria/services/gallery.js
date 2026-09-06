import Galeria1 from "../../../assets/image/Galeria1.jpeg";
import Galeria2 from "../../../assets/image/Galeria2.jpeg";
import Galeria3 from "../../../assets/image/Galeria3.jpeg";
import Galeria4 from "../../../assets/image/Galeria4.jpeg";
import Galeria5 from "../../../assets/image/Galeria5.jpeg";
import Galeria6 from "../../../assets/image/Galeria6.jpeg";
import Galeria7 from "../../../assets/image/Galeria7.jpeg";

const galleryImages = [
  Galeria1,
  Galeria2,
  Galeria3,
  Galeria4,
  Galeria5,
  Galeria6,
  Galeria7,
];

export const gallery = galleryImages.map((img, index) => ({
  id: index + 1,
  img,
}));
