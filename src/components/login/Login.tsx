"use client";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    password: "",
  });

  const [connectMethode, setConectMethode] = useState<"email" | "phone">(
    "email"
  );

  const connectMethodes = [
    { type: "email", label: "connexion par Email" },
    { type: "phone", label: "connexion par telephone" },
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic for form submission, e.g., API call to register the user
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" form w-full sm:w-[450px] md:w-fit lg:w-[] border-solid border-[1px] border-spacing-2"
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
        <div className=" text-center font-Quicksand capitalize text-[18px] font-[500]">
          se connecter par{" "}
          {connectMethode === "email" ? "email" : "numero de téléphone"} !
        </div>
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
            />
          </div>
          <Link
            href={""}
            className=" underline font-Quicksand hover:text-midnight-blue w-fit"
          >
            mot de passe oublié ?
          </Link>
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
    </form>
  );
};

export default Login;
