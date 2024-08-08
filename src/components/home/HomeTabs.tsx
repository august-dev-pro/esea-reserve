import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { services } from "@/ui/testDatas";
import { ServiceOption } from "@/ui/types";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addOption } from "@/redux/reservationSlice";

const HomeTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const dispatch = useDispatch();

  const handleOptionClick = (optionTitle: string, serviceId: number) => {
    dispatch(addOption(optionTitle));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
                    } flex flex-col items-center cursor-pointer h-full justify-between group transition duration-300 ease-in-out`}
                  >
                    <div className="icon-container text-gray-500 group-hover:text-midnight-blue transition duration-300 ease-in-out flex gap-1 items-center">
                      <FontAwesomeIcon icon={tab.icon} />
                    </div>

                    <div className="title items-center relative flex flex-col group-hover:text-midnight-blue transition duration-300 ease-in-out font-Quicksand text-[14px] capitalize sm:text-[16px] mb-[10px]">
                      {tab.title}
                      {activeTab === index && (
                        <div className="absolute bottom-[-2px] left-0 h-[2px] w-full bg-midnight-blue transform scale-x-100 transition-transform duration-500 ease-in-out"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="success flex flex-wrap gap-[10px] py-[25px] transition-opacity duration-300 ease-in-out">
              {services[activeTab].options.map(
                (option: ServiceOption, index: number) => (
                  <Link
                    href={`/services/by-id/${services[activeTab].id}`}
                    onClick={() =>
                      handleOptionClick(option.title, services[activeTab].id)
                    }
                    key={index}
                    className="help text-[14px] font-[300] px-[18px] py-[3px] rounded-[15px] transition-all border-solid border-[1px] cursor-pointer hover:bg-sky-100 border-midnight-blue lg:text-[16px] lg:font-[400]"
                  >
                    {option.title}
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="tabs_content bg-blue-linght w-full pr-4 pb-4 sm:p-[30px] h-fit md:h-fit sm:rounded-[.5rem] transition-opacity duration-500 ease-in-out">
            <div className="w-full md:rounded-[.5rem] flex flex-col overflow-hidden h-full md:grid md:grid-cols-[130px_1fr] transition-transform duration-500 ease-in-out transform-gpu translate-x-0 opacity-100">
              <div className="relative transition-transform duration-500 ease-in-out transform-gpu z-[100]">
                <div className="bg-white w-full md:w-[393px] md:absolute top-[50px] p-3 sm:p-[50px] font-Quicksand border-solid md:border-[2px] lg:border-[4px] border-blue-linght transition-transform duration-500 ease-in-out transform scale-100 ">
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
              <div className="flex max-w-[1000px] justify-center items-center transition-opacity duration-500 ease-in-out opacity-100 transform-gpu">
                <Image
                  src={services[activeTab].img}
                  width={500}
                  height={500}
                  alt={services[activeTab].title}
                  className="h-full w-full object-cover md:rounded-[1rem] transition-transform duration-500 ease-in-out transform-gpu"
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
