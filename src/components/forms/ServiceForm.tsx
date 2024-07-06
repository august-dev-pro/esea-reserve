import React, { useState } from "react";

const ServiceForm = ({
  handleNextStep,
  setStep1Validated,
  data,
}: {
  handleNextStep: (data: {
    date: string;
    address: string;
    problemDescription: string;
    jobType: string;
  }) => void;
  setStep1Validated: any;
  data: any;
}) => {
  const [formData, setFormData] = useState({
    date: "",
    address: "",
    problemDescription: "",
    jobType: "",
  });
  const [formDataErrors, setFormDataErrors] = useState({
    date: "",
    address: "",
    problemDescription: "",
    jobType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

    setFormDataErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setStep1Validated(true);
      handleNextStep(formData);
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
        </div>
        <button className="btn-primary font-Quicksand mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Suivant
        </button>
      </div>
    </form>
  );
};

export default ServiceForm;
