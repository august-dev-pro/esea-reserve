import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan, faEye } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { deleteReservation } from "@/redux/slices/reservationSlice";
import { IReservation, IService, IUser } from "@/ui/types";

const ReservationsDashboard = ({
  reservations,
  services,
  users,
}: {
  reservations: IReservation[];
  services: IService[];
  users: IUser[];
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedReservation, setSelectedReservation] =
    useState<IReservation | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (reservation: IReservation) => {
    setSelectedReservation(reservation);
    setIsModalOpen(true);
  };

  const handleEdit = (reservationId: string) => {
    console.log(`Modifier la réservation avec l'ID: ${reservationId}`);
  };

  const handleDelete = async (reservationId: string) => {
    console.log(`Supprimer la réservation avec l'ID: ${reservationId}`);
    await dispatch(deleteReservation(reservationId));
  };

  return (
    <div className="p-6 m-4 bg-white shadow-md rounded-lg">
      <div className="mb-6 flex justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">
          Liste des réservations
        </h1>
        <div>
          <Link
            href={"/admin/dashboard/reservations/new"}
            className="btn-primary w-fit"
          >
            ajouter une réservation
          </Link>
        </div>
      </div>

      {reservations.length === 0 ? (
        <div className="text-gray-500">Aucune réservation disponible.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-100 rounded-lg shadow-lg">
            <thead className="bg-slate-200 text-gray-600">
              <tr>
                <th className="px-4 py-2 text-left">Date d'enregistrement</th>
                <th className="px-4 py-2 text-left">Service</th>
                <th className="px-4 py2">Statut</th>
                <th className="px-4 py-2 text-left">Adresse</th>
                <th className="px-4 py-2 text-left">
                  Date d'intervention
                </th>{" "}
                {/* New column */}
                <th className="px-4 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation._id} className="border-t-2 bg-white">
                  <td className="px-4 py-2">
                    {new Date(
                      reservation.registrationDate
                    ).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">
                    {reservation.serviceId ? reservation.serviceId : "N/A"}
                  </td>
                  <td className=" py-2 w-14 h-4 flex items-start justify-end">
                    <div
                      className={`h-3 w-3 mt-2 rounded-[50%] ${
                        reservation.status === "confirmed"
                          ? "bg-green-700"
                          : reservation.status === "pending"
                          ? "bg-yellow-400"
                          : "bg-red-600"
                      }`}
                    ></div>
                  </td>
                  <td className="px-4 py-2">{reservation.adress}</td>
                  <td className="px-4 py-2">
                    {new Date(reservation.date).toLocaleDateString()}{" "}
                    {/* Intervention date */}
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex space-x-6 justify-end">
                      <FontAwesomeIcon
                        icon={faEye}
                        className="text-blue-500 cursor-pointer hover:text-blue-700"
                        onClick={() => handleViewDetails(reservation)}
                      />
                      <FontAwesomeIcon
                        icon={faPen}
                        className="text-gray-400 cursor-pointer hover:text-gray-600"
                        onClick={() => handleEdit(reservation._id)}
                      />
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="text-red-500 cursor-pointer hover:text-red-700"
                        onClick={() => handleDelete(reservation._id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isModalOpen && selectedReservation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">
              Détails de la réservation
            </h2>
            <p>
              <strong>Options:</strong> {selectedReservation.options.join(", ")}
            </p>
            <p>
              <strong>Tasker ID:</strong> {selectedReservation.taskerId}
            </p>
            <p>
              <strong>Type de travail:</strong> {selectedReservation.jobType}
            </p>
            <p>
              <strong>Wever:</strong> {selectedReservation.wever}
            </p>
            <p>
              <strong>Date d'intervention:</strong>{" "}
              {new Date(selectedReservation.date).toLocaleDateString()}
            </p>{" "}
            {/* Intervention date in modal */}
            <div className="mt-4 flex justify-end">
              <button
                className="btn-secondary"
                onClick={() => setIsModalOpen(false)}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationsDashboard;
