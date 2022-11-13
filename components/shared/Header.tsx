import React, { useState } from "react";
import { motion } from "framer-motion";
import HeaderImage from "../../public/images/hero1.svg";
import Animation from "../../public/images/header_animation.png";
import Netflix from "../../public/icons/netflix.png";
import AppleBlack from "../../public/icons/apple.svg";
import AndroidBlack from "../../public/icons/android-green.svg";
import Windows from "../../public/icons/windows-blue.svg";
import Synology from "../../public/icons/synology.png";
import Image from "next/image";
import animationData from "../../public/air.json";
import Lottie from "react-lottie";

const trustees = [
  {
    img: AppleBlack,
  },
  {
    img: AndroidBlack,
  },
  {
    img: Windows,
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

const Header = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className="h-[80vh] min-h-[500px]  font-supreme ">
      <div
        className="w-full h-full relative bg-bg1/20 backdrop-blur-sm  text-center py-10 flex flex-col justify-end"
        // style={{
        //   backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.01)),url('${HeaderImage.src}')`,
        // }}
      >
        {/* fix animation here */}
        <div className="h-1/2 p-2 absolute top-16   left-0 right-0  hidden lg:block ">
          <div className="bg-blue3  w-28 h-28 blur-md  rounded-full widen mx-auto"></div>
        </div>
        {/* fix animation here */}
        <div className="my-auto z-[10]">
          <div className="  w-full mt-12 lg:mt-20 ">
            <div className="w-full md:w-5/6 xl:w-4/5 mx-auto">
              <div className="mb-3 font-technor">
                <h1 className="font-bold  text-3xl md:text-4xl lg:text-5xl text-white shadow-text">
                  WE BUILD THE
                </h1>
                <h1 className="font-bold text-blue2  text-3xl md:text-4xl lg:text-5xl shadow-text">
                  BEST DIGITAL EXPERIENCES.
                </h1>
              </div>
              <div className="w-11/12 xl:w-9/12 mx-auto ">
                <h5 className="font-medium text-sm md:text-lg lg:text-xl  text-center text-white">
                  Our solutions are ahead of time. We’re always willing to help
                  you build the best digital experience.
                </h5>
              </div>

              <div className=" mt-8  ">
                <a href="#contact">
                  <button
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className=" bg-blue1 text-sm text-white py-2 px-12  rounded hover:bg-white hover:text-blue1"
                  >
                    {isHover ? "Let's Talk!!!" : "Contact Us"}
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="w-fit mx-auto  my-4">
            <h3 className="mb-6 mt-6 text-sm font-medium">TRUSTED BY</h3>
            <ul className="flex items-center mb-6">
              <li className="mr-8">
                <Image
                  src={Netflix}
                  alt=""
                  width={65}
                  height={35}
                  className=""
                />
              </li>
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
              <li className="mr-8">
                <Image
                  src={Synology}
                  alt=""
                  width={65}
                  height={35}
                  className=""
                />
              </li>
            </ul>
            <div className="box my-8 ">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
