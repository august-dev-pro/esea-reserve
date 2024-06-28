import React from "react";
import howItWork from "@/imgs/how_it_works_pic_updated.webp";
import Image from "next/image";
import {
  faComment,
  faHammer,
  faMobile,
  faMobileScreen,
  faSearch,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HowIsWork = () => {
  const steps = [
    {
      id: "1",
      title: "Recherche de Services",
      description:
        "Recherchez et sélectionnez le service dont vous avez besoin parmi une large gamme de services disponibles.",
      icon: faSearch,
    },
    {
      id: "2",
      title: "Sélection du Prestataire",
      description:
        "Choisissez un prestataire en fonction de ses disponibilités, ses avis et ses évaluations.",
      icon: faCircleCheck,
    },
    {
      id: "3",
      title: "Réservation & Confirmation",
      description:
        "Réservez le service et recevez une confirmation instantanée par email et SMS.",
      icon: faCircleCheck,
    },
    {
      id: "4",
      title: "Réalisation du Service",
      description:
        "Le prestataire se rendra à l&apos; adresse indiquée pour réaliser le service à la date et à l&apos; heure choisies.",
      icon: faHammer,
    },
    {
      id: "5",
      title: "Paiement Sécurisé",
      description:
        "Effectuez un paiement sécurisé en ligne pour confirmer votre réservation.",
      icon: faMobileScreen,
    },
    {
      id: "6",
      title: "Évaluation et Feedback",
      description:
        "Une fois le service terminé, évaluez votre prestataire et laissez un avis.",
      icon: faComment,
    },
  ];

  return (
    <section id="how-it-works" className="section bg-white">
      <div className="container px-4 sm:px-0">
        <div className="section-title">
          <div className="title">comment ça marche</div>
          <div className="sub-title">
            &quot;Découvrez en quelques étapes simples comment notre plateforme
            vous permet de réserver des services de manière rapide et sécurisée.
            Suivez le guide pour commencer dès aujourd&apos;hui !&quot;
          </div>
        </div>
        <div className="section-content relative md:h-[760px] md:flex items-center lg:px-[70px]">
          <Image
            src={howItWork}
            width={800}
            height={800}
            alt="how it work image"
            className=" h-[200px] sm:h-auto md:w-full md:h-full object-cover md:ml-[200px] lg:rounded-xl"
          />
          <div className="work_desc bg-midnight-blue p-3 lg:p-2 flex flex-col gap-2 rounded-bl-xl rounded-br-xl md:w-[350px] md:absolute top-0 bottom-0 lg:w-[400px] lg:h-fit lg:mt-[60px] md:rounded-xl lg:border-solid lg:border-[2px] lg:border-white">
            {steps.map((step, index) => (
              <div key={index} className="p-3 md:p-2 rounded-lg bg-white h-fit">
                <div className=" flex items-center gap-2">
                  <div className=" font-[400] rounded-[50%] text-[16px] bg-midnight-blue w-6 h-6 flex items-center justify-center text-white">
                    {step.id}
                  </div>
                  {step.title} <FontAwesomeIcon icon={step.icon} />
                </div>
                <p className="text-gray-700 font-[300] text-left ml-7 text-[15px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIsWork;
