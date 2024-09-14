"use client";
import { addUser } from "@/redux/slices/userSlice";
import { AppDispatch, RootState } from "@/redux/store";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const authState = useSelector((state: RootState) => state.user);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    sexe: "",
  });

  const [formDataErrors, setFormDataErrors] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [registrationError, setRegistrationError] = useState<String>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    let errors: any = {};

    if (!formData.firstName) {
      isValid = false;
      errors.firstName = "Le prénom est requis.";
    }

    if (!formData.lastName) {
      isValid = false;
      errors.lastName = "Le nom est requis.";
    }

    if (!formData.email) {
      isValid = false;
      errors.email = "L'email est requis.";
    }

    if (!formData.phone) {
      isValid = false;
      errors.phone = "Le numéro de téléphone est requis.";
    }

    if (!formData.password) {
      isValid = false;
      errors.password = "Le mot de passe est requis.";
    }

    if (formData.password !== formData.confirmPassword) {
      isValid = false;
      errors.confirmPassword = "Les mots de passe ne correspondent pas.";
    }

    setFormDataErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true); // Simulate API request
      try {
        const { confirmPassword, ...userData } = formData;
        const action = await dispatch(addUser(userData));

        if (addUser.fulfilled.match(action)) {
          // Connexion réussie
          setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
            sexe: "",
          });
          const redirectPath =
            localStorage.getItem("redirectAfterLogin") || "/login";
          localStorage.removeItem("redirectAfterLogin"); // Nettoyer le stockage
          window.location.href = redirectPath;
        } else {
          switch (action.error.message) {
            case "User already exists":
              setRegistrationError(
                "Utilisateur existant ! verifier les infos ou connecter-vous"
              );
              break;
            case "getaddrinfo ENOTFOUND cluster0-shard-00-00.owjdw.mongodb.net":
              setRegistrationError("verifier la connexion internet");
              break;
            case "Invalid credentials":
              setRegistrationError("Email ou mot de passe incorrect");
              break;

            default:
              break;
          }
        }
      } catch (error) {
        console.error("Erreur lors de la soumission du formulaire:", error);
        setRegistrationError("Erreur de réseau ou serveur");
      }
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <div className="text-center pb-[25px]">
        <div className="font-Quicksand py-3 uppercase md:text-[25px] font-[700]">
          Créer un compte
        </div>
        <div className="font-Quicksand md:text-[20px]">
          Inscrivez-vous en créant un compte pour une bonne gestion de contenu
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="signup form w-full sm:w-[450px] md:w-fit lg:w-[] border-solid sm:border-[1px] border-spacing-2"
      >
        <div className="form-title">Inscrivez-vous !!</div>
        <div className="form-content">
          {authState.error && <div className="error">{registrationError}</div>}
          <div className="form_inputs md:grid-cols-2">
            <div className="input">
              <label htmlFor="firstName">Prénom</label>
              <input
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                name="firstName"
                id="firstName"
              />
              {formDataErrors.firstName && (
                <p className="text-red-600 font-[200]">
                  {formDataErrors.firstName}
                </p>
              )}
            </div>
            <div className="input">
              <label htmlFor="lastName">Nom</label>
              <input
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                name="lastName"
                id="lastName"
              />
              {formDataErrors.lastName && (
                <p className="text-red-600 font-[200]">
                  {formDataErrors.lastName}
                </p>
              )}
            </div>
            <div className="input">
              <label htmlFor="email">Email</label>
              <input
                value={formData.email}
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
              />
              {formDataErrors.email && (
                <p className="text-red-600 font-[200]">
                  {formDataErrors.email}
                </p>
              )}
            </div>
            <div className="input">
              <label htmlFor="phone">Numéro de téléphone</label>
              <input
                value={formData.phone}
                onChange={handleChange}
                type="text"
                name="phone"
                id="phone"
              />
              {formDataErrors.phone && (
                <p className="text-red-600 font-[200]">
                  {formDataErrors.phone}
                </p>
              )}
            </div>
            <div className="input">
              <label htmlFor="password">Mot de passe</label>
              <input
                value={formData.password}
                onChange={handleChange}
                type="password"
                name="password"
                id="password"
              />
              {formDataErrors.password && (
                <p className="text-red-600 font-[200]">
                  {formDataErrors.password}
                </p>
              )}
            </div>
            <div className="input">
              <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
              <input
                value={formData.confirmPassword}
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
              />
              {formDataErrors.confirmPassword && (
                <p className="text-red-600 font-[200]">
                  {formDataErrors.confirmPassword}
                </p>
              )}
            </div>
          </div>
          <div className=" flex items-center gap-8 ">
            <label className="font-Quicksand">Sexe : </label>
            <div className="flex gap-4 items-center">
              <label className="flex flex-col font-Quicksand text-[13px]">
                Homme
                <input
                  type="radio"
                  name="sexe"
                  value="male"
                  checked={formData.sexe === "male"}
                  onChange={handleChange}
                />
              </label>
              <label className="flex flex-col font-Quicksand text-[13px]">
                Femme
                <input
                  type="radio"
                  name="sexe"
                  value="female"
                  checked={formData.sexe === "female"}
                  onChange={handleChange}
                />
              </label>
              <label className="flex flex-col font-Quicksand text-[13px]">
                Personnalisé
                <input
                  type="radio"
                  name="sexe"
                  value="other"
                  checked={formData.sexe === "other"}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className="actions">
            <button
              type="submit"
              className="btn-primary font-Quicksand text-[16px]"
              disabled={isLoading}
            >
              {isLoading ? "Chargement..." : "S'inscrire"}
            </button>

            <Link
              href="/login"
              className="capitalize underline hover:text-midnight-blue font-Quicksand"
            >
              Déjà un compte ?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
