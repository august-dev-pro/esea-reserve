import React, { useState } from "react";
import { IUser } from "@/ui/types";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faSignOutAlt,
  faTrashAlt,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";

const AdvancedSettings = ({ user }: { user: IUser }) => {
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  // Fonction pour devenir tasker
  const handleBecomeTasker = async () => {};

  // Fonction pour se désinscrire en tant que tasker
  const handleResignTasker = async () => {};

  // Fonction pour supprimer le compte utilisateur
  const handleDeleteAccount = async () => {};

  // Fonction pour contacter le support
  const handleContactSupport = () => {
    // Logique pour ouvrir un formulaire de contact ou rediriger vers une page "Nous contacter"
    alert("Redirection vers le support client...");
  };

  return (
    <div className="advanced-settings space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Paramètres avancés</h2>

      <div className="space-y-4">
        {/* Devenir Tasker ou Se désinscrire */}

        {/* Supprimer compte */}
        <div className="flex flex-col gap-4 border p-4 w-full border-gray-300 bg-white">
          <div className="flex gap-3 items-center font-Quicksand capitalize border-b w-fit border-gray-300 pb-1 font-[600]">
            gestion des comptes
            <FontAwesomeIcon className="text-red-600" icon={faTrashAlt} />
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            <button className="font-Quicksand py-3 px-5 bg-red-600 text-white hover:bg-red-700 transition-all">
              supprimer mon compte
            </button>
            <button className="font-Quicksand py-3 px-5 bg-red-500 text-white hover:bg-red-700 transition-all">
              supprimer mon compte prestataire
            </button>
          </div>
        </div>
        {/* Contacter le support */}
      </div>
    </div>
  );
};

export default AdvancedSettings;
