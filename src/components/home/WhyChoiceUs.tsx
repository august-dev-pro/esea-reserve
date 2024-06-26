import Image from "next/image";
import React from "react";
import collageServices from "@/imgs/collageServices.png";
import mainAmain from "@/imgs/mainAmain.png";
import telEnMain from "@/imgs/telenmain2.jpg";

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
              src={collageServices.src}
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
            </div>
          </div>
          <div className="card-wcu md:flex-row-reverse">
            <Image
              src={mainAmain.src}
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
            </div>
          </div>
          <div className="card-wcu">
            <Image
              src={telEnMain.src}
              width={500}
              height={500}
              alt="all services images"
            />
            <div className="description text-center">
              <div className="title">Facilité d'Utilisation</div>
              <p className="des-content">
                Naviguez facilement à travers notre interface intuitive pour
                trouver, réserver et gérer vos services en quelques clics.
              </p>

              <div className="etapes">
                <div className="etapes-title">
                  résoudre ton probleme en seulement 4 etapes
                </div>
                <div className="etapes-items">
                  <div className="etape">
                    <div className="number">étape1:</div>
                    <div className="">selectionnez un service</div>
                  </div>
                  <div className="etape">
                    <div className="number">étape2:</div>
                    <div className="">
                      definir l'heure et la date de l'intervention
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
                      payer apres prestation et probleme resolu
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoiceUs;
