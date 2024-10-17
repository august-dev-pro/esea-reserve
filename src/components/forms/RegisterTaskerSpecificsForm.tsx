import { addTaskerSpecifics } from "@/redux/slices/TaskerSpecificsSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../ui/LoadingSpinner";
import { fetchServiceOptions } from "@/redux/slices/servicesOptionsSlice";
import { fetchServices } from "@/redux/slices/serviceSlice";
const RegisterTaskerSpecificsForm = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const services = useSelector((state: RootState) => state.service.services);
  const servicesOptions = useSelector(
    (state: RootState) => state.servicesOptions.serviceOptions
  );

  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(false);

  const [registrationError, setRegistrationError] = useState("");

  const [formData, setFormData] = useState<{
    domaine: string;
    experienceYears: number;
    bio: string;
    location: string;
    availability: string[];
    serviceOfferedOptions: string[];
  }>({
    domaine: "",
    experienceYears: 0,
    bio: "",
    location: "",
    availability: [],
    serviceOfferedOptions: [],
  });

  const [errors, setErrors] = useState<{
    domaine: string;
    experienceYears: string;
    bio: string;
    location: string;
    availability: string;
    serviceOfferedOptions: string;
  }>({
    domaine: "",
    experienceYears: "",
    bio: "",
    location: "",
    availability: "",
    serviceOfferedOptions: "",
  });

  const handleAvailabilityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setFormData((prevData) => {
      const availability = prevData.availability.includes(value)
        ? prevData.availability.filter((day) => day !== value) // Remove if already selected
        : [...prevData.availability, value]; // Add if not selected
      return { ...prevData, availability };
    });
  };

  const handleServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormData((prevData) => {
      const serviceOfferedOptions = prevData.serviceOfferedOptions.includes(
        value
      )
        ? prevData.serviceOfferedOptions.filter((service) => service !== value) // Remove if already selected
        : [...prevData.serviceOfferedOptions, value]; // Add if not selected
      return { ...prevData, serviceOfferedOptions };
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear error on change
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.domaine) newErrors.domaine = "Domaine is required.";
    if (!formData.experienceYears)
      newErrors.experienceYears = "Experience years are required.";
    if (!formData.bio) newErrors.bio = "Bio is required.";
    if (!formData.location) newErrors.location = "Location is required.";
    if (formData.availability.length < 1)
      newErrors.availability = "availability is required.";
    if (formData.serviceOfferedOptions.length < 1)
      newErrors.serviceOfferedOptions = "serviceOfferedOptions is required.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true); // Simulate API request
      try {
        if (user) {
          const action = await dispatch(
            addTaskerSpecifics({ ...formData, user: user.userId })
          );

          if (addTaskerSpecifics.fulfilled.match(action)) {
            // Connexion réussie
            setFormData({
              domaine: "",
              experienceYears: 1,
              bio: "",
              location: "",
              availability: [],
              serviceOfferedOptions: [],
            });

            // Redirection
            window.location.href = "/";
          } else {
            console.log("Action failed:", action.error.message);
            switch (action.error.message) {
              case "User already exists":
                setRegistrationError(
                  "Utilisateur existant ! vérifier les infos ou connectez-vous."
                );
                break;
              case "getaddrinfo ENOTFOUND cluster0-shard-00-00.owjdw.mongodb.net":
                setRegistrationError("Vérifiez votre connexion internet.");
                break;
              case "Invalid credentials":
                setRegistrationError("Email ou mot de passe incorrect.");
                break;
              default:
                setRegistrationError("Une erreur inconnue est survenue.");
                break;
            }
          }
        }
      } catch (error) {
        console.error("Erreur lors de la soumission du formulaire:", error);
        setRegistrationError("Erreur de réseau ou serveur.");
      }
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    dispatch(fetchServiceOptions());
    dispatch(fetchServices());
  }, [dispatch]);
  if (!user) {
    localStorage.setItem("redirectAfterLogin", "/providers/completedSpecifics");
    window.location.href = "/login";
    return;
  }

  return (
    <div className="bg section Z-[100] flex justify-center top-0 left-0 right-0 bottom-0 bg-white-opacity-plus">
      <div className="container px-4 sm:px-0">
        <form
          onSubmit={handleSubmit}
          className="become-a-tasker form w-full h-fit step-form bg-white p-3 md:p-6 shadow-custom-form relative max-w-[400px] md:max-w-[550px]"
        >
          {isLoading && (
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-white opacity-[0.5]"></div>
          )}
          <div className="capitalize text-[25px] font-[500] border-b w-fit border-midnight-blue mb-5">
            dévenez un prestataire
          </div>

          <div className="form_content">
            {registrationError && (
              <div className="text-red-600 font-Quicksand">
                {registrationError}
              </div>
            )}
            <div className="inputs">
              {/* Domaine Selection */}
              <div className="champ">
                <label htmlFor="domainee">Domainee</label>
                <select
                  name="domaine"
                  id="domainee"
                  value={formData.domaine}
                  onChange={handleChange}
                  className="p-3 font-[400] text-gray-600 bg-white border rounded-[5px] border-gray-300"
                >
                  <option value="">Select a domaine</option>
                  {services.map((service: any, index: number) => (
                    <option key={index} value={service._id}>
                      {service.title}
                    </option>
                  ))}
                </select>
                {errors.domaine && (
                  <p className="text-red-600 text-[13px] font-Quicksand">
                    {errors.domaine}
                  </p>
                )}
              </div>

              {/* Experience Years */}
              <div className="champ">
                <label htmlFor="experienceYears">Years of Experience</label>
                <input
                  type="number"
                  name="experienceYears"
                  id="experienceYears"
                  value={formData.experienceYears}
                  onChange={handleChange}
                  className="p-3 font-[400] text-gray-600 bg-white border rounded-[5px] border-gray-300"
                />
                {errors.experienceYears && (
                  <p className="text-red-600 text-[13px] font-Quicksand">
                    {errors.experienceYears}
                  </p>
                )}
              </div>

              {/* Bio Field */}
              <div className="champ">
                <label htmlFor="bio">Bio</label>
                <textarea
                  name="bio"
                  id="bio"
                  rows={4}
                  value={formData.bio}
                  onChange={handleChange}
                  className="p-2 w-full border border-gray-300 rounded-[5px]"
                />
                {errors.bio && (
                  <p className="text-red-600 text-[13px] font-Quicksand">
                    {errors.bio}
                  </p>
                )}
              </div>

              {/* Location Field */}
              <div className="champ">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="p-3 font-[400] text-gray-600 bg-white border rounded-[5px] border-gray-300"
                />
                {errors.location && (
                  <p className="text-red-600 text-[13px] font-Quicksand">
                    {errors.location}
                  </p>
                )}
              </div>

              {/* Availability Field (Checkboxes) */}
              <div className="champ">
                <label>Availability (Days)</label>
                <div className="p-3 bg-white border rounded-[5px] border-gray-300">
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ].map((day, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={day}
                        name="availability"
                        value={day}
                        checked={formData.availability.includes(day)}
                        onChange={handleAvailabilityChange}
                        className="mr-2"
                      />
                      <label htmlFor={day}>{day}</label>
                    </div>
                  ))}
                </div>
                {errors.availability && (
                  <p className="text-red-600 text-[13px] font-Quicksand">
                    {errors.availability}
                  </p>
                )}
              </div>

              {/* Services Offered Field (Checkboxes) */}
              <div className="champ">
                <label>Services Offered</label>
                <div className="p-3 bg-white border rounded-[5px] border-gray-300">
                  {servicesOptions.map((service: any, index: number) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={service._id}
                        name="serviceOfferedOptions"
                        value={service._id}
                        checked={formData.serviceOfferedOptions.includes(
                          service._id
                        )}
                        onChange={handleServiceChange}
                        className="mr-2"
                      />
                      <label htmlFor={service._id}>{service.name}</label>
                    </div>
                  ))}
                </div>
                {errors.serviceOfferedOptions && (
                  <p className="text-red-600 text-[13px] font-Quicksand">
                    {errors.serviceOfferedOptions}
                  </p>
                )}
              </div>
              {/* Submit Button */}
              <div className="flex justify-end pt-4 w-full">
                <button type="submit" className="btn-primary w-fit">
                  Confirmer {isLoading && <LoadingSpinner />}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterTaskerSpecificsForm;
