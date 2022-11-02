import React from "react";
import WhiteCard from "./WhiteCard";

const LightMode = () => {
  return (
    <>
      <div className="w-full relative overflow-x-clip  overflow-y-visible font-supreme">
        <div className="p-4 w-full lg:w-11/12 mx-auto py-40 ">
          <div className="flex justify-between items-center ">
            <div className="font-poppins flex flex-col mr-6 xl:mr-0">
              <h3 className="font-bold text-xl md:text-2xl xl:text-4xl mb-8 font-technor">
                <span className="text-blue3">Light</span> Mode
              </h3>

              <div className="bg-purple2 h-8 w-8 rounded-[50%] shadow-[0px_3px_38px_#00000029] border-3 border-white mb-8"></div>
              <p className="font-medium text-sm lg:text-xl">
                Design with a white <br /> background.
              </p>
            </div>
            <div className="">
              <div className="flex justify-between slant ">
                <div className=" mr-4 md:mr-8 xl:mr-16 ">
                  <WhiteCard border={true} shadowLg={true} />
                </div>
                <div className="">
                  <WhiteCard shadowMd={true} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-blue3 h-[18rem] md:h-[28rem] xl:h-[42rem] flex justify-end">
          <div className=" w-full xl:w-5/6  flex justify-end   slant">
            <div className="hidden lg:block absolute bottom-56 left-6  xl:left-20 ">
              <WhiteCard shadowMd={true} />
            </div>
            <div className="w-3/5 flex justify-end mb-12   ">
              <div className=" mr-6   ">
                <WhiteCard />
              </div>
              <div className=" mb-12">
                <WhiteCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1D2028] h-[4rem] md:h-[10rem]  m-0 p-0"></div>
    </>
  );
};

export default LightMode;
