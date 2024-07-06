/* import React from "react";
import taskerImg from "@/imgs/tasker2.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faPlus,
  faSprayCanSparkles,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

type Tasker = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  rate: number;
  description: string;
  slug: string;
  profileImage: string;
  workingImages: string[];
  status: string;
  domaine: string;
};

const Tasker = ({
  tasker,
  handleTaskerSelect,
}: {
  tasker: Tasker;
  handleTaskerSelect: any;
}) => {
  return (
    <div className="tasker p-2 border-solid border-[1px] rounded-md font-Quicksand md:p-3 lg:p-5">
      <div className="tasker-info flex flex-col gap-[15px] md:gap-[30px]">
        <div className="head grid grid-cols-[90px_1fr] md:grid-cols-[120px_1fr] gap-5 md:gap-8 justify-between">
          <div className="profil-img w-[90px] h-[90px] md:w-[120px] md:h-[120px] rounded-[.5rem] overflow-hidden">
            <Image
              src={taskerImg}
              width={500}
              height={500}
              alt={` tasker ${tasker.slug} image`}
              className=""
            />
          </div>
          <div className="tasker-vews text-[14px] sm:text-[16px] flex flex-col gap-1">
            <div className="name-status flex justify-between">
              <div className="name">
                {tasker.firstName} {tasker.lastName}
              </div>
              <div className="status flex gap-1 items-center text-[13px]">
                {tasker.status}
                {tasker.status === "new" ? (
                  <FontAwesomeIcon
                    className="text-yellow-500"
                    icon={faSprayCanSparkles}
                  />
                ) : tasker.status === "medium" ? (
                  <FontAwesomeIcon className="text-pink-500" icon={faMedium} />
                ) : (
                  tasker.status === "certified" && (
                    <FontAwesomeIcon
                      className="text-green-500"
                      icon={faCertificate}
                    />
                  )
                )}
              </div>
            </div>
            <div className="all-rate">
              <FontAwesomeIcon icon={faStar} /> {tasker.rate} (7 reviews)
            </div>
            <div className="task-termines font-Quicksand">
              (7) interventions notées
            </div>
            <div className="task-termines font-Quicksand">
              (9) interventions treminées
            </div>
          </div>
        </div>
        <div className="description flex flex-col gap-[15px] md:gap-[25px]">
          <div className="mot tex-[15px] font-Quicksand p-2 rounded-md bg-blue-opcity md:p-3">
            {tasker.description}...
          </div>
          <div className="actions flex gap-[50px] items-end">
            <button
              onClick={handleTaskerSelect(tasker.id)}
              className=" btn-primary font-Quicksand"
            >
              select & continue
            </button>
            <Link href={``} className="underline hover:text-midnight-blue">
              voir profil +
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasker; */

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

type TaskerProps = {
  tasker: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    rate: number;
    description: string;
    slug: string;
    profileImage: string;
    workingImages: string[];
    status: string;
    domaine: string;
  };
  handleTaskerSelect: (taskerId: number) => void; // Correct type for the handler
};

const Tasker: React.FC<TaskerProps> = ({ tasker, handleTaskerSelect }) => {
  return (
    <div className="tasker p-2 border-solid border-[1px] rounded-md font-Quicksand md:p-3 lg:p-5">
      <div className="tasker-info flex flex-col gap-[15px] md:gap-[30px]">
        <div className="head grid grid-cols-[90px_1fr] md:grid-cols-[120px_1fr] gap-5 md:gap-8 justify-between">
          <div className="profil-img w-[90px] h-[90px] md:w-[120px] md:h-[120px] rounded-[.5rem] overflow-hidden">
            <Image
              src={taskerImg} // Use actual profileImage or fallback to default
              width={500}
              height={500}
              alt={`tasker ${tasker.slug} image`}
              className=""
            />
          </div>
          <div className="tasker-vews text-[14px] sm:text-[16px] flex flex-col gap-1">
            <div className="name-status flex justify-between">
              <div className="name">
                {tasker.firstName} {tasker.lastName}
              </div>
              <div className="status flex gap-1 items-center text-[13px]">
                {tasker.status}
                {tasker.status === "new" ? (
                  <FontAwesomeIcon
                    className="text-yellow-500"
                    icon={faSprayCanSparkles}
                  />
                ) : tasker.status === "medium" ? (
                  <FontAwesomeIcon className="text-pink-500" icon={faMedium} />
                ) : (
                  tasker.status === "certified" && (
                    <FontAwesomeIcon
                      className="text-green-500"
                      icon={faCertificate}
                    />
                  )
                )}
              </div>
            </div>
            <div className="all-rate">
              <FontAwesomeIcon icon={faStar} /> {tasker.rate} (7 reviews)
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
            {tasker.description}...
          </div>
          <div className="actions flex gap-[50px] items-end">
            <button
              onClick={() => handleTaskerSelect(tasker.id)}
              className="btn-primary font-Quicksand"
            >
              Select & Continue
            </button>
            <Link
              href={`/taskers/${tasker.slug}`}
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
