import React from "react";

const PageSkeleton: React.FC = () => {
  return (
    <div className="p-4 animate-pulse">
      {/* Header Placeholder */}
      <div className="h-12 bg-gray-300 rounded w-3/4 mx-auto mb-6"></div>

      {/* Card Placeholders */}
      <div className="space-y-6">
        <div className="flex flex-col space-y-4">
          <div className="w-full bg-gray-300 rounded h-6"></div>
          <div className="w-full bg-gray-300 rounded h-6"></div>
          <div className="w-5/6 bg-gray-300 rounded h-6"></div>
          <div className="w-4/6 bg-gray-300 rounded h-6"></div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="w-full bg-gray-300 rounded h-6"></div>
          <div className="w-11/12 bg-gray-300 rounded h-6"></div>
          <div className="w-10/12 bg-gray-300 rounded h-6"></div>
          <div className="w-9/12 bg-gray-300 rounded h-6"></div>
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;
