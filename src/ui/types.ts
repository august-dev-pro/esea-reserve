import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type ServiceOption = {
  title: string;
  description: string;
  img: string;
};
export interface IServiceOption {
  _id: string;
  name: string;
  description: string;
  image: string;
}

export interface IUser {
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
}

export interface IService {
  _id: string;
  title: string;
  frontImage: string;
  description: string;
  icon: string;
  points: string[];
  options: string[];
  comments: string[];
}

export type Service = {
  id: number;
  img: any;
  title: string;
  description: string;
  icon: IconDefinition;
  points: string[];
  options: ServiceOption[];
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

export type PrestataireSpecifics = {
  servicesOffered: Service[];
  experienceYears: number;
  hourlyRate: number;
  bio: string;
  location: string;
  availability: string[];
};

export type Prestataire = User & PrestataireSpecifics;
