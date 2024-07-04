"use client";
import { services } from "@/ui/testDatas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { notFound } from "next/navigation";
import SelectTaskerForm from "@/components/forms/SelectTaskerForm";
import ServiceForm from "@/components/forms/ServiceForm";
import ValidateReservation from "@/components/forms/ValidateReservation";
import smallBgImg from "@/imgs/demenagementSmall.jpeg";
const ServicePage = ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id, 10);
  const service = services.find((service) => service.id === id);

  if (!service) {
    notFound();
  }

  const [currentStep, setCurrentStep] = useState(1);
  const [step1Validated, setStep1Validated] = useState(false);
  const [step2Validated, setStep2Validated] = useState(false);
  const [step3Validated, setStep3Validated] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    address: "",
    problemDescription: "",
    tasker: "",
    agreement: "",
  });

  const handleNextStep = (stepData: any) => {
    setFormData((prevData) => ({ ...prevData, ...stepData }));
    if (currentStep === 1 && !step1Validated) return;
    if (currentStep === 2 && !step2Validated) return;
    if (currentStep === 3 && !step3Validated) return;
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const steps = [
    {
      id: 1,
      title: "Recherche et identification du service",
      description: "Date d'intervention, adresse, description du problème",
      component: (
        <ServiceForm
          handleNextStep={handleNextStep}
          setStep1Validated={setStep1Validated}
        />
      ),
    },
    {
      id: 2,
      title: "Sélection du tasker",
      description: "Choisissez un tasker pour effectuer le service",
      component: (
        <SelectTaskerForm
          handleNextStep={(stepData) => {
            setFormData((prevData) => ({ ...prevData, ...stepData }));
            setCurrentStep(3);
          }}
        />
      ),
    },
    {
      id: 3,
      title: "Validation de la réservation",
      description: "Chat avec le tasker et trouvez un terrain d'entente",
      component: (
        <ValidateReservation
          handleNextStep={(stepData) => {
            setFormData((prevData) => ({ ...prevData, ...stepData }));
          }}
        />
      ),
    },
  ];
  console.log("form data is: ", formData);

  return (
    <div className="">
      <div
        className={`service-reserve-present-bg h-[200px] sm:h-[280px] md:h-[350px] lg:h-[380px]`}
        style={{
          background: `url('${service.img.src}') center`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className=" h-full w-full gap-1 bg-marron-opacity-claire text-white flex items-center justify-center font-Quicksand text-[35px] font-[700]">
          {service.title} <FontAwesomeIcon icon={service.icon} />
        </div>
      </div>
      <div className=" py-4" id="service">
        <div className="container px-4 sm:px-0">
          <div className="mb-6">
            <div className="font-Quicksand capitalize text-[19px] md:text-[25px] font-[600] text-left flex">
              Service de {service.title}
            </div>
            <div className="font-Quicksand text-[15px]">
              {service.description}
            </div>
          </div>
          <div className="feedback">
            <div className="progress-tracked-bar relative bg-slate-300 h-[6px] w-full rounded-[6px]">
              <div className="step-tracking-container grid grid-cols-3 mt-[-9px]">
                {steps.map((step: any, index: number) => (
                  <div
                    className={`step relative h-[6px] flex justify-end z-20 ${
                      currentStep === index + 1 || currentStep > index + 1
                        ? "bg-midnight-blue"
                        : ""
                    } `}
                    key={index}
                  >
                    <div
                      className={` ${
                        currentStep === index + 1 || currentStep > index + 1
                          ? "border-midnight-blue"
                          : ""
                      } ${
                        currentStep > index + 1
                          ? " bg-white text-midnight-blue"
                          : "bg-slate-300"
                      }  step_number absolute top-[-7px] text-[14px] flex border-solid border-[1px] h-[20px] w-[20px] rounded-[50%] justify-center items-center`}
                    >
                      {step.id}
                    </div>
                  </div>
                ))}
              </div>
              <div className="step absolute z-[100] left-[-5px] top-[-7px]">
                <div className="step_number border-midnight-blue text-[14px] text-midnight-blue bg-white flex border-solid border-[1px] h-[20px] w-[20px] rounded-[50%] justify-center items-center">
                  0
                </div>
              </div>
            </div>
          </div>
          <div className="steps-content mt-5">
            {steps.map((step: any, index: number) => (
              <div
                key={index}
                className={`${currentStep != index + 1 ? "hidden" : ""}`}
              >
                {step.component}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
