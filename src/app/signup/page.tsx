"use client";
import SignUp from "@/components/sinup/SignUp";
import React, { useState } from "react";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Logic for form submission, e.g., API call to register the user
    console.log("Form submitted:", formData);
  };

  return (
    <div className="section">
      <div className="container px-5 sm:px-0">
        <SignUp />
      </div>
    </div>
  );
};

export default SignupPage;
