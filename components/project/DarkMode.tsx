import React, { useContext } from "react";
// import { ThemeContext } from "../../context/ThemeContext";
import DarkCard from "./DarkCard";
const DarkMode = ({ images }) => {
  // const { setTheme } = useContext(ThemeContext);

  // const toggleTheme = (val) => {
  //   if (val === "dark") {
  //     setTheme("dark");
  //     return;
  //   }
  //   setTheme("light");
  // };

  return (
    <>
      <div className="w-full relative overflow-x-clip  font-supreme">
        <div className="p-4 w-full lg:w-11/12 mx-auto py-40 ">
          <div className="flex justify-between items-center ">
            <div className="font-poppins flex flex-col mr-6 xl:mr-0">
              <h3 className="font-bold text-xl md:text-2xl xl:text-4xl mb-8 text-white">
                <span className="text-blue3 mr-1 whitespace-nowrap font-technor">
                  <span className="font-light ">|</span> Dark
                </span>
                Mode{" "}
              </h3>

              <div className="bg-purple2 h-8 w-8 rounded-[50%] shadow-[0px_3px_38px_#00000029] border-3 border-white mb-8"></div>
              <p className="font-medium text-sm lg:text-xl text-white">
                Design with a white <br /> background.
              </p>
              {/* <button
                className="p-2 bg-white text-dark1 rounded my-2"
                onClick={() => toggleTheme("dark")}
              >
                Dark
              </button>
              <button
                className="p-2 bg-white text-dark1 rounded my-2"
                onClick={() => toggleTheme("light")}
              >
                Light
              </button> */}
            </div>
            <div className="">
              <div className="flex justify-between slant ">
                <div className=" mr-4 md:mr-8 xl:mr-16 ">
                  {images?.[0] && (
                    <DarkCard purple={true} shadowLg={true} image={images[0]} />
                  )}
                </div>
                <div className="">
                  {images?.[1] && (
                    <DarkCard purple={true} shadowLg={true} image={images[1]} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="relative  h-[18rem] md:h-[28rem] xl:h-[42rem] flex justify-end">
          <div className=" w-full xl:w-5/6  flex justify-end   slant">
            <div className="hidden lg:block absolute bottom-56 left-6  xl:left-20 ">
              <DarkCard shadowMd={true} />
            </div>
            <div className="w-3/5 flex justify-end mb-12   ">
              {/* <div className=" mr-6   ">
                <DarkCard />
              </div> *
              <div className=" mb-12">
                <DarkCard />
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="bg-dark4 h-[4rem] md:h-[8rem]  m-0 p-0"></div>
    </>
  );
};

export default DarkMode;
