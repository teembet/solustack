import React from "react";
import { motion } from "framer-motion";
import AboutSectionImage from "../../public/images/about_section_bg.svg";

const about = [
  {
    title: "Vision",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
  {
    title: "Mission",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
  {
    title: "Values",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
];

const AboutSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration:1.5}}
      viewport={{ once: true }}
      id="about-us"
      className="w-full bg-dark1 p-4 text-white overflow-x-clip"
    >
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-5">
          <motion.div 
          initial={{ x: -100 }}
          whileInView={{ x: 0, }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            duration:2
          }}
           className="xl:col-span-3 py-8">
            <div className="mb-10 xl:w-4/5">
              <h3 className="font-semibold text-2xl xl:text-40 mb-2">
                About Us
              </h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
              {about.map((item, i) => (
                <div className="xl:w-5/6" key={i}>
                  <p className="font-semibold text-xl">{i + 1}.</p>
                  <p className="font-semibold text-xl my-3">{item.title}</p>
                  <p className="font-normal text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hidden xl:block xl:col-span-2 bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url('${AboutSectionImage.src}')` }}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
