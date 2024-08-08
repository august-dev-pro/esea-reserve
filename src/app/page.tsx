"use client";
import GetHelpNow from "@/components/home/GetHelpNow";
import HeroSlider from "@/components/home/HeroSlider";
import HomeTabs from "@/components/home/HomeTabs";
import HowIsWork from "@/components/home/HowIsWork";
import ServicesOverview from "@/components/home/ServicesOverview";
import PageSkeleton from "@/components/ui/PageSkeleton";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API request
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <main className="h-fit">
      <HeroSlider />
      <HomeTabs />
      <ServicesOverview />
      <HowIsWork />
      <GetHelpNow />
    </main>
  );
}
