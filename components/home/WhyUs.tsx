import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import Affordable from "../../public/icons/affordable.svg";
import Expert from "../../public/icons/expert.svg";
import Delivery from "../../public/icons/delivery.svg";
import Support from "../../public/icons/support.svg";
import QuestionMark from "../../public/images/question-mark.json";
import Image from "next/image";

const reasons = [
  {
    icon: `${Affordable.src}`,
    title: "Top-notch quality",
    text: "We make every effort to create unique high quality designs that exceed your expectations.",
  },
  {
    icon: `${Expert.src}`,
    title: "Experience",
    text: "Our team comprises of out of the box thinkers, who are dedicated to help you overcome challenges and achieve business goals.",
  },
  {
    icon: `${Delivery.src}`,
    title: "Fast Delivery",
    text: "We always deliver projects on time.",
  },
  {
    icon: `${Support.src}`,
    title: "Communication",
    text: "We make every effort to maintain an active and transparent relationship with our clients, to ensure 100% satisfaction.",
  },
];
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: QuestionMark,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const WhyUs = () => {
  return (
    <div
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 2 }}
      // viewport={{ once: true }}
      id="why-us"
      className="w-full py-10 px-4 lg:px-12 overflow-x-clip font-supreme text-white"
    >
      <div
      // initial={{ x: -100 }}
      // whileInView={{ x: 0 }}
      // viewport={{ once: true }}
      // transition={{
      //   delay: 0.4,
      //   duration: 2,
      // }}
      >
        <div className="w-full xl:w-2/5 mx-auto text-center text-white">
          <div className="">
            <Lottie options={defaultOptions} height={65} width={65} />
          </div>
          <h3 className="font-semibold font-technor text-xl md:text-3xl mb-6">
            Why Choose Solustack For Your Next Project
          </h3>
        </div>
        <div className="lg:w-4/5 xl:w-3/5 mx-auto mb-6">
          <p className="text-sm  text-center text-white">
            Solustack is a mobile development company that offers services that
            will bring your ideas to life. We work closely with our clients to
            make sure all their requirements are captured and our experts work
            to provide the best possible product. We truly care about our
            clients and their products so we are dedicated to providing the best
            possible experience.
          </p>
        </div>
      </div>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-white">
        {reasons.map((item, i) => (
          <div
            // initial={{ opacity: 0, x: -100 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            // transition={{
            //   delay: 0.4,
            //   duration: 2,
            // }}
            key={i}
            className="glass-card3 backdrop-blur-[40px] rounded-lg px-8 py-6 md:py-8 flex flex-col  text-white"
          >
            <div className=" text-center flex justify-center my-8 md:my-12">
              <Image src={item.icon} alt="" width={80} height={80} />
            </div>
            <h5 className="font-semibold font-technor text-md text-center mb-6 md:mb-12 text-white">
              {item.title}
            </h5>
            <p className="  text-sm text-center text-white">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
