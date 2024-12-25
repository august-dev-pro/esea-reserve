"use client";
import Reservations from "@/components/account/Raservations";
import { RootState } from "@/redux/store";
import { fakeReservations } from "@/ui/testDatas";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  return <Reservations reservations={fakeReservations} />;
};

export default page;
