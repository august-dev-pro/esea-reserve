import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Service = ({ service }: any) => {
  return (
    <article className="service group relative border-solid border-[1px] rounded-[.5rem] overflow-hidden h-[350px] shadow-md border-gray-300">
      <Link href={`/services/${service.id}`}>
        <Image
          src={service.img}
          alt="tof"
          width={500}
          height={600}
          className=" h-full object-cover rounded-[.5rem] w-full"
        />
      </Link>
      <div className="flex w-full flex-col transition-all bg-white absolute bottom-0 shadow-md p-4 md:bg-marron-opacity md:group-hover:bg-white md:text-white md:group-hover:text-gray-600">
        <Link href={`/services/${service.id}`}>
          <h3 className="text-[16px]  font-[500] md:text-[30px] md:text-center group-hover:text-left">
            {service.title} <FontAwesomeIcon icon={service.icon} />
          </h3>
        </Link>

        <div className="desc transition-all group-hover:block md:h-[0px] md:group-hover:h-[70px]">
          <Link href={`/services/${service.id}`}>
            <p className=" md:text-transparent md:group-hover:text-gray-400 text-gray-400 text-[15px] font-[300] sm:text-[16px]">
              {service.description}
            </p>
          </Link>

          <Link
            href={`/services/${service.id}`}
            className="flex gap-3 transition-all items-center text-red-900 underline hover:text-midnight-blue rounded-lg w-fit"
          >
            En savoir plus
            <FontAwesomeIcon icon={faArrowRight} className="text-[12px] mt-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Service;
