"use client";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetHelpNow from "@/components/home/GetHelpNow";
import HeroSlider from "@/components/home/HeroSlider";
import HomeTabs from "@/components/home/HomeTabs";
import HowIsWork from "@/components/home/HowIsWork";
import ServicesOverview from "@/components/home/ServicesOverview";
import { fetchServices } from "@/redux/slices/serviceSlice";
import { fetchServiceOptions } from "@/redux/slices/servicesOptionsSlice";
import { SkeletonServiceList } from "@/components/ui/skeletons";
import PageSkeleton from "@/components/ui/PageSkeleton";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const services = useSelector((state: RootState) => state.service.services);
  const servicesOptions = useSelector(
    (state: RootState) => state.servicesOptions.serviceOptions
  );
  const isLoading = useSelector(
    (state: RootState) => state.service.loading || state.servicesOptions.loading
  );
  const error = useSelector(
    (state: RootState) => state.service.error || state.servicesOptions.error
  );
  const user = useSelector((state: RootState) => state.auth.user);
  const [token, setToken] = useState<any | null>(null);

  useEffect(() => {
    if (user) {
      setToken(user);
    }
  }, [user]);

  useEffect(() => {
    // Dispatch action to fetch services when component mounts
    dispatch(fetchServices());
    dispatch(fetchServiceOptions());
  }, [dispatch]);

  if (isLoading) return <PageSkeleton />;
  if (error) return <p>Error: {error}</p>;
  if (!services || services.length === 0) {
    return <PageSkeleton />;
  }

  return (
    <main className="h-fit">
      <HeroSlider />
      <HomeTabs services={services} servicesOptions={servicesOptions} />
      <ServicesOverview services={services} />
      <HowIsWork />
      <GetHelpNow services={services} />
      <div className="h-[200px]"></div>
    </main>
  );
}
