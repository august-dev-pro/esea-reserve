"use client";
import Image from "next/image";
import React, { useState } from "react";
import eseaServiceLogo from "@/imgs/eseareserve.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faChevronDown,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

const Header = () => {
  const [activeLink, setActiveLink] = useState<number>(0);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [screenDropdownOpen, setScreenDropdownOpen] = useState<number | null>(
    null
  );
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { label: "Accueil", path: "/" },
    { label: "Services", path: "/services" },
    {
      label: "Prestataires",
      path: "/providers",
      dropdownLinks: [
        { label: "nos prestataires", path: "" },
        { label: "devenir prestataire", path: "" },
      ],
    },
    { label: "À propos", path: "/about" },
    { label: "Contact", path: "/contact" },
    {
      label: "Inscription",
      path: "/signup",
      dropdownLinks: [
        { label: "Inscription", path: "/signup" },
        { label: "connexion", path: "/login" },
        { label: "Mon Compte", path: "/account" },
      ],
    },
  ];
  const dropdownLinks = [
    { label: "Inscription", path: "/signup" },
    { label: "connexion", path: "/login" },
    { label: "Devenir Prestataire", path: "/become-provider" },
    { label: "Mon Compte", path: "/account" },
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

          {menuOpen ? (
            <FontAwesomeIcon
              className="text-[25px] cursor-pointer md:hidden"
              icon={faClose}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          ) : (
            <FontAwesomeIcon
              className="text-[25px] cursor-pointer md:hidden"
              icon={faBars}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          )}

          {menuOpen && (
            <div className="absolute top-[50px] right-0 w-[70%] bg-white shadow-xl z-50 md:hidden">
              <div className="flex flex-col px-8">
                {navLinks.map((link: any, index: number) => {
                  const isOpen = screenDropdownOpen === index;
                  return link.dropdownLinks ? (
                    <div
                      key={index}
                      className={`block py-2 text-gray-700 hover:text-midnight-blue cursor-pointer w-fit ${
                        activeLink === index ? "text-midnight-blue" : ""
                      }`}
                      onClick={() => {
                        setActiveLink(index);
                        setScreenDropdownOpen(isOpen ? null : index);
                      }}
                    >
                      <div className="flex gap-[5px] items-center">
                        {link.label}
                        {isOpen ? (
                          <FontAwesomeIcon
                            className=" text-[10px]"
                            icon={faChevronDown}
                          />
                        ) : (
                          <FontAwesomeIcon
                            className=" text-[10px]"
                            icon={faChevronRight}
                          />
                        )}
                      </div>
                      {isOpen && (
                        <div className="sub ml-2 text-[15px] font-[300]">
                          {link.dropdownLinks.map(
                            (link: any, index2: number) => (
                              <Link
                                key={index2}
                                className={`block py-[2px] text-gray-700 hover:text-midnight-blue w-fit`}
                                href={link.path}
                                onClick={() => {
                                  setMenuOpen(false);
                                }}
                              >
                                {link.label}
                              </Link>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={index}
                      className={`block py-2 text-gray-700 hover:text-midnight-blue w-fit ${
                        activeLink === index ? "text-midnight-blue" : ""
                      }`}
                      href={link.path}
                      onClick={() => {
                        setActiveLink(index);
                        setMenuOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          <nav className="nav group hidden md:flex">
            <div className="links font-[400] flex gap-[15px] md:text-[15px] lg:gap-[35px]">
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
              <div
                className="relative cursor-pointer"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className="link flex items-center gap-2 hover:text-midnight-blue transition-all after:transition-all">
                  Inscription <FontAwesomeIcon icon={faCaretDown} />
                </div>
                {dropdownOpen && (
                  <div className="absolute cursor-pointer right-0 left-0 mt-[-3px] w-48 bg-white border border-gray-200 shadow-lg">
                    {dropdownLinks.map((link, index) => (
                      <Link
                        key={index}
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-midnight-blue"
                        href={link.path}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
