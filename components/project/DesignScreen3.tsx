import React from "react";
import WhiteCard from "./WhiteCard";
import DarkCard from "./DarkCard";

const DesignScreen3 = () => {
  return (
    <div className="w-full  px-4 py-10 ">
      <div className="lg:w-10/12 mx-auto  flex justify-between relative">
        <div className="">
          <div
            className="rotate-180 text-3xl md:text-5xl lg:text-7xl xl:text-[5.5rem] font-bold font-technor"
            style={{ writingMode: "vertical-rl" }}
          >
            <span className="   text-purple2 p-5 tracking-wider">Design</span>
            <span className="   text-black p-5 tracking-wider">Screens</span>
          </div>
        </div>
        <div className="flex">
          <div className=" mr-6 xl:mr-12">
            <WhiteCard shadowLg={true} />
          </div>
          <div>
            <DarkCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignScreen3;
