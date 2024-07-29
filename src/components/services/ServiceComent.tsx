import { Comment } from "@/ui/types";
import React from "react";
import userImg from "@/imgs/providers/pexels-mikhail-nilov-6930549.jpg";
import Image from "next/image";

const ServiceComent = ({ comment }: { comment: Comment }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`inline-block w-4 h-4 ${
          index < rating ? "text-yellow-500" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };
  return (
    <div className="service-comment flex gap-2 items-start ">
      <div className="user mt-2">
        <div className="img w-[50px] h-[50px] rounded-[50%] overflow-hidden">
          <Image
            src={userImg}
            width={500}
            height={500}
            alt={`${comment.name}`}
            className=" object-cover h-full"
          />
        </div>
      </div>
      <div className="com-des flex flex-col gap-[5px]">
        <div className="rating flex gap-1 text-[20px]">
          {renderStars(comment.rate)}
        </div>
        <div className="content font-Quicksand">{comment.text}</div>
        <div className="des flex gap-4">
          <div className="date font-Quicksand">{comment.date}</div>
          <div className="name underline">{comment.name}</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComent;
