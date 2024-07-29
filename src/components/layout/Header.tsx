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
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [screenDropdownOpen, setScreenDropdownOpen] = useState<number | null>(
    null
  );
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { label: "Accueil", path: "/" },
    { label: "Services", path: "/services" },
    {
      label: "inscription",
      path: "/",
      dropdownLinks: [
        { label: "s'inscrire", path: "/signup" },
        { label: "se connecter", path: "/login" },
        { label: "Devenir Prestataire", path: "/providers/becomeProvider" },
        { label: "mon compte", path: "/account" },
      ],
    },

    { label: "À propos", path: "/about" },
  ];

  return (
    <header className="header mb-[200Px] bg-white fixed z-[10000] w-full py-[7px] border-solid border-b-[1px] border-b-gray-300 shadow-custom-header lg:py-[10px]">
      <div className="container px-5 sm:px-0">
        <div className="header_content flex justify-between items-center">
          <div className="logo_eseaservice w-[100px] h-[41px] sm: lg:w-[110px] lg:h-[45px]">
            <Image
              className=" object-cover max-h-[41px] lg:max-h-[45px]"
              src={eseaServiceLogo}
              alt="esea-service_logo"
              width={500}
              height={500}
              priority={true}
            />
          </div>

          {menuOpen ? (
            <div
              className="icon-close"
              onClick={() => setMenuOpen(!menuOpen)}
            ></div>
          ) : (
            <div
              className="bars-icon md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          )}

          {menuOpen && (
            <div className="absolute top-[50px] right-0 w-[70%] bg-white shadow-xl z-50 md:hidden ">
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
                      <div className="flex gap-[5px] items-center font-Quicksand">
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
                        <div className="sub ml-2 text-[14px] font-[300] font-Quicksand capitalize">
                          {link.dropdownLinks.map(
                            (link: any, index2: number) => (
                              <Link
                                key={index2}
                                className={`block py-[2px] text-gray-700 hover:text-midnight-blue w-fit font-Quicksand`}
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
                      className={`block py-2 text-gray-700 hover:text-midnight-blue w-fit font-Quicksand ${
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

          <div className="items-center gap-[50px] hidden md:flex">
            <nav className="nav ">
              <div className="links font-[300] flex gap-[15px] md:text-[15px]">
                {navLinks.map((link: any, index: number) => (
                  <div key={index} className="relative">
                    {link.dropdownLinks ? (
                      <div
                        className="relative cursor-pointer"
                        onMouseEnter={() => setDropdownOpen(index)}
                        onMouseLeave={() => setDropdownOpen(null)}
                      >
                        <div className="link flex items-center font-[400] capitalize gap-[5px] hover:text-midnight-blue transition-all">
                          {link.label} <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                        {dropdownOpen === index && (
                          <div className="absolute right-0 left-0 w-48 bg-white border border-gray-200 shadow-lg rounded-sm">
                            {link.dropdownLinks.map(
                              (subLink: any, subIndex: number) => (
                                <Link
                                  key={subIndex}
                                  className="block capitalize px-[30px] py-2 text-[14px] hover:bg-gray-100 font-Quicksand hover:text-midnight-blue"
                                  href={subLink.path}
                                >
                                  {subLink.label}
                                </Link>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        className={`link flex font-[400] flex-col hover:text-midnight-blue transition-all ${
                          activeLink === index ? "active" : ""
                        }`}
                        href={link.path}
                        onClick={() => setActiveLink(index)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            <Link
              href={"/providers/becomeProvider"}
              className="start font-Quicksand capitalize border-[2px] border-midnight-blue px-[8px] py-[5px] rounded-[.3rem] cursor-pointer text-midnight-blue hover:bg-blue-opcity transition-colors"
            >
              devenir prerstataire
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
