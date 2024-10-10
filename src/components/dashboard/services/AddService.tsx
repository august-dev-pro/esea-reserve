"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchServiceOptions } from "@/redux/slices/servicesOptionsSlice";
import { setIService } from "@/ui/types";
import { addService } from "@/redux/slices/serviceSlice";

const ServiceForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Récupération des options depuis Redux
  const serviceOptions = useSelector(
    (state: RootState) => state.servicesOptions.serviceOptions
  );
  const isOptionLoading = useSelector(
    (state: RootState) => state.servicesOptions.loading
  );
  const optionError = useSelector(
    (state: RootState) => state.servicesOptions.error
  );
  const isServiceLoading = useSelector(
    (state: RootState) => state.service.loading
  );
  const serviceError = useSelector((state: RootState) => state.service.error);

  // État du formulaire
  const [formData, setFormData] = useState<setIService>({
    title: "",
    frontImage: null,
    description: "",
    icon: "",
    points: [],
    options: [],
    comments: [],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchServiceOptions()); // Récupérer les options au chargement
  }, [dispatch]);

  // Validation du formulaire
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title) newErrors.title = "Le titre est obligatoire.";
    if (!formData.frontImage) newErrors.frontImage = "L'image est obligatoire.";
    if (!formData.description)
      newErrors.description = "La description est obligatoire.";
    if (!formData.icon) newErrors.icon = "L'icône est obligatoire.";
    if (formData.points.length === 0)
      newErrors.points = "Veuillez ajouter au moins un point.";
    if (formData.options.length === 0)
      newErrors.options = "Veuillez sélectionner au moins une option.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Gestion des changements dans les champs de formulaire
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Vérifie si l'élément est un input de type fichier
    if (e.target instanceof HTMLInputElement && e.target.type === "file") {
      setFormData({ ...formData, [e.target.name]: e.target.files?.[0] });
    } else {
      // Sinon, traite cela comme un champ texte ou textarea
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, frontImage: e.target.files[0] });
    }
  };

  const handlePointsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, points: e.target.value.split(",") });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        options: [...formData.options, value],
      });
    } else {
      setFormData({
        ...formData,
        options: formData.options.filter((option) => option !== value),
      });
    }
  };

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // Return early if validation fails
    }

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("frontImage", formData.frontImage as Blob);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("icon", formData.icon);
    formData.points.forEach((point) => {
      formDataToSend.append("points", point); // No need to JSON.stringify individual options
    });
    formData.options.forEach((option) => {
      formDataToSend.append("options", option); // No need to JSON.stringify individual options
    });

    setIsLoading(true);

    const response = await dispatch(addService(formDataToSend));

    if (addService.fulfilled.match(response)) {
      setFormData({
        title: "",
        frontImage: null,
        description: "",
        icon: "",
        points: [],
        options: [],
        comments: [],
      });
      setSuccessMessage("Le service a bien été ajouté");
    } else {
      setErrors({
        apiError: `Erreur lors de la création du service: ${
          response.error.message || "Erreur inconnue"
        }`,
      });
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" max-w-[700px] mx-auto bg-white shadow-md rounded-md form"
    >
      {successMessage && <div className="">{successMessage}</div>}
      <div className="form-title">
        <h2 className="text-2xl font-bold mb-4">Ajouter un nouveau service</h2>
        {successMessage && (
          <p className="text-green-600 mb-4">{successMessage}</p>
        )}
        {errors.apiError && (
          <div className="text-red-600 mb-4">{errors.apiError}</div>
        )}
      </div>
      <div className="form-content">
        <div className="flex flex-col gap-5">
          {/* Champ Titre */}
          <div className="input">
            <label className="block text-gray-700">Titre du service</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`md:h-[40px] ${errors.title ? "errorMode" : ""} `}
            />
            {errors.title && (
              <p className="text-red-600 font-Quicksand">{errors.title}</p>
            )}
          </div>
          {/* Champ Image principale */}
          <div className="input">
            <label className="block text-gray-700">Image principale</label>
            <input
              type="file"
              name="frontImage"
              onChange={handleChange}
              className={`md:h-[40px] ${errors.frontImage ? "errorMode" : ""}`}
            />
            {errors.frontImage && (
              <p className="text-red-600 font-Quicksand">{errors.frontImage}</p>
            )}
          </div>
          {/* Champ Description */}
          <div className="input">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={`md:h-[150px] ${
                errors.description ? "errorMode" : ""
              }`}
            />
            {errors.description && (
              <p className="text-red-600 font-Quicksand">
                {errors.description}
              </p>
            )}
          </div>
          {/* Champ Icône */}
          <div className="input">
            <label className="block text-gray-700">Icône</label>
            <input
              type="text"
              name="icon"
              value={formData.icon}
              onChange={handleChange}
              className={`md:h-[40px] ${errors.title ? "errorMode" : ""}`}
            />
            {errors.icon && (
              <p className="text-red-600 font-Quicksand">{errors.icon}</p>
            )}
          </div>
          {/* Champ Points */}
          <div className="input">
            <label className="block text-gray-700">
              Points (séparés par des virgules)
            </label>
            <input
              type="text"
              name="points"
              value={formData.points.join(",")}
              onChange={handlePointsChange}
              className={`md:h-[40px] ${errors.points ? "errorMode" : ""}`}
            />
            {errors.points && (
              <p className="text-red-600 font-Quicksand">{errors.points}</p>
            )}
          </div>
          {/* Champ Options */}
          <div className="input">
            <label className="block text-gray-700">Options</label>
            {isOptionLoading ? (
              <p>Chargement des options...</p>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                {serviceOptions.map((option) => (
                  <div key={option._id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={option._id}
                      value={option._id}
                      checked={formData.options.includes(option._id)}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    <label htmlFor={option._id}>{option.name}</label>
                  </div>
                ))}
              </div>
            )}
            {errors.options && (
              <p className="text-red-600 font-Quicksand">{errors.options}</p>
            )}
            {optionError && (
              <p className="text-red-600 font-Quicksand">{optionError}</p>
            )}
          </div>
        </div>
        {/* Bouton de soumission */}
        <button
          type="submit"
          className=" btn-primary w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          disabled={isLoading}
        >
          {isLoading ? "Ajout en cours..." : "Ajouter le service"}
        </button>
        {errors.form && (
          <p className="text-red-600 font-Quicksand mt-2">{errors.form}</p>
        )}
      </div>
    </form>
  );
};

export default ServiceForm;
