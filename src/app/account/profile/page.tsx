"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faBell,
  faLock,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import ProfileSettings from "@/components/account/ProfileSettings";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { IUser } from "@/ui/types";
import { fetchUsers } from "@/redux/slices/userSlice";
import Passwords from "@/components/account/Passwords";
import Notifications from "@/components/account/Notifications";
import { fakeNotifications } from "@/ui/testDatas";
import AdvancedSettings from "@/components/account/AdvancedSettings";
export default function UserDashboard() {
  const dispatch = useDispatch<AppDispatch>();
  const [activeSection, setActiveSection] = useState("profile");
  const userId = useSelector((state: RootState) => state.auth.user?.userId);
  const isUserLoading = useSelector((state: RootState) => state.user.loading);
  const userError = useSelector((state: RootState) => state.user.error);
  const user = useSelector((state: RootState) =>
    state.user.users.find((userData: IUser) => userData._id == userId)
  );
  // Lien du sidebar avec les étiquettes et icônes
  const unreadNotificationsCount = fakeNotifications.filter(
    (notification) => !notification.isRead
  ).length;

  const sideBarsLinks = [
    { label: "Paramètres du profil", section: "profile", icon: faCog },
    { label: "Notifications", section: "notifications", icon: faBell },
    { label: "mot de passe", section: "passwords", icon: faLock },
    { label: "paramètres avancés", section: "advenced-params", icon: faCogs },
  ];
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  // Fonction pour afficher le contenu en fonction de la section active
  const renderContent = () => {
    if (isUserLoading) {
      return <div>Chargement...</div>; // Affichage pendant le chargement
    }

    if (userError) {
      return <div>Erreur : {userError}</div>; // Affichage en cas d'erreur
    }

    if (!user) {
      return <div>aucun utilisateur trouver.........</div>;
    }
    switch (activeSection) {
      case "profile":
        return (
          <ProfileSettings user={user} setActiveSection={setActiveSection} />
        );
      case "notifications":
        return <Notifications notifications={fakeNotifications} />;
      case "passwords":
        return <Passwords user={user} />;
      case "advenced-params":
        return <AdvancedSettings user={user} />;
      default:
        return (
          <ProfileSettings user={user} setActiveSection={setActiveSection} />
        );
    }
  };

  return (
    <div className="flex flex-col">
      {/* Sidebar */}
      <div className="sideBarProfile w-fit border border-gray-300 bg-white text-gray-600">
        <ul className="flex h-fit">
          {sideBarsLinks.map((link, index) => (
            <li key={index} className="h-fit">
              <button
                onClick={() => setActiveSection(link.section)} // Changement de section active
                className={`link h-full group flex flex-row-reverse items-center hover:bg-violet-200 hover:text-violet-900 transition duration-100 ease-in-out ${
                  activeSection === link.section
                    ? "active bg-violet-100 text-violet-900 after:bg-violet-900"
                    : ""
                }`}
              >
                <div className="flex items-center font-Quicksand font-[600] py-2 px-8 h-full">
                  <FontAwesomeIcon icon={link.icon} className="mr-3" />
                  {link.label}
                  {link.section === "notifications" &&
                    unreadNotificationsCount > 0 && (
                      <span className="ml-2 border border-red-600  text-red-600 w-5 h-5 font-Quicksand font-[700] flex items-center justify-center text-xs rounded-full px-2 py-1">
                        {unreadNotificationsCount}
                      </span>
                    )}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Contenu principal */}
      <div className="content w-4/5 p-6 bg-gray-100 flex-1 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
}
