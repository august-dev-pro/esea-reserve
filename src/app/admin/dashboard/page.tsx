"use client";
import { useRouter } from "next/navigation";
import { RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Dashboard from "@/components/dashboard/Dashboard";

const Page = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else if (user?.role !== "user") {
      router.push("/"); // Redirige vers la page d'accueil
    }
  }, [user, router]);

  // Si l'utilisateur n'est pas admin, on ne retourne rien avant la redirection
  if (user?.role !== "user") {
    return null;
  }

  return <Dashboard user={user} />;
};

export default Page;
