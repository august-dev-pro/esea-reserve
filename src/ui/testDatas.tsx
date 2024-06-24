import banniere from "@/imgs/banniere/R.jpeg";
import banniere2 from "@/imgs/banniere/jardinage.jpg";
import banniere3 from "@/imgs/banniere/demenagement.jpg";
import banniere4 from "@/imgs/banniere/plomberie.jpeg";
import {
  faBroom,
  faSeedling,
  faTruck,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
export const services = [
  {
    id: 1,
    img: banniere,
    title: "Nettoyage",
    description:
      "Des services de nettoyage professionnels pour votre maison ou bureau.",
    icon: faBroom,
  },
  {
    id: 2,
    img: banniere2,
    title: "Jardinage",
    description:
      "Améliorez votre jardin avec nos services de jardinage experts.",
    icon: faSeedling,
  },
  {
    id: 3,
    img: banniere3,
    title: "Déménagement",
    description:
      "Des services de déménagement fiables et rapides pour un transfert sans souci.",
    icon: faTruck,
  },
  {
    id: 4,
    img: banniere4,
    title: "Plomberie",
    description: "Des solutions de plomberie efficaces pour tous vos besoins.",
    icon: faWrench,
  },
];
