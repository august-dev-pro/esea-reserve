"use client";
import ServicesDashboard from "@/components/dashboard/services/ServicesDashboard";
import { fetchServices } from "@/redux/slices/serviceSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const services = useSelector((state: RootState) => state.service.services);
  const isLoading = useSelector((state: RootState) => state.service.loading);
  const error = useSelector((state: RootState) => state.service.error);
  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);
  return <ServicesDashboard services={services} />;
};

export default Page;
