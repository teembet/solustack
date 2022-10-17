import React from "react";
import HeaderImage from "../../public/images/hero1.svg";
import Animation from "../../public/images/header_animation.jpg";
import Netflix from "../../public/icons/netflix.png";
import AppleBlack from "../../public/icons/apple-black.jpg";
import AndroidBlack from "../../public/icons/android-black.jpg";
import Windows from "../../public/icons/windows.jpg";
import Synology from "../../public/icons/synology.jpg";
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
    <div className="min-h-[70vh] h-[85vh]  md:h-[82vh]  font-generalSans">
      <div
        className="w-full h-full  relative bg-no-repeat bg-cover bg-center  text-center py-10 flex flex-col justify-end"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.01)),url('${HeaderImage.src}')`,
        }}
      >
        {/* fix animation here */}
        <div className="h-1/2 absolute top-1/4 left-1/3 opacity-25 hidden lg:block">
          <Lottie options={defaultOptions} height={500} width={500} />
          {/* <Image src={Animation} alt="" className="h-full" /> */}
        </div>
        {/* fix animation here */}
        <div className="z-[10] absolute top-10 w-full  ">
          <div className="w-full md:w-4/6 xl:w-3/5 mx-auto">
            <div>
              <h1 className="font-semibold text-dark1 text-3xl  xl:text-[3.5rem]">
                WE BUILD THE
              </h1>
              <h1 className="font-semibold text-blue2  text-3xl xl:text-[3.5rem]">
                BEST DIGITAL EXPERIENCES.
              </h1>
            </div>
            <div className="w-11/12 xl:w-9/12 mx-auto my-4">
              <h5 className="font-medium text-dark2 text-lg lg:text-2xl text-center">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore.
              </h5>
            </div>

            <div className="font-poppins my-5">
              <a href="#contact">
                <button className="bg-blue1 text-xs text-white py-2 px-12  rounded">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="w-fit mx-auto opacity-40 my-8">
          <h3 className="mb-6 mt-6">TRUSTED BY</h3>
          <ul className="flex items-center">
            {trustees.map((item, i) => (
              <li key={i} className="mr-8">
                <Image
                  src={item.img}
                  alt=""
                  width={35}
                  height={30}
                  quality={100}
                  className=""
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
