import React from "react";
import { services } from "@/ui/testDatas";
import Service from "../ui/Service";
import { IService } from "@/ui/types";
const ServicesOverview = ({ services }: { services: IService[] }) => {
  return (
    <section id="services" className="section services-overview">
      <div className="container px-4 sm:px-0 mx-auto">
        <div className="section-title">
          <div className="title">choisissez un services</div>
          <div className="sub-title">
            Trouvez le service parfait pour vos besoins
          </div>
        </div>
        <div className="content flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {services.map((service: any, index: number) => (
              <Service key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
