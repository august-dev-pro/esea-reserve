import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { services } from "@/ui/testDatas";

const ServicesAll = () => {
  return (
    <div className=" py-10 bg-gray-50 ">
      <div className="container mx-auto px-4 sm:px-8">
        <div className=""></div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service: any, index: number) => (
            <div
              key={index}
              className="service-card border border-gray-300 rounded-lg  overflow-hidden  bg-white transition-transform transform"
            >
              <div
                className="group relative h-[200px] cursor-pointer"
                style={{
                  background: `url('${service.img.src}') center`,
                  backgroundAttachment: "fixed",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-black-opacity group-hover:bg-transparent transition-all duration-200 "></div>
              </div>
              <div className="p-6">
                <div className="border-b border-midnight-blue pb-8">
                  <div className="flex items-center gap-3">
                    <div className="text-[20px] text-midnight-blue">
                      {service.title}
                    </div>
                  </div>
                  <p className="text-gray-700 font-Quicksand mb-1">
                    {service.description}
                  </p>
                </div>
                <div className="options mb-5 mt-8">
                  <div className="grid grid-cols-1 gap-3">
                    {service.options.map((option: any, index: number) => (
                      <Link
                        key={index}
                        href={`/${service.title.toLowerCase()}/${option
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block w-fit font-Quicksand text-blue-600 text-[15px] hover:underline hover:text-black text-midnight-blue transition-all duration-200"
                      >
                        {option}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="points">
                  <h4 className="text-lg font-medium text-midnight-blue mb-3">
                    Points clés:
                  </h4>
                  <ul className="list-none space-y-2">
                    {service.points.map((point: any, index: number) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-600"
                      >
                        <FontAwesomeIcon
                          icon={service.icon}
                          className="text-blue-500 mt-1"
                        />
                        <span className="ml-2">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesAll;
