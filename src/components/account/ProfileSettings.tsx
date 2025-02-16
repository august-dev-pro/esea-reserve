import { IUser } from "@/ui/types";
import React, { useState } from "react";
import userDefault from "@/imgs/tasker2.jpg";
import Image from "next/image";
import { getImageUrl } from "@/ui/fonctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCameraAlt,
  faClock,
  faLock,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import Passwords from "./Passwords";
interface ProfileSettingsProps {
  user: IUser;
  setActiveSection: any;
}

const ProfileSettings: React.FC<ProfileSettingsProps> = ({
  user,
  setActiveSection,
}) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [adress, setadress] = useState(user?.address);
  const [profileImage, setProfileImage] = useState(user.profileImage);

  const handleSaveChanges = () => {
    // Logique pour sauvegarder les modifications
    console.log({
      firstName,
      lastName,
      email,
      phone,
      profileImage,
    });
  };

  const handleDeleteAvatar = () => {
    // Logique pour supprimer l'avatar
    setProfileImage(""); // Suppression de l'image
  };

  const handleUploadNewAvatar = () => {
    // Logique pour uploader une nouvelle image
  };

  return (
    <div className="profile-settings sm:p-4">
      {/* Section 1 : Image de profil */}
      <div className="profile-image-section flex flex-col md:flex-row items-center mb-6 gap-10 md:gap-[80px]">
        <div className="w-[200px] h-[200px] rounded-[50%] relative">
          <Image
            alt="gggj"
            src={userDefault}
            width={500}
            height={500}
            className="rounded-[50%] object-cover "
          />
          <div className="absolute border-2 w-[40px] h-[40px] bg-violet-900 text-white border-white p-2 right-0 top-2/3 cursor-pointer flex items-center justify-center rounded-[50%]">
            <FontAwesomeIcon icon={faCameraAlt} />
          </div>
        </div>
        <div className="flex gap-6 font-Quicksand font-[600]">
          <button className="hover:bg-violet-900 text-white px-5 py-3 rounded bg-violet-700 transition-all">
            upload New
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white px-5 py-3 rounded transition-all">
            delete avatar
          </button>
        </div>
      </div>

      {/* Section 2 : Informations utilisateur */}
      <div className="user-info-section grid sm:grid-cols-2 gap-6">
        <div className="input ">
          <label className="block text-sm font-semibold mb-2">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className=" input">
          <label className="block text-sm font-semibold mb-2">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className=" input">
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className=" input">
          <label className="block text-sm font-semibold mb-2">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className=" input">
          <label
            className={`block text-sm font-semibold mb-2 ${
              adress ? "" : " w-fit border-red-700 border-b-2 "
            }`}
          >
            adress residentielle
          </label>
          <input
            type="text"
            value={adress}
            onChange={(e) => setadress(e.target.value)}
          />
        </div>
        <div className=" input relative">
          <label className={`block text-sm font-semibold mb-2`}>
            mot de passe <FontAwesomeIcon icon={faLock} />
          </label>
          <input type="password" className="bg-gray-200" value={"555555555"} />
          <div
            className="absolute right-3 text-gray-600 cursor-pointer hover:text-violet-700 transition-all top-1/2"
            onClick={() => setActiveSection("passwords")}
          >
            <FontAwesomeIcon icon={faPen} />
          </div>
        </div>
        <button
          onClick={handleSaveChanges}
          className="bg-green-500 text-white px-6 py-2 rounded"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
