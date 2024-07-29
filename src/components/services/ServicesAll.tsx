"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { services } from "@/ui/testDatas";
import { Service, ServiceOption } from "@/ui/types";
import { useDispatch } from "react-redux";
import { addId, addOption } from "@/redux/reservationSlice";

const ServicesAll = () => {
  const dispatch = useDispatch();

  const handleOptionClick = (optionTitle: string, serviceId: number) => {
    dispatch(addOption(optionTitle));
    dispatch(addId(serviceId));
  };
  return (
    <div className=" py-10 bg-gray-50 ">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="section-title">
          <div className="title">
            Engagez un Tasker de confiance dès maintenant
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service: Service, index: number) => (
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
                <Link
                  href={`services/by-slug/${service.title}`}
                  className="absolute top-0 bottom-0 left-0 right-0 bg-black-opacity group-hover:bg-transparent transition-all duration-200 "
                ></Link>
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
                    {service.options.map(
                      (option: ServiceOption, index: number) => (
                        <Link
                          key={index}
                          href={`/services/by-id/${service.id}`}
                          onClick={() =>
                            handleOptionClick(option.title, service.id)
                          }
                          className="block w-fit font-Quicksand text-blue-600 text-[15px] hover:underline hover:text-black text-midnight-blue transition-all duration-200"
                        >
                          {option.title}
                        </Link>
                      )
                    )}
                  </div>
                </div>
                <div className="points">
                  <h4 className="text-lg font-medium text-midnight-blue mb-3">
                    Points clés:
                  </h4>
                  <ul className="list-none space-y-2">
                    {service.points.map((point: string, index: number) => (
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
