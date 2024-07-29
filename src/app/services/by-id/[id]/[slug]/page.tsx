"use client";
import React from "react";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { services } from "@/ui/testDatas"; // Assure-toi que c'est le bon chemin
import { Service } from "@/ui/types";

const Page = ({
  params,
}: {
  params: {
    id: number;
    slug: string;
  };
}) => {
  /*   const router = useRouter();
  const { id, slug } = router.query;

  const [service, setService] = useState<Service | null>(null); */
  const id = params.id;
  const slug = params.slug;
  console.log("slug issssssssssssss: ", slug);
  console.log("id issssssssssssss: ", slug);

  /*  useEffect(() => {
    if (id && slug) {
      const serviceId = parseInt(id as string, 10);
      const foundService = services.find(
        (service) => service.id === serviceId && service.title === slug
      );

      if (foundService) {
        setService(foundService);
      } else {
        notFound();
      }
    }
  }, [id, slug]);

  if (!service) return <div>Loading...</div>; */

  return (
    <div>
      {/* <h1>{service.title}</h1>
      <p>{service.description}</p> */}
    </div>
  );
};

export default Page;
