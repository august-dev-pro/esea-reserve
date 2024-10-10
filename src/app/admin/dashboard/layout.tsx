"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faUsers,
  faClipboard,
  faCog,
  faSignOutAlt,
  faTimes,
  faChevronRight,
  faConciergeBell,
} from "@fortawesome/free-solid-svg-icons";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "@/ui/fonctions";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  { href: "/admin/dashboard", icon: faChartLine, label: "Dashboard" },
  { href: "/admin/dashboard/users", icon: faUsers, label: "Utilisateurs" },
  {
    href: "/admin/dashboard/reservations",
    icon: faClipboard,
    label: "Réservations",
  },
  {
    href: "/admin/dashboard/services",
    icon: faConciergeBell,
    label: "services",
  },
  { href: "/admin/dashboard/settings", icon: faCog, label: "Paramètres" },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const pathname = usePathname();

  const element = pathname.split("/").pop();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (isSidebarOpen) {
      setIsSidebarMinimized(true);
    } else {
      setIsSidebarMinimized(false);
    }
  };

  const closeSidebarOnOutsideClick = (e: MouseEvent) => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar && !sidebar.contains(e.target as Node)) {
      setIsSidebarOpen(false);
      setIsSidebarMinimized(true);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("click", closeSidebarOnOutsideClick);
    } else {
      document.removeEventListener("click", closeSidebarOnOutsideClick);
    }

    return () => {
      document.removeEventListener("click", closeSidebarOnOutsideClick);
    };
  }, [isSidebarOpen]);

  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      localStorage.setItem("redirectAfterLogin", "/admin/dashboard");
      router.push("/login");
    } else if (user?.role !== "admin") {
      router.push("/"); // Redirige vers la page d'accueil
    }
  }, [user, router]);

  if (user?.role !== "admin") {
    return null;
  }

  return (
    <div className="relative flex" style={{ height: "calc(100vh - 66px)" }}>
      {/* Sidebar */}
      <div
        id="sidebar"
        className={`bg-violet-950 z-10 text-white h-full transition-transform transform ${
          isSidebarOpen
            ? "translate-x-0 w-64"
            : isSidebarMinimized
            ? "translate-x-0"
            : "-translate-x-full w-64"
        } md:translate-x-0 duration-300`}
      >
        <div className="flex items-center justify-between border-b border-white">
          <h2 className={`${isSidebarMinimized ? "hidden" : "inline"} p-4`}>
            Mon Dashboard
          </h2>
          {/* Icon Close */}
          <button
            className={` h-full ${
              !isSidebarOpen ? "w-full" : "w-fit"
            } text-white hover:bg-violet-900 p-4`}
            onClick={toggleSidebar}
          >
            {!isSidebarOpen ? (
              <FontAwesomeIcon icon={faChevronRight} />
            ) : (
              <FontAwesomeIcon icon={faTimes} />
            )}
          </button>
        </div>

        <nav className="mt-5">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center gap-4 py-4 px-4 hover:bg-violet-900"
                >
                  <FontAwesomeIcon icon={item.icon} className="" />
                  <span
                    className={`${isSidebarMinimized ? "hidden" : "inline"} `}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleLogout(dispatch)}
                className="flex items-center gap-4 py-2 px-4 hover:bg-violet-900 w-full text-left"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="" />
                <span
                  className={`${isSidebarMinimized ? "hidden" : "inline"} `}
                >
                  Déconnexion
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col" style={{ height: "100%" }}>
        <header className="bg-white p-4 flex justify-between items-center border-b border-b-gray-300 shadow">
          {pathname.startsWith("/admin/dashboard/") ? (
            <h2 className="text-lg font-[900] font-Quicksand">
              <Link
                className="text-lg font-[900] font-Quicksand underline hover:text-sky-900"
                href={"/admin/dashboard"}
              >
                Dashboard
              </Link>
              &gt; {element}
            </h2>
          ) : (
            <h2 className="text-lg font-[900] font-Quicksand">Dashboard</h2>
          )}
        </header>
        <main className="flex-1 overflow-auto bg-gray-100 ">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
