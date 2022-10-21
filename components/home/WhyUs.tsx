import React from "react";
import { motion } from "framer-motion";
import Affordable from "../../public/icons/affordable.svg";
import Expert from "../../public/icons/expert.svg";
import Delivery from "../../public/icons/delivery.svg";
import Support from "../../public/icons/support.svg";
import Image from "next/image";

const reasons = [
  {
    icon: `${Affordable.src}`,
    title: "High Quality Applications At Affordable Prices",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },
  {
    icon: `${Expert.src}`,
    title:
      "Experts With Over 10 Years Of Combined Experience In Mobile Application Development",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },
  {
    icon: `${Delivery.src}`,
    title: "Well Timed Product And Service Delivery",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },
  {
    icon: `${Support.src}`,
    title: "Support To Our Clients",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },
];

const WhyUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      id="why-us"
      className="w-full py-10 px-4 lg:px-12 overflow-x-clip"
    >
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
          duration: 2,
        }}
      >
        <div className="w-full xl:w-2/6 mx-auto text-center">
          <h3 className="font-semibold text-2xl xl:text-40 mb-6">
            Why Choose Solustack <br />
            For Your Next Project
          </h3>
        </div>
        <div className="lg:w-4/5 xl:w-3/5 mx-auto mb-6">
          <p className="text-sm text-grey4 text-center dark:text-white">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          </p>
        </div>
      </motion.div>
      <div className="my-4 grid grid-cols-2 lg:grid-cols-4 gap-5">
        {reasons.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 2,
            }}
            key={i}
          >
            <div className=" text-center flex justify-center">
              <Image src={item.icon} alt="" width={40} height={40} />
            </div>
            <h5 className="font-semibold text-sm text-center my-1">
              {item.title}
            </h5>
            <p className="text-black dark:text-white text-xs text-center">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhyUs;
