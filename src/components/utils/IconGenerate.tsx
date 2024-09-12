import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCog,
  faTools,
  faBell,
  faBroom,
} from "@fortawesome/free-solid-svg-icons"; // Importe ici les icônes nécessaires
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// Le composant Icon qui inclut à la fois la logique et l'affichage
interface IconProps {
  iconName: string;
  size?: number; // Taille optionnelle de l'icône
  color?: string; // Couleur optionnelle de l'icône
}

// Fonction pour faire correspondre le nom de l'icône à l'icône FontAwesome
const getIconByName = (iconName: string): IconDefinition | null => {
  const iconMap: Record<string, IconDefinition> = {
    faHome: faHome,
    faUser: faUser,
    faCog: faCog,
    faTools: faTools,
    faBell: faBell,
    faBroom: faBroom,
    // Ajoute d'autres icônes ici selon tes besoins
  };

  const icon = iconMap[iconName];

  if (!icon) {
    return null;
  }

  return icon;
};

const IconGenerate: React.FC<IconProps> = ({ iconName, size, color }) => {
  const icon = getIconByName(iconName);

  if (!icon) {
    return (
      <FontAwesomeIcon
        icon={getIconByName("faHome")!}
        width={size}
        color={color}
      />
    );
  }

  return <FontAwesomeIcon icon={icon} width={size} color={color} />;
};

export default IconGenerate;
