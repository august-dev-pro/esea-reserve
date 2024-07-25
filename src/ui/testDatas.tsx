import banniere from "@/imgs/banniere/R.jpeg";
import banniere2 from "@/imgs/banniere/jardinage.jpg";
import banniere3 from "@/imgs/banniere/demenagement.jpg";
import banniere4 from "@/imgs/banniere/plomberie.jpeg";
import plomberie from "@/imgs/banniere/plomberie.jpeg";
import {
  faBolt,
  faBroom,
  faHammer,
  faLaptop,
  faLeaf,
  faPaintRoller,
  faPlug,
  faSeedling,
  faTruck,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
export const services = [
  {
    id: 1,
    img: banniere, // Change image as necessary
    title: "Nettoyage",
    description:
      "Des services de nettoyage professionnels pour votre maison ou bureau.",
    icon: faBroom,
    points: [
      "Nettoyage pour maisons, appartements et bureaux.",
      "Entretien et nettoyage des véhicules.",
    ],
  },
  {
    id: 2,
    img: banniere2, // Change image as necessary
    title: "Jardinage",
    description:
      "Améliorez votre jardin avec nos services de jardinage experts.",
    icon: faLeaf, // Changed to the correct icon
    points: [
      "Entretien de pelouses et jardins.",
      "Plantation et soin des fleurs.",
    ],
  },
  {
    id: 3,
    img: banniere3, // Change image as necessary
    title: "Déménagement",
    description:
      "Des services de déménagement fiables et rapides pour un transfert sans souci.",
    icon: faTruck,
    points: [
      "Service de déménagement sécurisé.",
      "Emballage et déballage professionnel.",
    ],
  },
  {
    id: 4,
    img: banniere4, // Change image as necessary
    title: "Plomberie",
    description: "Des solutions de plomberie efficaces pour tous vos besoins.",
    icon: faWrench,
    points: [
      "Réparation de fuites d'eau.",
      "Installation de systèmes de plomberie.",
    ],
  },
  {
    id: 5,
    img: plomberie, // Change image as necessary
    title: "Électricité",
    description:
      "Des services électriques professionnels pour installations et réparations.",
    icon: faBolt,
    points: [
      "Installation de systèmes électriques.",
      "Réparation et maintenance de circuits électriques.",
    ],
  },
  {
    id: 6,
    img: plomberie, // Change image as necessary
    title: "Peinture",
    description:
      "Services de peinture pour un intérieur et un extérieur parfaits.",
    icon: faPaintRoller,
    points: [
      "Peinture intérieure et extérieure.",
      "Revêtements et finitions de haute qualité.",
    ],
  },
  {
    id: 7,
    img: plomberie, // Change image as necessary
    title: "Construction",
    description:
      "Services de construction et de rénovation pour tous vos besoins.",
    icon: faHammer,
    points: [
      "Construction de maisons et de bâtiments.",
      "Rénovation et amélioration de l'habitat.",
    ],
  },
  {
    id: 8,
    img: plomberie, // Change image as necessary
    title: "Informatique",
    description:
      "Services informatiques pour l'installation, la maintenance et la réparation.",
    icon: faLaptop,
    points: [
      "Réparation et maintenance de PC et laptops.",
      "Assistance technique pour mobiles et tablettes.",
    ],
  },
  {
    id: 9,
    img: plomberie, // Change image as necessary
    title: "Électroménager",
    description:
      "Installation et réparation d'appareils électroménagers de toutes marques.",
    icon: faPlug,
    points: [
      "Installation d'appareils électroménagers.",
      "Réparation de machines à laver, réfrigérateurs, et plus.",
    ],
  },
];

export const taskers = [
  {
    id: 1,
    firstName: "Jean",
    lastName: "Dupont",
    email: "jean.dupont@example.com",
    rate: 3.8,
    description:
      "Je suis spécialisé dans le jardinage avec plus de 5 ans d'expérience. Passionné par la nature, je m'assure de fournir un service de qualité.",
    slug: "jean-dupont",
    profileImage: "jean-dupont-profile.jpg",
    workingImages: ["jean-dupont-work1.jpg", "jean-dupont-work2.jpg"],
    status: "new",
    domaine: "Jardinage",
  },
  {
    id: 2,
    firstName: "Marie",
    lastName: "Leblanc",
    email: "marie.leblanc@example.com",
    rate: 4.5,
    description:
      "Nettoyeuse professionnelle avec 10 ans d'expérience, je suis méticuleuse et rapide. La propreté est ma priorité.",
    slug: "marie-leblanc",
    profileImage: "marie-leblanc-profile.jpg",
    workingImages: ["marie-leblanc-work1.jpg", "marie-leblanc-work2.jpg"],
    status: "medium",
    domaine: "Nettoyage",
  },
  {
    id: 3,
    firstName: "Pierre",
    lastName: "Martin",
    email: "pierre.martin@example.com",
    rate: 4.2,
    description:
      "Plombier expérimenté, je résous tous vos problèmes de plomberie rapidement et efficacement.",
    slug: "pierre-martin",
    profileImage: "pierre-martin-profile.jpg",
    workingImages: ["pierre-martin-work1.jpg", "pierre-martin-work2.jpg"],
    status: "certified",
    domaine: "Plomberie",
  },
  {
    id: 4,
    firstName: "Sophie",
    lastName: "Durand",
    email: "sophie.durand@example.com",
    rate: 4.0,
    description:
      "Je suis une spécialiste du déménagement, je vous aide à transporter vos biens en toute sécurité.",
    slug: "sophie-durand",
    profileImage: "sophie-durand-profile.jpg",
    workingImages: ["sophie-durand-work1.jpg", "sophie-durand-work2.jpg"],
    status: "certified",
    domaine: "Déménagement",
  },
  {
    id: 5,
    firstName: "Lucas",
    lastName: "Bernard",
    email: "lucas.bernard@example.com",
    rate: 3.9,
    description:
      "Électricien qualifié, je vous assure une installation électrique sécurisée et conforme aux normes.",
    slug: "lucas-bernard",
    profileImage: "lucas-bernard-profile.jpg",
    workingImages: ["lucas-bernard-work1.jpg", "lucas-bernard-work2.jpg"],
    status: "new",
    domaine: "Électricité",
  },
  {
    id: 6,
    firstName: "Emma",
    lastName: "Robert",
    email: "emma.robert@example.com",
    rate: 4.8,
    description:
      "Peintre en bâtiment avec plus de 15 ans d'expérience, je donne vie à vos murs avec mes compétences artistiques.",
    slug: "emma-robert",
    profileImage: "emma-robert-profile.jpg",
    workingImages: ["emma-robert-work1.jpg", "emma-robert-work2.jpg"],
    status: "medium",
    domaine: "Peinture",
  },
  {
    id: 7,
    firstName: "Thomas",
    lastName: "Moreau",
    email: "thomas.moreau@example.com",
    rate: 3.7,
    description:
      "Jeune déménageur dynamique, je vous aide à transporter vos affaires en toute sécurité.",
    slug: "thomas-moreau",
    profileImage: "thomas-moreau-profile.jpg",
    workingImages: ["thomas-moreau-work1.jpg", "thomas-moreau-work2.jpg"],
    status: "new",
    domaine: "Déménagement",
  },
  {
    id: 8,
    firstName: "Chloé",
    lastName: "Petit",
    email: "chloe.petit@example.com",
    rate: 4.3,
    description:
      "Experte en jardinage, je transforme vos espaces verts en véritables oasis de paix.",
    slug: "chloe-petit",
    profileImage: "chloe-petit-profile.jpg",
    workingImages: ["chloe-petit-work1.jpg", "chloe-petit-work2.jpg"],
    status: "certified",
    domaine: "Jardinage",
  },
  {
    id: 9,
    firstName: "Maxime",
    lastName: "Garcia",
    email: "maxime.garcia@example.com",
    rate: 4.1,
    description:
      "Spécialiste en nettoyage, je vous assure un intérieur impeccable et sain.",
    slug: "maxime-garcia",
    profileImage: "maxime-garcia-profile.jpg",
    workingImages: ["maxime-garcia-work1.jpg", "maxime-garcia-work2.jpg"],
    status: "certified",
    domaine: "Nettoyage",
  },
  {
    id: 10,
    firstName: "Julie",
    lastName: "Bourgeois",
    email: "julie.bourgeois@example.com",
    rate: 3.6,
    description:
      "Nouvelle dans le domaine de la plomberie, je suis motivée à offrir un service de qualité.",
    slug: "julie-bourgeois",
    profileImage: "julie-bourgeois-profile.jpg",
    workingImages: ["julie-bourgeois-work1.jpg", "julie-bourgeois-work2.jpg"],
    status: "new",
    domaine: "Plomberie",
  },
];
