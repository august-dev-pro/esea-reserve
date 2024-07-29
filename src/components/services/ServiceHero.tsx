import React from "react";
import ServiceHeroimg from "@/imgs/banniere/jardinage.jpg";
const ServiceHero = () => {
  return (
    <div
      className="h-[350px] md:h-[400px] lg:h-[450px] relative flex items-center justify-center"
      style={{
        background: `url('${ServiceHeroimg.src}') center`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-marron-opacity-claire"></div>
      <div className="container px-4 sm:px-0 z-[100]">
        <div className="w-fit flex flex-col m-[0_auto] text-shadow-custom text-white capitalize font-[500] text-[25px] md:text-[35px] after:p-1 after:w-1/2 after:rounded-md after:bg-white">
          Confiez-nous vos tâches. C'est notre métier
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
