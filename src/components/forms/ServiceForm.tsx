import React, { useState } from "react";

const ServiceForm = ({
  handleNextStep,
  setStep1Validated,
}: {
  handleNextStep: (data: {
    date: string;
    address: string;
    problemDescription: string;
  }) => void;
  setStep1Validated: any;
}) => {
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [problemDescription, setProblemDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    await setStep1Validated(true);
    e.preventDefault();
    handleNextStep({ date, address, problemDescription });
  };

  return (
    <form onSubmit={handleSubmit} className="step-form">
      <div className=" step_form_title">
        <div className="title">1- choisissez et décrivez votre probleme</div>
        <div className="sub_title"></div>
      </div>
      <div className="form_content">
        <div className="inputs">
          <div className="champ">
            <label htmlFor="">entrer votre adress</label>
            <input type="text" name="adress" id="adress" required />
          </div>
          <div className="champ">
            <label htmlFor="">choisir la date d'intervantion</label>
            <input type="date" name="date" id="date" required />
          </div>
          <div className="champ">
            <label htmlFor="">description du besoins</label>
            <textarea name="" id="" cols={5} rows={5} required></textarea>
          </div>
        </div>
        <button className="btn-primary font-Quicksand">suivant</button>
      </div>
    </form>
  );
};

export default ServiceForm;
