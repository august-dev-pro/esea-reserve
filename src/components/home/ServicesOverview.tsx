import React from "react";
import { services } from "@/ui/testDatas";
import Service from "../ui/Service";
const ServicesOverview = () => {
  return (
    <section id="services" className="section services-overview">
      <div className="container px-4 sm:px-0 mx-auto">
        <h2 className=" section_title text-3xl font-bold text-center">
          Nos Services
        </h2>
        <div className="content flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {services.map((service: any, index: number) => (
              <Service key={index} service={service} />
            ))}
          </div>
          <div className="see-more w-fit m-[0_auto] px-5 py-2 bg-midnight-blue cursor-pointer rounded-[.3rem] text-white capitalize hover:bg-dark-blue transition-all">
            autres prestations ...
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
