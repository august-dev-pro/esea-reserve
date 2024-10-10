import { IService } from "@/ui/types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import IconGenerate from "@/components/utils/IconGenerate";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { deleteService, updateService } from "@/redux/slices/serviceSlice";

const ServicesDashboard = ({ services }: { services: IService[] }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleEdit = (serviceId: string) => {
    console.log(`Modifier le service avec l'ID: ${serviceId}`);
  };

  const handleDelete = async (serviceId: string) => {
    console.log(`Supprimer le service avec l'ID: ${serviceId}`);
    await dispatch(deleteService(serviceId));
  };

  return (
    <div className="p-6 m-4 bg-white shadow-md rounded-lg">
      <div className="mb-6 flex justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">
          Liste des services
        </h1>
        <div className="">
          <Link
            href={"/admin/dashboard/services/new"}
            className="btn-primary w-fit"
          >
            ajouter un service
          </Link>
        </div>
      </div>

      {services.length === 0 ? (
        <div className="text-gray-500">Aucun service disponible.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-100 rounded-lg shadow-lg">
            <thead className="bg-slate-200 text-gray-600">
              <tr>
                <th className="px-4 py-2 text-left">Titre</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Icon</th>
                <th className="px-4 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service._id} className="border-t-2 bg-white">
                  <td className="px-4 py-2">{service.title}</td>
                  <td className="px-4 py-2 font-Quicksand">
                    {service.description}
                  </td>
                  <td className="px-4 py-2">
                    <IconGenerate iconName={service.icon} />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex space-x-6 justify-end">
                      <FontAwesomeIcon
                        icon={faPen}
                        className="text-gray-400 cursor-pointer hover:text-gray-600"
                        onClick={() => handleEdit(service._id)}
                      />
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="text-red-500 cursor-pointer hover:text-red-700"
                        onClick={() => handleDelete(service._id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ServicesDashboard;
