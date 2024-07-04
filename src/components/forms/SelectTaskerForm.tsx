import React, { useState } from "react";

const SelectTaskerForm = ({
  handleNextStep,
}: {
  handleNextStep: (data: { tasker: string }) => void;
}) => {
  const [tasker, setTasker] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleNextStep({ tasker });
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="champ">
        <label htmlFor="tasker">Sélection du tasker:</label>
        <select
          id="tasker"
          value={tasker}
          onChange={(e) => setTasker(e.target.value)}
          required
        >
          <option value="">Sélectionner un tasker</option>
          <option value="tasker1">Tasker 1</option>
          <option value="tasker2">Tasker 2</option>
          <option value="tasker3">Tasker 3</option>
        </select>
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Suivant
      </button>
    </form>
  );
};

export default SelectTaskerForm;
