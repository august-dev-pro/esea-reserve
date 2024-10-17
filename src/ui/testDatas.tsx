import banniere from "@/imgs/banniere/R.jpeg";
import jardinage from "@/imgs/visuel-jardinier.jpg";
import banniere3 from "@/imgs/banniere/demenagement.jpg";
import banniere4 from "@/imgs/banniere/plomberie.jpeg";
import plomberie from "@/imgs/banniere/plomberie.jpeg";
import electricité from "@/imgs/depannage-electrique.jpg";
import {
  faBolt,
  faBroom,
  faHammer,
  faLaptop,
  faLeaf,
  faPaintRoller,
  faPlug,
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
    points: [
      "Nettoyage pour maisons, appartements et bureaux.",
      "Entretien et nettoyage des véhicules.",
    ],
    options: [
      {
        title: "Nettoyage de la maison",
        description:
          "Vous cherchez des services de nettoyage pour votre maison ? Laissez-nous vous aider. Peu importe la tâche, nos nettoyeurs locaux peuvent s'occuper de tous vos besoins résidentiels et de nettoyage de maison.",
        img: "",
      },
      {
        title: "Nettoyage en profondeur",
        description:
          "Vous avez un espace qui nécessite une attention particulière pour briller ? Nos professionnels appliqueront des efforts supplémentaires pour rendre votre espace impeccable.",
        img: "",
      },
      {
        title: "Services de désinfection",
        description:
          "Besoin de quelqu'un pour désinfecter votre maison ou bureau ? Engagez un professionnel pour s'occuper de vos besoins en matière de désinfection.",
        img: "",
      },
      {
        title: "Nettoyage à l'entrée",
        description:
          "Vous vous apprêtez à emménager dans une nouvelle maison ? Faites de votre maison un véritable chez-vous avec notre service de nettoyage avant l'emménagement, assuré par un expert.",
        img: "",
      },
      {
        title: "Nettoyage à la sortie",
        description:
          "Vous ne pouvez pas quitter votre maison sans nettoyage préalable. Évitez les tracas et laissez un professionnel fournir les services de nettoyage de fin de bail.",
        img: "",
      },
      {
        title: "Nettoyage de locations de vacances",
        description:
          "Les locataires Airbnb peuvent parfois laisser un désordre. Pour tous vos besoins en matière de nettoyage de locations de vacances, faites appel à un professionnel.",
        img: "",
      },
      {
        title: "Service de nettoyage de tapis",
        description:
          "Obtenez de l'aide pour éliminer les taches tenaces sur vos tapis et moquettes !",
        img: "",
      },
      {
        title: "Nettoyage de garage",
        description:
          "Garage encombré et sale ? Nos professionnels peuvent le nettoyer et le rendre parfaitement organisé.",
        img: "",
      },
      {
        title: "Services de nettoyage ponctuels",
        description:
          "Pas le temps de nettoyer la maison ? Reposez-vous et laissez un professionnel faire le ménage. Rendez votre maison impeccable avec un service de nettoyage ponctuel et efficace.",
        img: "",
      },
      {
        title: "Lavage de voiture",
        description:
          "Engagez un professionnel pour rendre votre voiture comme neuve !",
        img: "",
      },
      {
        title: "Aide au linge",
        description:
          "Panier à linge débordant ? Les professionnels peuvent laver, sécher, plier, repasser et même récupérer votre nettoyage à sec.",
        img: "",
      },
    ],
  },
  {
    id: 2,
    img: jardinage,
    title: "Jardinage",
    description:
      "Améliorez votre jardin et espace avec nos services de jardinage experts.",
    icon: faLeaf,
    points: [
      "Entretien de pelouses et jardins.",
      "Plantation et soin des fleurs.",
    ],
    options: [
      {
        title: "Tonte de pelouse",
        description:
          "Gardez votre pelouse bien entretenue avec nos services de tonte réguliers.",
        img: "",
      },
      {
        title: "Élagage des arbres",
        description:
          "Taillez vos arbres pour un aspect soigné et une santé optimale.",
        img: "",
      },
      {
        title: "Plantation de fleurs",
        description:
          "Ajoutez de la couleur à votre jardin avec notre service de plantation de fleurs.",
        img: "",
      },
      {
        title: "Désherbage",
        description:
          "Éliminez les mauvaises herbes de votre jardin de manière efficace.",
        img: "",
      },
      {
        title: "Arrosage de jardin",
        description:
          "Assurez l'hydratation parfaite de vos plantes avec nos systèmes d'arrosage.",
        img: "",
      },
      {
        title: "Aménagement paysager",
        description:
          "Transformez votre jardin en un espace de rêve avec notre aménagement paysager.",
        img: "",
      },
      {
        title: "Entretien de haies",
        description: "Taillez vos haies pour un jardin net et bien délimité.",
        img: "",
      },
      {
        title: "Taille d'arbustes",
        description:
          "Donnez une forme élégante à vos arbustes avec notre service de taille.",
        img: "",
      },
      {
        title: "Aménagement de parterres de fleurs",
        description:
          "Créez des parterres de fleurs magnifiques pour embellir votre jardin.",
        img: "",
      },
    ],
  },
  {
    id: 3,
    img: banniere3,
    title: "Demenagement",
    description:
      "Des services de déménagement fiables et rapides pour un transfert sans souci.",
    icon: faTruck,
    points: [
      "Service de déménagement sécurisé.",
      "Emballage et déballage professionnel.",
    ],
    options: [
      {
        title: "Déménagement local",
        description:
          "Déplacez vos affaires facilement et rapidement à proximité.",
        img: "",
      },
      {
        title: "Déménagement longue distance",
        description:
          "Un service de déménagement longue distance pour un transfert sans stress.",
        img: "",
      },
      {
        title: "Service d'emballage",
        description:
          "Protégez vos biens avec notre service d'emballage professionnel.",
        img: "",
      },
      {
        title: "Service de déballage",
        description:
          "Facilitez votre installation avec notre aide au déballage.",
        img: "",
      },
      {
        title: "Déménagement commercial",
        description:
          "Déplacez votre entreprise sans interrompre vos activités.",
        img: "",
      },
      {
        title: "Transport d'objets lourds",
        description: "Transport sécurisé d'objets lourds et encombrants.",
        img: "",
      },
      {
        title: "Stockage temporaire",
        description:
          "Solutions de stockage temporaire pour vos biens entre deux déménagements.",
        img: "",
      },
      {
        title: "Relocalisation d'entreprise",
        description:
          "Déplacement d'entreprises avec efficacité et professionnalisme.",
        img: "",
      },
    ],
  },
  {
    id: 4,
    img: banniere4,
    title: "Plomberie",
    description: "Des solutions de plomberie efficaces pour tous vos besoins.",
    icon: faWrench,
    points: [
      "Réparation de fuites d'eau.",
      "Installation de systèmes de plomberie.",
    ],
    options: [
      {
        title: "Réparation de fuites",
        description:
          "Réparez rapidement vos fuites d'eau avec l'aide de nos experts en plomberie.",
        img: "",
      },
      {
        title: "Installation de tuyauterie",
        description:
          "Installation professionnelle de systèmes de tuyauterie pour assurer une circulation d'eau fluide.",
        img: "",
      },
      {
        title: "Débouchage de canalisations",
        description:
          "Débouchage efficace de vos canalisations pour garantir un écoulement optimal.",
        img: "",
      },
      {
        title: "Installation de chauffe-eau",
        description:
          "Installez et maintenez vos chauffe-eau avec nos services spécialisés.",
        img: "",
      },
      {
        title: "Réparation de robinetterie",
        description:
          "Réparez vos robinets défectueux pour éviter les fuites et les gaspillages d'eau.",
        img: "",
      },
      {
        title: "Remplacement de toilettes",
        description:
          "Remplacez vos toilettes anciennes par des modèles modernes et économes en eau.",
        img: "",
      },
      {
        title: "Réparation de systèmes de chauffage",
        description:
          "Réparez vos systèmes de chauffage pour un confort optimal et continu.",
        img: "",
      },
    ],
  },
  {
    id: 5,
    img: electricité,
    title: "Electricite",
    description:
      "Des services électriques professionnels pour installations et réparations.",
    icon: faBolt,
    points: [
      "Installation de systèmes électriques.",
      "Réparation et maintenance de circuits électriques.",
    ],
    options: [
      {
        title: "Installation électrique",
        description:
          "Installation complète de systèmes électriques pour résidences et commerces.",
        img: "",
      },
      {
        title: "Réparation de circuits",
        description:
          "Réparez vos circuits électriques pour assurer un fonctionnement fiable et sécurisé.",
        img: "",
      },
      {
        title: "Maintenance électrique",
        description:
          "Maintenance préventive pour éviter les pannes électriques et assurer un fonctionnement optimal.",
        img: "",
      },
      {
        title: "Installation d'éclairages",
        description:
          "Installez des éclairages modernes et efficaces pour illuminer votre espace.",
        img: "",
      },
      {
        title: "Mise à niveau de systèmes électriques",
        description:
          "Améliorez votre installation électrique pour plus de sécurité et d'efficacité.",
        img: "",
      },
      {
        title: "Remplacement de fusibles",
        description:
          "Remplacez les fusibles défectueux pour rétablir l'alimentation électrique.",
        img: "",
      },
      {
        title: "Installation de prises électriques",
        description:
          "Ajoutez des prises supplémentaires dans votre maison pour plus de commodité.",
        img: "",
      },
    ],
  },
  {
    id: 6,
    img: plomberie,
    title: "Peinture",
    description:
      "Services de peinture pour un intérieur et un extérieur parfaits.",
    icon: faPaintRoller,
    points: [
      "Peinture intérieure et extérieure.",
      "Revêtements et finitions de haute qualité.",
    ],
    options: [
      {
        title: "Peinture intérieure",
        description:
          "Rafraîchissez et modernisez votre espace intérieur avec notre service de peinture.",
        img: "",
      },
      {
        title: "Peinture extérieure",
        description:
          "Donnez un nouveau look à l'extérieur de votre maison avec notre peinture extérieure durable.",
        img: "",
      },
      {
        title: "Application de revêtements",
        description:
          "Ajoutez des revêtements décoratifs pour un fini unique et personnalisé.",
        img: "",
      },
      {
        title: "Restauration de surfaces",
        description:
          "Réparez et restaurez les surfaces endommagées avant d'appliquer la peinture.",
        img: "",
      },
      {
        title: "Peinture de meubles",
        description:
          "Rénovez vos meubles avec une nouvelle couche de peinture pour leur donner un aspect neuf.",
        img: "",
      },
      {
        title: "Retouches de peinture",
        description:
          "Effectuez des retouches pour maintenir l'apparence impeccable de vos surfaces peintes.",
        img: "",
      },
    ],
  },
  {
    id: 7,
    img: plomberie,
    title: "Construction",
    description:
      "Services de construction et de rénovation pour tous vos besoins.",
    icon: faHammer,
    points: [
      "Construction de maisons et de bâtiments.",
      "Rénovation et amélioration de l'habitat.",
    ],
    options: [
      {
        title: "Construction résidentielle",
        description:
          "Construction de maisons sur mesure répondant à vos besoins et préférences personnelles.",
        img: "",
      },
      {
        title: "Construction commerciale",
        description:
          "Créez des espaces commerciaux fonctionnels et attrayants avec notre service de construction.",
        img: "",
      },
      {
        title: "Rénovation intérieure",
        description:
          "Réaménagez l'intérieur de votre maison pour améliorer la fonctionnalité et l'esthétique.",
        img: "",
      },
      {
        title: "Rénovation extérieure",
        description:
          "Améliorez l'apparence extérieure de votre maison pour une meilleure première impression.",
        img: "",
      },
      {
        title: "Amélioration de l'habitat",
        description:
          "Améliorez votre espace de vie avec des modifications pratiques et esthétiques pour plus de confort.",
        img: "",
      },
      {
        title: "Extensions de bâtiments",
        description:
          "Ajoutez des espaces supplémentaires à vos bâtiments existants pour répondre à vos besoins croissants.",
        img: "",
      },
    ],
  },
  {
    id: 8,
    img: plomberie,
    title: "Informatique",
    description:
      "Services informatiques pour l'installation, la maintenance et la réparation.",
    icon: faLaptop,
    points: [
      "Réparation et maintenance de PC et laptops.",
      "Assistance technique pour mobiles et tablettes.",
    ],
    options: [
      {
        title: "Réparation de PC",
        description:
          "Réparez votre PC pour qu'il fonctionne comme neuf avec notre service spécialisé.",
        img: "",
      },
      {
        title: "Maintenance de laptops",
        description:
          "Assurez le bon fonctionnement de vos laptops avec notre service de maintenance préventive.",
        img: "",
      },
      {
        title: "Assistance mobile",
        description:
          "Recevez de l'aide pour résoudre les problèmes techniques de vos appareils mobiles.",
        img: "",
      },
      {
        title: "Installation de logiciels",
        description:
          "Installation et configuration de logiciels pour vos besoins personnels ou professionnels.",
        img: "",
      },
      {
        title: "Réparation de matériel informatique",
        description:
          "Réparez les composants matériels de vos équipements informatiques pour assurer leur bon fonctionnement.",
        img: "",
      },
      {
        title: "Support technique à distance",
        description:
          "Recevez une assistance technique à distance pour résoudre vos problèmes informatiques efficacement.",
        img: "",
      },
    ],
  },
  {
    id: 9,
    img: plomberie,
    title: "Electromenager",
    description:
      "Installation et réparation d'appareils électroménagers de toutes marques.",
    icon: faPlug,
    points: [
      "Installation d'appareils électroménagers.",
      "Réparation de machines à laver, réfrigérateurs, et plus.",
    ],
    options: [
      {
        title: "Installation de machines à laver",
        description:
          "Installez vos machines à laver avec précision et efficacité pour un fonctionnement optimal.",
        img: "",
      },
      {
        title: "Réparation de réfrigérateurs",
        description:
          "Réparez vos réfrigérateurs pour assurer une conservation optimale des aliments et un fonctionnement fiable.",
        img: "",
      },
      {
        title: "Entretien de lave-vaisselle",
        description:
          "Maintenez vos lave-vaisselle en bon état de fonctionnement avec notre service d'entretien.",
        img: "",
      },
      {
        title: "Réparation de fours",
        description:
          "Réparez vos fours pour garantir une cuisson homogène et sécurisée.",
        img: "",
      },
      {
        title: "Installation de climatiseurs",
        description:
          "Installez des climatiseurs pour un confort thermique optimal dans votre espace.",
        img: "",
      },
      {
        title: "Réparation d'appareils divers",
        description:
          "Réparez divers appareils électroménagers pour garantir leur bon fonctionnement.",
        img: "",
      },
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

export const comments = [
  {
    id: 1,
    service: "Nettoyage",
    name: "Jean Dupont",
    text: "Excellent service ! Les prestataires étaient très professionnels et ponctuels.",
    date: "2024-07-25",
    rate: 5,
  },
  {
    id: 2,
    service: "Nettoyage",
    name: "Marie Curie",
    text: "Très satisfait du travail effectué. Je recommande vivement.",
    date: "2024-07-22",
    rate: 4,
  },
  {
    id: 3,
    service: "Nettoyage",
    name: "Pierre Martin",
    text: "Service rapide et efficace. Bon rapport qualité-prix.",
    date: "2024-07-20",
    rate: 4,
  },

  // Jardinage
  {
    id: 4,
    service: "Jardinage",
    name: "Alice Moreau",
    text: "Le jardin est magnifique maintenant. Très bon travail.",
    date: "2024-07-21",
    rate: 5,
  },
  {
    id: 5,
    service: "Jardinage",
    name: "Robert Leblanc",
    text: "Des professionnels très compétents. Je suis ravi du résultat.",
    date: "2024-07-19",
    rate: 4,
  },
  {
    id: 6,
    service: "Jardinage",
    name: "Sophie Bernard",
    text: "Service de jardinage de haute qualité. Je recommande sans hésiter.",
    date: "2024-07-18",
    rate: 5,
  },

  // Déménagement
  {
    id: 7,
    service: "Déménagement",
    name: "Lucie Lefevre",
    text: "Très bon service de déménagement, tout s’est bien passé.",
    date: "2024-07-23",
    rate: 4,
  },
  {
    id: 8,
    service: "Déménagement",
    name: "Marc Dubois",
    text: "Service efficace et rapide. Les équipes étaient très professionnelles.",
    date: "2024-07-24",
    rate: 5,
  },
  {
    id: 9,
    service: "Déménagement",
    name: "Élise Laurent",
    text: "Un déménagement sans stress. Je suis très satisfait du service.",
    date: "2024-07-20",
    rate: 4,
  },

  // Plomberie
  {
    id: 10,
    service: "Plomberie",
    name: "Jacques Bernard",
    text: "Réparation rapide et efficace de ma fuite d’eau. Très satisfait.",
    date: "2024-07-22",
    rate: 5,
  },
  {
    id: 11,
    service: "Plomberie",
    name: "Claire Dupuis",
    text: "Service professionnel et à l’écoute. Je recommande.",
    date: "2024-07-18",
    rate: 4,
  },
  {
    id: 12,
    service: "Plomberie",
    name: "Marc Lefèvre",
    text: "Bonne intervention, mais un peu cher. Globalement satisfait.",
    date: "2024-07-21",
    rate: 3,
  },

  // Électricité
  {
    id: 13,
    service: "Électricité",
    name: "Isabelle Martin",
    text: "Installation électrique impeccable. Travail soigné et rapide.",
    date: "2024-07-20",
    rate: 5,
  },
  {
    id: 14,
    service: "Électricité",
    name: "Julien Petit",
    text: "Très bon service, mais il a fallu attendre un peu pour la réparation.",
    date: "2024-07-23",
    rate: 4,
  },
  {
    id: 15,
    service: "Électricité",
    name: "Élodie Roy",
    text: "Service correct, mais quelques petits problèmes ont persisté après l’intervention.",
    date: "2024-07-22",
    rate: 3,
  },

  // Peinture
  {
    id: 16,
    service: "Peinture",
    name: "Henri Vidal",
    text: "Peinture intérieure réalisée avec soin. Très satisfait du résultat.",
    date: "2024-07-19",
    rate: 5,
  },
  {
    id: 17,
    service: "Peinture",
    name: "Julie Lambert",
    text: "Travail soigné, mais quelques retouches étaient nécessaires.",
    date: "2024-07-21",
    rate: 4,
  },
  {
    id: 18,
    service: "Peinture",
    name: "Paul Durand",
    text: "Service de peinture acceptable, mais le délai a été plus long que prévu.",
    date: "2024-07-23",
    rate: 3,
  },

  // Construction
  {
    id: 19,
    service: "Construction",
    name: "Marie-Claude Petit",
    text: "Construction de ma maison terminée dans les délais. Excellent travail.",
    date: "2024-07-25",
    rate: 5,
  },
  {
    id: 20,
    service: "Construction",
    name: "Louis Laurent",
    text: "Bonne qualité de construction, mais quelques retards ont été rencontrés.",
    date: "2024-07-22",
    rate: 4,
  },
  {
    id: 21,
    service: "Construction",
    name: "Nathalie Dupuis",
    text: "Le projet a pris plus de temps que prévu, mais la qualité est au rendez-vous.",
    date: "2024-07-20",
    rate: 3,
  },

  // Informatique
  {
    id: 22,
    service: "Informatique",
    name: "Gérard Rousseau",
    text: "Réparation de mon PC effectuée rapidement et efficacement.",
    date: "2024-07-18",
    rate: 5,
  },
  {
    id: 23,
    service: "Informatique",
    name: "Sophie Durant",
    text: "Bonne assistance technique, mais un peu de retard sur la réponse.",
    date: "2024-07-20",
    rate: 4,
  },
  {
    id: 24,
    service: "Informatique",
    name: "Philippe Martin",
    text: "Le support technique est moyen, quelques améliorations à apporter.",
    date: "2024-07-23",
    rate: 3,
  },

  // Électroménager
  {
    id: 25,
    service: "Électroménager",
    name: "Véronique Simon",
    text: "Installation de mon climatiseur effectuée rapidement et avec soin.",
    date: "2024-07-21",
    rate: 5,
  },
  {
    id: 26,
    service: "Électroménager",
    name: "Michel Roux",
    text: "Réparation de mon réfrigérateur correcte, mais le service était un peu lent.",
    date: "2024-07-24",
    rate: 4,
  },
  {
    id: 27,
    service: "Électroménager",
    name: "Céline Berger",
    text: "Le service est acceptable, mais il y a eu quelques problèmes de communication.",
    date: "2024-07-22",
    rate: 3,
  },
];

export const fakeNotifications = [
  {
    id: 1,
    title: "Nouvelle réservation",
    message: "Vous avez une nouvelle réservation pour le service 'Nettoyage'.",
    type: "success", // success, error, warning, info
    isRead: false,
    date: "2024-10-15",
  },
  {
    id: 2,
    title: "Mise à jour du profil",
    message: "Votre profil a été mis à jour avec succès.",
    type: "info",
    isRead: true,
    date: "2024-10-14",
  },
  {
    id: 3,
    title: "Problème avec la réservation",
    message: "Il y a eu un problème avec votre dernière réservation.",
    type: "error",
    isRead: false,
    date: "2024-10-13",
  },
  {
    id: 4,
    title: "Réservation confirmée",
    message: "Votre réservation pour le service 'Jardinage' a été confirmée.",
    type: "success",
    isRead: true,
    date: "2024-10-12",
  },
];
export const fakeReservations = [
  {
    _id: "1",
    userId: "user001",
    serviceId: "Service de nettoyage",
    date: "2024-10-15",
    adress: "123 Rue de Paris, Paris, France",
    options: ["Nettoyage complet", "Désinfection"],
    taskDescription: "Nettoyage complet de l'appartement après rénovation.",
    taskerId: "tasker001",
    status: "confirmed",
    jobType: "Ménage",
    wever: "Matin",
    registrationDate: new Date("2024-09-10"),
  },
  {
    _id: "2",
    userId: "user001",
    serviceId: "Service de jardinage",
    date: "2024-10-20",
    adress: "45 Rue du Jardin, Lyon, France",
    options: ["Tonte de pelouse", "Taille des haies"],
    taskDescription: "Entretien du jardin avant l'hiver.",
    taskerId: "tasker002",
    status: "pending",
    jobType: "Jardinage",
    wever: "Après-midi",
    registrationDate: new Date("2024-09-12"),
  },
  {
    _id: "3",
    userId: "user001",
    serviceId: "Service de plomberie",
    date: "2024-10-18",
    adress: "78 Boulevard Haussmann, Paris, France",
    options: ["Réparation de fuite", "Remplacement de robinet"],
    taskDescription: "Réparer une fuite d'eau dans la cuisine.",
    taskerId: "tasker003",
    status: "canceled",
    jobType: "Plomberie",
    wever: "Soirée",
    registrationDate: new Date("2024-09-15"),
  },
  {
    _id: "4",
    userId: "user001",
    serviceId: "Service d'électricien",
    date: "2024-10-25",
    adress: "12 Rue de la République, Marseille, France",
    options: ["Installation de luminaires", "Vérification du câblage"],
    taskDescription:
      "Installation de nouveaux luminaires dans la salle de bain.",
    taskerId: "tasker004",
    status: "confirmed",
    jobType: "Électricité",
    wever: "Matin",
    registrationDate: new Date("2024-09-20"),
  },
  {
    _id: "5",
    userId: "user001",
    serviceId: "Service de déménagement",
    date: "2024-10-30",
    adress: "200 Rue de Lille, Lille, France",
    options: ["Chargement", "Transport", "Déchargement"],
    taskDescription:
      "Déménagement complet de l'appartement à une nouvelle adresse.",
    taskerId: "tasker005",
    status: "pending",
    jobType: "Déménagement",
    wever: "Matin",
    registrationDate: new Date("2024-09-25"),
  },
];
