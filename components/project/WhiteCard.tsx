import React from "react";
type Props = {
  shadowLg?: boolean;
  shadowMd?: boolean;
  rotate?: boolean;
  shadowRd?: boolean;
  border?: boolean;
};
const WhiteCard = ({ rotate, shadowLg, shadowMd, shadowRd, border }: Props) => {
  return (
    <div
      className={` bg-white rounded-[30px] ${
        shadowLg ? "shadow-[0px_169px_70px_#707D924D]" : ""
      } ${
        shadowMd ? "shadow-[0px_30px_70px_#0000001A]" : ""
      }  h-[20rem] w-[9rem]  md:h-[30rem] md:w-[15rem] lg:h-[35rem] lg:w-[20rem]   xl:h-[48rem] xl:w-[22rem]  flex justify-center items-center font-poppins`}
    >
      <p className="font-bold text-sm md:text-xl lg:text-3xl text-center text-black">
        Your Design
        <br /> Here
      </p>
    </div>
  );
};

export default WhiteCard;
