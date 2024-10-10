"use client";
import ServiceBySlugHero from "@/components/services/slug/ServiceBySlugHero";
import { fetchServices } from "@/redux/slices/serviceSlice";
import { fetchServiceOptions } from "@/redux/slices/servicesOptionsSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { IService, IServiceOption, Service } from "@/ui/types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const dispatch = useDispatch<AppDispatch>();
  const services = useSelector((state: RootState) => state.service.services);
  const allServiceOptions = useSelector(
    (state: RootState) => state.servicesOptions.serviceOptions
  );
  const service = services.find(
    (service: IService) => service.title.toUpperCase() == slug.toUpperCase()
  );
  const specificsOptions = allServiceOptions.filter((option: IServiceOption) =>
    service?.options.includes(option._id)
  );

  useEffect(() => {
    dispatch(fetchServices());
    dispatch(fetchServiceOptions());
  }, []);

  if (!service) {
    return <div className=""> aucun service pour ce slug: {slug}</div>;
  }

  return (
    <div className="">
      <ServiceBySlugHero service={service} serviceOptions={specificsOptions} />
    </div>
  );
};

export default Page;
