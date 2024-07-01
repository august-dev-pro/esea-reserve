"use client";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    sexe: "",
  });

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
      className="signup form w-full sm:w-[450px] md:w-fit lg:w-[] border-solid border-[1px] border-spacing-2"
    >
      <div className="form-title">Inscrivez-vous !!</div>
      <div className="form-content">
        <div className="form_inputs md:grid-cols-2">
          <div className="input">
            <label htmlFor="firstName">First Name</label>
            <input
              value={formData.firstName}
              onChange={handleChange}
              required
              type="text"
              name="firstName"
              id="firstName"
            />
          </div>
          <div className="input">
            <label htmlFor="lastName">Last Name</label>
            <input
              value={formData.lastName}
              onChange={handleChange}
              required
              type="text"
              name="lastName"
              id="lastName"
            />
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input
              value={formData.email}
              onChange={handleChange}
              required
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="input">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              type="text"
              name="phoneNumber"
              id="phoneNumber"
            />
          </div>
          <div className="input">
            <label htmlFor="password">Password</label>
            <input
              value={formData.password}
              onChange={handleChange}
              required
              type="password"
              name="password"
              id="password"
            />
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
          >
            s&apos;Inscrire
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
  );
};

export default SignUp;
