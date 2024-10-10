import { API_URL } from "./api";
import { logout } from "@/redux/slices/authSlice";
import Router from "next/navigation";
import { AppDispatch } from "@/redux/store"; // Assure-toi d'importer le bon type pour dispatch si tu utilises TypeScript.

export const getImageUrl = (specific: string): string => {
  // Remplace tous les backslashes (\) par des slashes (/)
  const normalizedSpecific = specific.replace(/\\/g, "/");
  return `${API_URL}/uploads/${normalizedSpecific}`;
};

// Passe dispatch comme paramètre
export const handleLogout = async (dispatch: AppDispatch) => {
  // Dispatch the logout action
  await dispatch(logout());

  // Redirect to homepage or login page after logout
  window.location.href = "/";
};
