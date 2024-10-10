import { fetchServices } from "@/redux/slices/serviceSlice";
import { fetchUsers } from "@/redux/slices/userSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
  faConciergeBell,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Réservations Mensuelles",
      data: [0, 0, 0, 0, 0, 0],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: function (context: any) {
          return `${context.dataset.label}: ${context.raw}`;
        },
      },
    },
  },
};

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const users = useSelector((state: RootState) => state.user.users);
  const services = useSelector((state: RootState) => state.service.services);
  const isLoading = useSelector(
    (state: RootState) => state.user.loading || state.service.loading
  );
  const error = useSelector(
    (state: RootState) => state.service.error || state.user.error
  );

  useEffect(() => {
    dispatch(fetchServices());
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <div className="text-center mt-8 text-xl">Chargement...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-8">Erreur: {error}</div>;
  }

  const handleNavigation = (element: string) => {
    router.push(`/admin/dashboard/${element}`);
  };

  return (
    <div className="p-8 flex flex-col gap-10 ">
      <div className="count flex gap-8">
        <div
          onClick={() => handleNavigation("users")}
          className="flex p-6 gap-4 w-fit h-[100px] bg-white rounded-lg shadow-lg items-center justify-between transition cursor-pointer"
        >
          <div className="flex items-center justify-center rounded-[50%] bg-violet-900 w-14 h-14 text-white text-[20px]">
            <FontAwesomeIcon icon={faUserCog} />
          </div>
          <div className="flex flex-col">
            <div className="font-Quicksand font-[500] text-gray-500 capitalize text-[18px]">
              utilisateurs
            </div>
            <div className="font-[600] text-[25px]">{users.length}05</div>
          </div>
        </div>
        <div
          onClick={() => handleNavigation("services")}
          className="flex p-6 gap-4 w-fit h-[100px] bg-white rounded-lg shadow-lg items-center justify-between transition cursor-pointer"
        >
          <div className="flex items-center justify-center rounded-[50%] bg-blue w-14 h-14 text-white text-[20px]">
            <FontAwesomeIcon icon={faConciergeBell} />
          </div>
          <div className="flex flex-col">
            <div className="font-Quicksand font-[500] text-gray-500 capitalize text-[18px]">
              total services
            </div>
            <div className="font-[600] text-[25px]">{services.length}05</div>
          </div>
        </div>
        <div
          onClick={() => handleNavigation("reservations")}
          className="flex p-6 gap-4 w-fit h-[100px] bg-white rounded-lg shadow-lg items-center justify-between transition cursor-pointer"
        >
          <div className="flex items-center justify-center rounded-[50%] bg-orange-700 w-14 h-14 text-white text-[20px]">
            <FontAwesomeIcon icon={faClipboard} />
          </div>
          <div className="flex flex-col">
            <div className="font-Quicksand font-[500] text-gray-500 capitalize text-[18px]">
              total reservations
            </div>
            <div className="font-[600] text-[25px]">7405</div>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-3">
        <h2 className="text-xl font-bold mb-4">
          Statistiques des Réservations
        </h2>
        <Bar data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
