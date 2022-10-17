import React from "react";
import WhiteCard from './WhiteCard';
import DarkCard from "./DarkCard";

const DesignScreen2 = () => {
  return (
    <div className="w-full  py-10 relative ">
      <div className="bg-purple2  px-4   ">
        <div className="lg:w-10/12 mx-auto pt-[4rem] flex justify-end  relative">

        <div className="absolute left-2 md:left-4 lg:left-6 xl:left-16  flex ">
          <div className=" mr-6 xl:mr-12">
            <WhiteCard shadowLg={true} />
          </div>
          <div>
            <DarkCard />
          </div>
        </div>
          <div className="">
            <div
            className="rotate-180 text-3xl md:text-5xl lg:text-7xl xl:text-[5.5rem] font-bold font-poppins"
              style={{ writingMode: "vertical-rl" }}
            >
              <span className=" text-white px-5 tracking-wider">ign</span>
              <span className=" text-black p-5 tracking-wider">Screen</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-4 bg-white   ">
        <div className="lg:w-10/12 mx-auto mb-[8rem] lg:mb-[15rem] flex justify-end text-end">
          <div
            className="rotate-180 text-3xl md:text-5xl lg:text-7xl xl:text-[5.5rem] font-bold font-poppins"
            style={{ writingMode: "vertical-rl" }}
          >
            <span className="text-purple2 px-5 tracking-wider z-50">Des </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignScreen2;
