import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React from "react";
// Define the type for the service options
type ServiceOption = {
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

const ServiceBySlugHero = ({ service }: { service: Service }) => {
  if (!service) {
    return;
  }
  return (
    <div className="">
      <div
        className="h-[350px] md:h-[400px] lg:h-[450px] relative flex items-center justify-center"
        style={{
          background: `url('${service.img.src}') center`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black-opacity"></div>
        <div className="container px-4 sm:px-0 z-[100]">
          <div className="max-w-[820px] m-[0_auto] text-center">
            <div className="text-white text-[35px] font-[500]">
              {service.title}
            </div>
            <div className="text-white font-[500] text-lg md:text-[27px] text-shadow-custom">
              Les prestataires peuvent vous aider avec les tâches de{" "}
              {service.title} autour de votre maison, à bon prix et un travail
              bien fait.
            </div>
          </div>
        </div>
      </div>
      <div className="section bg-gray-100">
        <div className="container px-4 sm:px-0">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1fr_300px] gap-4">
            <div className="flex flex-col gap-[30px]">
              {service.options.map((option: ServiceOption, index: number) => (
                <div
                  className="option shadow-custom-header flex flex-col gap-4 md:flex-row w-full items-center md:max-w-[750px] rounded-[.3rem] lg:justify-between p-[10px] sm:p-[15px] md:p-[20px] lg:p-[25px] border border-gray-400 bg-white"
                  key={index}
                >
                  <div className="image rounded-[50%] lg:rounded-none m-[0_auto] h-[130px] w-[130px] md:h-[160px] md:w-[160px] lg:w-[250px] lg:h-[full] lg:min-h-[150px] bg-black"></div>
                  <div className="des w-full md:max-w-[400px] justify-center items-center md:items-start text-center md:text-left flex flex-col gap-[10px]">
                    <div className="title text-[20px] capitalize ">
                      {option.title}
                    </div>
                    <div className="description font-Quicksand ">
                      {option.description}
                    </div>
                    <div className="btn-primary w-fit">reserver</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-orange-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBySlugHero;
