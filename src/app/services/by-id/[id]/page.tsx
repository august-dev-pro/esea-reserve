"use client";
import React, { useEffect, useRef, useState } from "react";
import SelectTaskerForm from "@/components/forms/SelectTaskerForm";
import ServiceForm from "@/components/forms/ServiceForm";
import ValidateReservation from "@/components/forms/ValidateReservation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { getImageUrl } from "@/ui/fonctions";
import IconGenerate from "@/components/utils/IconGenerate";
import { fetchServices } from "@/redux/slices/serviceSlice";
import {
  addReservation,
  getTempReservation,
  saveTempReservation,
} from "@/redux/slices/reservationSlice";
import Link from "next/link";

const ServicePage = ({ params }: { params: { id: string } }) => {
  // localStorage.removeItem("tempReservation");
  const id = params.id;
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);
  const services = useSelector((state: RootState) => state.service.services);
  const isServicesLoading = useSelector(
    (state: RootState) => state.service.loading
  );
  const servicesError = useSelector((state: RootState) => state.service.error);
  const service = services.find((service) => service._id === id);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [tempReservation, setTempReservation] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const reserveHeadRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    adress: "",
    options: [],
    taskDescription: "",
    taskerId: "",
    jobType: "",
    wever: "",
    userId: user?.userId,
    serviceId: service?._id,
    service: service?.title,
  });
  const handleNextStep = (stepData: any) => {
    setFormData((prevData) => ({
      ...prevData,
      ...stepData,
      userId: user?.userId,
      serviceId: service?._id,
      service: service?.title,
    }));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const confirmeReservation = async (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      userId: user?.userId,
      serviceId: service?._id,
      service: service?.title,
    }));

    console.log("submeted data: ", data);

    if (!user) {
      saveTempReservation(data);
      window.location.href = "/login";
      localStorage.setItem(
        "redirectAfterLogin",
        `/services/by-id/${service?._id}`
      );
    } else {
      localStorage.removeItem("redirectAfterLogin");
      try {
        const response = await dispatch(addReservation(data)).unwrap();
        console.log("response: ", response);
        setSuccessMessage(response.message); // Utiliser le message renvoyé par l'API
      } catch (error: any) {
        console.error("Erreur lors de la création de la réservation: ", error);
        const errorMessage = error.message.includes("Network Error")
          ? "Vérifiez votre connexion internet et réessayez."
          : "Une erreur s'est produite, veuillez réessayer.";
        setErrorMessage(errorMessage);
      }
    }
  };

  const handleEditStep = (step: number) => {
    setCurrentStep(step);
  };

  const steps = [
    {
      id: 1,
      title: "Recherche et identification du service",
      description: "Date d'intervention, adresse, description du problème",
      component: (
        <ServiceForm
          handleNextStep={handleNextStep}
          data={formData}
          service={service!}
        />
      ),
    },
    {
      id: 2,
      title: "Sélection du tasker",
      description: "Choisissez un tasker pour effectuer le service",
      component: <SelectTaskerForm handleNextStep={handleNextStep} />,
    },
    {
      id: 3,
      title: "Validation de la réservation",
      description: "Chat avec le tasker et trouvez un terrain d'entente",
      component: (
        <ValidateReservation
          tempReservation={tempReservation}
          formData={formData}
          handleNextStep={handleNextStep}
          handleEditStep={handleEditStep}
          confirmeReservation={confirmeReservation}
        />
      ),
    },
  ];

  useEffect(() => {
    dispatch(fetchServices());
    const tempReservation = getTempReservation();
    console.log("tempReservation: ", tempReservation);

    if (tempReservation) {
      setTempReservation(tempReservation);
      setCurrentStep(3); // Only set current step inside useEffect
    }
    const handleScroll = () => {
      if (reserveHeadRef.current) {
        const scrollY = window.scrollY;

        if (scrollY >= 300) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  if (isServicesLoading) {
    return <div>Loading...</div>;
  }

  if (servicesError) {
    return <div>Error loading services, please try again later.</div>;
  }

  if (!service) {
    return <div>Aucun service trouvé</div>;
  }

  return (
    <div className="">
      <div
        className={`service-reserve-present-bg h-[200px] sm:h-[280px] md:h-[350px] lg:h-[380px]`}
        style={{
          background: `url('${getImageUrl(service.frontImage)}') center`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className=" h-full w-full gap-1 bg-marron-opacity-claire text-white flex items-center justify-center font-Quicksand text-[35px] font-[700] md:text-[45px] md:font-[800]">
          {service.title} <IconGenerate iconName={service.icon} />
        </div>
      </div>
      <div className=" py-4" id="service">
        <div className="flex flex-col gap-10">
          <div
            ref={reserveHeadRef}
            className={`reserve-head-croll w-full py-5  bg-white ${
              isFixed
                ? "fixed top-[40px] md:top-[50px] lg:top-[65px] w-ful z-50 shadow-md"
                : ""
            }`}
          >
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
                    <div className="step_number border-midnight-blue text-[14px] text-midnight-blue bg-midnight-blue flex border-solid border-[1px] h-[20px] w-[20px] rounded-[50%] justify-center items-center"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {successMessage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
              <div className="bg-white p-8 rounded-xl shadow-2xl text-center transform transition-transform duration-500 scale-95 max-w-lg">
                <h1 className="text-4xl font-extrabold font-Quicksand mb-4 text-gray-800">
                  Réservation réussie!
                </h1>
                <p className="text-lg mb-6 font-Quicksand text-green-600 font-medium">
                  {successMessage}
                </p>
                <div className="flex justify-center gap-4 mt-6">
                  <Link
                    href="/reservations"
                    className="text-white bg-gradient-to-r from-gray-500 to-gray-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all duration-300"
                  >
                    Retour à l'accueil
                  </Link>{" "}
                  <Link
                    href="/account/reservations"
                    className="text-white bg-gradient-to-r from-sky-500 to-sky-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all duration-300"
                  >
                    Voir mes réservations
                  </Link>
                </div>
              </div>
            </div>
          )}
          {errorMessage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
              <div className="bg-white p-8 rounded-xl shadow-2xl text-center transform transition-transform duration-500 scale-95 max-w-lg">
                <h1 className="text-4xl font-extrabold font-Quicksand mb-4 text-red-600">
                  La réservation a échoué
                </h1>
                <p className="text-lg mb-6 text-gray-700 font-medium">
                  {errorMessage}
                </p>
                <div className="flex justify-center gap-4 mt-6">
                  <Link
                    href="/"
                    className="text-white bg-gradient-to-r from-red-500 to-red-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all duration-300"
                  >
                    Retour à l'accueil
                  </Link>
                  <Link
                    href="/account/reservations"
                    className="text-white bg-gradient-to-r from-sky-500 to-sky-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all duration-300"
                  >
                    Voir mes réservations
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div
            className={` ${
              isFixed ? " pt-[160px]" : "mt-5"
            } steps-content  container px-4 sm:px-0`}
          >
            {steps.map((step: any, index: number) => (
              <div
                key={index}
                className={`${currentStep !== index + 1 ? "hidden" : ""}`}
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
