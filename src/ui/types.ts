import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type ServiceOption = {
  title: string;
  description: string;
  img: string;
};
export type IServiceOption = {
  _id: string;
  name: string;
  description: string;
  image: string;
};

export type IUser = {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role?: "user" | "tasker" | "admin" | "admin & tasker";
  profileImage?: string;
  phone: string;
  address?: string;
  favorites?: number[];
  registrationDate?: Date;
};

export type IService = {
  _id: string;
  title: string;
  frontImage: string;
  description: string;
  icon: string;
  points: string[];
  options: string[];
  comments: string[];
};
export type setIService = {
  title: string;
  frontImage: File | null;
  description: string;
  icon: string;
  points: string[];
  options: string[];
  comments: string[];
};

export type Service = {
  id: number;
  img: any;
  title: string;
  description: string;
  icon: IconDefinition;
  points: string[];
  options: ServiceOption[];
};

export type IReservation = {
  _id: string;
  serviceId: string | null;
  date: string;
  adress: string;
  options: string[];
  taskDescription: string;
  taskerId: string;
  status: string;
  jobType: string;
  wever: string;
};
export type Reservation = {
  serviceId?: string | null;
  date: string;
  adress: string;
  options: string[];
  taskDescription: string;
  taskerId?: string;
  status?: string;
  jobType: string;
  wever: string;
};

export type TaskerSpecifics = {
  user: string;
  domaine: string;
  serviceOfferedOptions: string[];
  experienceYears: number;
  bio: string;
  rate: number;
  location: string;
  availability: string[];
};
export type ITaskerSpecifics = {
  _id: string;
  user: string;
  domaine: string;
  serviceOfferedOptions: string[];
  experienceYears: number;
  bio: string;
  rate: number;
  location: string;
  availability: string[];
  status: "new" | "medium" | "certified";
};

export type Services = Service[];

export interface Comment {
  id: number;
  name: string;
  service: string;
  text: string;
  date: string;
  rate: number;
}

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "user" | "prestataire";
  profilImage: string;
};
