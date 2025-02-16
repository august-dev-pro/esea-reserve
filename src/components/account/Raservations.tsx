import React, { useState } from "react";
import { IReservation } from "@/ui/types"; // Importez votre type de réservation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";

// Composant pour afficher les réservations de l'utilisateur
const Reservations = ({ reservations }: { reservations: IReservation[] }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedReservation, setSelectedReservation] =
    useState<IReservation | null>(null);

  // Fonction pour filtrer les réservations par statut
  const filteredReservations = reservations.filter((reservation) => {
    if (activeFilter === "all") return true;
    return reservation.status === activeFilter;
  });

  // Fonction pour afficher les informations détaillées
  const handleViewDetails = (reservation: IReservation) => {
    setSelectedReservation(reservation);
  };

  return (
    <div className="reservations-container">
      <h2 className="text-xl font-semibold mb-4">Mes Réservations</h2>

      {/* Appeler ReservationList et passer activeFilter et setActiveFilter */}
      <ReservationList
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      {/* Liste des réservations */}
      <div className="grid grid-cols-1 gap-6">
        {filteredReservations.map((reservation) => (
          <div
            key={reservation._id}
            className="reservation-item bg-white shadow rounded-lg p-4 border border-gray-200"
          >
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-bold font-Quicksand">
                  Service: {reservation.serviceId || "Non spécifié"}
                </h3>
                <p className="text-sm text-gray-600">
                  Date: {new Date(reservation.date).toLocaleDateString()}
                </p>
                <p className="text-sm font-Quicksand text-gray-600">
                  Adresse: {reservation.adress}
                </p>
                <p className={`text-sm ${getStatusClass(reservation.status)}`}>
                  Statut: {getStatusLabel(reservation.status)}
                </p>
              </div>
              <button
                onClick={() => handleViewDetails(reservation)}
                className="text-violet-600 font-Quicksand hover:text-violet-800 font-semibold"
              >
                Voir détails
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Composant ReservationList
const ReservationList = ({
  activeFilter,
  setActiveFilter,
}: {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filters = [
    { value: "all", label: "Toutes" },
    { value: "confirmed", label: "Confirmées" },
    { value: "pending", label: "En attente" },
    { value: "canceled", label: "Refusées" },
  ];

  return (
    <div>
      {/* Mobile: Dropdown */}
      <div className="md:hidden relative mb-2">
        <button
          className="w-full flex justify-between items-center px-4 py-2 bg-gray-200 rounded"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {filters.find((f) => f.value === activeFilter)?.label}
          <FontAwesomeIcon icon={faChevronDown} className="text-gray-600" />
        </button>
        {isDropdownOpen && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 shadow-md rounded mt-1 z-10">
            {filters.map((filter) => (
              <button
                key={filter.value}
                className={`w-full text-left px-4 py-2 ${
                  activeFilter === filter.value
                    ? "bg-violet-900 text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => {
                  setActiveFilter(filter.value);
                  setIsDropdownOpen(false);
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop: Boutons classiques */}
      <div className="hidden md:flex space-x-4 mb-6">
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={`px-4 py-2 rounded ${
              activeFilter === filter.value
                ? "bg-violet-900 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

// Fonction utilitaire pour obtenir la classe CSS basée sur le statut
const getStatusClass = (status: string) => {
  switch (status) {
    case "confirmed":
      return "text-green-600";
    case "pending":
      return "text-yellow-600";
    case "canceled":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
};

// Fonction utilitaire pour obtenir un label lisible pour le statut

const getStatusLabel = (status: string) => {
  switch (status) {
    case "confirmed":
      return "Confirmée";
    case "pending":
      return "En attente";
    case "canceled":
      return "Refusée";
    default:
      return "Inconnu";
  }
};

export default Reservations;
