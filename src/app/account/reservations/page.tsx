"use client";
import Reservations from "@/components/account/Raservations";
import { fakeReservations } from "@/ui/testDatas";
import React from "react";

const page = () => {
  return <Reservations reservations={fakeReservations} />;
};

export default page;
