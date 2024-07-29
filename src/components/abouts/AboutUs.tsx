import React from "react";
import abouthero from "@/imgs/providers/pexels-mikhail-nilov-6930549.jpg";

const AboutUs = () => {
  return (
    <div className="">
      <div
        className="h-[350px] sm:h-[500px] relative flex items-center justify-center"
        style={{
          background: `url('${abouthero.src}') center`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-marron-opacity-claire"></div>
        <div className="container px-4 sm:px-0 z-[100]">
          <div className="w-fit flex flex-col text-shadow-custom m-[0_auto] text-white capitalize font-[500] text-[25px] md:text-[35px] after:p-1 after:w-1/2 after:rounded-md after:bg-white">
            à propos de easy reserve
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container px-4 sm:px-0">
          <div className="section-title">
            <div className="title">
              Relier les individus par le service, un projet à la fois.
            </div>
            <div className="section-content max-w-[860px] md:text-[18px] lg:text-[20px] font-Quicksand text-center">
              " Nous croyons fermement que pour chaque tâche à accomplir, il y a
              quelqu'un prêt à répondre à l'appel. Que ce soit pour une
              réparation urgente ou un projet planifié, notre plateforme
              rassemble ceux qui ont besoin d'aide et ceux qui sont prêts à
              offrir leur expertise. Ensemble, nous créons des connexions
              significatives qui enrichissent la vie de chacun "
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
