import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutSectionImage from "../../public/images/about_section_bg.svg";
import Angle from "../../public/icons/about-angle.svg";


const about = [
  {
    title: "Vision",
    text: "Empower the digital world with quick and easy access to quality mobile and web applications.",
  },
  {
    title: "Mission",
    text: "Using technology as a means to provide transformative digital solutions to our clients.",
  },
  {
    title: "The values that define us",
    text: "Solustack is Team Work, Freedom,Inclusion, Creativity,Growth and Solution driven.",
  },
];

const AboutSection = () => {
  return (
    <div className="pb-4 bg-aboutBlue1 rounded-b-[96px] ">
    <div className="pb-4 bg-aboutBlue2 rounded-b-[96px] ">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration:1.5}}
      viewport={{ once: true }}
      id="about-us"
      className="w-full bg-dark4 p-4 text-white font-supreme relative overflow-x-clip rounded-b-[96px] "
    >
      <div className="absolute top-0 left-0 h-[15%] md:h-1/4 lg:h-[28%] w-1/4 md:w-1/5 lg:w-[12%] bg-blue1 z-0"></div>
      <div className="hidden md:block absolute md:w-12 md:top-16 xl:w-16 xl:top-16 left-0  z-0  ">
        <Image src={Angle} alt=""    />
      </div>
      
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
           className="xl:col-span-3 py-8 z-10">
            <div className="mb-10 xl:w-4/5">
              <h3 className="font-semibold font-technor text-2xl md:text-3xl  mb-2">
                About Us
              </h3>
              <p className="text-sm">
              At Solustack, we design, develop, and maintain full stack mobile/web applications.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
              {about.map((item, i) => (
                <div className="xl:w-5/6" key={i}>
                  <p className="font-semibold text-xl">{i + 1}.</p>
                  <p className="font-semibold text-xl my-3 font-technor">{item.title}</p>
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
   
    </motion.div></div></div>
  );
};

export default AboutSection;
