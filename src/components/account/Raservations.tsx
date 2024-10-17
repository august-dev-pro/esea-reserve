import React, { useState } from "react";
import { IReservation } from "@/ui/types"; // Importez votre type de réservation

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
      <h2 className="text-xl font-semibold mb-4">Mes Réservations </h2>

      {/* Boutons de filtre */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            activeFilter === "all" ? "bg-violet-900 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveFilter("all")}
        >
          Toutes
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeFilter === "confirmed"
              ? "bg-violet-900 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveFilter("confirmed")}
        >
          Confirmées
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeFilter === "pending"
              ? "bg-violet-900 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveFilter("pending")}
        >
          En attente
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeFilter === "canceled"
              ? "bg-violet-900 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveFilter("canceled")}
        >
          Refusées
        </button>
      </div>

      {/* Liste des réservations */}
      <div className="grid grid-cols-1 gap-6">
        {filteredReservations.map((reservation) => (
          <div
            key={reservation._id}
            className="reservation-item bg-white shadow rounded-lg p-4 border border-gray-200"
          >
            <div className="flex justify-between">
              <div className="">
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

      {/* Modal pour afficher les détails d'une réservation */}
      {selectedReservation && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg w-1/2 p-6">
            <h3 className="text-xl font-bold mb-4">
              Détails de la réservation
            </h3>
            <p>
              <strong>Service:</strong>{" "}
              {selectedReservation.serviceId || "Non spécifié"}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(selectedReservation.date).toLocaleDateString()}
            </p>
            <p>
              <strong>Adresse:</strong> {selectedReservation.adress}
            </p>
            <p>
              <strong>Options:</strong> {selectedReservation.options.join(", ")}
            </p>
            <p>
              <strong>Tasker:</strong> {selectedReservation.taskerId}
            </p>
            <p>
              <strong>Statut:</strong>{" "}
              {getStatusLabel(selectedReservation.status)}
            </p>
            <p>
              <strong>Description:</strong>{" "}
              {selectedReservation.taskDescription}
            </p>
            <p>
              <strong>Wever:</strong> {selectedReservation.wever}
            </p>
            <button
              onClick={() => setSelectedReservation(null)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
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
