import { services } from "@/ui/testDatas";
import React from "react";

const GetHelpNow = () => {
  return (
    <section id="get-help-now" className="bg-blue-500 py-12">
      <div className="container mx-auto px-4 sm:px-0">
        <div className="text-center mb-8">
          <div className="section-title">
            <div className="title">Besoin d&apos; aide maintenant ?</div>
            <div className="sub-title">
              Réservez un service en quelques clics et recevez une assistance
              immédiate.
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-6">
          {services.map((service: any, index: number) => (
            <div
              key={index}
              className="help text-[15px] font-[300] px-[20px] py-[5px] rounded-[15px] transition-all border-solid border-[1px] cursor-pointer hover:bg-sky-100 border-midnight-blue lg:text-[18px] lg:font-[400]"
            >
              {service.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetHelpNow;
