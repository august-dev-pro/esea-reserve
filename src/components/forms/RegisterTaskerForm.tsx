import { addUser } from "@/redux/slices/userSlice";
import { AppDispatch } from "@/redux/store";
import { services } from "@/ui/testDatas";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LoadingSpinner from "../ui/LoadingSpinner";
import { login } from "@/redux/slices/authSlice";

const RegisterTaskerForm = ({
  handleStartRegister,
  setShowModalV,
}: {
  handleStartRegister: (data: any) => void;
  setShowModalV: () => void;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [registrationError, setRegistrationError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors: any = {};

    if (!data.firstName) {
      newErrors.firstName = "First name is required";
      valid = false;
    }
    if (!data.lastName) {
      newErrors.lastName = "Last name is required";
      valid = false;
    }
    if (!data.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }
    if (!data.password) {
      newErrors.password = "Password is required";
      valid = false;
    }
    if (!data.phone) {
      newErrors.phone = "Phone number is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  /*  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true); // Simulate API request
      try {
        const action = await dispatch(addUser(data));

        if (addUser.fulfilled.match(action)) {
          // Connexion réussie
          setData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phone: "",
          });

          // Redirection après un délai pour s'assurer que le state est bien mis à jour
          window.location.href = "/providers/completedSpecifics";
        } else {
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
      } catch (error) {
        console.error("Erreur lors de la soumission du formulaire:", error);
        setRegistrationError("Erreur de réseau ou serveur.");
      }
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }; */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true); // Simulate API request
      try {
        const action = await dispatch(addUser({ ...data, role: "tasker" }));

        if (addUser.fulfilled.match(action)) {
          await dispatch(
            login({
              email: data.email,
              password: data.password,
            })
          );
          setData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phone: "",
          });
          window.location.href = "/providers/completedSpecifics";
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
      } catch (error) {
        console.error("Erreur lors de la soumission du formulaire:", error);
        setRegistrationError("Erreur de réseau ou serveur.");
      }
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg section Z-[100] flex justify-center top-0 left-0 right-0 bottom-0 bg-white-opacity-plus ">
      <div className="container px-4 sm:px-0">
        <form
          onSubmit={handleSubmit}
          className="become-a-tasker form w-full h-fit step-form bg-white p-3 md:p-6 shadow-custom-form relative max-w-[400px] md:max-w-[550px]"
        >
          {isLoading && (
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-white opacity-[0.5]"></div>
          )}
          <FontAwesomeIcon
            className="absolute right-[15px] hover:text-midnight-blue cursor-pointer"
            icon={faClose}
            onClick={setShowModalV}
          />
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
              <div className="flex flex-col md:flex-row justify-between">
                <div className="champ">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={data.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 font-Quicksand text-[13px]">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="champ">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={data.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 font-Quicksand text-[13px]">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>
              <div className="champ">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
                  onChange={handleChange}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-500 font-Quicksand text-[13px]">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="champ">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={data.password}
                  onChange={handleChange}
                  className={errors.password ? "border-red-500" : ""}
                />
                {errors.password && (
                  <p className="text-red-500 font-Quicksand text-[13px]">
                    {errors.password}
                  </p>
                )}
              </div>
              <div className="champ">
                <label htmlFor="domaine">Domaine</label>
                <select
                  name="domaine"
                  id="domaine"
                  onChange={handleChange}
                  className="p-3 font-[400] text-gray-600 bg-white border rounded-[5px] border-gray-300"
                >
                  {services.map((service: any, index: number) => (
                    <option
                      className="font-[300]"
                      key={index}
                      value={service.title}
                    >
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="champ">
                <div className="ml-[105px]">
                  <label htmlFor="phone" className="">
                    Phone Number
                  </label>
                </div>
                <div className="w-full flex items-center gap-2 ">
                  <div className="flex gap-1 font-[300]">
                    <div className="drapeau flex h-fit">
                      <div className="orange h-[25px] w-[20px] bg-orange-500"></div>
                      <div className="blanc h-[25px] w-[20px]"></div>
                      <div className="vert h-[25px] w-[20px] bg-green-500"></div>
                    </div>
                    +225
                  </div>
                  <input
                    type="text"
                    className={`w-full ${errors.phone ? "border-red-500" : ""}`}
                    name="phone"
                    id="phone"
                    value={data.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className="text-red-500 font-Quicksand text-[13px]">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-end pt-4 w-full">
                <button type="submit" className="btn-primary w-fit ">
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

export default RegisterTaskerForm;
