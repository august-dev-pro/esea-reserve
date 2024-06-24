import HeroSlider from "@/components/home/HeroSlider";
import ServicesOverview from "@/components/home/ServicesOverview";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-fit">
      <HeroSlider />
      <ServicesOverview />
    </main>
  );
}
