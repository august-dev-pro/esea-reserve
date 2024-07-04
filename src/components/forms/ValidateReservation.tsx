import React, { useState } from "react";

const ValidateReservation = ({
  handleNextStep,
}: {
  handleNextStep: (data: { agreement: string }) => void;
}) => {
  const [agreement, setAgreement] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleNextStep({ agreement });
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="champ">
        <label htmlFor="agreement">
          Trouver un terrain d'entente avec le tasker:
        </label>
        <textarea
          id="agreement"
          value={agreement}
          onChange={(e) => setAgreement(e.target.value)}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Valider la Réservation
      </button>
    </form>
  );
};

export default ValidateReservation;
