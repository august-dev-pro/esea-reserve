"use client";
import React from "react";
import Link from "next/link"; // Assuming you're using Next.js for navigation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faUser,
  faCog,
  faClipboardList,
  faBell,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import Image from "next/image";
import userDefault from "@/imgs/tasker2.jpg";
import { logout } from "@/redux/slices/authSlice";
import { fakeNotifications } from "@/ui/testDatas";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { handleLogout } from "@/ui/fonctions";
export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sideBarsLinks = [
    /* { label: "Dashboard", path: "/account", icon: faTachometerAlt }, */
    {
      label: "Reservations",
      path: "/account/reservations",
      icon: faClipboardList,
    },
    { label: "Settings", path: "/account/profile", icon: faCog },
    { label: "Notifications", path: "/account/notifications", icon: faBell },
  ];
  const unreadNotificationsCount = fakeNotifications.filter(
    (notification) => !notification.isRead
  ).length;
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  if (!user) {
    localStorage.setItem("redirectAfterLogin", "/account/reservations");
    window.location.href = "/login";
    return;
  }
  return (
    <div
      className="dashboard-container flex flex-col md:flex-row min-h-[calc(100vh-101px)] md:min-h-[calc(100vh-56px)] lg:min-h-[calc(100vh-65px)]"
      style={{ height: "calc(100vh - 66px)" }}
    >
      {/* Sidebar */}
      <div className="sideBar w-full md:w-1/5 bg-violet-950 text-white p-4">
        <div className=" mb-6 border-b py-4 flex gap-4">
          <div className=" w-[50px] h-[50px] rounded-[50%] overflow-hidden">
            <Image src={userDefault} alt="name" width={500} height={500} />
          </div>{" "}
          <div className="capitalize">
            <div className="">charles</div>
            <div className="">du pont conte</div>
          </div>
        </div>
        <ul>
          {sideBarsLinks.map((link, index) => (
            <li key={index} className="mb-4">
              <Link
                className={`link flex group justify-between items-center hover:bg-white hover:text-violet-900 p-2 rounded transition duration-100 ease-in-out ${
                  pathname == link.path
                    ? "active bg-white text-violet-900 after:bg-violet-900"
                    : ""
                }`}
                href={link.path}
              >
                <div className="">
                  <FontAwesomeIcon icon={link.icon} className="mr-3" />
                  {link.label}
                </div>
                {link.path == "/account/notifications" &&
                  unreadNotificationsCount > 0 && (
                    <span className="ml-2 bg-white group-hover:bg-violet-800 group-hover:text-white text-violet-600 w-5 h-5 font-Quicksand font-[700] flex items-center justify-center text-xs rounded-full px-2 py-1 transition-all">
                      {unreadNotificationsCount}
                    </span>
                  )}
              </Link>
            </li>
          ))}
          <button
            className={`button w-full flex justify-between items-center hover:bg-white hover:text-violet-800  p-2 rounded transition duration-100 ease-in-out}`}
            onClick={() => handleLogout(dispatch)}
          >
            <div className="">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
              Deconexion
            </div>
          </button>
        </ul>
      </div>
      {/* Main content */}
      <div className="content w-full md:w-4/5 p-6 bg-gray-100 flex-1 md:overflow-auto">
        {children}
      </div>
    </div>
  );
}
