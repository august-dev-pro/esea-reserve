import React from "react";
import { taskers } from "@/ui/testDatas"; // Assurez-vous du chemin correct pour vos données de test
import Tasker from "../ui/Tasker";

const SelectTaskerForm = ({
  setStep2Validated,
  handleNextStep,
}: {
  handleNextStep: (data: { taskerId: number | null }) => void;
  setStep2Validated: any;
}) => {
  const handleTaskerSelect = (selectedTaskerId: number) => {
    setStep2Validated(true);
    handleNextStep({ taskerId: selectedTaskerId });
  };

  return (
    <div className="tasker-form step-form">
      <div className="step_form_title">
        <div className="title">2- Choisissez votre tasker par prefference</div>
        <div className="sub_title"></div>
      </div>
      <div className="taskers-list grid grid-cols-1 gap-7 md:w-[60%]">
        {taskers.map((tasker) => (
          <Tasker
            key={tasker.id}
            tasker={tasker}
            handleTaskerSelect={handleTaskerSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectTaskerForm;
