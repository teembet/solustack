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
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
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
      <div className="absolute top-0 left-0 h-[28%] w-[12%] bg-blue1 z-0"></div>
      <div className="absolute top-0 left-4  z-0 ">
        <Image src={Angle} alt="" height={90} width={70} />
      </div>

      <div className="w-full lg:w-11/12  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
          <div className="col-span-1 p-3 z-10">
            <div className="">
              <h3 className="font-semibold text-2xl font-technor  leading-8 ">
                We Offer The <br /> Following Services
              </h3>
              <p className="text-justify mt-4 text-base">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore .
              </p>
            </div>
          </div>
          {services.map((item, i) => (
            <div
              key={i}
              className="col-span-1 relative"
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
            >
              {/* {isHover ? (
                <div className={` absolute bottom-8 right-4  `}>
                  <div className="bg-blue1  w-28 h-28 blur-sm  rounded-full  mx-auto"></div>
                </div>
              ) : null} */}

              <div className="glass-card px-4 py-6 font-supreme">
                <motion.div
                  whileHover={{
                    rotateY: 180,
                    transition: { duration: 1 },
                  }}
                  className=" w-fit"
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
                <p className="text-justify text-sm ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </motion.div>
  );
};

export default Services;
