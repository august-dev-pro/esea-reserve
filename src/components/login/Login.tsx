"use client";
import { login } from "@/redux/slices/authSlice";
import { AppDispatch, RootState } from "@/redux/store";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const connectMethodes = [
    { type: "email", label: "connexion par Email" },
    { type: "phone", label: "connexion par telephone" },
  ];

  const dispatch = useDispatch<AppDispatch>();
  const authState = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    password: "",
  });

  const [connectMethode, setConectMethode] = useState<"email" | "phone">(
    "email"
  );
  const [loginError, setLoginError] = useState<String>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const credentials =
      connectMethode === "email"
        ? { email: formData.email, password: formData.password }
        : { phoneNumber: formData.phoneNumber, password: formData.password };

    try {
      // Dispatch du thunk de connexion
      const action = await dispatch(login(credentials));

      if (login.fulfilled.match(action)) {
        // Connexion réussie
        setFormData({
          phoneNumber: "",
          email: "",
          password: "",
        });
      } else {
        switch (action.error.message) {
          case "User not found":
            setLoginError("Email ou mot de passe incorrect");
            break;
          case "getaddrinfo ENOTFOUND cluster0-shard-00-00.owjdw.mongodb.net":
            setLoginError("verifier la connexion internet");
            break;
          case "Invalid credentials":
            setLoginError("Email ou mot de passe incorrect");
            break;

          default:
            break;
        }
      }
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire:", error);
    }
  };

  return (
    <div className="">
      <div className="text-center pb-[25px]">
        <div className="font-Quicksand py-3 uppercase md:text-[25px] font-[600]">
          se connecter
        </div>
        <div className="font-Quicksand md:text-[20px]">
          vous avez deja un compte ? saisissez vos identifiants easyreserve
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" form w-full sm:w-[450px] md:w-fit lg:w-[] sm:border-solid sm:border-[1px] sm:border-spacing-2"
      >
        <div className=" border-b-[1px] grid grid-cols-2">
          {connectMethodes.map((methode: any, index: number) => (
            <div
              className={`methode font-[600] hover:bg-sky-100 text-lg text-center border-solid py-2 cursor-pointer capitalize font-Quicksand ${
                connectMethode === methode.type
                  ? " border-b-[2px] bg-sky-50 border-b-midnight-blue text-midnight-blue"
                  : ""
              }`}
              key={index}
              onClick={() => setConectMethode(methode.type)}
            >
              {methode.type}
            </div>
          ))}
        </div>
        <div className="form-content">
          {authState.error && (
            <div className="error">{loginError /* authState.error */}</div>
          )}
          <div className="form_inputs md:grid-cols-2">
            {connectMethode === "email" ? (
              <div className="input">
                <label htmlFor="email">
                  Email <span>*</span>
                </label>
                <input
                  value={formData.email}
                  onChange={handleChange}
                  required
                  type="email"
                  name="email"
                  id="email"
                  className={`${authState.error ? "errorMode" : ""}`}
                />
              </div>
            ) : (
              <div className="input">
                <label htmlFor="phoneNumber">
                  Phone Number <span>*</span>
                </label>
                <input
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  className={`${authState.error ? "errorMode" : ""}`}
                />
              </div>
            )}
            <div className="input">
              <label htmlFor="password">
                Password <span>*</span>
              </label>
              <input
                value={formData.password}
                onChange={handleChange}
                required
                type="password"
                name="password"
                id="password"
                className={`${authState.error ? "errorMode" : ""}`}
              />
            </div>
            {authState.error &&
              (authState.error === "User not found" ||
                authState.error === "Invalid credentials") && (
                <Link
                  href="/forgot-password" // Mettez à jour le chemin si nécessaire
                  className="underline font-Quicksand hover:text-midnight-blue w-fit"
                >
                  Mot de passe oublié ?
                </Link>
              )}
          </div>
          <div className="actions">
            <button
              type="submit"
              className="btn-primary font-Quicksand text-[16px]"
            >
              se connecter
            </button>

            <Link
              href="/signup"
              className="capitalize font-Quicksand underline hover:text-midnight-blue"
            >
              pas de compte ?
            </Link>
          </div>
        </div>
        {authState.loading && <p>Chargement...</p>}
      </form>
    </div>
  );
};

export default Login;
