"use client";
import React from "react";
import Image from "next/image";
import taskerImg from "@/imgs/tasker2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faSprayCanSparkles,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { ITaskerSpecifics, IUser } from "@/ui/types";

type TaskerProps = {
  tasker: [IUser, ITaskerSpecifics];
  handleTaskerSelect: (taskerId: string) => void;
};

const Tasker: React.FC<TaskerProps> = ({ tasker, handleTaskerSelect }) => {
  const [user, specifics] = tasker;

  return (
    <div className="tasker p-2 border-solid border-[1px] rounded-md font-Quicksand md:p-3 lg:p-5">
      <div className="tasker-info flex flex-col gap-[15px] md:gap-[30px]">
        <div className="head grid grid-cols-[90px_1fr] md:grid-cols-[120px_1fr] gap-5 md:gap-8 justify-between">
          <div className="profil-img w-[90px] h-[90px] md:w-[120px] md:h-[120px] rounded-[.5rem] overflow-hidden">
            <Image
              src={taskerImg} // Use actual profileImage or fallback to default
              width={500}
              height={500}
              alt={`tasker ${user.lastName} image`}
              className=""
            />
          </div>
          <div className="tasker-vews text-[14px] sm:text-[16px] flex flex-col gap-1">
            <div className="name-status flex justify-between">
              <div className="name">
                {user.firstName} {user.lastName}
              </div>
              <div className="status flex gap-1 items-center text-[13px]">
                {specifics.status}
                {specifics.status === "new" ? (
                  <FontAwesomeIcon
                    className="text-yellow-500"
                    icon={faSprayCanSparkles}
                  />
                ) : specifics.status === "medium" ? (
                  <FontAwesomeIcon className="text-pink-500" icon={faMedium} />
                ) : specifics.status === "certified" ? (
                  <FontAwesomeIcon
                    className="text-green-500"
                    icon={faCertificate}
                  />
                ) : null}
              </div>
            </div>
            <div className="all-rate">
              <FontAwesomeIcon icon={faStar} /> {specifics.rate} (7 reviews)
            </div>
            <div className="task-termines font-Quicksand">
              (7) interventions notées
            </div>
            <div className="task-termines font-Quicksand">
              (9) interventions terminées
            </div>
          </div>
        </div>
        <div className="description flex flex-col gap-[15px] md:gap-[25px]">
          <div className="mot text-[15px] font-Quicksand p-2 rounded-md bg-blue-opcity md:p-3">
            {specifics.bio}...
          </div>
          <div className="actions flex gap-[50px] items-end">
            <button
              onClick={() => {
                if (user._id) {
                  handleTaskerSelect(user._id);
                } else {
                  console.error("Tasker ID is undefined");
                }
              }}
              className="btn-primary font-Quicksand"
            >
              Select & Continue
            </button>

            <Link
              href={`/taskers/${user._id}`}
              className="underline hover:text-midnight-blue"
            >
              Voir profil +
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasker;
