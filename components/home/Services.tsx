import * as React from "react";
import { motion } from "framer-motion";
import Apple from "../../public/icons/apple.svg";
import Android from "../../public/icons/android.svg";
import Hybrid from "../../public/icons/hybrid.svg";
import Web from "../../public/icons/web_dev.svg";
import Design from "../../public/icons/design.svg";
import ServicesBg from "../../public/images/service_bg.png";
import Angle from "../../public/icons/services-angle.svg";
import Image from "next/image";
const services = [
  // {
  //   icon: `${Design.src}`,
  //   title: "Design",
  //   text: "We create efficient and timeless UI/UX design solutions for any device, that increases the value of your product or service.",
  // },
  // {
  //   icon: `${Web.src}`,
  //   title: "Development",
  //   text: "With years of experience, there’s no limit to what we can do. From web development,mobile applications and hybrid application development.",
  // },
  {
    icon: `${Apple.src}`,
    title: "iOS App Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
  },
  {
    icon: `${Android.src}`,
    title: "Android App Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
  },
  {
    icon: `${Web.src}`,
    title: "Web Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
  },
  {
    icon: `${Hybrid.src}`,
    title: "Hybrid App Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
  },
  {
    icon: `${Design.src}`,
    title: "Web & Mobile UI/UX Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
  },
];

const Services = () => {
  const [isHover, setIsHover] = React.useState(false);

  const handleMouseEnter = () => {
    // setIsHover(true);
    return (
      <div className="bg-blue1  w-28 h-28 blur-sm  rounded-full  mx-auto"></div>
    );
  };
  const handleMouseLeave = () => {
    // setIsHover(false);
    return null;
  };

  const addHoverBlue = () => {
    if (isHover) {
      return (
        <div className={` absolute bottom-8 right-4  `}>
          <div className="bg-blue1  w-28 h-28 blur-sm  rounded-full  mx-auto"></div>
        </div>
      );
    }
    return;
  };
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      id="services"
      className="w-full  relative  font-supreme  text-white py-10 overflow-x-clip"
    >
      <div className="absolute top-0 left-0 h-36 w-28 xl:w-32 bg-blue1 z-0"></div>
      <div className="hidden lg:block absolute top-0 left-4  z-0   lg:w-16 xl:w-20 ">
        <Image src={Angle} alt="" />
      </div>

      <div className="w-full lg:w-11/12  mx-auto z-10">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3   gap-8 p-5 mt-5">
          {/* <div className="w-full sm:w-5/6 lg:w-4/6 xl:w-3/6 mx-auto"> */}
          <div className="col-span-1 z-10 px-4 text-white">
            <h3 className="font-semibold text-2xl font-technor  leading-8   z-20">
              We Offer The <br /> Following Services
            </h3>
            <p className="text-justify mt-6 text-base  ">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore .
            </p>
          </div>

          {services.map((item, i) => (
            <div
              key={i}
              className="col-span-1 relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={` absolute bottom-8 right-4  `}></div>

              <div className="glass-card px-4 py-6 font-supreme text-white">
                <motion.div
                  whileHover={{
                    rotateY: 180,
                    transition: { duration: 1 },
                  }}
                  className=" w-fit p-4"
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={35}
                    height={35}
                    quality={100}
                  />
                </motion.div>
                <p className="font-semibold text-xl  my-2 font-technor">
                  {item.title}
                </p>
                <p className="text-justify text-sm ">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
