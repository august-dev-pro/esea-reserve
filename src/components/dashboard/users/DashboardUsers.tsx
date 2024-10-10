import { IUser } from "@/ui/types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faPen,
  faTrash,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const DashboardUsers = ({ users }: { users: IUser[] }) => {
  const handleEdit = (userId: string) => {
    console.log(`Modifier l'utilisateur avec l'ID: ${userId}`);
  };

  const handleDelete = (userId: string) => {
    console.log(`Supprimer l'utilisateur avec l'ID: ${userId}`);
  };

  const handleCreate = () => {
    console.log("Créer un nouvel utilisateur");
  };

  return (
    <div className="md:mx-10 md:my-14">
      <div className="p-4 sm:p-6  bg-white shadow-lg rounded-lg">
        <div className="flex p-4 justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Liste des utilisateurs
          </h1>
          <button
            onClick={handleCreate}
            className="bg-blue text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Créer un utilisateur
          </button>
        </div>

        <div className="overflow-x-auto ">
          <table className="min-w-full table-auto bg-gray-100 rounded-lg shadow-inner">
            <thead className="capitalize font-[400] text-[18px] bg-slate-200 text-gray-600">
              <tr className="">
                <th className="px-4 py-2 text-left font-Quicksand">Date</th>
                <th className="px-4  text-left font-Quicksand">Nom</th>
                <th className="px-4  text-left font-Quicksand">id</th>
                <th className="px-4  text-left font-Quicksand">Rôle</th>
                <th className="px-4  text-right font-Quicksand">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: any) => (
                <tr key={user._id} className="border-t-2 bg-white">
                  <td className="px-4 py-2">
                    {new Date(user.registrationDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-4 capitalize">{`${user.firstName} ${user.lastName}`}</td>
                  <td className="px-4 py-3">{user._id}</td>
                  <td className="px-4 py-3 capitalize">{user.role}</td>
                  <td className="px-4 py-3">
                    <div className="flex space-x-8 justify-end">
                      <FontAwesomeIcon
                        icon={faPen}
                        className="text-gray-400 cursor-pointer hover:text-gray-600"
                        onClick={() => handleEdit(user._id)}
                      />
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="text-red-500 cursor-pointer hover:text-red-700"
                        onClick={() => handleDelete(user._id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Table for Admins */}
      <div className="p-4 sm:p-6 bg-white shadow-lg rounded-lg mt-8">
        <div className="flex p-4 justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Liste des administrateurs
          </h1>
          <button
            onClick={handleCreate}
            className="bg-blue text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ajouter un administrateur
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-gray-100 rounded-lg shadow-inner">
            <thead className="capitalize font-[400] text-[18px] bg-slate-200 text-gray-600">
              <tr>
                <th className="px-4 py-2 text-left font-Quicksand">Date</th>
                <th className="px-4 text-left font-Quicksand">Nom</th>
                <th className="px-4 text-left font-Quicksand">ID</th>
                <th className="px-4 text-left font-Quicksand">Rôle</th>
                <th className="px-4 text-right font-Quicksand">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users
                .filter(
                  (user: any) =>
                    user.role === "admin" || user.role === "super-admin"
                )
                .map((user: any) => (
                  <tr key={user._id} className="border-t-2 bg-white">
                    <td className="px-4 py-2">
                      {new Date(user.registrationDate).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-4 capitalize">{`${user.firstName} ${user.lastName}`}</td>
                    <td className="px-4 py-3">{user._id}</td>
                    <td className="px-4 py-3 capitalize">{user.role}</td>
                    <td className="px-4 py-3">
                      <div className="flex space-x-8 justify-end">
                        <FontAwesomeIcon
                          icon={faPen}
                          className="text-gray-400 cursor-pointer hover:text-gray-600"
                          onClick={() => handleEdit(user._id)}
                        />
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          className="text-red-500 cursor-pointer hover:text-red-700"
                          onClick={() => handleDelete(user._id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardUsers;
