"use client";
import Image from "next/image";
import React, { useState } from "react";
import eseaServiceLogo from "@/imgs/eseareserve.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [activeLink, setActiveLink] = useState<number>(0);
  const navLinks = [
    { label: "Accueil", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Prestataires", path: "/providers" },
    { label: "À propos", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Inscription", path: "/signup" },
    { label: "Connexion", path: "/login" },
  ];

  return (
    <header className="header mb-[200Px] bg-white fixed z-[10000] w-full py-[7px] border-solid border-b-[1px] border-b-midnight-blue lg:py-[10px] shadow-custom-header">
      <div className="container px-5 sm:px-0">
        <div className="header_content flex justify-between items-center">
          <div className="logo_eseaservice w-[100px] h-[41px] sm: lg:w-[110px] lg:h-[45px]">
            <Image
              className=" object-cover max-h-[41px] lg:max-h-[45px]"
              src={eseaServiceLogo}
              alt="esea-service_logo"
              width={500}
              height={500}
            />
          </div>
          <FontAwesomeIcon
            className="text-[25px] cursor-pointer md:hidden"
            icon={faBars}
          />
          <nav className="nav group hidden md:flex">
            <div className="links font-[400] flex gap-[10px] md:text-[15px]  lg:gap-[28px]">
              {navLinks &&
                navLinks.map((link: any, index: number) => (
                  <Link
                    key={index}
                    className={`link flex flex-col hover:text-midnight-blue transition-all after:transition-all ${
                      activeLink === index ? "active" : ""
                    }`}
                    href={link.path}
                    onClick={() => setActiveLink(index)}
                  >
                    {link.label}
                  </Link>
                ))}
            </div>
          </nav>
          <div className="start hidden md:flex px-[8px] py-[5px] rounded-[.3rem] bg-midnight-blue cursor-pointer text-white">
            reservez
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
