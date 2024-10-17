"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import React from "react";
import AccountDashboard from "@/components/account/AccountDashboard";

const Page = () => {
  const reservations = useSelector(
    (state: RootState) => state.reservation.reservations
  );
  return <AccountDashboard />;
};

export default Page;
