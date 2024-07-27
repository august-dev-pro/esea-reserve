"use client";
import Image from "next/image";
import React, { useState } from "react";

import become_hero from "@/imgs/providers/hero_landing-fdeb7ef8f1a4361ec76f75d007d79546.jpg";
import Link from "next/link";
import SeparedBar from "@/components/ui/SeparedBar";
import register from "@/imgs/svgs/Sans titre.svg";
import profil from "@/imgs/svgs/profile-66b4a664320caa8c94ded811b3ec10dc.svg";
import elegibilite from "@/imgs/svgs/eligibility-68ec13c65cd448418fc4e27e0590d779.svg";
import paiement from "@/imgs/svgs/paiement.svg";
import emploiTime from "@/imgs/svgs/emploi_du_temps.svg";
import jobs from "@/imgs/svgs/getting_jobs-037938907c55e3d9ae963b4a182b3150.svg";
import aboutFouter from "@/imgs/providers/about_footer_image.jpg";
/* import RegisterTaskerForm from "@/components/forms/providers/RegisterTaskerForm";
 */
const page = () => {
  const bondoukouQuarters = [
    { value: "Bondoukou, Dioulabougou" },
    { value: "Bondoukou, TP" },
    { value: "Bondoukou, Zanzan" },
    { value: "Bondoukou, Zanzan 2" },
    { value: "Bondoukou, Kamagaya" },
    { value: "Bondoukou, Koko" },
    { value: "Bondoukou, Derriere Camp" },
    { value: "Bondoukou, Lycee" },
    { value: "Bondoukou, Lycee 911" },
  ];
  const chields = [
    {
      id: 1,
      icon: register,
      title: "s'inscrire",
      description:
        "Créez votre compte. Puis téléchargez l'application Tasker pour continuer l'enregistrement.",
    },
    {
      id: 2,
      icon: profil,
      title: "Construisez votre profil",
      description: "Sélectionnez quels services vous souhaitez offrir et où.",
    },
    {
      id: 3,
      icon: elegibilite,
      title: "Vérifier votre éligibilité à la tâche",
      description:
        "Confirmez votre identité et soumettez des vérifications d'entreprise, selon les besoins.",
    },
    {
      id: 4,
      icon: paiement,
      title: "Paiement des frais d'inscription",
      description:
        "Dans les villes applicables, nous facturons un droit d'inscription de 25 dollars qui nous aide à vous fournir le meilleur service.",
    },
    {
      id: 5,
      icon: emploiTime,
      title: "Fixez votre emploi du temps et votre espace de travail",
      description:
        "Fixez votre disponibilité hebdomadaire et choisissez de recevoir des emplois de la même journée.",
    },
    {
      id: 6,
      icon: jobs,
      title: "Commencer à trouver un emploi",
      description: "Développez votre entreprise selon vos propres conditions.",
    },
  ];

  const [registerTakerForm, setRegisterTakerForm] = useState(true);

  const handleStartRegister = () => {
    setRegisterTakerForm(!registerTakerForm);
  };
  return (
    <div className="relative">
      {registerTakerForm ? (
        <div
          className=""
          style={{
            backgroundImage: `url('${aboutFouter.src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <RegisterTaskerForm handleStartRegister={handleStartRegister} /> */}
        </div>
      ) : (
        <>
          <div className="container px-4 sm:px-0">
            <div className=" flex flex-col md:grid md:grid-cols-[1fr_450px] md:gap-[100px] section ">
              <div className="image">
                <Image
                  src={become_hero}
                  alt="become-tasker-hero"
                  width={10000}
                  height={10000}
                  className=" w-full "
                />
              </div>
              <div className="start_infos">
                <div className="section-title">
                  <div className="title">Gagnez de l'argent à votre façon</div>
                  <div className="sub-title">
                    commencez votre inscription et voyez combien vous pouriez
                    gagner en tant que tasker
                  </div>
                </div>
                <div className="register">
                  <form action="" className="flex flex-col gap-8 sm:px-5">
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="country"
                        className=" font-Quicksand text-[18px] capitalize"
                      >
                        choisissez votre domaine
                      </label>
                      <select
                        defaultValue={"Bondoukou (all)"}
                        name="country"
                        id="country"
                        className="font-Quicksand font-[600] text-[17px] cursor-pointer overflow-hidden p-3 bg-white border-solid border-[1px] border-gray-400 w-full rounded-lg"
                      >
                        <option disabled>Bondoukou, zanzan...</option>
                        {bondoukouQuarters.map((item: any, index: number) => (
                          <option key={index}>{item.value}</option>
                        ))}
                      </select>
                    </div>
                    <div className=" flex flex-col gap-1">
                      <label
                        htmlFor=""
                        className=" font-Quicksand text-[18px] capitalize"
                      >
                        choisissez votre domaine
                      </label>
                      <select
                        defaultValue={"Netoyage ---"}
                        name="domaine"
                        id="domaine"
                        className="font-Quicksand font-[600] text-[17px] cursor-pointer overflow-hidden p-3 bg-white border-solid border-[1px] border-gray-400 w-full rounded-lg"
                      >
                        <option disabled>Netoyage, burreau...</option>
                        {bondoukouQuarters.map((item: any, index: number) => (
                          <option key={index}>{item.value}</option>
                        ))}
                      </select>
                    </div>
                    <div
                      onClick={handleStartRegister}
                      className="btn-primary w-full text-[18px]"
                    >
                      commencer maintenant
                    </div>
                    <div className=" flex gap-4 font-Quicksand text-[18px] font-[500]">
                      vous-avez déja un compte ?
                      <Link
                        className=" font-Quicksand underline hover:text-midnight-blue"
                        href={"/login"}
                      >
                        se conecter
                      </Link>{" "}
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <SeparedBar />
            <div className="section">
              <div className="section-title">
                <div className="title">comment sa marche</div>
                <div className="sub-title">
                  Suivez ces étapes simples pour commencer à gagner de l'argent
                  en tant que tasker
                </div>
              </div>
              <div className="section_started_content grid grid-cols-1 gap-[40px] sm:grid-cols-2 lg:grid-cols-3">
                {chields.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="chield flex flex-col w-full  gap-[10px]"
                  >
                    <div className="chield_title flex w-full justify-start items-end gap-4">
                      <Image
                        src={item.icon}
                        alt={`${""}`}
                        width={150}
                        height={150}
                        className=" max-w-[35px] md:max-w-[50px]"
                      />

                      <div className="capitalize font-Quicksand text-[16px] md:text-[20px] font-[600] text-start">
                        {item.id}. {item.title}
                      </div>
                    </div>
                    <div className="describe flex font-Quicksand text-[15px] text-start lg:text-[18px]">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="section "
            style={{
              backgroundImage: `url('${aboutFouter.src}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="section-what-easereserve_content container px-4 sm:px-0">
              <div className="section-title">
                <div className="title">c'est quoi esea-reserve ?</div>
                <div className="sub_title"></div>
              </div>
              <div className="desscription font-Quicksand text-center text-[15px] md:text-[18px] font-[400] max-w-[700px] m-[0_auto] flex flex-col gap-4">
                TaskRabbit connects busy people in need of help with trusted
                local Taskers who can lend a hand with everything from home
                repairs to errands. As a Tasker, you can get paid to do what you
                love, when and where you want — all while saving the day for
                someone in your city.
                <div className="actions flex w-full text-[16px] justify-around">
                  <div className="btn-primary w-fit">devenir tasker</div>
                  <div className="btn-secondary w-fit">reserver service</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default page;
