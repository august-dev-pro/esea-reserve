"use client";
import banniere from "@/imgs/banniere/R.jpeg";
import banniere2 from "@/imgs/banniere/jardinage.jpg";
import banniere3 from "@/imgs/banniere/demenagement.jpg";
import banniere4 from "@/imgs/banniere/plomberie.jpeg";
import {
  faArrowLeft,
  faArrowRight,
  faBroom,
  faSearch,
  faSeedling,
  faTruck,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { useState, useEffect } from "react";
import SearchBar from "../ui/SearchBar";

const banniereDatas = [
  {
    src: banniere,
    alt: "Nettoyage",
    description:
      "Des services de nettoyage professionnels pour votre maison ou bureau.",
    icon: faBroom,
  },
  {
    src: banniere2,
    alt: "Jardinage",
    description:
      "Améliorez votre jardin avec nos services de jardinage experts.",
    icon: faSeedling,
  },
  {
    src: banniere3,
    alt: "Déménagement",
    description:
      "Des services de déménagement fiables et rapides pour un transfert sans souci.",
    icon: faTruck,
  },
  {
    src: banniere4,
    alt: "Plomberie",
    description: "Des solutions de plomberie efficaces pour tous vos besoins.",
    icon: faWrench,
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banniereDatas.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? banniereDatas.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div
      className={`hero-slider relative group transition-all h-[300px] sm:h-[350px] md:h-[450] lg:h-[450px]`}
      style={{
        backgroundImage: `url('${banniereDatas[currentIndex].src.src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" absolute top-0 bottom-0 left-0 right-0 bg-marron-opacity z-0"></div>
      <div className="container h-full flex flex-col gap-4 items-center justify-center px-5 sm:px-0">
        <div
          className="absolute top-[50%] left-2 rounded-[50%] w-[15px] h-[15px] text-[12px] group-hover:flex md:w-[25px] md:h-[25px] hover:bg-slate-200 transition-all items-center justify-center bg-white cursor-pointer hidden"
          onClick={prevSlide}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div
          className="absolute top-[50%] right-2 rounded-[50%] w-[15px] h-[15px] text-[12px] group-hover:flex md:w-[25px] md:h-[25px] hover:bg-slate-200 transition-all items-center justify-center bg-white cursor-pointer hidden"
          onClick={nextSlide}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div
          className={`slide-content w-[90%] h-fit text-white flex flex-col gap-[5px] items-center rounded-md text-[16px] sm:w-[500px]  ${
            isTransitioning ? "slide-enter" : "slide-enter-active"
          }`}
        >
          <h1 className="text-[20px] font-[600] sm:text-[30px] lg:text-[45px]">
            {banniereDatas[currentIndex].alt}{" "}
            <FontAwesomeIcon icon={banniereDatas[currentIndex].icon} />
          </h1>
          <p className="font-[300] text-justify sm:text-[20px] sm:font-[500] lg:text-[25px] lg:font-[400] sm:text-center">
            {banniereDatas[currentIndex].description}
          </p>
          <button className="bg-midnight-blue w-fit text-[15px] hover:bg-dark-blue transition-all capitalize lg:font-[600] rounded-[.2rem] sm:rounded-[.3rem] lg:rounded-lg px-[10px] py-[5px] lg:text-[18px]  lg:px-[30px] lg:py-[10px]">
            En savoir plus
          </button>
        </div>
        {/* <div className="search_bar z-[1000] flex bg-white border-solid border-[1px]">
          <select name="" id="" className=" bg-inherit">
            <option value="">selectionnez-rapidement</option>
            {banniereDatas.map((service: any, index: number) => (
              <option value="">{service.alt}</option>
            ))}
          </select>
          <input type="search" name="serach" id="search" />
          <div className="submit_search">
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div> */}
        <SearchBar />
      </div>
    </div>
  );
};

export default HeroSlider;
