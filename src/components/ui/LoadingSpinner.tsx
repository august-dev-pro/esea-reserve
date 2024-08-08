import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center max-h-[20px]">
      <div className="animate-spinSlow rounded-full h-6 w-6 border-t-4 border-b-4 border-white"></div>
    </div>
  );
};

export default LoadingSpinner;
