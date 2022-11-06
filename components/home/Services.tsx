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

const Card = ({ item }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="col-span-1 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`absolute top-4 right-3 ${
          isHovered ? "bg-blue2" : "bg-transparent"
        }  w-36 h-32 blur-sm  rounded-full `}
      ></div>
      {/* {addHoverBlue()} */}

      <div className="glass-card backdrop-blur-[40px] px-4 py-6 font-supreme text-white ">
        <motion.div
          whileHover={{
            rotateY: 180,
            transition: { duration: 1 },
          }}
          className=" w-fit p-4"
        >
          <Image src={item.icon} alt="" width={35} height={35} quality={100} />
        </motion.div>
        <p
        className="font-semibold text-xl  my-2 font-technor ">{item.title}</p>
        <p className="text-justify text-sm ">{item.text}</p>
      </div>
    </div>
  );  ``
};

const Services = () => {

  return (
    <div
      // initial={{ opacity: 0.3 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 1.5 }}
      // viewport={{ once: true }}
      id="services"
      className="w-full  relative  font-supreme  text-white py-10 overflow-x-clip"
    >
      <div className="absolute top-0 left-0 h-36 w-32 xl:w-[15%] xl:h-[25%] bg-blue1 z-0"></div>
      <div className="hidden lg:block absolute top-0 left-8  z-0  lg:w-16 xl:w-20  ">
        <Image src={Angle} alt="" />
      </div>

      <div className="w-full lg:w-11/12 xl:w-[87%] mx-auto z-10">
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
            <Card key={i} item={item} />
            // <div
            //   key={i}
            //   className="col-span-1 relative"
            //   onMouseEnter={handleMouseEnter}
            //   onMouseLeave={handleMouseLeave}
            // >
            //   <div className={` absolute bottom-8 right-4  `}></div>

            //   <div className="glass-card px-4 py-6 font-supreme text-white">
            //     <motion.div
            //       whileHover={{
            //         rotateY: 180,
            //         transition: { duration: 1 },
            //       }}
            //       className=" w-fit p-4"
            //     >
            //       <Image
            //         src={item.icon}
            //         alt=""
            //         width={35}
            //         height={35}
            //         quality={100}
            //       />
            //     </motion.div>
            //     <p className="font-semibold text-xl  my-2 font-technor">
            //       {item.title}
            //     </p>
            //     <p className="text-justify text-sm ">{item.text}</p>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
