import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import eseaServiceLogo from "@/imgs/eseareserve.png";

const Footer = () => {
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
    <>
      {/* <div className="logo_eseaservice w-[150px] m-[0_auto] py-[20px]">
        <Image
          className=" object-cover max-h-[100px]"
          src={eseaServiceLogo}
          alt="esea-service_logo"
          width={500}
          height={500}
        />
      </div> */}
      <footer className="footer bg-black text-white">
        <div className="container px-5 sm:px-0 items-center">
          <div className="logo_eseaservice w-[150px] m-[0_auto] py-[20px]">
            <Image
              className=" object-cover max-h-[100px]"
              src={eseaServiceLogo}
              alt="esea-service_logo"
              width={500}
              height={500}
            />
          </div>
          <div className="footer_content py-[20px]">
            <div className="actions_link flex flex-wrap gap-3 items-center justify-between">
              <div className="linkks flex flex-col text-[15px]">
                <div className="font-[500] text-[19px] md:text-[22px] capitalize">
                  eseareserve
                </div>
                {navLinks &&
                  navLinks.map((link: any, index: number) => (
                    <Link
                      key={index}
                      className={`link font-[200] md:font-[300]  hover:text-midnight-blue transition-all w-fit`}
                      href={link.path}
                    >
                      {link.label}
                    </Link>
                  ))}
              </div>
              <div className="linkks flex flex-col text-[15px]">
                <div className="font-[500] text-[19px] md:text-[22px] capitalize">
                  contact us
                </div>
                {navLinks &&
                  navLinks.map((link: any, index: number) => (
                    <Link
                      key={index}
                      className={` font-[200] md:font-[300] hover:text-midnight-blue transition-all w-fit`}
                      href={link.path}
                    >
                      {link.label}
                    </Link>
                  ))}
              </div>
              <div className="linkks flex flex-col text-[15px]">
                <div className="font-[500] text-[19px] md:text-[22px] capitalize">
                  over link
                </div>
                {navLinks &&
                  navLinks.map((link: any, index: number) => (
                    <Link
                      key={index}
                      className={` font-[200] md:font-[300] hover:text-midnight-blue transition-all w-fit`}
                      href={link.path}
                    >
                      {link.label}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="all-right-reserve text-[15px] font-[300] flex flex-wrap items-center justify-center gap-[10px] py-[5px] container px-5 sm:px-0 sm:gap-[20px] lg:gap-[30px] tracking-wide">
        <FontAwesomeIcon icon={faCopyright} /> <div>| |</div> 2024 - all rights
        reserve
        <Link
          href={"https://github.com/august-dev-pro"}
          className=" hover:text-midnight-blue"
        >
          <FontAwesomeIcon icon={faGithub} /> august-dev-pro
        </Link>
      </div>
    </>
  );
};

export default Footer;
