"use client";
import { AppDispatch, RootState } from "@/redux/store";
import { IService, IServiceOption, Reservation } from "@/ui/types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../ui/LoadingSpinner";
import { fetchServiceOptions } from "@/redux/slices/servicesOptionsSlice";
import "flatpickr/dist/flatpickr.min.css";
import Flatpickr from "react-flatpickr";

const ServiceForm = ({
  handleNextStep,
  service,
}: {
  handleNextStep: (data: Reservation) => void;
  service: IService;
  data: any;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(false);
  const servicesOptions = useSelector(
    (state: RootState) => state.servicesOptions.serviceOptions
  );
  const [formData, setFormData] = useState<{
    date: string;
    adress: string;
    taskDescription: string;
    options: string[];
    jobType: string;
    wever: string;
  }>({
    date: "",
    adress: "",
    taskDescription: "",
    options: [],
    jobType: "",
    wever: "",
  });
  const [formDataErrors, setFormDataErrors] = useState({
    date: "",
    adress: "",
    taskDescription: "",
    jobType: "",
    options: "",
    wever: "",
  });

  useEffect(() => {
    dispatch(fetchServiceOptions());
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLInputElement
    >
  ) => {
    const { name, value, type } = e.target;
    // Assurez-vous que e.target est un HTMLInputElement pour accéder à la propriété checked
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;

      setFormData((prevData) => {
        const updatedOptions = checked
          ? [...prevData.options, value] // Ajouter l'option si elle est cochée
          : prevData.options.filter((opt) => opt !== value); // Retirer l'option si elle est décochée

        return { ...prevData, options: updatedOptions };
      });
    } else {
      // Pour les autres types de champs, mettre à jour l'état normalement
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    let errors: any = {};

    if (!formData.adress) {
      isValid = false;
      errors.address = "L'adresse est requise.";
    }

    if (!formData.date) {
      isValid = false;
      errors.date = "La date est requise.";
    }

    if (!formData.taskDescription) {
      isValid = false;
      errors.taskDescription = "La description du besoin est requise.";
    }

    if (!formData.jobType) {
      isValid = false;
      errors.jobType = "Le type de travail est requis.";
    }
    if (!formData.wever) {
      isValid = false;
      errors.wever = "Veuillez choisir le moment !";
    }

    setFormDataErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true); // Simulate API request
      await new Promise((resolve) => setTimeout(resolve, 2000));
      handleNextStep(formData);
      console.log("form data: ", formData);
    }

    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute w-full h-full bg-white-opacity"></div>
      )}
      <form onSubmit={handleSubmit} className="step-form pb-[60px]">
        <div className="step_form_title">
          <div className="title">1- Choisissez et décrivez votre problème</div>
          <div className="sub_title"></div>
        </div>
        <div className="form_content">
          <div className="inputs">
            <div className="champ">
              <label htmlFor="adress">Entrer votre adresse</label>
              <input
                type="text"
                name="adress"
                id="adress"
                value={formData.adress}
                onChange={handleChange}
                className={`${formDataErrors.adress ? "errorMode" : ""}`}
              />
              {formDataErrors.adress && (
                <div className="error">{formDataErrors.adress}</div>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[15px] sm:text-[16px] font-Quicksand capitalize font-[500] text-neutral-600">
                Type de travail
              </label>
              <div
                className={`${
                  formDataErrors.jobType ? "errorMode" : ""
                } flex flex-col items-start rounded-[.3rem] gap-4 border-solid border-gray-300 border-[1px] px-3 py-4`}
              >
                <label className="flex flex-row-reverse gap-3 text-[14px] sm:text-[16px] capitalize font-Quicksand w-fit cursor-pointer">
                  Petit (travaux de courte durée)
                  <input
                    type="radio"
                    name="jobType"
                    value="Petit"
                    className="w-[20px]"
                    checked={formData.jobType === "Petit"}
                    onChange={handleChange}
                  />
                </label>
                <label className="flex flex-row-reverse gap-3 text-[14px] sm:text-[16px] capitalize font-Quicksand w-fit cursor-pointer">
                  Moyen (travaux de durée moyenne)
                  <input
                    type="radio"
                    name="jobType"
                    value="Moyen"
                    className="w-[20px]"
                    checked={formData.jobType === "Moyen"}
                    onChange={handleChange}
                  />
                </label>
                <label className="flex flex-row-reverse gap-3 text-[14px] sm:text-[16px] capitalize font-Quicksand w-fit cursor-pointer">
                  Grand (travaux de longue durée)
                  <input
                    type="radio"
                    name="jobType"
                    value="Grand"
                    className="w-[20px]"
                    checked={formData.jobType === "Grand"}
                    onChange={handleChange}
                  />
                </label>
              </div>
              {formDataErrors.jobType && (
                <div className="error">{formDataErrors.jobType}</div>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[15px] sm:text-[16px] font-Quicksand capitalize font-[500] text-neutral-600">
                Sélectionnez vos options ( optionnel )
              </label>
              <div className="flex flex-col items-start rounded-[.3rem] gap-4 border-solid border-gray-300 border-[1px] px-3 py-4">
                {servicesOptions
                  .filter((option: IServiceOption) =>
                    service.options.includes(option._id)
                  )
                  .map((option: IServiceOption, index: number) => (
                    <label
                      key={index}
                      className="flex flex-row-reverse gap-3 text-[14px] sm:text-[16px] capitalize font-Quicksand w-fit cursor-pointer"
                    >
                      {option.name}
                      <input
                        type="checkbox"
                        name="options"
                        value={option._id}
                        checked={
                          formData.options?.includes(option._id!) /*  ||
                          reservation.options.includes(option._id) */
                        }
                        onChange={handleChange}
                        className="w-[20px]"
                      />
                    </label>
                  ))}

                {/* <label className="flex flex-row-reverse gap-3 text-[14px] sm:text-[16px] capitalize font-Quicksand w-fit cursor-pointer">
                  autres
                  <input
                    type="checkbox"
                    name="options"
                    value={"autres"}
                    checked={formData.options.includes("autres")}
                    onChange={handleChange}
                    className="w-[20px]"
                  />
                </label> */}
              </div>
            </div>
            {/* <div className="champ">
              <label htmlFor="date">Choisir la date d'intervention</label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="10 / 08 / 2024"
                className={`${formDataErrors.date ? "errorMode" : ""}`}
              />
              {formDataErrors.date && (
                <div className="error">{formDataErrors.date}</div>
              )}
            </div> */}
            <div className="champ">
              <label htmlFor="date">Choisir la date d'intervention</label>
              <Flatpickr
                value={formData.date}
                onChange={(selectedDates) => {
                  setFormData((prevData) => ({
                    ...prevData,
                    date: selectedDates[0]
                      ? selectedDates[0].toISOString().split("T")[0]
                      : "", // Format the date as needed
                  }));
                }}
                options={{
                  dateFormat: "d / m / Y",
                  allowInput: true,
                }}
                placeholder="10 / 08 / 2024"
                className={`date-picker ${
                  formDataErrors.date ? "errorMode" : ""
                }`}
              />
              {formDataErrors.date && (
                <div className="error">{formDataErrors.date}</div>
              )}
            </div>
            <div className="champ">
              <label htmlFor="problemDescription">Description du besoin</label>
              <textarea
                name="taskDescription"
                id="taskDescription"
                cols={30}
                rows={5}
                value={formData.taskDescription}
                onChange={handleChange}
                className={`${
                  formDataErrors.taskDescription ? "errorMode" : ""
                }`}
              ></textarea>
              {formDataErrors.taskDescription && (
                <div className="error">{formDataErrors.taskDescription}</div>
              )}
            </div>
            <div className="times relative flex gap-8">
              <label htmlFor="morning" className=" flex gap-2 font-Quicksand">
                Matin
                <input
                  type="radio"
                  name="wever"
                  value="morning"
                  id="morning"
                  checked={formData.wever === "morning"}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="evening" className="flex gap-2 font-Quicksand">
                Soir
                <input
                  type="radio"
                  name="wever"
                  value="evening"
                  id="evening"
                  checked={formData.wever === "evening"}
                  onChange={handleChange}
                />
              </label>
              {formDataErrors.wever && (
                <div className="error absolute bottom-[-15px]">
                  {formDataErrors.wever}
                </div>
              )}
            </div>
          </div>
          <button className="btn-primary md:min-w-[200px] font-Quicksand mt-4 px-4 py-2n w-fit bg-blue-500 text-white">
            {isLoading ? (
              <div className="flex gap-5 font-Quicksand items-center">
                patientez... <LoadingSpinner />
              </div>
            ) : (
              "Suivant"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;
