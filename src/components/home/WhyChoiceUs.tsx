import Image from "next/image";
import React from "react";
import collageServices from "@/imgs/collageServices.png";
import mainAmain from "@/imgs/mainAmain.png";
import telEnMain from "@/imgs/telenmain2.jpg";
import pousse from "@/imgs/pouce-en-haut.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faMobileScreenButton,
  faSquarePhone,
  faStar,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";

const WhyChoiceUs = () => {
  return (
    <section id="why-choose-us" className="section bg-gray-100">
      <div className="container px-4 sm:px-0">
        <div className="section-title">
          <div className="title">Pourquoi nous choisir</div>
          <div className="sub-title">Découvrez ce qui nous distingue</div>
        </div>
        <div className="grid grid-cols-1 gap-[50px]">
          <div className="card-wcu">
            <Image
              src={collageServices}
              width={500}
              height={500}
              alt="all services images"
            />
            <div className="description text-center">
              <div className="title">Large Choix de Services</div>
              <p className="des-content">
                Découvrez une gamme étendue de services pour répondre à tous vos
                besoins quotidiens et spécifiques.
              </p>
              <button className="btn">en s&apos;avoir plus</button>
            </div>
          </div>
          <div className="card-wcu md:flex-row-reverse">
            <Image
              src={mainAmain}
              width={500}
              height={500}
              alt="all services images"
            />
            <div className="description text-center">
              <div className="title">Fiabilité des Prestataires</div>
              <p className="des-content text-center">
                Nos prestataires sont rigoureusement sélectionnés pour assurer
                un service de haute qualité et fiable à chaque réservation.
              </p>
              <div className="btns w-full flex justify-between md:justify-around">
                <button className="btn">nos prestataires</button>
                <button className=" bg-lime-600 hover:bg-lime-500">
                  dévenir prestataire
                </button>
              </div>
            </div>
          </div>
          <div className="card-wcu">
            <Image
              src={telEnMain}
              width={500}
              height={500}
              alt="all services images"
            />
            <div className="description text-center">
              <div className="title">Facilité d&apos;Utilisation</div>
              <p className="des-content">
                Naviguez facilement à travers notre interface intuitive pour
                trouver, réserver et gérer vos services en quelques clics.
              </p>

              <div className="etapes gap-5">
                <div className="etapes-title">
                  résoudre ton problème en seulement 4 etapes
                </div>
                <div className="etapes-items">
                  <div className="etape">
                    <div className="number">étape1:</div>
                    <div className="">selectionnez un service</div>
                  </div>
                  <div className="etape">
                    <div className="number">étape2:</div>
                    <div className="">
                      définir l&apos;heure et la date de l&apos;intervention
                    </div>
                  </div>
                  <div className="etape">
                    <div className="number">étape3:</div>
                    <div className="">
                      choisir le prestataire selon les notes et commentaires
                    </div>
                  </div>
                  <div className="etape">
                    <div className="number">étape4:</div>
                    <div className="">
                      payer après prestation et probleme résolu
                    </div>
                  </div>
                </div>
              </div>
              <div className="btns w-full flex justify-between gap-4 md:justify-around">
                <button className="btn p-[5px]">
                  Commencer maintenant <FontAwesomeIcon icon={faLaptop} />
                  <FontAwesomeIcon className="" icon={faMobileScreenButton} />
                </button>
                <button className=" bg-lime-600 hover:bg-lime-500">
                  comment ça marche ?
                </button>
              </div>
            </div>
          </div>
          <div className="card-wcu md:flex-row-reverse">
            <Image
              src={mainAmain}
              width={500}
              height={500}
              alt="all services images"
            />
            <div className="description text-center">
              <div className="title">Disponibilité 24/7 (24H/24 | 7jrs/7)</div>
              <p className="des-content text-center">
                Réservez vos services quand vous le souhaitez, 24 heures sur 24,
                7 jours sur 7, pour répondre à vos besoins les plus urgents.
              </p>
              <button className="btn">débuter en meme temps</button>
            </div>
          </div>
          <div className="card-wcu">
            <Image
              src={pousse}
              width={400}
              height={500}
              alt="all services images"
              className=" max-w-[350px] rounded-xl lg:ml-14"
            />

            <div className="description text-center">
              <div className="title">
                Système de Notation et Avis{" "}
                <FontAwesomeIcon className=" text-yellow-400" icon={faStar} />
                <FontAwesomeIcon className=" text-yellow-400" icon={faStar} />
                <FontAwesomeIcon
                  className=" text-yellow-400"
                  icon={faStarHalf}
                />
              </div>
              <p className="des-content text-center">
                Explorez les avis authentiques laissés par d&apos; autres
                utilisateurs, vous aidant à prendre une décision éclairée basée
                sur l&apos; expérience.
              </p>
              <button className="btn">consulter les meilleurs</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoiceUs;
