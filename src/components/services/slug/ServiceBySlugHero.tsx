import { Comment, IService, IServiceOption } from "@/ui/types";
import React from "react";
import ServiceComent from "../ServiceComent";
import { comments } from "@/ui/testDatas";
import HowIsWork from "../HowIsWork";
import Serviceoption from "./ServiceOption";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { getImageUrl } from "@/ui/fonctions";

const ServiceBySlugHero = ({
  service,
  serviceOptions,
}: {
  service: IService;
  serviceOptions: IServiceOption[];
}) => {
  if (!service) {
    return;
  }
  return (
    <div className="">
      <div
        className="h-[350px] md:h-[400px] lg:h-[450px] relative flex items-center justify-center"
        style={{
          background: `url('${getImageUrl(service.frontImage)}') center`,
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
            <div className="text-white font-[400] text-lg md:text-[27px] text-shadow-custom text-shadow-custom">
              Les prestataires peuvent vous aider avec les tâches de{" "}
              {service.title} autour de votre maison, à bon prix et un travail
              bien fait.
            </div>
          </div>
        </div>
      </div>
      <div className="section bg-gray-100">
        <div className="container px-4 sm:px-0">
          <div className="flex items-center gap-[5px] font-[400] text-midnight-blue mb-1">
            <Link
              className=" transition-all duration-200 hover:text-black "
              href={"/"}
            >
              home{" "}
              <FontAwesomeIcon className="text-[10px]" icon={faChevronRight} />
            </Link>

            <Link
              className=" transition-all duration-200 hover:text-black "
              href={"/services"}
            >
              services
              <FontAwesomeIcon className="text-[10px]" icon={faChevronRight} />
            </Link>

            <Link
              className=" transition-all duration-200 text-black "
              href={`/services/by-slug/${service.title}`}
            >
              {service.title}
            </Link>
          </div>
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1fr_310px] lg:gap-4">
            <div className="flex flex-col gap-[30px]">
              {serviceOptions.map((option: IServiceOption, index: number) => (
                <Serviceoption key={index} option={option} service={service} />
              ))}
            </div>
            <div className="flex flex-col gap-[50px]">
              <div className="flex flex-col gap-[20px]">
                <div className="title w-max capitalize font-Quicksand text-[20px] font-[700]">
                  Réglez cette tâche sans effort
                </div>{" "}
                <HowIsWork />
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="title capitalize font-Quicksand text-[20px] font-[700]">
                  de certains utilisateurs
                </div>
                <div className=" flex flex-col gap-[20px] ">
                  {comments.map((comment: Comment, index: number) => {
                    if (comment.service == service.title) {
                      return <ServiceComent key={index} comment={comment} />;
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBySlugHero;
