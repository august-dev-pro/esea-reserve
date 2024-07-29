import React from "react";
import image from "@/imgs/banniere/plomberie.jpeg";
import Image from "next/image";
import { ServiceOption } from "@/ui/types";

const Serviceoption = ({ option }: { option: ServiceOption }) => {
  return (
    <div className="option shadow-custom-header flex flex-col gap-4 md:flex-row w-full items-center md:max-w-[800px] rounded-[.3rem] lg:justify-between p-[10px] sm:p-[15px] md:p-[20px] lg:p-[30px] border border-gray-400 bg-white">
      <div className="image rounded-[50%] lg:rounded-[.5rem] overflow-hidden m-[0_auto] h-[130px] w-[130px] md:h-[180px] md:w-[160px] lg:w-[250px] lg:h-[full] lg:min-h-[150px]">
        <Image
          src={image}
          width={500}
          height={500}
          alt={`${option.title}`}
          className="h-full object-cover"
        />
      </div>
      <div className="des w-full md:max-w-[500px] justify-center items-center md:items-start text-center md:text-left flex flex-col gap-[10px]">
        <div className="title text-[20px] capitalize ">{option.title}</div>
        <div className="description font-Quicksand ">{option.description}</div>
        <div className="btn-primary w-fit">reserver</div>
      </div>
    </div>
  );
};

export default Serviceoption;
