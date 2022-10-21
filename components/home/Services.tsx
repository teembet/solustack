import * as React from "react";
import { motion } from "framer-motion";
import Apple from "../../public/icons/apple.svg";
import Android from "../../public/icons/android.svg";
import Hybrid from "../../public/icons/hybrid.svg";
import Web from "../../public/icons/web_dev.svg";
import Design from "../../public/icons/design.svg";
import ServicesBg from "../../public/images/service_bg.png";
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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration:1.5}}
      viewport={{ once: true }}
      id="services"
      className="w-full bg-dark1 relative  font-generalSans text-white overflow-x-clip"
    >
      <div className="absolute top-0 left-0 h-20 w-5 bg-blue1"></div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
        <motion.div  initial={{ x: -100 }}
          whileInView={{ x: 0, }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            duration:2
          }} className="lg:col-span-2 flex items-center justify-between">
          <div className="md:w-4/6 mx-auto my-auto p-6">
            <h3 className="font-semibold text-2xl  leading-loose">
              We Offer The <br /> Following Services
            </h3>
            <p className="text-justify mt-4 text-base">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet
            </p>
          </div>
        </motion.div>
        <motion.div
         initial={{ x: 100 }}
         whileInView={{ x: 0, }}
         viewport={{ once: true }}
         transition={{
           delay: 0.4,
           duration:2
         }}
          className=" lg:col-span-3 p-6 bg-center bg-cover"
          style={{ backgroundImage: `url('${ServicesBg.src}')` }}
        >
          <div className="grid grid-cols-2 gap-8 p-3">
            {services.map((item, i) => (
              <div key={i}>
                <div>
                  <Image
                    src={item.icon}
                    alt=""
                    width={35}
                    height={35}
                    quality={100}
                  />
                </div>
                <p className="font-semibold text-2xl  my-2">{item.title}</p>
                <p className="text-justify text-base ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis.
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
