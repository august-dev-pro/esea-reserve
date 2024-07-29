import ServiceBySlugHero from "@/components/services/slug/ServiceBySlugHero";
import { services } from "@/ui/testDatas";
import React from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const service = services.find(
    (service: any) => service.title.toLowerCase() === slug
  );

  return (
    <div className="">
      <ServiceBySlugHero service={service} />
    </div>
  );
};

export default Page;
