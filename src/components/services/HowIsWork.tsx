import React from "react";

const HowIsWork = () => {
  const works = [
    {
      id: 1,
      title: "Sélectionnez votre prestataire",
      description:
        "Décrivez votre tâche et choisissez un prestataire vérifié et évalué par les clients pour réaliser le travail.",
    },
    {
      id: 2,
      title: "Prévoir une heure",
      description:
        "Planifiez la tâche à un moment qui vous convient et discuter en avec le prestatiare choisi ",
    },
    {
      id: 3,
      title: "Payer quand c'est fait",
      description:
        "Effectuez le paiement de manière transparente via la plateforme uniquement après la réalisation complète de votre tâche.",
    },
  ];

  return (
    <div className="how-is-work flex flex-col gap-[30px] ">
      {works.map((work: any, index: number) => (
        <div className="work flex gap-4" key={index}>
          <div className="mt-[5px]">
            <div className="w-[25px] h-[25px] bg-black text-white text-[18px] font-[500] rounded-[50%] flex items-center justify-center">
              {work.id}
            </div>
          </div>
          <div className="des">
            <div className="title text-[20px] capitalize font-[300] w-max ">
              {work.title}
            </div>
            <div className="description font-Quicksand max-w-[500px]">
              {work.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HowIsWork;
