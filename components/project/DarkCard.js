import React from "react";

const DarkCard = ({ shadowLg, shadowMd, purple }) => {
  return (
    <div
      className={` ${shadowLg ? "shadow-[0px_70px_70px_#707D924D]" : ""} ${
        shadowMd ? "shadow-[0px_30px_70px_#0000001A]" : ""
      } ${
        purple ? "bg-[#674BD2]" : "bg-[#4A4657]"
      }  rounded-[30px] shadow-[0px_70px_70px_#707D924D]  h-[20rem] w-[10rem] md:h-[30rem] lg:h-[35rem] lg:w-[20rem] md:w-[15rem]  xl:h-[48rem] xl:w-[22rem] flex justify-center items-center font-poppins`}
    >
      <p className="font-bold text-sm md:text-xl lg:text-3xl text-center text-white">
        Your Design <br />
        Here
      </p>
    </div>
  );
};

export default DarkCard;
