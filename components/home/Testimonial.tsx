import React from "react";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Avatar from "../../public/images/avatar.jpeg";
import YellowStar from "../../public/icons/yellow-star.svg";
import Image from "next/image";

// const items = [
//   {
//     image: Avatar.src,
//     name: "Dan Oliver",
//     status: "Customer",
//     testimony:
//       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
//     stars: 5,
//   },
//   {
//     image: Avatar.src,
//     name: "Rodney Miller  ",
//     status: "Customer",
//     testimony:
//       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
//     stars: 5,
//   },
//   {
//     image: Avatar.src,
//     name: "Louisa Guerrero",
//     status: "Customer",
//     testimony:
//       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
//     stars: 4,
//   },
// ];

const Slide = ({ item }) => {
  const { image, name, message, type, rating } = item;
  return (
    <div className="  testimonial-card backdrop-blur-[40px] rounded-[48px]  pt-5 text-white">
      <p className="text-sm md:text-md text-justify leading-6 font-generalSans px-6">
        {message}
      </p>
      <div className="flex justify-between items-center flex-wrap xl:flex-nowrap pr-3 gap-4">
        <div className="flex items-center mx-auto">
          <div className="w-20 flex justify-center items-center h-20 rounded-full mr-1 ">
            <Image
              src={image}
              alt=""
              width={70}
              height={70}
              className="rounded-full"
            />
          </div>
          <div className="font-supreme">
            <h5 className=" font-bold text-sm lg:text-lg leading-5 whitespace-nowrap">
              {name}
            </h5>
            <p className=" text-xs md:text-sm my-2  text-grey2">{type}</p>
          </div>
        </div>

        <div className="flex items-center justify-end mx-auto">
          {Array.from({ length: rating }, (i) => (
            <div key={`k+${i}`} className="mx-1">
              <Image src={YellowStar} alt="" width={28} height={28} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Testimonial = ({ reviews }) => {
  return (
    <div
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 2 }}
      // viewport={{ once: true }}
      className="w-full p-4 py-12 lg:py-20 font-supreme relative overflow-x-clip  text-white"
    >
      <div>
        <div
          // initial={{ x: -100 }}
          // whileInView={{ x: 0 }}
          // viewport={{ once: true }}
          // transition={{
          //   delay: 0.4,
          //   duration: 2,
          // }}
          className="text-white"
        >
          <h3 className="font-semibold font-technor  text-2xl mb-6 text-center">
            Client Testimonials
          </h3>
          <div className="lg:w-4/5 xl:w-3/5 mx-auto mb-6 font-poppins">
            {/* <p className="text-base font-poppins  text-center text-white">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores
            </p> */}
          </div>
        </div>

        <div
          // initial={{ x: -200 }}
          // whileInView={{ x: 0 }}
          // viewport={{ once: true }}
          // transition={{
          //   delay: 0.4,
          //   duration: 2.5,
          // }}
          className="w-full relative  overflow-scroll no-scrollbar"
        >
          <div className="gap-5 flex items-center flex-wrap lg:flex-nowrap ">
            {reviews.map((item, i) => (
              <div key={i} className="  mx-auto">
                <Slide item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
