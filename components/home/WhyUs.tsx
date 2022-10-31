import React from "react";
import { motion } from "framer-motion";
import Lottie from 'react-lottie';
import Affordable from "../../public/icons/affordable.svg";
import Expert from "../../public/icons/expert.svg";
import Delivery from "../../public/icons/delivery.svg";
import Support from "../../public/icons/support.svg";
import QuestionMark from "../../public/images/question-mark.json";
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
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: QuestionMark,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const WhyUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      id="why-us"
      className="w-full py-10 px-4 lg:px-12 overflow-x-clip font-supreme"
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
        <div className="w-full xl:w-2/5 mx-auto text-center">
        <div className="">
      <Lottie 
	    options={defaultOptions}
        height={65}
        width={65}
      /></div>
          <h3 className="font-semibold font-technor text-2xl xl:text-40 mb-6">
            Why Choose Solustack 
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
      <div className="my-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
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
            className="glass-card3 backdrop-blur-[40px] rounded-lg px-3 py-10 flex flex-col justify-between"
          >
            <div className=" text-center flex justify-center my-16">
              <Image src={item.icon} alt="" width={60} height={60} />
            </div>
            <h5 className="font-semibold font-technor text-md text-center mb-12">
              {item.title}
            </h5>
            <p className="text-black dark:text-white text-sm text-center">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhyUs;
