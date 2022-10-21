import React from "react";
import { motion } from "framer-motion";
import Collaborate from "../../public/icons/collaborate.svg";
import Implement from "../../public/icons/implement.svg";
import Scale from "../../public/icons/scale.svg";
import Image from "next/image";
const process = [
  {
    icon: `${Collaborate.src}`,
    title: "Collaborate",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
  {
    icon: `${Implement.src}`,
    title: "Implement",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
  {
    icon: `${Scale.src}`,
    title: "Maintain and Scale",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
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

const Process = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="w-full p-4 font-generalSans overflow-x-clip"
    >
      <div className="w-11/12 mx-auto py-2">
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            duration: 1.5,
            ease: "easeIn"
          }}
          className="w-full lg:w-3/5 "
        >
          <h4 className="font-semibold text-2xl">
            Our 3 Step Process to Creating Scalable Apps
          </h4>
          <p className="text-justify my-5 text-grey4 dark:text-white">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {process.map((item, i) => (
            <motion.div
              variants={item_animate}
              key={i}
              className="bg-dark1 p-6 text-white"
            >
              <div className="mb-2">
                <Image src={item.icon} alt="" width={40} height={40} />
              </div>
              <p className="font-semibold text-xl my-3">{item.title}</p>
              <p className=" text-sm">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Process;
