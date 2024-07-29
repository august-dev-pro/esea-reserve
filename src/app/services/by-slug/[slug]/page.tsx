import ServiceBySlugHero from "@/components/services/slug/ServiceBySlugHero";
import { services } from "@/ui/testDatas";
import React from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  const slug = typeof params.slug === "string" ? params.slug.toLowerCase() : "";
  const service = services.find((service: any) => {
    if (typeof service.title === "string") {
      return service.title.toLowerCase() === slug;
    }
    return false;
  });
  if (!service) {
    return (
      <div className="text-center text-red-500">
        <h2>Service introuvable</h2>
        <p>Le service que vous cherchez n'existe pas ou a été supprimé.</p>
      </div>
    );
  }

  return (
    <div className="">
      <ServiceBySlugHero service={service} />
    </div>
  );
};

export default Page;
