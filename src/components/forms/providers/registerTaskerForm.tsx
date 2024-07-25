import { services } from "@/ui/testDatas";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const RegisterTaskerForm = ({
  handleStartRegister,
}: {
  handleStartRegister: () => void;
}) => {
  return (
    <div className="bg section Z-[100] flex justify-center top-0 left-0 right-0 bottom-0 bg-white-opacity-plus">
      <div className="container px-4 sm:px-0">
        <form
          action=""
          className="become-a-tasker form w-full h-fit step-form bg-white p-3 md:p-6 shadow-custom-form relative max-w-[400px] md:max-w-[550px]"
        >
          <FontAwesomeIcon
            className="absolute right-[15px] hover:text-midnight-blue cursor-pointer"
            icon={faClose}
            onClick={handleStartRegister}
          />
          <div className="capitalize text-[25px] font-[500] border-b w-fit border-midnight-blue mb-5">
            dévenez un prestataire
          </div>
          <div className="form_content">
            <div className="inputs">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="champ">
                  <label htmlFor="firstName">first Name</label>
                  <input type="text" name="firstName" id="firstName" />
                </div>
                <div className="champ">
                  <label htmlFor="lastName">last Name</label>
                  <input type="text" name="lastName" id="lastName" />
                </div>
              </div>
              <div className="champ">
                <label htmlFor="email">email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="champ">
                <label htmlFor="password">password</label>
                <input type="password" name="password" id="password" />
              </div>
              <div className="champ">
                <label htmlFor="domaine">domaine</label>
                <select
                  name="domaine"
                  id="domaine"
                  className="p-3 font-[400] text-gray-600 bg-white border rounded-[5px] border-gray-300"
                >
                  {services.map((service: any, index: number) => (
                    <option
                      className="font-[300] "
                      key={index}
                      value={service.title}
                    >
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="champ">
                <div className="ml-[105px]">
                  <label htmlFor="phoneNumber" className="">
                    phone Number
                  </label>
                </div>
                <div className="w-full flex items-center gap-2 ">
                  <div className="flex gap-1 font-[300]">
                    <div className="drapeau flex h-fit">
                      <div className="orange h-[25px] w-[20px] bg-orange-500"></div>
                      <div className="blanc h-[25px] w-[20px]"></div>
                      <div className="vert h-[25px] w-[20px] bg-green-500"></div>
                    </div>
                    +225
                  </div>
                  <input
                    type="text"
                    className="w-full"
                    name="phoneNumber"
                    id="phoneNumber"
                  />
                </div>
              </div>
              <div className="flex justify-end pt-4 w-full">
                <button className="btn-primary w-fit">confirmer</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterTaskerForm;
