import GetHelpNow from "@/components/home/GetHelpNow";
import HeroSlider from "@/components/home/HeroSlider";
import HomeTabs from "@/components/home/HomeTabs";
import HowIsWork from "@/components/home/HowIsWork";
import ServicesOverview from "@/components/home/ServicesOverview";

export default function Home() {
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
