import React from "react";

const PageSkeleton: React.FC = () => {
  return (
    <div className="container px-4 sm:px-0 animate-pulse">
      <div className="h-[200px] md:h-[350px] mt-8 w-full bg-gray-300 rounded mx-auto mb-6"></div>
      {/* Card Placeholders */}
      <div className="space-y-6">
        <div className="">
          <div className="border-b flex mb-4 pb-2 justify-between"></div>
          <div className="flex flex-row gap-10">
            <div className="w-[120px] bg-gray-300 rounded-full h-8"></div>
            <div className="w-[100px] bg-gray-300 rounded-full h-8"></div>
            <div className="w-[120px] bg-gray-300 rounded-full h-8"></div>
            <div className="w-[100px] bg-gray-300 rounded-full h-8"></div>
            <div className="w-[120px] bg-gray-300 rounded-full h-8"></div>
            <div className="w-[100px] bg-gray-300 rounded-full h-8"></div>
          </div>
        </div>
        <div className="flex flex-col gap-10 space-y-4">
          <div className="w-full h-[350px] bg-gray-300 rounded"></div>
          <div className="pb-10 grid md:grid-cols-3 gap-10">
            <div className="bg-gray-300 rounded h-[400px]"></div>
            <div className="bg-gray-300 rounded h-[400px]"></div>
            <div className="bg-gray-300 rounded h-[400px]"></div>
            <div className="bg-gray-300 rounded h-[400px]"></div>
            <div className="bg-gray-300 rounded h-[400px]"></div>
            <div className="bg-gray-300 rounded h-[400px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageSkeleton;
