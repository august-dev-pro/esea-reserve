import ServiceBySlugHero from "@/components/services/slug/ServiceBySlugHero";
import { services } from "@/ui/testDatas";
import { Service } from "@/ui/types";
import React from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const service = services.find(
    (service: Service) => service.title.toUpperCase() == slug.toUpperCase()
  );

  if (!service) {
    return;
  }

  return (
    <div className="">
      <ServiceBySlugHero service={service} />
    </div>
  );
};

export default Page;
