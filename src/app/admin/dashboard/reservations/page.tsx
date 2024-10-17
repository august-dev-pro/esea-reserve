"use client";
import ReservationsDashboard from "@/components/dashboard/reservations/ReservationsDashboard";
import { fetchReservations } from "@/redux/slices/reservationSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Selectors for fetching data from the Redux store
  const reservations = useSelector(
    (state: RootState) => state.reservation.reservations
  );
  const services = useSelector((state: RootState) => state.service.services);
  const users = useSelector((state: RootState) => state.user.users);

  const isReservationsLoading = useSelector(
    (state: RootState) => state.reservation.loading
  );
  const isServicesLoading = useSelector(
    (state: RootState) => state.service.loading
  );
  const isUsersLoading = useSelector((state: RootState) => state.user.loading);

  const errorReservations = useSelector(
    (state: RootState) => state.reservation.error
  );
  const errorServices = useSelector((state: RootState) => state.service.error);
  const errorUsers = useSelector((state: RootState) => state.user.error);

  // Fetch reservations when the component mounts
  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  if (isUsersLoading || isReservationsLoading || isServicesLoading) {
    return <div>Chargement...</div>;
  }

  if (errorReservations || errorServices || errorUsers) {
    return (
      <div>Erreur: {errorReservations || errorServices || errorUsers}</div>
    );
  }

  return (
    <ReservationsDashboard
      reservations={reservations}
      services={services}
      users={users}
    />
  );
};

export default Page;
