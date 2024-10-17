import {
  faGithub,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCopyright,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import eseaServiceLogo from "@/imgs/eseareserve.png";

const Footer = () => {
  const navLinks = [
    { label: "Accueil", path: "/" },
    { label: "Inscription", path: "/signup" },
    { label: "Connexion", path: "/login" },
    { label: "Nous Contactez", path: "/contact" },
    { label: "Services chez ESEA Reserve", path: "/services" },
    { label: "Prestataires de ESEA Reserve", path: "/providers" },
    { label: "À propos ESEA Reserve", path: "/about" },
  ];
  return (
    <>
      <footer className="footer bg-gray-900 text-white py-[30px] sm:py-[50px] md:py-[90px]">
        <div className="container px-4 sm:px-0">
          <div className="flex flex-col md:gap-20 gap-8 lg:flex-row lg:gap-14">
            <div className="logo_eseaservice text-center lg:flex lg:flex-col lg:justify-end">
              <Image
                className="mx-auto object-cover max-h-[100px]"
                src={eseaServiceLogo}
                alt="esea-service_logo"
                width={150}
                height={150}
                priority={true}
              />
              <p className="mt-5 mx-auto text-sm md:text-base text-center max-w-[400px] lg:max-w-[420px] text-gray-400">
                ESEA Service - Réservez les meilleurs prestataires pour vos
                services rapidement et efficacement.
              </p>
            </div>
            <div className=" grid grid-cols-1 sm:flex sm:justify-between w-full gap-10 md:gap-0">
              <div className="footer_links text-center sm:text-left">
                <h3 className="font-semibold text-lg capitalize">
                  Liens rapides
                </h3>
                <ul className="mt-5 space-y-3">
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        className="hover:underline transition-all"
                        href={link.path}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="social_links text-center sm:text-left">
                <h3 className="font-semibold text-lg capitalize">
                  Nous suivre
                </h3>
                <ul className="mt-5 space-y-3">
                  <li className="flex items-center justify-center sm:justify-start gap-2 hover:underline">
                    <FontAwesomeIcon icon={faGithub} className="text-[20px]" />
                    GitHub
                  </li>
                  <li className="flex items-center justify-center sm:justify-start gap-2 hover:underline">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-[20px]"
                    />
                    Facebook
                  </li>
                  <li className="flex items-center justify-center sm:justify-start gap-2 hover:underline">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-[20px]"
                    />
                    Instagram
                  </li>
                  <li className="flex items-center justify-center sm:justify-start gap-2 hover:underline">
                    <FontAwesomeIcon icon={faTwitter} className="text-[20px]" />
                    Twitter
                  </li>
                </ul>
              </div>
              <div className="contact_info text-center sm:text-left">
                <h3 className="font-semibold text-lg capitalize">
                  Nous contacter
                </h3>
                <ul className="mt-5 space-y-3 text-sm md:text-base">
                  <li className="flex items-center justify-center sm:justify-start gap-2">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-[20px]"
                    />
                    123 Rue de l'Exemple, Paris, France
                  </li>
                  <li className="flex items-center justify-center sm:justify-start gap-2">
                    <FontAwesomeIcon icon={faPhone} className="text-[20px]" />{" "}
                    +33 6 12 34 56 78
                  </li>
                  <li className="flex items-center justify-center sm:justify-start gap-2">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-[20px]"
                    />
                    contact@eseareserve.com
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Message form */}
          <div className="col-span-1 lg:ml-[350px] md:col-span-4 mt-10 border-t pt-10">
            <h3 className="text-lg font-semibold text-center uppercase md:text-left">
              Laissez-nous un message
            </h3>
            <form className="mt-5 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-3 py-2 border md:w-20  rounded-md iInput"
              />
              <textarea
                placeholder="Votre message"
                className="flex-1 px-3 py-2 md:h-14 border iInput border-gray-400 rounded-md focus:outline-none focus:ring-0 focus:ring-gray-600 transition-all resize-none"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-sky-500 text-white rounded-md hover:bg-midnight-blue transition-all"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </footer>

      <div className="bg-white text-center py-4  text-[15px]">
        <div className="container flex flex-wrap justify-center items-center gap-3">
          <FontAwesomeIcon icon={faCopyright} />
          <span className="font-Quicksand">2024 - Tous droits réservés |</span>
          <Link
            className="hover:underline font-Quicksand"
            href="https://github.com/august-dev-pro"
          >
            august-dev-pro
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
