import React, { useState } from "react";
import { IUser } from "@/ui/types";

const Passwords = ({ user }: { user: IUser }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = async (e: any) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    // Appel à l'API pour mettre à jour le mot de passe
    try {
      // Remplacez ceci par votre logique d'API
      console.log("Mot de passe modifié pour l'utilisateur :", user._id);
    } catch (err) {
      console.error(err);
      setError("Erreur lors de la mise à jour du mot de passe.");
    }
  };

  return (
    <div className="password-settings">
      <h2 className=" text-2xl font-semibold mb-6">Modifier le mot de passe</h2>
      <div
        onSubmit={handlePasswordChange}
        className="grid sm:grid-cols-2 gap-6"
      >
        <div className="input">
          <label className="block text-sm font-semibold mb-2">
            Nouveau mot de passe
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className="input">
          <label className="block text-sm font-semibold mb-2">
            Confirmer le mot de passe
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`border border-gray-300 rounded p-2 w-full   ${
              confirmPassword != "" && confirmPassword != newPassword
                ? "errorMode"
                : ""
            }`}
          />
          {confirmPassword != "" && confirmPassword != newPassword && (
            <div className="font-Quicksand text-[13px] capitalize  text-red-500">
              mot de passe non identiques
            </div>
          )}
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-2 rounded"
        >
          Sauvegarder les modifications
        </button>
      </div>
    </div>
  );
};

export default Passwords;
