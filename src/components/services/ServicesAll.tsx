"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addId, addOption } from "@/redux/slices/reservationSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { IService, IServiceOption } from "@/ui/types";
import { getImageUrl } from "@/ui/fonctions";
import { fetchServices } from "@/redux/slices/serviceSlice";
import { fetchServiceOptions } from "@/redux/slices/servicesOptionsSlice";
import IconGenerate from "../utils/IconGenerate";
import PageSkeleton from "../ui/PageSkeleton";

const ServicesAll = () => {
  const dispatch = useDispatch<AppDispatch>();
  const services = useSelector((state: RootState) => state.service.services);
  const servicesOptions = useSelector(
    (state: RootState) => state.servicesOptions.serviceOptions
  );
  const isLoading = useSelector(
    (state: RootState) => state.service.loading || state.servicesOptions.loading
  );
  const error = useSelector(
    (state: RootState) => state.service.error || state.servicesOptions.error
  );

  const handleOptionClick = (optionTitle: string, serviceId: string) => {
    dispatch(addOption(optionTitle));
    dispatch(addId(serviceId));
  };

  useEffect(() => {
    // Dispatch action to fetch services when component mounts
    dispatch(fetchServices());
    dispatch(fetchServiceOptions());
  }, [dispatch]);

  if (isLoading) return <PageSkeleton />;
  if (error) return <p>Error: {error}</p>;
  if (!services || services.length === 0) {
    return (
      <div>
        Loading services... or services notfund!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      </div>
    ); // Affiche un message si `services` est vide
  }

  return (
    <div className=" py-10 bg-gray-50 ">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="section-title">
          <div className="title">
            Engagez un Tasker de confiance dès maintenant
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service: IService, index: number) => (
            <div
              key={index}
              className="service-card border border-gray-300 rounded-lg  overflow-hidden  bg-white transition-transform transform"
            >
              <div
                className="group relative h-[200px] cursor-pointer"
                style={{
                  background: `url('${getImageUrl(
                    service.frontImage
                  )}') center`,
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
                    {service.options
                      .map((optionId: string) =>
                        servicesOptions.find(
                          (option) => option._id === optionId
                        )
                      )
                      .filter(
                        (option): option is IServiceOption =>
                          option !== undefined
                      )
                      .map((option: IServiceOption) => (
                        <Link
                          key={option._id}
                          href={`/services/by-id/${service._id}`}
                          onClick={() =>
                            handleOptionClick(option.name, service._id)
                          }
                          className="block w-fit font-Quicksand text-blue-600 text-[15px] hover:underline hover:text-black text-midnight-blue transition-all duration-200"
                        >
                          {option.name}
                        </Link>
                      ))}
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
                        <IconGenerate iconName={service.icon} />
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
