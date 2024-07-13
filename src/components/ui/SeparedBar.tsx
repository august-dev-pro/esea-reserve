import React from "react";

const SeparedBar = () => {
  return (
    <div className="separedBar flex items-center gap-[10px] w-fit m-[0_auto]">
      <div className="bar bg-midnight-blue w-[100px] h-[3px] rounded-[2rem]"></div>
      <div className="round w-[10px] h-[10px] rounded-[50%] bg-midnight-blue"></div>
      <div className="bar bg-midnight-blue w-[100px] h-[3px] rounded-[2rem]"></div>
    </div>
  );
};

export default SeparedBar;
