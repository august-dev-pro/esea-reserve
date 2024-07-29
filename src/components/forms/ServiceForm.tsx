"use client";
import { updateReservation } from "@/redux/reservationSlice";
import { RootState } from "@/redux/store";
import { services } from "@/ui/testDatas";
import { Service, ServiceOption } from "@/ui/types";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ServiceForm = ({
  handleNextStep,
  service,
}: {
  handleNextStep: (data: {
    date: string;
    address: string;
    option: string[];
    problemDescription: string;
    jobType: string;
    wever: string;
  }) => void;
  service: Service;
  data: any;
}) => {
  const [formData, setFormData] = useState({
    date: "",
    address: "",
    problemDescription: "",
    option: [],
    jobType: "",
    wever: "",
  });
  const [formDataErrors, setFormDataErrors] = useState({
    date: "",
    address: "",
    problemDescription: "",
    jobType: "",
    option: "",
    wever: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLInputElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let isValid = true;
    let errors: any = {};

    if (!formData.address) {
      isValid = false;
      errors.address = "L'adresse est requise.";
    }

    if (!formData.date) {
      isValid = false;
      errors.date = "La date est requise.";
    }

    if (!formData.problemDescription) {
      isValid = false;
      errors.problemDescription = "La description du besoin est requise.";
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
      handleNextStep(formData);
    }
  };

  const reservation = useSelector((state: RootState) => state.reservation);

  const dispatch = useDispatch();

  const handleCheckboxChange = (optionTitle: string, checked: boolean) => {
    if (checked) {
      // Ajouter l'option au tableau
      dispatch(
        updateReservation({
          option: [...reservation.option, optionTitle],
        })
      );
    } else {
      // Retirer l'option du tableau
      dispatch(
        updateReservation({
          option: reservation.option.filter((title) => title !== optionTitle),
        })
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="step-form">
      <div className="step_form_title">
        <div className="title">1- Choisissez et décrivez votre problème</div>
        <div className="sub_title"></div>
      </div>
      <div className="form_content">
        <div className="inputs">
          <div className="champ">
            <label htmlFor="address">Entrer votre adresse</label>
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              className={`${formDataErrors.address ? "errorMode" : ""}`}
            />
            {formDataErrors.address && (
              <div className="error">{formDataErrors.address}</div>
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
              {reservation.option.length > 0
                ? // Affichage des options sélectionnées dans la réservation
                  reservation.option.map(
                    (optionTitle: string, index: number) => (
                      <label
                        key={index}
                        className="flex flex-row-reverse gap-3 text-[14px] sm:text-[16px] capitalize font-Quicksand w-fit cursor-pointer"
                      >
                        {optionTitle}
                        <input
                          type="checkbox"
                          checked={reservation.option.includes(optionTitle)}
                          onChange={(e) =>
                            handleCheckboxChange(optionTitle, e.target.checked)
                          }
                          className="w-[20px]"
                        />
                      </label>
                    )
                  )
                : // Affichage de toutes les options disponibles si aucune option n'est sélectionnée
                  service?.options.map(
                    (option: ServiceOption, index: number) => (
                      <label
                        key={index}
                        className="flex flex-row-reverse gap-3 text-[14px] sm:text-[16px] capitalize font-Quicksand w-fit cursor-pointer"
                      >
                        {option.title}
                        <input
                          type="checkbox"
                          checked={reservation.option.includes(option.title)}
                          onChange={(e) =>
                            handleCheckboxChange(option.title, e.target.checked)
                          }
                          className="w-[20px]"
                        />
                      </label>
                    )
                  )}
            </div>
          </div>
          <div className="champ">
            <label htmlFor="date">Choisir la date d'intervention</label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              className={`${formDataErrors.date ? "errorMode" : ""}`}
            />
            {formDataErrors.date && (
              <div className="error">{formDataErrors.date}</div>
            )}
          </div>
          <div className="champ">
            <label htmlFor="problemDescription">Description du besoin</label>
            <textarea
              name="problemDescription"
              id="problemDescription"
              cols={30}
              rows={5}
              value={formData.problemDescription}
              onChange={handleChange}
              className={`${
                formDataErrors.problemDescription ? "errorMode" : ""
              }`}
            ></textarea>
            {formDataErrors.problemDescription && (
              <div className="error">{formDataErrors.problemDescription}</div>
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
        <button className="btn-primary font-Quicksand mt-4 px-4 py-2n w-fit bg-blue-500 text-white rounded">
          Suivant
        </button>
      </div>
    </form>
  );
};

export default ServiceForm;
