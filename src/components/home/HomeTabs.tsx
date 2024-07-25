"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWrench,
  faBroom,
  faBolt,
  faPaintRoller,
  faLeaf,
  faCar,
  faHammer,
  faLock,
  faLaptop,
  faPlug,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import { services } from "@/ui/testDatas";

const HomeTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  /* useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevIndex) => (prevIndex + 1) % services.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []); */

  return (
    <div className="tabs-section pt-[50px] md:section">
      <div className="sm:container mx-auto">
        <div className="tabs flex flex-col gap-4">
          <div className="px-4 sm:px-0 flex flex-col max-w-[1000px] w-full m-[0_auto]">
            <div className="border-b border-b-gray-300">
              <div className="tabs_label overflow-y-hidden flex h-[50px] md:h-[70px] flex-row gap-[20px] sm:gap-[45px] md:justify-between overflow-x-auto">
                {services.slice(0, 8).map((tab, index) => (
                  <div
                    onClick={() => setActiveTab(index)}
                    key={index}
                    className={`tab_title ${
                      activeTab === index ? "active_tab" : ""
                    } flex flex-col items-center cursor-pointer h-full justify-between group`}
                  >
                    <div className="icon-container group-hover:text-midnight-blue transition-all duration-[.3s] flex gap-1 items-center">
                      <FontAwesomeIcon icon={tab.icon} />
                    </div>

                    <div className="title items-center relative flex flex-col group-hover:text-midnight-blue transition-all duration-[.3s] font-Quicksand text-[14px] capitalize sm:text-[16px] mb-[10px]">
                      {tab.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="sucgess flex flex-wrap gap-[10px] py-[25px]">
              {services.map((service: any, index: number) => (
                <div
                  key={index}
                  className="help text-[14px] font-[300] px-[18px] py-[3px] rounded-[15px] transition-all border-solid border-[1px] cursor-pointer hover:bg-sky-100 border-midnight-blue lg:text-[16px] lg:font-[400]"
                >
                  {service.title}
                </div>
              ))}
            </div>
          </div>
          <div className="tabs_content bg-blue-linght w-full pr-4 pb-4 sm:p-[30px] h-fit md:h-fit sm:rounded-[.5rem]">
            <div className="w-full md:rounded-[.5rem] flex flex-col overflow-hidden h-full md:grid md:grid-cols-[130px_1fr]">
              <div className="relative">
                <div className="bg-white w-full md:w-[393px] md:absolute top-[50px] p-3 sm:p-[50px] font-Quicksand border-solid md:border-[2px] lg:border-[4px] border-blue-linght">
                  <div className="font-Quicksand text-[25px] font-[700]">
                    {services[activeTab].title}
                  </div>
                  <div className="flex gap-1 font-Quicksand text-[18px] py-3">
                    {services[activeTab].description}
                  </div>
                  <div className="flex flex-col gap-1 font-Quicksand text-[18px] py-3">
                    {services[activeTab].points.map(
                      (point: string, idx: number) => (
                        <div key={idx} className="flex items-start">
                          <div className="pr-2">-</div>
                          <div>{point}</div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src={services[activeTab].img}
                  width={500}
                  height={500}
                  alt={services[activeTab].title}
                  className="h-full w-full object-cover md:rounded-[1rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTabs;
