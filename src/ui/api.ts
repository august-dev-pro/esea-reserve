import { IUser } from "./types";

//gestion api
// export const API_URL = "https://easy-reserve-backend-mzfv.onrender.com";
export const API_URL = "http://localhost:4000";

export const getUsers = async (): Promise<IUser[]> => {
  const response = await fetch(`${API_URL}/user/`, { method: "GET" });
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const result = await response.json();
  return result;
};

export const getServices = async () => {
  const res = await fetch(`${API_URL}/service/`);
  const data = await res.json();
  console.log("uers: ", data);
};

export const getTaskerSpecifics = async () => {
  const res = await fetch(`${API_URL}/taskerSpecifics/`);
  const data = await res.json();
  console.log("uers: ", data);
};

export const getServicesOptions = async () => {
  const res = await fetch(`${API_URL}/servicesOptions/`);
  const data = await res.json();
  console.log("uers: ", data);
};
export const getReservations = async () => {
  const res = await fetch(`${API_URL}/reservation/`);
  const data = await res.json();
  console.log("uers: ", data);
};
export const getarticles = async () => {
  const res = await fetch(`${API_URL}/reservation/`);
  const data = await res.json();
  console.log("uers: ", data);
};
