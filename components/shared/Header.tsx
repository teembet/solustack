import React from "react";
import HeaderImage from "../../public/images/hero1.svg";
import Animation from "../../public/images/header_animation.png";
import Netflix from "../../public/icons/netflix1.png";
import AppleBlack from "../../public/icons/apple-black.jpg";
import AndroidBlack from "../../public/icons/android-black.jpg";
import Windows from "../../public/icons/windows.jpg";
import Synology from "../../public/icons/synology.png";
import Image from "next/image";
import animationData from "../../public/air.json";
import Lottie from "react-lottie";
const trustees = [
  {
    img: Netflix,
  },
  {
    img: AppleBlack,
  },
  {
    img: AndroidBlack,
  },
  {
    img: Windows,
  },
  {
    img: Synology,
  },
];
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  renderer: "svg",
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
// var animation = bodymovin.loadAnimation({
//   container: document.getElementById("animation-container"),

//   path: "Freelancer.json",

//   renderer: "svg",

//   loop: true,

//   autoplay: true,

//   name: "Demo Animation",
// });
const Header = () => {
  return (
    <div className="min-h-[85vh]   font-generalSans">
      <div
        className="w-full h-full  relative bg-no-repeat bg-cover bg-center dark:!bg-none dark:!bg-darkBg  text-center py-10 flex flex-col justify-end"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.01)),url('${HeaderImage.src}')`,
        }}
      >
        {/* fix animation here */}
        <div className="h-1/2 p-2 absolute top-1/4  inset-x-1/4 opacity-25 hidden lg:block dark:hidden">
          {/* <Lottie options={defaultOptions} height={500} width={500} /> */}
          <Image src={Animation} alt="" className="h-full w-1/2 animate-bounce" />
        </div>
        {/* fix animation here */}
        <div className="z-[10] mt w-full  ">
          <div className="w-full md:w-5/6 xl:w-4/5 mx-auto">
            <div className="mb-3">
              <h1 className="font-bold text-dark1 text-3xl md:text-4xl lg:text-5xl dark:text-white ">
                WE BUILD THE
              </h1>
              <h1 className="font-bold text-blue2  text-3xl md:text-4xl lg:text-5xl">
                BEST DIGITAL EXPERIENCES. 
              </h1>
            </div>
            <div className="w-11/12 xl:w-9/12 mx-auto mb-5">
              <h5 className="font-medium text-dark2 text-sm md:text-lg lg:text-xl  text-center dark:text-white">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore.
              </h5>
            </div>

            <div className="font-poppins mt-8 md:mt-20 lg:mb-5">
              <a href="#contact">
                <button className="bg-blue1 text-sm text-white py-2 px-12  rounded">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="w-fit mx-auto opacity-40 my-8">
          <h3 className="mb-6 mt-6 text-sm font-medium">TRUSTED BY</h3>
          {/* <ul className="flex items-center">
            {trustees.map((item, i) => (
              <li key={i} className="mr-8">
                <Image
                  src={item.img}
                  alt=""
                  width={35}
                  height={35}
                  className=""
                />
              </li>
            ))}
          </ul> */}
          <div className="box">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
