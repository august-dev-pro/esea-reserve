"use client";
import React, { useEffect } from "react";
import Tasker from "../ui/Tasker";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { IUser, ITaskerSpecifics } from "@/ui/types";
import { fetchUsers } from "@/redux/slices/userSlice";
import { fetchTaskerSpecifics } from "@/redux/slices/TaskerSpecificsSlice";

const SelectTaskerForm = ({
  handleNextStep,
}: {
  handleNextStep: (data: { taskerId: string | null }) => void;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleTaskerSelect = (selectedTaskerId: string) => {
    handleNextStep({ taskerId: selectedTaskerId });
  };

  // Sélectionner les utilisateurs, spécificités, chargements et erreurs
  const users = useSelector((state: RootState) => state.user.users);
  const taskerSpecifics = useSelector(
    (state: RootState) => state.taskerSpecifics.specifics
  );
  const isLoadingUsers = useSelector((state: RootState) => state.user.loading);
  const isLoadingTaskerSpecifics = useSelector(
    (state: RootState) => state.taskerSpecifics.loading
  );
  const userError = useSelector((state: RootState) => state.user.error);
  const taskerSpecificsError = useSelector(
    (state: RootState) => state.taskerSpecifics.error
  );

  // Dispatcher les actions pour récupérer les données
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchTaskerSpecifics());
  }, [dispatch]);

  // Gestion du chargement et des erreurs
  if (isLoadingUsers || isLoadingTaskerSpecifics) {
    return <div>Chargement des données...</div>;
  }

  if (userError || taskerSpecificsError) {
    return (
      <div>Une erreur est survenue : {userError || taskerSpecificsError}</div>
    );
  }

  return (
    <div className="tasker-form step-form">
      <div className="step_form_title">
        <div className="title">2- Choisissez votre tasker par préférence</div>
        <div className="sub_title"></div>
      </div>
      <div className="taskers-list grid grid-cols-1 gap-7 md:w-[60%]">
        {users
          .filter((user) => user.role === "tasker")
          .map((tasker: IUser) => {
            // Vérifier si taskerSpecifics est un tableau et chercher les spécificités correspondantes au tasker
            const taskerSpecific =
              Array.isArray(taskerSpecifics) &&
              taskerSpecifics.find(
                (specific: ITaskerSpecifics) => specific.user === tasker._id
              );

            if (taskerSpecific) {
              return (
                <Tasker
                  key={tasker._id} // Utiliser _id comme clé unique
                  tasker={[tasker, taskerSpecific]} // Passer user et ses spécificités
                  handleTaskerSelect={handleTaskerSelect}
                />
              );
            }
            return <div key={tasker._id}>aucun specifics</div>; // Assurer que chaque élément a une clé, même sans specifics
          })}
      </div>
    </div>
  );
};
export default SelectTaskerForm;
