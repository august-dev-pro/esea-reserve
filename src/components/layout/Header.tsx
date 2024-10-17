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
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faGears } from "@fortawesome/free-solid-svg-icons/faGears";
import { getImageUrl, handleLogout } from "@/ui/fonctions";

const Header = () => {
  /////////////////////////////////////////////////////////
  const dispatch = useDispatch<AppDispatch>();
  const [activeLink, setActiveLink] = useState<number | null>(0);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [screenDropdownOpen, setScreenDropdownOpen] = useState<number | null>(
    null
  );
  const [userDropdownOpen, setUserDropdownOpen] = useState<boolean>(false);
  const [userDropdownOpenT, setUserDropdownOpenT] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathName = usePathname();

  const navLinks = [
    { label: "Accueil", path: "/" },
    { label: "Services", path: "/services" },
    { label: "À propos", path: "/about" },
    {
      label: "inscription",
      path: "/inscription",
      dropdownLinks: [
        { label: "s'inscrire", path: "/signup" },
        { label: "se connecter", path: "/login" },
        { label: "Devenir Prestataire", path: "/providers/becomeProvider" },
        { label: "mon compte", path: "/account/reservations" },
      ],
    },
  ];
  const user = useSelector((state: RootState) => state.auth.user);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !document
          .querySelector(".menu-dropdown")
          ?.contains(event.target as Node) &&
        !document.querySelector(".icon-close")?.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }

      if (
        !document
          .querySelector(".userDropdown")
          ?.contains(event.target as Node) &&
        !document.querySelector(".user")?.contains(event.target as Node)
      ) {
        setUserDropdownOpen(false);
      }
      if (
        !document
          .querySelector(".userDropdownT")
          ?.contains(event.target as Node) &&
        !document.querySelector(".userT")?.contains(event.target as Node)
      ) {
        setUserDropdownOpenT(false);
      }

      /* if (document.querySelector(".userT")?.contains(event.target as Node)) {
        setUserDropdownOpenT(!userDropdownOpenT);
      } else if (
        !document
          .querySelector(".userDropdownT")
          ?.contains(event.target as Node) &&
        !document.querySelector(".userT")?.contains(event.target as Node)
      ) {
        setUserDropdownOpenT(false);
      } */
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const logoutUser = async () => {
    await handleLogout(dispatch); // Passe le dispatch ici
  };

  /////////////////////////////////////////////
  const userMenuDropdownLinks = [
    {
      label: "mon compte",
      icon: faUser,
      link: "/account/profile",
    },
    {
      label: "mes reservations",
      icon: faBook,
      link: "/account/reservations",
    },
    {
      label: "parametre",
      icon: faGears,
      link: "/account/profile",
    },

    {
      label: "devenir prestataire",
      icon: faPenToSquare,
      link: "/providers/becomeProvider",
    },
  ];
  const pathname = usePathname();
  return (
    <header
      className={`header bg-white  ${
        pathname.includes("/admin/dashboard") ? "" : "fixed w-full"
      } z-[99]  py-[7px] border-solid border-b-[1px] border-b-gray-300 shadow-custom-header lg:py-[10px]`}
    >
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
                  onClick={() => setMenuOpen(false)}
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
                    menuOpen
                      ? `${
                          !pathName.includes("admin/dashboard")
                            ? "top-full"
                            : "top-[110px]"
                        } opacity-100`
                      : "top-[-300px] opacity-0"
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
                    !user.profilImage ? "bg-black" : ""
                  }`}
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                >
                  {/* {user.profilImage != "" && (
                    <Image
                      className="rounded-[50%]"
                      src={user.profilImage}
                      alt="user image"
                      width={500}
                      height={500}
                    />
                  )} */}
                </div>
                <div
                  className={`userDropdown transition-all absolute top-[64px] md:top-[45px] lg:top-[50px] w-full h-[vh] bg-white shadow-xl p-4 pt-2 ${
                    userDropdownOpen
                      ? "right-0 opacity-100 z-50" // z-index élevé quand le menu est ouvert
                      : "right-[-500px] hidden opacity-0 z-[-1]" // z-index bas quand il est fermé
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
                          !user.profilImage ? "bg-black" : ""
                        }`}
                        onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                      >
                        {user.profilImage != " " && (
                          <Image
                            className="rounded-[50%]"
                            src={user.profilImage}
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
                    <div
                      onClick={() => logoutUser()}
                      className="flex cursor-pointer py-[5px] pl-2 items-center gap-2 hover:bg-gray-300 transition-all rounded-[.3rem]"
                    >
                      <div className="w-[25px] flex justify-center">
                        <FontAwesomeIcon icon={faSignOut} />
                      </div>
                      <div className="font-Quicksand">deconnexion</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="items-center gap-[50px] hidden md:flex">
            <nav className="nav">
              <div className="links items-center font-[300] flex gap-[15px] md:text-[15px]">
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
                    ) : link.label != "inscription" ? (
                      <Link
                        className={`link flex font-[400] flex-col hover:text-midnight-blue transition-all ${
                          pathName === link.path ? "active" : ""
                        }`}
                        href={link.path}
                      >
                        {<div className="">{link.label}</div>}
                      </Link>
                    ) : user?.role != "tasker" ? (
                      <Link
                        className={`py-1 px-3 border border-blue text-blue font-Quicksand font-[800] hover:bg-blue hover:text-white rounded-[1rem] capitalize flex transition-all`}
                        href={"/providers/becomeProvider"}
                      >
                        devenir prestataire
                      </Link>
                    ) : null}
                  </div>
                ))}
              </div>
            </nav>
            {!user && (
              <Link
                href={"/providers/becomeProvider"}
                className="py-1 px-3 border border-blue text-blue font-Quicksand font-[800] hover:bg-blue hover:text-white rounded-[1rem] capitalize flex transition-all"
              >
                devenir prerstataire
              </Link>
            )}
            {user && (
              <div className="flex gap-5 items-center relative">
                <div
                  className={`userT w-10 h-10 flex items-center justify-center rounded-[50%] overflow-hidden cursor-pointer ${
                    !user.profilImage ? "bg-black" : ""
                  }`}
                  onClick={() => setUserDropdownOpenT(!userDropdownOpenT)}
                >
                  {/*   {user.profilImage != "" && (
                    <Image
                      className="rounded-[50%]"
                      src={getImageUrl(user.profilImage)}
                      alt="user image"
                      width={500}
                      height={500}
                    />
                  )} */}
                </div>
                <div
                  className={`userDropdownT transition-all duration-[0.2s] absolute top-[45px] lg:top-[50px] w-[300px] bg-white shadow-xl rounded-b-lg p-4 pt-2 ${
                    userDropdownOpenT
                      ? "right-0 z-[50] opacity-100" //  z-50 z-index élevé quand le menu est ouvert
                      : "hidden right-[-300px] opacity-0 z-[-1]" //  z-index bas quand il est fermé
                  }`}
                  style={{ transition: "top 0.3s ease, opacity 0.3s ease" }} // Transition appliquée à top et opacity
                >
                  <div className="flex w-full justify-between mb-3 py-1 border-b">
                    <div className="font-[300]">{user.email}</div>
                    <FontAwesomeIcon
                      className="text-[20px] cursor-pointer"
                      icon={faClose}
                      onClick={() => setUserDropdownOpenT(!userDropdownOpenT)} // Gestion du clic pour fermer
                    />
                  </div>
                  <div>
                    {userMenuDropdownLinks.map(
                      (linkData: any, index: number) => (
                        <Link
                          onMouseOver={(e) => {
                            e.stopPropagation(); // Empêche la fermeture immédiate du dropdown
                            // Exécute ensuite l'action
                          }}
                          key={index}
                          href={linkData.link}
                          onClick={() => {
                            setUserDropdownOpenT(false);
                          }}
                          className="flex py-[5px] pl-2 items-center gap-2 hover:bg-gray-300 transition-all rounded-[.3rem]"
                        >
                          <div className="w-[25px] flex justify-center">
                            <FontAwesomeIcon icon={linkData.icon} />
                          </div>
                          <div className="font-Quicksand">{linkData.label}</div>
                        </Link>
                      )
                    )}
                    <div
                      onClick={() => logoutUser()}
                      className="flex cursor-pointer py-[5px] pl-2 items-center gap-2 hover:bg-gray-300 transition-all rounded-[.3rem]"
                    >
                      <div className="w-[25px] flex justify-center">
                        <FontAwesomeIcon icon={faSignOut} />
                      </div>
                      <div className="font-Quicksand">deconnexion</div>
                    </div>
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
