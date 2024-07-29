import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// Define the type for the service options
export type ServiceOption = {
  title: string;
  description: string;
  img: string;
};

// Define the type for the main service object
export type Service = {
  id: number;
  img: any; // Assuming img is a string path to the image
  title: string;
  description: string;
  icon: IconDefinition; // FontAwesome icon type
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
