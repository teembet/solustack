import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import Collaborate from "../../public/icons/collaborate.svg";
import Implement from "../../public/icons/implement.svg";
import Scale from "../../public/icons/scale.svg";
import Widget from "../../public/icons/services-lottie.png";
import ProcessAnimation from "../../public/images/process.json";
import Image from "next/image";
const process = [
  {
    icon: `${Collaborate.src}`,
    title: "Collaborate",
    text: "We do our own research, while our experts collaborate with you to fully understand your goals and challenges.",
  },
  {
    icon: `${Implement.src}`,
    title: "Implement",
    text: 'Our teams of designers, and developers, collaborate to bring your ideas to life. We make sure your application is well validated and meets our "definition of done” before releasing.',
  },
  {
    icon: `${Scale.src}`,
    title: "Maintain and Scale",
    text: "After sending out finalized deliverables, we provide affordable further support for our clients after the product is released. This is 100% recommended by our experts.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1.0,
    },
  },
};

const item_animate = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1, transition: { duration: 2, ease: "easeIn" } },
};
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: ProcessAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Process = () => {
  return (
    <div
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 1.5 }}
      // viewport={{ once: true }}
      className="w-full p-4 font-supreme  overflow-x-clip text-white"
    >
      <div className="w-11/12 mx-auto py-2 mb-12 relative">
        <div className="absolute -top-6 left-0 right-0 ">
          <div className="">
            <Lottie options={defaultOptions} height={120} width={120} />
          </div>
        </div>
        <div
          // initial={{ x: -100 }}
          // whileInView={{ x: 0 }}
          // viewport={{ once: true }}
          // transition={{
          //   delay: 0.4,
          //   duration: 1.5,
          //   ease: "easeIn"
          // }}
          className="w-full lg:w-3/5 mx-auto "
        >
          <h4 className="font-semibold text-xl md:text-3xl text-center font-technor z-10 ">
            Our 3 Step Process to Creating <br /> Scalable Apps
          </h4>
          {/* <p className="text-center my-5 text-white">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet
          </p> */}
        </div>
        <div
          // variants={container}
          // initial="hidden"
          // animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {process.map((item, i) => (
            <div
              // variants={item_animate}
              key={i}
              className="glass-card2 backdrop-blur-[40px] rounded-xl p-6 text-white"
            >
              <div className="mb-2">
                <Image src={item.icon} alt="" width={40} height={40} />
              </div>
              <p className="font-semibold font-technor text-xl my-3">
                {item.title}
              </p>
              <p className=" text-sm font-supreme">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
