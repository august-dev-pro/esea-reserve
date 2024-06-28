import GetHelpNow from "@/components/home/GetHelpNow";
import HeroSlider from "@/components/home/HeroSlider";
import HowIsWork from "@/components/home/HowIsWork";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChoiceUs from "@/components/home/WhyChoiceUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-fit">
      <HeroSlider />
      <ServicesOverview />
      <WhyChoiceUs />
      <HowIsWork />
      <GetHelpNow />
    </main>
  );
}
