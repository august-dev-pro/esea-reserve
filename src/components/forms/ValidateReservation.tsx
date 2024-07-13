"use client";
import { taskers } from "@/ui/testDatas";
import Image from "next/image";
import React, { useState } from "react";
import taskerImg from "@/imgs/tasker2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faSprayCanSparkles,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const ValidateReservation = ({
  formData,
  handleNextStep,
  handleEditStep,
  confirmeReservation,
}: {
  formData: any;
  handleNextStep: (stepData: any) => void;
  handleEditStep: (step: number) => void;
  confirmeReservation: () => void;
}) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    confirmeReservation();
  };

  const tasker = taskers.find((tasker) => tasker.id === formData.taskerId);

  if (!tasker) {
    return <div>Aucun tasker sélectionné</div>;
  }

  return (
    <div className="step-form">
      <div className="step_form_title">
        <div className="title">3 - Vérifier et confirmer votre réservation</div>
      </div>
      <form className="form_content review-all" onSubmit={handleSubmit}>
        <div className="reservation_details">
          <div className="task_details chield ">
            <div className="item service font-Quicksand">
              <div className="label">Service:</div> {formData.service}
            </div>
            <div className="item word_level">
              <div className="label">Niveau du travail:</div> {formData.jobType}
            </div>
            <div className="edit" onClick={() => handleEditStep(1)}>
              <FontAwesomeIcon icon={faPen} />
            </div>
          </div>
          <div className="selectedTasker_details chield">
            <div className="selected_tasker flex gap-5">
              <div className="image w-[110px] h-[110px] rounded-sm overflow-hidden">
                <Image
                  src={taskerImg}
                  width={500}
                  height={500}
                  alt={`tasker ${tasker.slug}`}
                />
              </div>
              <div className="tasker_info">
                <div>
                  {tasker.firstName} {tasker.lastName}
                </div>
                <div>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500" />{" "}
                  ( {tasker.rate} )
                </div>
                <div className="font-Quicksand">
                  {tasker.status}{" "}
                  <FontAwesomeIcon
                    icon={faSprayCanSparkles}
                    className="text-orange-400"
                  />
                </div>
              </div>
            </div>
            <div className="edit" onClick={() => handleEditStep(2)}>
              <FontAwesomeIcon icon={faPen} />
            </div>
          </div>
          <div className="others chield">
            <div className="address item">
              <div className="label">Address:</div> {formData.address}
            </div>
            <div className="date item">
              <div className="label">Date d'intervention:</div> {formData.date}
            </div>
            <label htmlFor="evening" className="flex gap-2 font-Quicksand">
              Soir
              <input
                type="radio"
                name="wever"
                value="evening"
                id="evening"
                defaultChecked
              />
            </label>
            <div className="edit" onClick={() => handleEditStep(1)}>
              <FontAwesomeIcon icon={faPen} />
            </div>
          </div>
        </div>
        <button type="submit" className="btn-primary">
          Confirmer réservation
        </button>
      </form>
    </div>
  );
};

export default ValidateReservation;
