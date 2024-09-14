"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import eseaServiceLogo from "@/imgs/eseareserve.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCaretDown,
  faChevronDown,
  faClose,
  faPenToSquare,
  faSearch,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { logout, logoutThunk } from "@/redux/slices/authSlice";
import { API_URL } from "@/ui/api";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faGears } from "@fortawesome/free-solid-svg-icons/faGears";

const Header = () => {
  /////////////////////////////////////////////////////////
  const profileImagePath =
    "usersImages/profileImage-1724686505188-648406947.jpeg";
  const normalizedPath = profileImagePath.replace(/\\/g, "/");
  const imageUrl = `${API_URL}/uploads/${normalizedPath}`;
  const dispatch = useDispatch<AppDispatch>();
  const [activeLink, setActiveLink] = useState<number | null>(0);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [screenDropdownOpen, setScreenDropdownOpen] = useState<number | null>(
    null
  );
  const [userDropdownOpen, setUserDropdownOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathName = usePathname();

  const navLinks = [
    { label: "Accueil", path: "/" },
    { label: "Services", path: "/services" },
    {
      label: "inscription",
      path: "/inscription",
      dropdownLinks: [
        { label: "s'inscrire", path: "/signup" },
        { label: "se connecter", path: "/login" },
        { label: "Devenir Prestataire", path: "/providers/becomeProvider" },
        { label: "mon compte", path: "/account" },
      ],
    },

    { label: "À propos", path: "/about" },
  ];
  const user = useSelector((state: RootState) => state.auth.user);
  /////////////////////////////////////////////
  const userMenuDropdownLinks = [
    {
      label: "mon compte",
      icon: faUser,
      link: "/account",
    },
    {
      label: "mes reservations",
      icon: faBook,
      link: "/user-reservation",
    },
    {
      label: "parametre",
      icon: faGears,
      link: "/setting",
    },

    {
      label: "devenir prestataire",
      icon: faPenToSquare,
      link: "/providers/become-provider",
    },
    {
      label: "deconnexion",
      icon: faSignOut,
      link: "/logout",
    },
  ];
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.querySelector(".menu-dropdown");

      if (dropdown && !dropdown.contains(event.target as Node)) {
        setMenuOpen(false); // Ferme le menu principal
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const userDropdown = document.querySelector(".userDropdown");

      if (userDropdown && !userDropdown.contains(event.target as Node)) {
        setUserDropdownOpen(false); // Ferme le menu utilisateur
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header mb-[200Px] bg-white fixed z-[10000] w-full py-[7px] border-solid border-b-[1px] border-b-gray-300 shadow-custom-header lg:py-[10px]">
      <div className="container px-5 sm:px-0">
        <div className="header_content flex flex-col gap-4 md:flex-row md:justify-between items-center">
          <div className="logo_eseaservice w-[100px] h-[41px] sm: lg:w-[110px] lg:h-[45px] border-b">
            <Image
              className=" object-cover max-h-[41px] lg:max-h-[45px]"
              src={eseaServiceLogo}
              alt="esea-service_logo"
              width={500}
              height={500}
              priority={true}
            />
          </div>
          <div className="flex items-center w-full justify-between md:hidden">
            <div className="flex gap-4">
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
                <div
                  className={`menu-dropdown absolute w-full left-0 border bg-white z-50 md:hidden overflow-hidden transition-all duration-300 ${
                    menuOpen ? "top-full opacity-100" : "top-[-300px] opacity-0"
                  }`}
                  style={{
                    transition: "top 0.3s ease, opacity 0.3s ease", // Transition appliquée à top et opacity
                  }}
                >
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
                            setScreenDropdownOpen(isOpen ? null : index);
                          }}
                        >
                          <div className="flex capitalize text-[15px] gap-[5px] items-center font-Quicksand">
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
                          className={`block py-2 text-gray-700 hover:text-midnight-blue w-fit font-Quicksand text-[15px] ${
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
              <div className="searchhed cursor-pointer">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>

            {user && (
              <div className="flex gap-5 items-center">
                <div
                  className={`user w-10 h-10 flex items-center justify-center rounded-[50%] overflow-hidden cursor-pointer ${
                    !user.profilImage ? "bg-midnight-blue" : ""
                  }`}
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                >
                  {user.profilImage != "" && (
                    <Image
                      className="rounded-[50%]"
                      src={imageUrl}
                      alt="user image"
                      width={500}
                      height={500}
                    />
                  )}
                </div>
                <div
                  className={`userDropdown transition-all absolute top-[64px] md:top-[45px] lg:top-[50px] w-full h-[vh] bg-white shadow-xl p-4 pt-2 ${
                    userDropdownOpen
                      ? "right-0 opacity-100 z-50" // z-index élevé quand le menu est ouvert
                      : "right-[-300px] opacity-0 z-[-1]" // z-index bas quand il est fermé
                  }`}
                  style={{
                    height: "calc(100vh)",
                    transition: "top 0.3s ease, opacity 0.3s ease",
                  }} // Transition appliquée à top et opacity
                >
                  <div className="flex w-full justify-between mb-3 py-1 border-b">
                    <div className="font-[300] flex items-end gap-2">
                      <div
                        className={`user w-9 h-9 flex items-center justify-center rounded-[50%] overflow-hidden ${
                          !user.profilImage ? "bg-midnight-blue" : ""
                        }`}
                        onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                      >
                        {user.profilImage != "" && (
                          <Image
                            className="rounded-[50%]"
                            src={imageUrl}
                            alt="user image"
                            width={500}
                            height={500}
                          />
                        )}
                      </div>
                      <div className="">{user.email}</div>
                    </div>
                    <div className="text-[20px] cursor-pointer border w-[25px] h-[25px] border-gray-500 rounded-[50%] flex items-center px-1">
                      <FontAwesomeIcon
                        icon={faClose}
                        onClick={() => setUserDropdownOpen(!userDropdownOpen)} // Gestion du clic pour fermer
                      />
                    </div>
                  </div>
                  <div>
                    {userMenuDropdownLinks.map(
                      (linkData: any, index: number) => (
                        <Link
                          key={index}
                          href={linkData.link}
                          className="flex py-[5px] pl-2 items-center gap-2 hover:bg-gray-300 transition-all rounded-[.3rem]"
                        >
                          <div className="w-[25px] flex justify-center">
                            <FontAwesomeIcon icon={linkData.icon} />
                          </div>
                          <div className="font-Quicksand">{linkData.label}</div>
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="items-center gap-[50px] hidden md:flex">
            <nav className="nav">
              <div className="links font-[300] flex gap-[15px] md:text-[15px]">
                {navLinks.map((link: any, index: number) => (
                  <div key={index} className="relative">
                    {!user && link.dropdownLinks ? (
                      <div
                        className="relative cursor-pointer"
                        onMouseEnter={() => setDropdownOpen(index)}
                        onMouseLeave={() => setDropdownOpen(null)}
                      >
                        <div
                          className={`link flex items-center font-[400] capitalize gap-[5px] hover:text-midnight-blue transition-all ${
                            pathName === link.path ? "active" : ""
                          }`}
                        >
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
                          pathName === link.path ? "active" : ""
                        }`}
                        href={link.path}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </nav>
            {!user && (
              <Link
                href={"/providers/becomeProvider"}
                className="start font-Quicksand capitalize border-[2px] border-midnight-blue px-[8px] py-[5px] rounded-[.3rem] cursor-pointer text-midnight-blue hover:bg-blue-opcity transition-colors"
              >
                devenir prerstataire
              </Link>
            )}

            {user && (
              <div className="flex gap-5 items-center relative">
                <div
                  className="user w-10 h-10 flex items-center justify-center rounded-[50%] overflow-hidden cursor-pointer"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                >
                  {user.profilImage != "" ? (
                    <Image
                      className="rounded-[50%]"
                      src={imageUrl}
                      alt="user image"
                      width={500}
                      height={500}
                    />
                  ) : (
                    <div className="bg-midnight-blue w-full h-full"></div>
                  )}
                </div>

                {/* <div
                  className={`transition-all absolute top-[50px] w-[300px] bg-white shadow-xl z-50 rounded-b-lg p-4 ${
                    userDropdownOpen
                      ? "right-0 opacity-100"
                      : "right-[-300px] opacity-0"
                  }`}
                  style={{ transition: "right 0.3s ease, opacity 0.3s ease" }} // Ajout de la transition ici
                >
                  <div className="flex w-full justify-end mb-3">
                    <div
                      className="icon-close"
                      onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    ></div>
                  </div>
                  <div>
                    {userMenuDropdownLinks.map(
                      (linkData: any, index: number) => (
                        <Link
                          key={index} // Ajout de la clé unique
                          href={linkData.link}
                          className="flex py-[5px] pl-2 items-center gap-2 hover:bg-gray-300 transition-all rounded-[.3rem]"
                        >
                          <div className="w-[25px] flex justify-center">
                            <FontAwesomeIcon icon={linkData.icon} />
                          </div>
                          <div className="font-Quicksand">{linkData.label}</div>
                        </Link>
                      )
                    )}
                  </div>
                </div> */}
                <div
                  className={`userDropdown transition-all absolute top-[45px] lg:top-[50px] w-[300px] bg-white shadow-xl rounded-b-lg p-4 pt-2 ${
                    userDropdownOpen
                      ? "right-0 opacity-100 z-50" // z-index élevé quand le menu est ouvert
                      : "right-[-300px] opacity-0 z-[-1]" // z-index bas quand il est fermé
                  }`}
                  style={{ transition: "top 0.3s ease, opacity 0.3s ease" }} // Transition appliquée à top et opacity
                >
                  <div className="flex w-full justify-between mb-3 py-1 border-b">
                    <div className="font-[300]">{user.email}</div>
                    <FontAwesomeIcon
                      className="text-[20px] cursor-pointer"
                      icon={faClose}
                      onClick={() => setUserDropdownOpen(!userDropdownOpen)} // Gestion du clic pour fermer
                    />
                  </div>
                  <div>
                    {userMenuDropdownLinks.map(
                      (linkData: any, index: number) => (
                        <Link
                          key={index}
                          href={linkData.link}
                          className="flex py-[5px] pl-2 items-center gap-2 hover:bg-gray-300 transition-all rounded-[.3rem]"
                        >
                          <div className="w-[25px] flex justify-center">
                            <FontAwesomeIcon icon={linkData.icon} />
                          </div>
                          <div className="font-Quicksand">{linkData.label}</div>
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
/* "use client";
import Image from "next/image";
import React, { useState } from "react";
import eseaServiceLogo from "@/imgs/eseareserve.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { logout, logoutThunk } from "@/redux/slices/authSlice";
import { API_URL } from "@/ui/api";

const Header = () => {
  const profileImagePath = "usersImages/profileImage-1724686505188-648406947.jpeg";
  const normalizedPath = profileImagePath.replace(/\\/g, "/");
  const imageUrl = `${API_URL}/uploads/${normalizedPath}`;
  const dispatch = useDispatch<AppDispatch>();
  const [activeLink, setActiveLink] = useState<number | null>(0);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [screenDropdownOpen, setScreenDropdownOpen] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState<boolean>(false);
  const pathName = usePathname();

  const navLinks = [
    { label: "Accueil", path: "/" },
    { label: "Services", path: "/services" },
    {
      label: "inscription",
      path: "/inscription",
      dropdownLinks: [
        { label: "s'inscrire", path: "/signup" },
        { label: "se connecter", path: "/login" },
        { label: "Devenir Prestataire", path: "/providers/becomeProvider" },
        { label: "mon compte", path: "/account" },
      ],
    },
    { label: "À propos", path: "/about" },
  ];

  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <header className="header mb-[200Px] bg-white fixed z-[10000] w-full py-[7px] border-solid border-b-[1px] border-b-gray-300 shadow-custom-header lg:py-[10px]">
      <div className="container px-5 sm:px-0">
        <div className="header_content flex flex-col gap-4 md:flex-row md:justify-between items-center">
          <div className="logo_eseaservice w-[100px] h-[41px] lg:w-[110px] lg:h-[45px] border-b">
            <Image
              className="object-cover max-h-[41px] lg:max-h-[45px]"
              src={eseaServiceLogo}
              alt="esea-service_logo"
              width={500}
              height={500}
              priority={true}
            />
          </div>
          <div className="flex items-center w-full justify-between md:hidden">
            <div className="flex gap-4">
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
                          onClick={() => setScreenDropdownOpen(isOpen ? null : index)}
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
                              {link.dropdownLinks.map((link: any, index2: number) => (
                                <Link
                                  key={index2}
                                  className="block py-[2px] text-gray-700 hover:text-midnight-blue w-fit font-Quicksand"
                                  href={link.path}
                                  onClick={() => {
                                    setMenuOpen(false);
                                  }}
                                >
                                  {link.label}
                                </Link>
                              ))}
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
              <div className="searchhed cursor-pointer">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
            {user && (
              <div className="flex gap-5 items-center relative">
                <div
                  className="user w-10 h-10 flex items-center justify-center rounded-[50%] overflow-hidden cursor-pointer"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                >
                  {user.profilImage != "" ? (
                    <Image
                      className="rounded-[50%]"
                      src={imageUrl}
                      alt="user image"
                      width={500}
                      height={500}
                    />
                  ) : (
                    <div className="bg-midnight-blue w-full h-full"></div>
                  )}
                </div>
                {userDropdownOpen && (
                  <div className="absolute top-[50px] right-0 w-[200px] bg-white shadow-xl z-50 rounded-lg p-4">
                    <Link href="/account" className="block py-2 hover:text-midnight-blue">
                      Mon compte
                    </Link>
                    <Link href="/logout" className="block py-2 hover:text-midnight-blue">
                      Se déconnecter
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="items-center gap-[50px] hidden md:flex">
            <nav className="nav">
              <div className="links font-[300] flex gap-[15px] md:text-[15px]">
                {navLinks.map((link: any, index: number) => (
                  <div key={index} className="relative">
                    {!user && link.dropdownLinks ? (
                      <div
                        className="relative cursor-pointer"
                        onMouseEnter={() => setDropdownOpen(index)}
                        onMouseLeave={() => setDropdownOpen(null)}
                      >
                        <div
                          className={`link flex items-center font-[400] capitalize gap-[5px] hover:text-midnight-blue transition-all ${
                            pathName === link.path ? "active" : ""
                          }`}
                        >
                          {link.label} <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                        {dropdownOpen === index && (
                          <div className="absolute right-0 left-0 w-48 bg-white border border-gray-200 shadow-lg rounded-sm">
                            {link.dropdownLinks.map((subLink: any, subIndex: number) => (
                              <Link
                                key={subIndex}
                                className="block capitalize px-[30px] py-2 text-[14px] hover:bg-gray-100 font-Quicksand hover:text-midnight-blue"
                                href={subLink.path}
                              >
                                {subLink.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        className={`link flex font-[400] flex-col hover:text-midnight-blue transition-all ${
                          pathName === link.path ? "active" : ""
                        }`}
                        href={link.path}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {user && (
              <div className="flex gap-5 items-center relative">
                <div
                  className="user w-10 h-10 flex items-center justify-center rounded-[50%] overflow-hidden cursor-pointer"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                >
                  {user.profilImage != "" ? (
                    <Image
                      className="rounded-[50%]"
                      src={imageUrl}
                      alt="user image"
                      width={500}
                      height={500}
                    />
                  ) : (
                    <div className="bg-midnight-blue w-full h-full"></div>
                  )}
                </div>
                {userDropdownOpen && (
                  <div className="absolute top-[50px] right-0 w-[200px] bg-white shadow-xl z-50 rounded-lg p-4">
                    <Link href="/account" className="block py-2 hover:text-midnight-blue">
                      Mon compte
                    </Link>
                    <Link href="/logout" className="block py-2 hover:text-midnight-blue">
                      Se déconnecter
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
 */
